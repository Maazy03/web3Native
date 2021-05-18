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

export const RowBreakupLayout = styled.View`
  height: 50px;
  width: 300px;
  position: absolute;
  top: ${props => props.top}px;
`;

export const ImageFilled = styled.ImageBackground`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: 52px;
  width: 312px;
  border-radius: 24px;
`;
