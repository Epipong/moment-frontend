import { Button, Form } from "react-bootstrap";
import Layout from "@/components/layout";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
import EmailInput from "@/components/email.input";
import TextInput from "@/components/text.input";
import PasswordInput from "@/components/password.input";
import { routes } from "@/app/routes/routes";
import axios, { AxiosError } from "axios";
import { getCurrentUser, User } from "@/app/models/users";
import { getCookie, setCookie } from "@/app/utils/cookie.util";
import { refreshToken } from "@/app/utils/token.util";

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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      checkPasswordEquals();
      const userId = getUserId();
      const token = getCookie("token");

      const { data } = await axios.patch<User>(
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

      refreshToken(data.email, password);
      router.refresh();
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
          text="🔑Confirm Password"
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
