"use client";

import React from "react";
import { Container, Navbar, ThemeProvider } from "react-bootstrap";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      <Container className="mt-5">{children}</Container>
    </ThemeProvider>
  );
}
