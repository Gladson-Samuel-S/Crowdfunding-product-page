import styled from "styled-components"
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"

const Cards = () => {
  return (
    <Wrapper>
      <Card1 />
      <Card2 />
      <Card3 />
    </Wrapper>
  )
}

const Wrapper = styled.main`
  /* position: relative;
  bottom: 10vh; */
  width: min(90%, 45rem);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export default Cards
