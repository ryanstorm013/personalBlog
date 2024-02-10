import { useState } from "react";
import * as mdb from "mdb-react-ui-kit";


export default function Header() {
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <mdb.MDBNavbar dark sticky bgColor="dark" expand="lg">
        <mdb.MDBContainer fluid>
          {/* <Row> */}
          <mdb.MDBNavbarBrand href="#" className="hover-shadow">
            <h3 className="text-warning">RR</h3>
          </mdb.MDBNavbarBrand>

          <mdb.MDBNavbarToggler
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setOpenNav(!openNav)}
          >
            <mdb.MDBIcon icon="bars" fas />
          </mdb.MDBNavbarToggler>
          <mdb.MDBCollapse navbar open={openNav}>
            <mdb.MDBNavbarNav className="headerFont">
              <mdb.MDBNavbarItem className="ms-auto">
                <mdb.MDBNavbarLink href="#about" >About</mdb.MDBNavbarLink>
              </mdb.MDBNavbarItem>
              <mdb.MDBNavbarItem>
                <mdb.MDBNavbarLink href="#projects">Projects</mdb.MDBNavbarLink>
              </mdb.MDBNavbarItem>
              <mdb.MDBNavbarItem>
                <mdb.MDBNavbarLink href="#contact">Contacts</mdb.MDBNavbarLink>
              </mdb.MDBNavbarItem>
            </mdb.MDBNavbarNav>
          </mdb.MDBCollapse>
        </mdb.MDBContainer>
      </mdb.MDBNavbar>
    </>
  );
}
