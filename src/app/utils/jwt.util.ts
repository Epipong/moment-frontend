import { User } from "../models/users";

/**
 * Parse the JWT token to an object.
 * @param token
 * @returns 
 */
const parseJwt = <T>(token: string): T | undefined => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch (e) {
    return undefined;
  }
};

/**
 * Return true if the token is expired.
 * @param token
 * @returns 
 */
const isTokenExpired = (token: string): boolean => {
  try {
    const { exp } = parseJwt<User>(token)!;
    const expirationDatetimeInSeconds = exp * 1000;
    return Date.now() >= expirationDatetimeInSeconds;
  } catch {
    return true;
  }
};

export { parseJwt, isTokenExpired };
