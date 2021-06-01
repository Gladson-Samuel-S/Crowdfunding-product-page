import styled from "styled-components"
import logo from "../images/logo-mastercraft.svg"
import bookmarkImg from "../images/icon-bookmark.svg"
import bookmarkClosed from "../images/icon-bookmark-checked.svg"
import { useState } from "react"

const Wrapper = styled.main`
  width: min(90%, 45rem);
  margin: 0 auto;
`

const Card = styled.article`
  /* height: 40vh; */
  position: relative;
  bottom: 10vh;
  padding: 2.5rem 2rem;
  background-color: #fff;
  border-radius: var(--radius);
  text-align: center;
  h2 {
    position: relative;
    bottom: 2rem;
  }
  .logo {
    position: relative;
    bottom: 4rem;
  }
  p {
    position: relative;
    bottom: 1rem;
    color: var(--clr-darkgrey);
    font-size: 1rem;
    margin-bottom: 1rem;
  }
  .action-area {
    display: flex;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
  }
  .bkmark-btn {
    border: none;
    outline: none;
    border-radius: 30px;
    padding: 0 !important;
  }
  .bktext {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .bktext {
      color: var(--clr-primary-cyan);
      font-weight: bold;
      display: inline;
      position: relative;
      bottom: 20px;
      margin-left: 20px;
    }
    .bkmark-btn {
      cursor: pointer;
      padding: 0rem 1.5rem 0rem 0rem !important;
    }
    .action-area {
      justify-content: space-around;
    }
  }
`

const Button = styled.button`
  cursor: pointer;
  padding: 0px 1.2rem;
  background-color: var(--clr-primary-cyan);
  color: var(--clr-white);
  border-radius: 30px;
  font-size: large;
  font-weight: bold;
  outline: none;
  border: none;
  :hover {
    background-color: var(--clr-primary-darkcyan);
  }
`

const Body = () => {
  const [bookmark, setBookmark] = useState(false)
  const handleClick = () => {
    setBookmark(!bookmark)
  }

  return (
    <Wrapper>
      <Card>
        <div className='logo'>
          <img src={logo} alt='logo' height='56px' width='56px' />
        </div>
        <h2> Mastercraft Bamboo Monitor Riser</h2>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className='action-area'>
          <Button>Back this project</Button>
          <button className='bkmark-btn' onClick={handleClick}>
            <img src={bookmark ? bookmarkClosed : bookmarkImg} alt='Bookmark' />
            {bookmark ? (
              <p className='bktext'>Bookmarked</p>
            ) : (
              <p className='bktext'>Bookmark</p>
            )}
          </button>
        </div>
      </Card>
    </Wrapper>
  )
}

export default Body
