import * as mdb from "mdb-react-ui-kit";

export default function SocialButtons(socials) {
    return (
        <>
        {/* <a
            className="btn btn-outline-light btn-floating m-2 rounded-circle"
            href="#!"
            role="button"
          > */}
            {/* <i className={socials.brands} ></i> */}

          <mdb.MDBBtn size='lg' floating style={{ backgroundColor: '#212529' }} href="" className="m-2">
            <mdb.MDBIcon fab icon={socials.brands}/>
          </mdb.MDBBtn>
          
            
          {/* </a> */}
        </>
    );
}