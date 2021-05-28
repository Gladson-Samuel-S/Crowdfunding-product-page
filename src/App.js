import styled from 'styled-components'

const Atag = styled.a`
  background-color:  grey;
  font-size: 40px;
`

function App() {

  return (
    <div className="App">
      Hello World
      <br />
      <Atag href="#">
        Let's go styled with styled components
      </Atag>
    </div>
  );                               
}

export default App;
