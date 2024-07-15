import axios from "axios";
import { parseJwt } from "./jwt.util";
import { User } from "../models/users";
import { setCookie } from "./cookie.util";

const refreshToken = async (email: string, password: string) => {
  const uri = process.env.NEXT_PUBLIC_API_URL;

  const { data } = await axios.post<{ access_token: string }>(
    `${uri}/auth/login`,
    {
      email,
      password,
    },
  );
  if (data.access_token) {
    const user = parseJwt<User>(data.access_token);
    setCookie("token", data.access_token, user!.exp);
  }
};

export { refreshToken };
