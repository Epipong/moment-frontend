import { getCookie } from "../utils/cookie.util";
import { parseJwt } from "../utils/jwt.util";

export type User = {
  id: number;
  username: string;
  email: string;
  exp: number;
  iat: number;
  role: "ADMIN" | "USER";
};

export const getCurrentUser = () => {
  const token = getCookie("token");
  if (!token) return undefined;
  const user = parseJwt<User>(token);
  return user;
};
