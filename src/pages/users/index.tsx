"use client";

import { Button, CardBody, Row } from "react-bootstrap";
import Layout from "@/components/layout";
import { getCurrentUser, User } from "@/app/models/users";
import { useEffect, useState } from "react";
import { Label } from "@/components/label";
import { routes } from "@/app/routes/routes";
import { useRouter } from "next/navigation";
import { createQueryString } from "@/app/utils/query.util";
import axios from "axios";
import { deleteCookie, getCookie } from "@/app/utils/cookie.util";

export default function UserView() {
  const [user, setUser] = useState<User>();
  const router = useRouter();
  const uri = process.env.NEXT_PUBLIC_API_URL;

  useEffect(() => {
    const currentUser = getCurrentUser();
    setUser(currentUser);
  }, []);

  const handleEdit = async () => {
    const { username, email, id } = user!;
    const queryString = createQueryString({
      username,
      email,
      userId: id.toString(),
    });
    router.push(`${routes.users.edit}?${queryString}`);
  };

  const handleDelete = async () => {
    if (confirm('Are you sure to delete your account? 😢')) {
      try {
        const token = getCookie("token");
        await axios.delete<User>(`${uri}/users/${user!.id}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        deleteCookie("token");
        router.refresh();
      } catch (err) {
        //
      }
    }
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
      <Button className="me-1" variant="success" onClick={handleEdit}>
        Edit
      </Button>
      <Button className="me-1" variant="danger" onClick={handleDelete}>
        Delete 
      </Button>
    </Layout>
  );
}
