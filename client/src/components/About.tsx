import Strings from "../Shared/Strings";
import { BiSolidQuoteAltLeft, BiSolidQuoteAltRight } from "react-icons/bi";
import './portfolio.scss';

function About() {
  return (
    <div id="about">
      <h2>{Strings.ABOUT_HEADING}</h2>
      <BiSolidQuoteAltLeft className="quote-icon" />
      <h2 className='description'>{Strings.ABOUT_DESC}</h2>
      <BiSolidQuoteAltRight className="quote-icon" />
    </div>
  );
}

export default About;