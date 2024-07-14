"use client";

import { Register } from "@/pages/register";
import { Container, Navbar, ThemeProvider } from "react-bootstrap";

export default function Home() {
  return (
    <ThemeProvider
      breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
      minBreakpoint="xxs"
    >
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
        <Register />
      </Container>
    </ThemeProvider>
  );
}
