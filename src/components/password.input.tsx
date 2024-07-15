import { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

export default function PasswordInput({
  text = "🔑Password",
  placeholder = "Enter your password",
  ariaLabel = "password",
  password,
  setPassword
}: {
  text?: string;
  placeholder?: string;
  ariaLabel?: string;
  password: Readonly<string>;
  setPassword: Dispatch<SetStateAction<string>>
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{text}</Form.Label>
      <Form.Control
        type="password"
        value={password}
        aria-label={ariaLabel}
        onChange={(e) => setPassword(e.target.value)}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}