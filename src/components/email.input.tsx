import { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

export default function EmailInput({
  text = "✉️Email address",
  placeholder = "Enter your email",
  email,
  setEmail,
}: {
  text?: string;
  placeholder?: string;
  email: string | undefined;
  setEmail: Dispatch<SetStateAction<string | undefined>>;
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{text}</Form.Label>
      <Form.Control
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
      />
    </Form.Group>
  );
}
