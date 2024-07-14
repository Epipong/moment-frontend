"use client";

import { Container, Navbar } from "react-bootstrap";

export default function Home() {
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
      <Container className="mt-5">You are logged!! 🥳</Container>
    </>
  );
}
