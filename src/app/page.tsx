"use client";

import { Button, Container, Navbar } from "react-bootstrap";
import { deleteCookie } from "./utils/cookie.util";
import { useRouter } from "next/navigation";
import { routes } from "./routes/routes";

export default function Home() {
  const router = useRouter();

  const handleLogout = async () => {
    deleteCookie("token");
    router.push(routes.home);
    router.refresh();
  };

  return (
    <>
      <Navbar
        bg="dark"
        data-bs-theme="dark"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="#home">MOMENT</Navbar.Brand>
        </Container>
      </Navbar>
      <Container className="mt-5">
        <h1>You are logged!! 🥳</h1>
        <br />
        <Button variant="danger" onClick={handleLogout}>
          🚪Logout
        </Button>
      </Container>
    </>
  );
}
