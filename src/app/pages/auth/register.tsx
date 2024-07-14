"use client";

import axios from "axios";
import { FormEvent, use, useState } from "react";
import { Button, Form } from "react-bootstrap";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:3000/auth/register', { email, username, password, repeatPassword });
      console.log(data);
      
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>User name</Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your user name"
        />
      </Form.Group>
      <br />
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Repeat Password</Form.Label>
        <Form.Control
          type="password"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
        />
      </Form.Group>

      <Button type="submit">Register</Button>
    </Form>
  );
};

export { Register };
