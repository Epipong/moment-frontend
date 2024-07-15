import { Button, Form } from "react-bootstrap";
import Layout from "../layout";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import EmailInput from "@/components/email.input";
import TextInput from "@/components/text.input";
import PasswordInput from "@/components/password.input";
import { routes } from "@/app/routes/routes";
import axios, { AxiosError } from "axios";
import { getCurrentUser, User } from "@/app/models/users";
import { getCookie, setCookie } from "@/app/utils/cookie.util";
import { parseJwt } from "@/app/utils/jwt.util";

export default function UserEdit() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState(
    searchParams?.get("username") || undefined,
  );
  const [email, setEmail] = useState(searchParams?.get("email") || undefined);
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const uri = process.env.NEXT_PUBLIC_API_URL;
  const router = useRouter();

  const getUserId = () => searchParams?.get("userId") || getCurrentUser()?.id;

  const checkPasswordEquals = () => {
    if (password != repeatPassword) {
      throw new Error("repeat password must be equal to password");
    }
  };

  const refreshToken = async () => {
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
      console.log("new token", data.access_token);

      router.refresh();
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      checkPasswordEquals();
      const userId = getUserId();
      const token = getCookie("token");

      await axios.patch(
        `${uri}/users/${userId}`,
        {
          username,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      refreshToken();
    } catch (err) {
      if (err instanceof AxiosError) {
        const data = err.response?.data;
        const messages: string[] = data.message;
        messages.forEach((message) => alert(message));
      } else if (err instanceof Error) {
        alert(err.message);
      }
    }
  };

  return (
    <Layout>
      <h1>Edit</h1>
      <Form onSubmit={handleSubmit}>
        <EmailInput email={email} setEmail={setEmail} />
        <TextInput
          text="👤Username"
          ariaLabel="username"
          value={username}
          setValue={setUsername}
          placeholder="Enter your username"
        />
        <br />
        <PasswordInput password={password} setPassword={setPassword} />
        <PasswordInput
          text="🔑Repeat Password"
          ariaLabel="repeatPassword"
          password={repeatPassword}
          setPassword={setRepeatPassword}
        />

        <Button className="me-1" variant="success" type="submit">
          Edit
        </Button>
        <Button className="me-1" variant="danger" href={routes.users.view}>
          Cancel
        </Button>
      </Form>
    </Layout>
  );
}
