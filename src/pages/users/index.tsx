"use client";

import { CardBody, Row } from "react-bootstrap";
import Layout from "../layout";
import { getCurrentUser, User } from "@/app/models/users";
import { useEffect, useState } from "react";
import { MyLabel } from "@/components/MyLabel";

export default function UserView() {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, [user]);

  return (
    <Layout>
      <CardBody>
        <Row>
          <MyLabel label="User Name" value={user?.username } />
        </Row>
        <hr />
        <Row>
          <MyLabel label="Email" value={user?.email } />
        </Row>
      </CardBody>
    </Layout>
  );
}
