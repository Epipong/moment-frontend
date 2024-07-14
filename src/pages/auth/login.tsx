"use client";

import axios, { AxiosError } from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../layout";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";

export default function Login() {
  const [email, setEmail] = useState("");
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
        document.cookie = `token=${data.access_token}; path=/`;
        router.push(routes.home);
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
        <Form.Group className="mb-3">
          <Form.Label>✉️Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>🔑Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
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
