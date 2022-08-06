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
height: 100vh;

`;

const Button = styled.button`
background-color: ${((props) => props.backgroundColor ==='red' ? 'red' : 'teal')};
color: ${(props => props.color ==='green' ? 'green' : 'white')}

`;

function App() {
  return (
    <Wrapper>
      <Title>
        Styled Components Basics
        <Button backgroundColor='red' color='green'>Add to cart</Button>
        <Button backgroundColor='teal' color='white'>Subscribe</Button>
        
      </Title>
    </Wrapper>
    
  );
}

export default App;
