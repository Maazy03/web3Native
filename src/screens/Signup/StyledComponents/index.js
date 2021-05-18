import styled from 'styled-components/native';

export const MainScreenLayout = styled.View`
  background: #141414
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100%
  position: relative;
`;

export const RowBreakupLayout = styled.View`
  width: 312px;
  margin-bottom: ${props => (props.mgBottom ? props.mgBottom : '0')}px;
  position: absolute;
  top: ${props => props.top}px;
`;

export const GoogleLoginView = styled.TouchableOpacity`
  width: 312px;
  margin-bottom: ${props => (props.mgBottom ? props.mgBottom : '0')}px;
  position: absolute;
  top: ${props => props.top}px;
  flex:1;
`;

export const BackView = styled(RowBreakupLayout)`
  left: 24px;
`;

export const LoginWithGoogleView = styled(RowBreakupLayout)`
  height: 52px;
`