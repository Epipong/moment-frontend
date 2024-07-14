"use client";

const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()!.split(";").shift();
  }
  return undefined;
};

const setCookie = (name: string, value: string) => {
  let expires = "";
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};

export { getCookie, deleteCookie, setCookie };
