import styled from 'styled-components';
const fontSize = (size) =>{
  switch(size){
    case "large":
      return "4rem";
    case "medium":
      return "3rem";
    case "small":
      return "2rem";
    default:
      return "1rem";
  };
};

export const HeaderText = styled.h1`
  font-size: ${(props)=> fontSize(props.fsize)} !important;
  color: white !important;
  text-align: center;
`;
