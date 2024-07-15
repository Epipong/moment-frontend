import { routes } from "@/app/routes/routes";
import { deleteCookie } from "@/app/utils/cookie.util";
import { useRouter } from "next/navigation";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function MomentNavBar() {
  const router = useRouter();

  const handleLogout = async () => {
    deleteCookie("token");
    router.refresh();
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="light"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Navbar.Brand href="/">MOMENT 🚀</Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
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
  );
}
