import styled from 'styled-components/native';

export const MainScreenLayout = styled.View`
  background: #141414
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%
`

export const RowBreakupLayout = styled.View`
height:50px;
align-items:center;
margin-bottom:20px;
margin-top:20px;
`

export const StyledText = styled.Text`
display:flex;
font-style: normal;
font-weight: normal;
font-size: 14px;
color: #FAFAFA;
align-items:center;
justify-content:center;
align-content:center;
font-family: Rubik-Regular;
`

export const ImageFilled = styled.ImageBackground`
display:flex;
justify-content:center;
flex-direction:row;
height: 52px;
width: 312px;
border-radius: 24px;
`
