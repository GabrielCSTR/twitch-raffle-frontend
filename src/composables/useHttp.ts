import axios from "axios";
import useLocalStorage from "./useLocalStorage";
import { useUserStore } from "@/store/user";
const API_URL = import.meta.env.NODE_ENV === 'development' ? 'http://localhost:3005/api/v1' : `${import.meta.env.VITE_API_URL}/api/v1`;

function getUser() {
  const { getCookieItem } = useLocalStorage();
  const localStorageToken = getCookieItem<string>("stream_raffle_user") ?? "";
  return parseJwt(localStorageToken);
}
async function setUserToken() {
   const user = getUser();
   const userStore: any = useUserStore();
   userStore.UPDATE_PLAYER(user);
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


export default function useHttp() {
  return {
    setUserToken
  };
}