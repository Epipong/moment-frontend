import { Dispatch, SetStateAction } from "react";
import { Form } from "react-bootstrap";

export default function TextInput({
  text = "",
  placeholder = "",
  ariaLabel = "",
  value,
  setValue,
  required = undefined,
}: {
  text?: string;
  placeholder?: string;
  ariaLabel?: string;
  value: Readonly<string | undefined>;
  setValue: Dispatch<SetStateAction<string | undefined>>;
  required?: boolean | undefined;
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
        required={required}
      />
    </Form.Group>
  );
}
