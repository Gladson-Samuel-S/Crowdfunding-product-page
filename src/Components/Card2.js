import styled from "styled-components"

const Card2 = () => {
  return (
    <Card>
      <div className='content'>
        <div>
          <h1>$89,914</h1>
          <p>of $100,000 backed</p>
        </div>
        <div>
          <h1>5,007</h1>
          <p>total backers</p>
        </div>

        <div>
          <h1>56</h1>
          <p>days left</p>
        </div>
      </div>

      <div className='progress-area'>
        <div className='progress'></div>
        <div className='remaining'></div>
      </div>
    </Card>
  )
}

const Card = styled.article`
  padding: 2.5rem 2rem;
  background-color: #fff;
  border-radius: var(--radius);
  text-align: center;
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .progress-area {
    display: flex;
  }
  .progress {
    width: 70%;
    height: 0.7rem;
    background-color: var(--clr-primary-cyan);
    border-radius: 10px;
  }
  .remaining {
    width: 30%;
    height: 0.7rem;
    background-color: var(--clr-bg);
    border-radius: 10px;
  }
  p {
    margin-top: 0.5rem;
    color: var(--clr-primary-cyan);
  }
  @media only screen and (min-width: 600px) {
    .content {
      flex-direction: row;
      /* justify-content: space-between; */
      align-items: center;
      gap: 6rem;
    }
  }
`

export default Card2
