import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";

const AppNavbar = ({ filterBySearch }) => {
  const [searchValue, setSearchValue] = useState("");
  const OnSearch = () => {

    filterBySearch(searchValue.toLowerCase());
    setSearchValue("");
  };
  return (
    <div>
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand  style={{color:"#fb8500"}} href="/">Resturant Menu</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            ></Nav>
            <Form className="d-flex">
              <Form.Control
                type="text"
                placeholder="Search"
                className="me-2"
                onChange={(e) => setSearchValue(e.target.value)}
                value={searchValue}
              />
              <Button style={{background:"#fb8500",color:"#fff",border:"none"}} onClick={() => OnSearch()} variant="outline-success">
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default AppNavbar;
