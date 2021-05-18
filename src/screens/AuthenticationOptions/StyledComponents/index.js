import styled from 'styled-components/native';

export const Wrapper = styled.View`
  background: #141414
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%;
  position: relative;
`;

export const RowView = styled.View`
  position: absolute;
  top: ${props => (props.top ? props.top : '0')}px;
`;

export const HeroImageView = styled.View`
  position: relative;
`;

export const BtnView = styled.View`

`;

export const ButtonView = styled.View`
  height: 52px;
  width: 312px;
  margin-bottom: 10px;
`
