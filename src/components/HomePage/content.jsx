import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
// import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";

import Cards from "./reactPaths/cards";
import AboutMe from "./aboutMeS";
import sites from "./reactPaths/content/developedSites";

function mySites(entry) {
  return (
    <Cards
      id={entry.id}
      key={entry.id}
      image={entry.image}
      title={entry.title}
    />
  );
}

export default function Content() {
  return (
    <div>
      <div>
        <Container fluid className="deejay ">
          <Row>
            <Col>
              <div className="mainHeader">
                <h1 className="text-light title">Good Morning</h1>
                <hr className="pt-2 marginHR"></hr>
                {/* <h3 className="text-light ">Welcome!</h3> */}
                <h3 className="text-warning pt-3">
                  Welcome to Ryan's Portfolio
                </h3>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <AboutMe />
      <div className="contentBackground">
        <Container className="p-5">
          <Row className="  justify-content-lg-center text-center mb-5">
            <Col>
              <h1 className="text-white ">What I do</h1>
              <p className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              {/* {sites.map(mySites)} */}
            </Col>
          </Row>
          <Row className="justify-content-lg-center mt-5 text-center">
            {sites.map(mySites)}
          </Row>

          <Row>
            <hr className="separateHR"></hr>

            <h1 className="text-white text-center mt-5">Want to Contact?</h1>
            <div className="mt-5">
              <h4 className="text-white">Email Address:</h4>
              <InputGroup>
                <Form.Control
                  size="lg"
                  type="input"
                  placeholder="Email Address"
                  className=" bg-dark text-white"
                ></Form.Control>
                <Button
                  as="input"
                  type="submit"
                  value="Submit"
                  className="bg-dark"
                />
              </InputGroup>
            </div>
          </Row>
        </Container>
      </div>
    </div>
  );
}
