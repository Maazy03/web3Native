import styled from 'styled-components/native';

export const MainScreenLayout = styled.View`
  background: #141414
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  position: relative;
`;

export const BackView = styled.View`
  width: 300px;
  margin-bottom: ${props => (props.mgBottom ? props.mgBottom : '0')}px;
  position: absolute;
  top: ${props => props.top}px;
  left: 24px;
`;


export const RowBreakupLayout = styled.View`
  width: 312px;
  height: 50px;
  align-items: center;
  margin-bottom: 20px;
  margin-top: 20px;
  position: absolute;
  top: ${props => props.top}px;
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
  display: flex;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: 'Jost';
`;
export const AssetCard = styled.View`
height: 94px;
width: 312px;
border-radius: 16px;
background: #1E1E1E;
display:flex;
flex-direction:row;
justify-content:space-around;
align-content:center
align-items:center
`;
export const ImageFilled = styled.ImageBackground`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 52px;
  width: 312px;
  border-radius: 24px;
`;

export const TextInputField = styled.TextInput`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  border-width: 1px;
  border-color: #c4c4c4;
  color: rgb(255, 255, 255);
  padding-right: 100px;
  width: 100%;
`;

export const TextPlaceholderImage = styled.Text`
  position: absolute;
  right: 24px;
  top: 17px;
  font-family: Rubik;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;
  color: #fafafa;
  opacity: 0.4;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
