import styled from 'styled-components/native';

export const StyledView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledText = styled.Text`
  display: flex;
  width: 100%;
  color: #fafafa;
  justify-content: center;
  align-content: center;
  align-items: center;
  text-align: center;
  font-family: Rubik-Regular;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
`;

export const ButtonFilled = styled.ImageBackground`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 100%;
  width: 100%;
  border-radius: 24px;
  align-items: center;
  border: 3px solid purple;
`;

export const GoogleStyledText = styled.Text`
  display: flex;
  margin-left: 15px;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  color: #fafafa;
  align-items: center;
  justify-content: center;
  align-content: center;
  font-family: Rubik-Regular;
  color: #141414;
  position:absolute;
  left: 95px;
`;

export const BtnSvgAndTextView = styled.View`
  position: relative;
  border: 3px solid green;
`
