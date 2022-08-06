import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
font-color: 1.5em;
text-align: center;
color: teal;
`;

const Wrapper = styled.section`
padding: 4em;
background-color: #e5d9c5;

`;

function App() {
  return (
    <Wrapper>
      <Title>
        Styled Components Basics

      </Title>
      
    
    </Wrapper>
  );
}

export default App;
