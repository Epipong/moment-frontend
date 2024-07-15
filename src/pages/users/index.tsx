"use client";

import { Button, CardBody, Row } from "react-bootstrap";
import Layout from "../layout";
import { getCurrentUser, User } from "@/app/models/users";
import { useEffect, useState } from "react";
import { Label } from "@/components/label";
import { routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/app/utils/query.util";

export default function UserView() {
  const [user, setUser] = useState<User>();
  const router = useRouter();

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleClick = async () => {
    const { username, email } = user!;
    const queryString = createQueryString({
      username, email
    });
    router.push(`${routes.users.edit}?${queryString}`);
  }

  return (
    <Layout>
      <CardBody>
        <Row>
          <Label label="User Name" value={user?.username} />
        </Row>
        <hr />
        <Row>
          <Label label="Email" value={user?.email} />
        </Row>
      </CardBody>
      <hr />
      <Button variant="success" onClick={handleClick}>Edit</Button>      
    </Layout>
  );
}
