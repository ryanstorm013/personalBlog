import * as mdb from "mdb-react-ui-kit";



import socials from "./content/mySocials";
import SocialButtons from "./content/socialButtons";

function theSocials(brand) {
  return (
    <SocialButtons
      id={brand.id}
      key={brand.id}
      brands={brand.brands}
    />
  )
}


export default function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        <section className=" justify-content-center  p-3 border-bottom">
          <h1>Visit my Socials</h1>
          {socials.map(theSocials)}
        </section>
        <mdb.MDBContainer fluid>

        </mdb.MDBContainer>
        <div className="text-center p-3 footerColor text-white">
          Made by Ryan Reyes
        </div>
      </footer>
    </>
  );
}

