"use client";

import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "@/components/layout";
import { useRouter } from "next/navigation";
import { setCookie } from "@/app/utils/cookie.util";
import { parseJwt } from "@/app/utils/jwt.util";
import { User } from "@/app/models/users";
import EmailInput from "@/components/email.input";
import PasswordInput from "@/components/password.input";

export default function Login() {
  const [email, setEmail] = useState<string | undefined>("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const uri = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async () => {
    try {
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
        router.refresh();
      }
    } catch (err) {
      if (err instanceof AxiosError) {
        const data = err.response?.data;
        alert(data.message);
      }
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <EmailInput email={email} setEmail={setEmail} />
        <PasswordInput password={password} setPassword={setPassword} />

        <Button variant="success" type="submit">
          🔑Login
        </Button>
      </Form>

      <br />

      <Button variant="secondary" href="/auth/register">
        Subscribe with your email address
      </Button>
    </Layout>
  );
}
