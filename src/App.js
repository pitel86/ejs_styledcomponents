import styled from 'styled-components';
import './App.css';
import DivComponent from './components/DivComponent';
import InputComponent from './components/InputComponent';
import TitleComponent from './components/TitleComponent';

const Wrapper = styled.div`
display: flex;
flex-direction: ${props => props.direction};
`

function App() {
  return (
    <Wrapper direction="column" className="App">
      <DivComponent />
      <Wrapper direction='row'>

      <TitleComponent type='h1' function={() => console.log("soy luis")} luis>Titulo primario</TitleComponent>
      <TitleComponent type='h1' function={() => console.log("soy juan")} juan>Titulo secundario</TitleComponent>
      <TitleComponent type='h1' function={() => console.log("soy pepe")} pepe>Titulo terciario</TitleComponent>
      <TitleComponent type='h2' function={() => console.log("soy luis")} luis>Titulo primario</TitleComponent>
      <TitleComponent type='h2' function={() => console.log("soy juan")} juan>Titulo secundario</TitleComponent>
      <TitleComponent type='h2' function={() => console.log("soy pepe")} pepe>Titulo terciario</TitleComponent>
      </Wrapper>
      <InputComponent placeholder="Nombre" type="text"/>
      <InputComponent placeholder="Password" type="password"/>
      <InputComponent placeholder="Email" type="email"/>
    </Wrapper>
  );
}

export default App;
