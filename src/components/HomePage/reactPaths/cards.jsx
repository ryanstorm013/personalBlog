import * as mdb from "mdb-react-ui-kit";


export default function Cards(myCard) {
    return (
        <>

        <mdb.MDBCol xs={8} s={6} lg={3}>
            <mdb.MDBCard style={{ width: "18rem" }} background="dark" className="text-white  border border-dark ">
              <mdb.MDBCardImage variant="top" src={myCard.image} alt={myCard.alt} className="cardImg"/>
              <mdb.MDBCardBody>
                <mdb.MDBCardTitle>{myCard.title}</mdb.MDBCardTitle>
              </mdb.MDBCardBody>
            </mdb.MDBCard>
          </mdb.MDBCol>
          
        </>
    )
}