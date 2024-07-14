"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { deleteCookie } from "@/app/utils/cookie.util";
import { useRouter } from "next/navigation";
import { routes } from "@/app/routes/routes";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
        data-bs-theme="light"
        expand="lg"
        className="bg-body-tertiary"
      >
        <Container>
          <Navbar.Brand href="/">MOMENT</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">🏠Home</Nav.Link>
              <NavDropdown title="👤Profile" id="basic-nav-dropdown">
                <NavDropdown.Item href={routes.users.view}>
                  ⚙️My account
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>
                  🚪Logout
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-5">{children}</Container>
    </>
  );
}
