"use client";

import axios from "axios";
import { FormEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Layout from "../layout";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";

export default function Register() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();
  const uri = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${uri}/auth/register`, {
        email,
        username,
        password,
        repeatPassword,
      });

      if (response.status === 201) {
        router.push(routes.login);
      } else {
        //
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>✉️Email address</Form.Label>
          <Form.Control
            aria-label="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>👤Username</Form.Label>
          <Form.Control
            aria-label="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
          />
        </Form.Group>
        <br />
        <Form.Group className="mb-3">
          <Form.Label>🔑Password</Form.Label>
          <Form.Control
            aria-label="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>🔑Repeat Password</Form.Label>
          <Form.Control
            aria-label="repeatPassword"
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="success" type="submit">
          Register
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
