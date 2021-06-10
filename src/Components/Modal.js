import { useState } from "react"
import styled from "styled-components"
import close from "../images/icon-close-modal.svg"

const Modal = ({ isModal, setModal, onShow }) => {
  const [noreward, setNoReward] = useState(false)
  const [bamboo, setBamboo] = useState(false)
  const [black, setBlack] = useState(false)

  return (
    <ModalConatiners>
      <ModalCard>
        <div className='head'>
          <h1>Back this project</h1>
          <img
            src={close}
            alt='close modal'
            width='15px'
            height='15px'
            style={{ cursor: "pointer" }}
            onClick={() => {
              setModal(!isModal)
            }}
          />
        </div>
        <p className='text'>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <Subcard>
          <div className='selection'>
            <input
              type='radio'
              name='selection'
              id='noReward'
              value='noReward'
              onClick={() => {
                if (bamboo === true) {
                  setBamboo(false)
                }
                if (black === true) {
                  setBlack(false)
                }
                setNoReward(true)
              }}
            />
            <h1> Pledge with no reward</h1>
          </div>
          <p>
            Choose to support us without a reward if you simply believe in our
            project. As a backer, you will be signed up to receive product
            updates via email.
          </p>

          {noreward && (
            <div className='content'>
              <div className='line'></div>
              <p className='p-text'>Enter your pledge</p>
              <div className='action'>
                <input type='number' placeholder='$' />
                <Button
                  onClick={() => {
                    setModal(!isModal)
                    onShow()
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </Subcard>
        <Subcard>
          <div className='selection'>
            <input
              type='radio'
              name='selection'
              id='bamboo'
              value='bamboo'
              onClick={() => {
                if (noreward === true) {
                  setNoReward(false)
                }
                if (black === true) {
                  setBlack(false)
                }
                setBamboo(true)
              }}
            />
            <div className='pledge'>
              <h1> Bamboo Stand</h1>
              <h4 className='pledgeText'> Pledge $25 or more</h4>
            </div>
          </div>
          <p>
            You get an ergonomic stand made of natural bamboo. You've helped us
            launch our promotional campaign, and you’ll be added to a special
            Backer member list.
          </p>
          <div className='amount-container'>
            <h3>101</h3>
            <span className='left'>left</span>
          </div>

          {bamboo && (
            <div className='content'>
              <div className='line'></div>
              <p className='p-text'>Enter your pledge</p>
              <div className='action'>
                <input type='number' placeholder='$' />
                <Button
                  onClick={() => {
                    setModal(!isModal)
                    onShow()
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </Subcard>
        <Subcard>
          <div className='selection'>
            <input
              type='radio'
              name='selection'
              id='black'
              value='black'
              onClick={() => {
                if (noreward === true) {
                  setNoReward(false)
                }
                if (bamboo === true) {
                  setBamboo(false)
                }
                setBlack(true)
              }}
            />
            <div className='pledge'>
              <h1> Black Edition Stand</h1>
              <h4 className='pledgeText'> Pledge $75 or more</h4>
            </div>
          </div>
          <p>
            You get a Black Special Edition computer stand and a personal thank
            you. You’ll be added to our Backer member list. Shipping is
            included.
          </p>
          <div className='amount-container'>
            <h3>64</h3>
            <span className='left'>left</span>
          </div>

          {black && (
            <div className='content'>
              <div className='line'></div>
              <p className='p-text'>Enter your pledge</p>
              <div className='action'>
                <input type='number' placeholder='$' />
                <Button
                  onClick={() => {
                    setModal(!isModal)
                    onShow()
                  }}
                >
                  Continue
                </Button>
              </div>
            </div>
          )}
        </Subcard>
        <Subcard className='not-active' style={{ pointerEvents: "none" }}>
          <div className='selection'>
            <input type='radio' name='selection' id='black' value='black' />
            <div className='pledge'>
              <h1> Mahogany Special Edition</h1>
              <h4 className='pledgeText'> Pledge $200 or more</h4>
            </div>
          </div>
          <p>
            You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
            personal thank you. You’ll be added to our Backer member list.
            Shipping is included.
          </p>
          <div className='amount-container'>
            <h3>0</h3>
            <span className='left'>left</span>
          </div>
        </Subcard>
      </ModalCard>
    </ModalConatiners>
  )
}

const ModalConatiners = styled.div`
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`
const ModalCard = styled.article`
  overflow: auto;
  height: 90vh;
  z-index: 1010 !important;
  padding: 2.5rem 2rem;
  background-color: var(--clr-white);
  width: min(90%, 42rem);
  border-radius: var(--radius);
  .head {
    display: flex;
    justify-content: space-between;
  }
`

const Subcard = styled.article`
  padding: 1.5rem;
  border: 1px dotted var(--clr-primary-cyan);
  border-radius: 10px;
  margin: 2rem 0rem;
  input[type="radio"] {
    height: 1rem;
    width: 1rem;
    margin-right: 10px;
  }
  .selection {
    display: flex;
    align-items: center;
  }
  .pledge {
    display: flex;
    flex-direction: column;
  }
  .pledgeText {
    font-size: 0.9rem;
    color: var(--clr-primary-darkcyan);
    margin-top: 5px;
  }
  .amount-container {
    display: flex;
  }
  .left {
    margin-left: 0.5rem;
    color: var(--clr-primary-cyan);
  }
  .content {
    text-align: center;
  }
  .line {
    width: 100%;
    height: 1px;
    background-color: var(--clr-primary-cyan);
    margin-top: 1rem;
  }
  .action {
    display: flex;
    justify-content: space-between;
  }
  input[type="number"] {
    width: 6rem;
    padding: 1rem 1.5rem;
    border-radius: 30px;
    outline: none;
    border: 1px solid var(--clr-primary-cyan);
    margin-right: 10px;
  }
  @media only screen and (min-width: 600px) {
    .action {
      justify-content: flex-end;
      position: relative;
      bottom: 1rem;
    }
    .p-text {
      position: relative;
      top: 2rem;
    }
    .content {
      text-align: left;
    }
  }
`

const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 7rem;
  padding: 1rem 1.5rem;
  background-color: var(--clr-primary-cyan);
  color: var(--clr-white);
  border-radius: 30px;
  font-weight: bold;

  :hover {
    background-color: var(--clr-primary-darkcyan);
  }
  :active {
    transform: scale(0.98);
  }

  @media only screen and (min-width: 600px) {
    width: 10rem;
  }
`

export default Modal
