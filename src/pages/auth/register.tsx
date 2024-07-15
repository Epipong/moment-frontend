"use client";

import axios, { AxiosError } from "axios";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "@/components/layout";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";
import EmailInput from "@/components/email.input";
import PasswordInput from "@/components/password.input";
import TextInput from "@/components/text.input";

export default function Register() {
  const [email, setEmail] = useState<string | undefined>("");
  const [username, setUsername] = useState<string | undefined>("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  const uri = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await axios.post(`${uri}/auth/register`, {
        email,
        username,
        password,
        repeatPassword,
      });

      router.push(routes.login);
      router.refresh();
    } catch (err) {
      if (err instanceof AxiosError) {
        const data = err.response?.data;
        const messages: string[] = data.message;
        messages.forEach((message) => alert(message));
      }
    }
  };

  return (
    <Layout>
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
          text="🔑Confirm Password"
          ariaLabel="repeatPassword"
          password={repeatPassword}
          setPassword={setRepeatPassword}
        />

        <Button variant="success" type="submit">
          📝Register
        </Button>
      </Form>

      <br />

      <Button variant="secondary" href="/auth/login">
        Login with your email
      </Button>
    </Layout>
  );
}

export { Register };
