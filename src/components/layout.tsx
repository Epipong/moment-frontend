"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import MomentNavBar from "./moment.navbar";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MomentNavBar/>
      <Container className="mt-5">{children}</Container>
    </>
  );
}
