"use client";

/**
 * Get cookie value by name given.
 * @param name
 * @returns
 */
const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()!.split(";").shift();
  }
  return undefined;
};

/**
 * Set cookie.
 * @param name
 * @param value
 * @param expiresIn in second
 */
const setCookie = (name: string, value: string, expiresIn?: number) => {
  let expires = "";
  if (expiresIn) {
    const date = new Date();
    date.setTime(date.getTime() + expiresIn * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${name}=${value || ""}${expires}; path=/`;
};

/**
 * Delete a cookie by name given
 * @param name
 */
const deleteCookie = (name: string) => {
  document.cookie = `${name}=; Max-Age=-99999999; path=/`;
};

export { getCookie, deleteCookie, setCookie };
