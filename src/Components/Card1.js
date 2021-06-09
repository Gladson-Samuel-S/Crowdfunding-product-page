import styled from "styled-components"
import logo from "../images/logo-mastercraft.svg"
import bookmarkImg from "../images/icon-bookmark.svg"
import bookmarkClosed from "../images/icon-bookmark-checked.svg"
import { useState } from "react"
import ThankYouModal from "./ThankYouModal"

const Card1 = () => {
  const [bookmark, setBookmark] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setBookmark(!bookmark)
  }

  // handle modal
  const handleModal = () => {
    setIsModalOpen(!isModalOpen)
  }

  return (
    <Card>
      {isModalOpen && (
        <ThankYouModal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <img id='logo' src={logo} alt='logo' height='56px' width='56px' />
      <h2 className='title'> Mastercraft Bamboo Monitor Riser</h2>
      <p className='description'>
        A beautiful & handcrafted monitor stand to reduce neck and eye strain.
      </p>
      <div className='action-area'>
        <Button onClick={handleModal}>Back this project</Button>
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
  )
}

const Card = styled.article`
  position: relative;
  margin-top: -5rem;
  /* z-index: 1 !important; */
  padding: 2.5rem 2rem;
  background-color: #fff;
  border-radius: var(--radius);
  text-align: center;
  #logo {
    z-index: -1 !important;
    position: absolute;
    top: -0.4rem;
    transform: translate(-50%, -50%);
  }
  .description {
    color: var(--clr-darkgrey);
    font-size: 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  .action-area {
    display: flex;
    justify-content: space-between;
  }
  img {
    cursor: pointer;
  }
  .bkmark-btn {
    display: flex;
    align-items: center;
    border: none;
    border-radius: 30px;
    outline: none;
    padding: 0 !important;
  }
  .bktext {
    display: none;
  }

  @media only screen and (min-width: 600px) {
    .bktext {
      display: block;
      color: var(--clr-primary-cyan);
      font-weight: bold;
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
  :active {
    transform: scale(0.98);
  }
`

export default Card1
