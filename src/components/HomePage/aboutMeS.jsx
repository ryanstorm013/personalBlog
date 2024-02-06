import * as mdb from "mdb-react-ui-kit";

export default function AboutMe() {
  return (
    <div className="footerColor">
      <mdb.MDBContainer className=" py-3">
        <mdb.MDBRow>
          <mdb.MDBCol md={8} lg={6}>
            <img
              className="profilePic thumbnailBorder"
              src="./images/ColorTurntable.jpg"
              alt="Mishima"
            />
          </mdb.MDBCol>
          <mdb.MDBCol md={8} lg={6} className="py-5">
            <h1 className="text-white">About Me</h1>
            {/* <div className="vr" style="height: 250px;"></div> */}
            <hr className="pt-1 marginHR"></hr>
            <mdb.MDBRow>
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
            </mdb.MDBRow>
            <mdb.MDBRow>
              <mdb.MDBBtn outline rounded color="light">
                Read More
              </mdb.MDBBtn>
            </mdb.MDBRow>
          </mdb.MDBCol>
        </mdb.MDBRow>
      </mdb.MDBContainer>
    </div>
  );
}
