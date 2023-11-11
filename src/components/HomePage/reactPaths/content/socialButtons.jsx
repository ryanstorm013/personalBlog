import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default function SocialButtons(socials) {
    return (
        <>
        <a
            className="btn btn-outline-light btn-floating m-2 rounded-circle"
            href="#!"
            role="button"
          >
            <i className={socials.brands} ></i>
          </a>
        </>
    );
}