import styled from "styled-components"

const Modal = ({ isModal, setModal }) => {
  return (
    <ModalConatiner
      onClick={() => {
        setModal(!isModal)
      }}
    >
      <ModalContent></ModalContent>
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
  width: min(90%, 42rem);
  border-radius: var(--radius);
`

export default Modal
