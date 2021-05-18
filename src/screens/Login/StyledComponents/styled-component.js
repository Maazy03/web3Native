import styled from 'styled-components/native';

export const MainScreenLayout = styled.View`
  background: #141414
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  position: relative
`;

export const StyledMainHeading2 = styled.Text`
  font-family: Jost;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 42px;
  letter-spacing: 1px;
  text-align: center;
  color: #2feac6;
  height: 50px;
  margintop: 10px;
`;

export const StyledSubHeading2 = styled.Text`
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 1px;
  text-align: center;
  color: #fafafa;
  height: 100px;
`;

export const RowBreakupLayout = styled.View`
  height: 52px;
  width: 312px;
  position: absolute;
  top: ${props => props.top}px;
`;

export const ContinueBtnView = styled.View`
  height: 52px;
  width: 312px;
  position: absolute;
  bottom: ${props => props.bottom}px;
`;

export const OrRowBreakupLayout = styled.View`
  height: 35px;
  width: 312px;
  position: absolute;
  justify-content: center;
  top: 314px;
`;

export const StyledMainHeading = styled.Text`
font-family:"Metrophobic";
font-size: 32px;
font-style: normal;
font-weight: 600;
line-height: 32px;
letter-spacing: 1px;
text-align: center;
color: #2FEAC6;
height:50px
marginTop:10px
`;
export const StyledSubHeading = styled.Text`
  font-family: 'Jost';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  letter-spacing: 1px;
  text-align: center;
  color: #fafafa;
  height: 100px;
`;

export const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  text-align: center;
  margin-top: 0px;
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: Jost;
`;
export const TextInputField = styled.TextInput`
position:relative;
background: rgba(255, 255, 255, 0.1);
border-radius: 16px;
border-width:1px;
border-color: #C4C4C4;
color: rgb(255,255,255),
padding-right:100px

`;

export const TextPlaceholderImage = styled.Image`
  position: absolute;
  right: 24px;
  top: 20px;
`;

export const ButtonFilled = styled.ImageBackground`
  display: flex;
  justify-content: center;
  flex-direction: row;
<<<<<<< Updated upstream
  height: 52px;
  width: 312px;
=======
  height: 100%;
  width: 100%;
>>>>>>> Stashed changes
  border-radius: 24px;
`;

export const BackView = styled.View`
  width: 300px;
  margin-bottom: ${props => (props.mgBottom ? props.mgBottom : '0')}px;
  position: absolute;
  top: ${props => props.top}px;
  left: 24px;
`;
