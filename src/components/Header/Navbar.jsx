

import { Navbar } from "flowbite-react";

export  default function Component() {
  return (
    <Navbar fluid rounded className="bg-blue-500">
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="text-white">
        <a href="#">
          Home
        </a>
        <a  href="#">
          About
        </a>
        <a href="#">Services</a>
        <a href="#">Pricing</a>
        <a href="#">Contact</a>
      </Navbar.Collapse>
    </Navbar>
  );
}
