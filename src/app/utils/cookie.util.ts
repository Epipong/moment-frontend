"use server";

import { cookies } from "next/headers";

const getCookie = (key: string) => {
  const cookie = cookies().get(key);
  return cookie?.value;
};

const setCookie = (key: string, value: string) => {
  return cookies().set(key, value);
};

const deleteCookie = (key: string) => {
  return cookies().delete(key);
};

export { getCookie, deleteCookie, setCookie };
