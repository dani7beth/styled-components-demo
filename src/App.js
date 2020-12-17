import './App.css';
import {  Segment } from 'semantic-ui-react';
import styled from 'styled-components';
import { HeaderText } from './styled/HeaderText';
import Github from './Github';

function App() {
  return (
   <AppContainer>
     <Segment as={Trasnparent}>
       <HeaderText fsize={"large"}>
         My Portfolio
       </HeaderText>
     </Segment>
     <Segment as={Trasnparent}>
       <HeaderText fsize={"medium"}>My Projects</HeaderText>
       <Github />
     </Segment>
     <Segment as={Trasnparent}>
       <HeaderText>About</HeaderText>
     </Segment>
   </AppContainer>
  );
}



const AppContainer = styled.div`
  background: linear-gradient(to bottom right, white, black);
  min-height: 100vh;
`;

const Trasnparent = styled.div`
  background: transparent !important;
`;

export default App;
