import styled from 'styled-components/native';

export const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledMainHeading = styled.Text`
font-family: Rubik-Bold;
font-size: 32px;
font-style: normal;
font-weight: 500;
line-height: 42px;
letter-spacing: 1px;
text-align: center;
color: #2FEAC6;
height:50px
marginTop:10px
`;

export const StyledSubHeading = styled.Text`
  font-family: Rubik-Regular;
  font-size: 20px;
  font-style: normal;
  font-weight: normal;
  line-height: 31px;
  letter-spacing: 1px;
  text-align: center;
  color: #fafafa;
  height: 100px;
`;
