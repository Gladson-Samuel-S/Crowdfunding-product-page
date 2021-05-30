import { useState } from 'react';
import styled from 'styled-components';

const Atag = styled.a`
  background-color:  grey;
  font-size: 40px;
`;

function App() {
  let [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count = count + 1)
  }

  return (
    <div className="App">
      Hello World
      <br />
      <Atag href="#">
        `Let's go styled with styled components`
      </Atag>
      <h2>Gladson Samuel</h2>
      <h3>{count}</h3>
      <button onClick={handleClick}>Click to increment</button>
    </div>
  );                               
}

export default App;
