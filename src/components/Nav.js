import styled from "styled-components";
import { Link } from "react-router-dom";


const Nav =()=>{

    return(

        <StyledNav>
        <h1>
            <Link id="logo" to="/"> Capture</Link>
            </h1>

            <ul>
                <li>
                    <Link  to="/">1.About Us</Link>
                </li>
                <li>
                    <Link to="/work">2.Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3.Contact Us</Link>
                </li>
            </ul>

        </StyledNav>


    )

}
const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #282828;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 10;

  ul {
    display: flex;
    list-style: none;
  }
  li {
    padding-left: 10rem;
    position: relative;
  }
  a {
    color: white;
    text-decoration: none;
  }
  #logo {
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    padding: 2rem 0rem;
    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;
      li {
        padding: 0;
      }
    }
  }
`;



export default Nav