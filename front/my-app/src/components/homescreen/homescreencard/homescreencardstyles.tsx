import styled from 'styled-components';

export const HomeScreenCard = styled.section`
display:flex;
justify-content:space-between;

@media (max-width: 800px) {
display: flex;
flex-direction: column;
justify-content:space-between;
}
`;
export const SectionOne = styled.section`
height:225px;
width:350px;

@media (max-width: 800px) {
height:400px
}
`;
export const SectionTwo = styled.div`
height:225px;
width:350px;

@media (max-width: 800px) {
height:400px
}
`;
export const SectionThree = styled.section`
height:225px;
width:350px;

@media (max-width: 800px) {
height:400px
}
`;

export const ChartContainerOne = styled.div`
width: 250px;
display:flex;
margin-bottom:-7%;

 @media (max-width: 800px) {
 padding:0px;
 margin:0px;
}

`;

export const WindowChartOne = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 250px;
padding-left:25px;
padding-right:2%;
padding-bottom:2%;

background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
&:hover{
transform: scale(1.1); 
}    

`;

export const LabelWindowContainerOne = styled.img`
width:25px;
padding:0;
opacity: 0;

  ${WindowChartOne}:hover & {
    opacity: 1;
  }
`;

export const BoxDescription =styled.div``;

export const IllustrationCardPeople = styled.img`
width:200px;

  ${WindowChartOne}:hover & {
    filter: blur(4px);
}
`;

export const ChartContainerTwo = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 250px;
margin-bottom:-7%;

 @media (max-width: 800px) {
 padding:0px;
 margin:0px;
}

`;

export const ChartContainerThree = styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 250px;
margin-bottom:-7%;

 @media (max-width: 800px) {
 padding:0px;
 margin:0px;
}

`;

export const WindowChartTwo =styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 250px;
padding-left:25px;
padding-right:2%;
padding-bottom:2%;

background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
&:hover{
transform: scale(1.1); 
}  
`;

export const WindowChartThree =styled.div`
display:flex;
justify-content:center;
flex-direction: column;
align-items: center;
width: 250px;
padding-left:25px;
padding-right:2%;
padding-bottom:2%;

background-color: #fff;
border-radius: 10px;
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
&:hover{
transform: scale(1.1); 
}  
`;

export const LabelWindowContainerTwo =styled.img`
width:25px;
padding:0;
opacity: 0;

  ${WindowChartTwo}:hover & {
    opacity: 1;
    cursor:pointer;
  }
`;

export const LabelWindowContainerThree =styled.img`
width:25px;
padding:0;
opacity: 0;

  ${WindowChartThree}:hover & {
    opacity: 1;
    cursor:pointer;
  }
`;

export const IllustrationCardAddress = styled.img`
width:200px;

${WindowChartTwo}:hover & {
    filter: blur(4px);
}

`;

export const IllustrationCardAdd = styled.img`
width:145px;

${WindowChartThree}:hover & {
    filter: blur(4px);
}

`;

export const Dropdown = styled.div`
  position: absolute;
  top: 40px;
  right: 10px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
  display: flex;
  flex-direction: column;
`;

export const DropdownOptionList = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const DropdownOptionConfig = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;
export const DropdownOptionAdd = styled.div`
  padding: 10px;
  cursor: pointer;
  color: #333;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;