import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { channelStatsStore, useAppStore, useRouletteStore, useUserStore } from "@/store/user";

const API_URL = import.meta.env.NODE_ENV === 'development' ? 'http://localhost:3005/api/v1' : `${import.meta.env.VITE_API_URL}/api/v1`;

function getUser() {
  const { getCookieItem } = useLocalStorage();
  const localStorageToken = getCookieItem<string>("stream_raffle_user") ?? "";
  return parseJwt(localStorageToken);
}
async function setUserToken() {
   const user = getUser();
   const userStore: any = useUserStore();
   userStore.UPDATE_USER(user);
}

async function getTwitchViews(){
  const userStore:any = useUserStore();
  const useRoulleteStore:any = useRouletteStore();
  const useApp = useAppStore();
  useApp.SET_LOADING(true);
  await axios
  .get(API_URL +'/twitch/'+ userStore.user.twitchId + '/views', { headers: { Authorization: `Bearer ${userStore.user.token_twitch}`} , withCredentials: true })
  .then(data =>{ 
    useRoulleteStore.SET_USERS(data.data);
    useApp.SET_LOADING(false);
  })
  .catch(err => {
    console.log(err);
    if (err.response.status == 401){
      window.location.href = '/#/';
    }
  })
}

async function getTwitchSubs(){
  const userStore:any = useUserStore();
  const useRoulleteStore:any = useRouletteStore();
  const useApp = useAppStore();
  useApp.SET_LOADING(true);
  await axios
  .get(API_URL +'/twitch/'+ userStore.user.twitchId + '/subs', { headers: { Authorization: `Bearer ${userStore.user.token_twitch}`} , withCredentials: true })
  .then(data =>{ 
    useRoulleteStore.SET_USERS(data.data);
    useApp.SET_LOADING(false);
  })
  .catch(err => {
    console.log(err);
    if (err.response.status == 401){
      window.location.href = '/#/';
    }
  })
}

function parseJwt(token: string) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

async function getRouletteWinner(amountUsers: number){
  const useApp = useAppStore();
  const userStore:any = useUserStore();
  useApp.SET_LOADING(true);
  await axios
  .get(API_URL +`/roulette-bets/winner/${amountUsers}`, 
  { 
    headers: { Authorization: `Bearer ${userStore.user.token_twitch}`} , 
    withCredentials: true
  })
  .then(data =>{ 
    const useRoulleteStore:any = useRouletteStore();
    useRoulleteStore.SET_WINNER(data.data);
    useApp.SET_LOADING(false);
  })
  .catch(err => {
    console.log(err);
    if (err.response.status == 401){
      window.location.href = '/#/';
    }
  })
}

async function getChannelStats(){
  const useApp = useAppStore();
  const userStore:any = useUserStore();
  useApp.SET_LOADING(true);
  await axios
  .get(API_URL + '/twitch/'+ userStore.user.twitchId + '/channel-stats', 
  { 
    headers: { Authorization: `Bearer ${userStore.user.token_twitch}`} , 
    withCredentials: true
  })
  .then(({data}: any) =>{ 
    const channelStatsData:any = channelStatsStore();
    channelStatsData.SET_FOLLOWS_COUNT(data.followsCount);
    channelStatsData.SET_SUBS_COUNT(data.subsCount);
    channelStatsData.SET_MODS_COUNT(data.modsCount);
    useApp.SET_LOADING(false);
  })
  .catch(err => {
    console.log(err);
    if (err.response.status == 401){
      window.location.href = '/#/';
    }
  })
}


export default function useHttp() {
  return {
    setUserToken,
    getTwitchViews,
    getTwitchSubs,
    getChannelStats,
    getRouletteWinner
  };
}