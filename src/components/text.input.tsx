import { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

export default function TextInput({
  text = "",
  placeholder = "",
  ariaLabel = "",
  value,
  setValue
}: {
  text?: string;
  placeholder?: string;
  ariaLabel?: string;
  value: Readonly<string>;
  setValue: Dispatch<SetStateAction<string>>
}) {
  return (
    <Form.Group className="mb-3">
      <Form.Label>{text}</Form.Label>
      <Form.Control
        type="text"
        value={value}
        aria-label={ariaLabel}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </Form.Group>
  )
}