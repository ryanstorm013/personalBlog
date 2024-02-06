import * as mdb from "mdb-react-ui-kit";


export default function Cards(myCard) {
    return (
        <>

        <mdb.MDBCol xs={8} s={6} lg={3} className="me-5">
            <mdb.MDBCard style={{ width: "18rem" }} background="dark" className="text-white  border border-dark ">
              {/* <mdb.MDBCardImage variant="top" src={myCard.image} alt={myCard.alt} className="cardImg"/> */}
              <mdb.MDBIcon icon={myCard.image} size="8x" className="mt-4 "/> 
              
              <mdb.MDBCardBody>
                <mdb.MDBCardTitle>{myCard.title}</mdb.MDBCardTitle>
                <mdb.MDBCardText>Taco Bell</mdb.MDBCardText>
              </mdb.MDBCardBody>
            </mdb.MDBCard>
          </mdb.MDBCol>
          
        </>
    )
}