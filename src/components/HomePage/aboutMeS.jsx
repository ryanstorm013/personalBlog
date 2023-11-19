import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

export default function AboutMe() {
  return (
    <div className="footerColor">
      <Container className=" py-3">
        <Row>
          <Col md={8} lg={6}>
            <Image
              className="profilePic"
              src="./src/components/images/Kazuya_Mishima_TK8.WEBP"
              thumbnail
            />
          </Col>
          <Col md={8} lg={6} className="py-5">
            <h1 className="text-white">About Me</h1>
            <hr className="pt-1 marginHR"></hr>
            <Row>
              <p className="text-white ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam
                nulla porttitor massa id neque aliquam. Elementum curabitur
                vitae nunc sed velit dignissim. Libero id faucibus nisl
                tincidunt eget. Elit ullamcorper dignissim cras tincidunt
                lobortis feugiat. Enim ut tellus elementum sagittis. Sit amet
                volutpat consequat mauris nunc congue. Lectus sit amet est
                placerat in. Etiam tempor orci eu lobortis. Vitae turpis massa
                sed elementum tempus egestas sed sed. In nibh mauris cursus
                mattis molestie a iaculis. Vulputate enim nulla aliquet
                porttitor lacus luctus. Fusce id velit ut tortor pretium viverra
                suspendisse. Pellentesque sit amet porttitor eget dolor.
                Facilisi cras fermentum odio eu feugiat pretium nibh. Quam id
                leo in vitae turpis massa. Feugiat nibh sed pulvinar proin. Et
                odio pellentesque diam volutpat commodo sed egestas egestas
                fringilla. Nullam eget felis eget nunc lobortis mattis aliquam
                faucibus.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
