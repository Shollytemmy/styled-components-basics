import styled from 'styled-components';
import './App.css';

const Title = styled.h1`
font-color: 1.5em;
text-align: center;
color: teal;
border:  0px solid red;
`;



const Wrapper = styled.section`
padding: 4em;
background-color: #e5d9c5;
height: 100vh;
position: relative;

`;

const Button = styled.button`
background-color: ${((props) => props.backgroundColor ==='red' ? 'red' : 'teal')};
color: ${(props => props.color ==='green' ? 'green' : 'white')};
padding: 10px 15px;
border: none;
margin: 5rem;
cursor: pointer;
border-radius: 5px;
font-size: 18px;
font-weight: lighter;
:hover{
  background: #000;
};

`;

const Button1 = styled.button`
background: pink;
font-size: 18px;
padding: 10px 15px;
color: #000;
border: none;
border-radius: 5px;
cursor: pointer;
font-weight: lighter;
margin:1rem;
&:hover{
  background: #000;
  color: #fff;
  
}

` ;

const DependantButton = styled(Button1)`
background: green;
`;



function App() {
  return (
    <Wrapper>
      <Title>
        Styled Components Basics
        
      </Title>

      <Button backgroundColor='red' color='green'>Add to cart</Button>
        <Button backgroundColor='teal' color='white'>Subscribe</Button>

        <Button1>Plain button</Button1>
        <DependantButton>Depends on button1 style</DependantButton>
    </Wrapper>
    
  );
}

export default App;
