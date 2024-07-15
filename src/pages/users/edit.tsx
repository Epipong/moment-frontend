import { Form } from "react-bootstrap";
import Layout from "../layout";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import EmailInput from "@/components/email.input";
import TextInput from "@/components/text.input";
import PasswordInput from "@/components/password.input";

export default function UserEdit() {
  const searchParams = useSearchParams();
  const [username, setUsername] = useState(searchParams?.get('username') || "");
  const [email, setEmail] = useState(searchParams?.get('email') || "");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = async () => {
    //
  }

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
          text="🔑Repeat Password"
          ariaLabel="repeatPassword"
          password={repeatPassword}
          setPassword={setRepeatPassword}
        />
      </Form>
    </Layout>
  )
}
