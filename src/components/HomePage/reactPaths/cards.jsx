import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import sites from "./developedSites";


export default function Cards(myCard) {
    return (
        <>

        <Col xs={8} s={6} lg={3}>
            <Card style={{ width: "18rem" }} bg="dark" className="text-white  border border-dark ">
              <Card.Img variant="top" src={myCard.image} className="cardImg"/>
              <Card.Body>
                <Card.Title>{myCard.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
          
        </>
    )
}