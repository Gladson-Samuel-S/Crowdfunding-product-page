import { useState } from "react"
import styled from "styled-components"
import data from "./data/Data"
import Modal from "./Modal"
import ThankYouModal from "./ThankYouModal"

const Card3 = () => {
  const [isModal, setModal] = useState(false)
  const [isThankModal, setIsThankModal] = useState(false)

  const onShow = () => {
    setIsThankModal(!isThankModal)
  }

  return (
    <Card>
      {isThankModal && (
        <ThankYouModal
          isThankModal={isThankModal}
          setIsThankModal={setIsThankModal}
        />
      )}
      {isModal && (
        <Modal isModal={isModal} setModal={setModal} onShow={onShow} />
      )}
      <h1> About this project</h1>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>

      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand
      </p>
      {data.map((item) => {
        return (
          <Subcard key={item.id} className={item.amount ? null : "not-active"}>
            <div className='title'>
              <h1>{item.title}</h1>
              <h5>{item.pledge}</h5>
            </div>
            <p>{item.body}</p>
            <div className='quantity'>
              <div className='price'>
                <h1> {item.amount} </h1>
                <span>{item.left}</span>
              </div>
              {item.amount ? (
                <Button
                  onClick={() => {
                    setModal(!isModal)
                  }}
                >
                  {item.button}
                </Button>
              ) : (
                <Button disabled style={{ pointerEvents: "none" }}>
                  {item.button}
                </Button>
              )}
            </div>
          </Subcard>
        )
      })}
    </Card>
  )
}

const Card = styled.article`
  padding: 2.5rem 2rem;
  background-color: #fff;
  border-radius: var(--radius);
  p {
    padding: 1.2rem 0rem;
    color: var(--clr-primary-cyan);
  }
  .not-active {
    opacity: 0.5;
  }
`
const Subcard = styled.article`
  padding: 1.5rem;
  border: 1px dotted var(--clr-primary-cyan);
  border-radius: 10px;
  margin: 2rem 0rem;

  .title {
    display: flex;
    flex-direction: column;
  }
  .price {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 1rem;
  }
  .price h1 {
    font-size: 2.5rem;
  }
  .price span {
    color: var(--clr-primary-cyan);
  }
  h5 {
    color: var(--clr-primary-darkcyan);
  }
  .quantity {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (min-width: 600px) {
    .title {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    .quantity {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
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

export default Card3
