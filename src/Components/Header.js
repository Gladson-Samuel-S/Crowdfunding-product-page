import styled from "styled-components"
import image from "../images/image-hero-mobile.jpg"
import bgimage from "../images/image-hero-desktop.jpg"
import hamburger from "../images/icon-hamburger.svg"
import hamburgerClose from "../images/icon-close-menu.svg"
import { useState } from "react"

const Head = styled.header`
  height: 40vh;
  background-image: url(${image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  nav {
    padding: 2.1rem 1rem 0 1rem;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
  }
  nav h3 {
    font-size: 28px;
  }
  .hamburger {
    cursor: pointer;
  }
  ul {
    display: none;
  }
  .nav-items {
    z-index: 999;
    position: absolute;
    height: 25vh;
    width: 90vw;
    top: calc(40vh - 28vh);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: var(--clr-white);
    box-shadow: 0 0 0 9999rem rgb(0 0 0 / 50%);
    border-radius: var(--radius);
  }
  .nav-items li {
    cursor: pointer;
    padding: 0px 0.8rem;
    height: 40px;
    /* border-bottom: 1px dotted var(--clr-primary-darkcyan); */
  }
  .nav-items li:hover {
    background-color: #f8f3f3;
  }
  .nav-items a {
    font-weight: bold;
    color: var(--clr-black);
  }

  @media only screen and (min-width: 600px) {
    background-image: url(${bgimage});
    nav {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }
    .hamburger {
      display: none;
    }
    ul {
      display: flex;
      color: var(--clr-white);
    }
    ul a {
      padding: 1rem;
      color: var(--clr-white);
    }
    ul a:hover {
      color: #f8f3f3;
    }
  }

  @media only screen and (min-width: 1000px) {
    height: 50vh;
    width: 100%;
  }
`

const Header = () => {
  const [open, setOpen] = useState(false)
  // opening and closing of nav
  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <Head>
      <nav>
        <h3>Crowdfund</h3>
        <img
          className='hamburger'
          src={open ? hamburgerClose : hamburger}
          alt='Hamburger menu'
          height='18px'
          width='18px'
          onClick={handleClick}
        />
        <ul className={open ? "nav-items" : ""}>
          <li>
            <a href='/'>About</a>
          </li>
          <li>
            <a href='/'>Discover</a>
          </li>
          <li>
            <a href='/'>Get Started</a>
          </li>
        </ul>
      </nav>
    </Head>
  )
}

export default Header
