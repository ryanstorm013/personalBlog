import * as mdb from "mdb-react-ui-kit";

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

function myTime() {
  const currentHour = new Date().getHours()
  if (currentHour >= 5 && currentHour < 12 ) {
    return 'Good Morning';
  } else if (currentHour >= 12 && currentHour < 18) {
    return 'Good Afternoon';
  } else {
    return 'Good evening';
  }
}



export default function Content() {
  const hourOutput = myTime();
  return (
    <div>
        <mdb.MDBContainer >
          {/* <mdb.MDBRow>
            <mdb.MDBCol size='4'> */}
              <div className="mainHeader">
                <h1 className="text-light title">{hourOutput}</h1>
                <hr className="pt-2 marginHR"></hr>
                <h3 className="text-warning pt-3 welcomeText">
                  Welcome to Ryan's Portfolio
                </h3>
              </div>
            {/* </mdb.MDBCol>
          </mdb.MDBRow> */}
        </mdb.MDBContainer>
    
      <AboutMe />
      <div className="contentBackground">
        <mdb.MDBContainer className="p-5">
          <mdb.MDBRow className="  justify-content-lg-center text-center mb-5">
            <mdb.MDBCol>
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
            </mdb.MDBCol>
          </mdb.MDBRow>
          <mdb.MDBRow className="justify-content-lg-center mt-5 text-center">
            {sites.map(mySites)}
          </mdb.MDBRow>

          <mdb.MDBRow>
            <hr className="separateHR"></hr>

            <h1 className="text-white text-center mt-5">Want to Contact?</h1>
            <div className="mt-5">
              {/* <h4 className="text-white mt-5">Email Address:</h4> */}
              <mdb.MDBInputGroup size="lg" className="mt-5 inputMargin">
                
                <input
                  type="input"
                  placeholder="Email Address"
                  className="bg-dark text-white form-control"
                />
                <mdb.MDBBtn rounded color="dark" >
                  Submit
                </mdb.MDBBtn>
              </mdb.MDBInputGroup>
            </div>
          </mdb.MDBRow>
        </mdb.MDBContainer>
      </div>
    </div>
  );
}
