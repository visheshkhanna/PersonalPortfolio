import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center ">
      <Container>
        {props.children}
        <i className="fas fa-code" /> with <i className="fas fa-heart" /> by{" "}
        <a
          className="badge badge-dark"
          rel="noopener"
          href="https://github.com/visheshkhanna"
          target="_blank"
          aria-label="My GitHub"
        >
          Vishesh Khanna
        </a>{" "}
        using <i className="fab fa-react" />
      </Container>
    </footer>
  );
};

export default Footer;
