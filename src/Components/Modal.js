import styled from "styled-components"
import check from "../images/icon-check.svg"

const Modal = () => {
  return (
    <ModalConatiner>
      <ModalContent>
        <img src={check} alt='check' />
        <div className='content'>
          <h2>Thanks for your support!</h2>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed. Got it!
          </p>
        </div>
        <Button>Got it!</Button>
      </ModalContent>
    </ModalConatiner>
  )
}

const ModalConatiner = styled.div`
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
const ModalContent = styled.div`
  z-index: 1000 !important;
  padding: 2rem;
  background-color: var(--clr-white);
  width: min(90%, 32rem);
  border-radius: var(--radius);
  .content {
    margin: 1rem 0rem;
  }
  .content h2 {
    margin-bottom: 1rem;
  }
  .content p {
    color: var(--clr-primary-cyan);
  }
`
const Button = styled.button`
  cursor: pointer;
  outline: none;
  border: none;
  width: 10rem;
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
`

export default Modal
