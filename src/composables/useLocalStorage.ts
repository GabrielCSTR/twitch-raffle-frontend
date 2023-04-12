import { VueCookieNext as $cookies } from 'vue-cookie-next'

function setItem<T>(chave: string, value: T)
{
    return localStorage.setItem(chave, JSON.stringify(value));
}

function getItem<T>(chave: string): T | null
{
    const obj = localStorage.getItem(chave);
    return obj ? JSON.parse(obj) : null;
}

function removeItem(chave: string)
{
    localStorage.removeItem(chave);
}

function getCookieItem<T>(chave: string): T | null
{
    const obj = $cookies.getCookie(chave);
    return obj ? obj : null;
}

function removeCookieItem(chave: string)
{
    $cookies.removeCookie(chave);
}

export default function useLocalStorage()
{
    return { setItem, getItem, removeItem, getCookieItem, removeCookieItem }
}