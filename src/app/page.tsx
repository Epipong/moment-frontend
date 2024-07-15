"use client";

import Layout from "@/pages/layout";
import { getCurrentUser, User } from "./models/users";
import { useEffect, useState } from "react";

export default function Home() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);
  return (
    <Layout>
      {!user ? <h1>You are logged!!! 🥳</h1> : <h1>Welcome {user.username}!!! 🥳</h1>}
    </Layout>
  );
}
