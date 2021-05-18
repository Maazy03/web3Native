import React from 'react';
import {
  StyledView,
  StyledText,
  ButtonFilled,
  GoogleStyledText,
  BtnSvgAndTextView,
} from './styled-component';
import {TouchableHighlight, TouchableOpacity, View, Text, TouchableHighlightBase} from 'react-native';
import GoogleLogo from '../../assets/images/googleLogo2.svg';
import FilledBtn from '../../assets/images/filledBtn.svg'
import UnFilledBtn from '../../assets/images/unFilledBtn.svg'
import BtnWhiteBg from '../../assets/images/BtnWhite.svg'

export const Button = ({children, onPressFunc, screenToNavigate}) => {
  const [isPress, setIsPress] = React.useState(false);

  const touchProps = {
    activeOpacity: 1,
    onPressOut: () => setIsPress(false),
    onPressIn: () => setIsPress(true),
    onPress: () => (onPressFunc ? onPressFunc(screenToNavigate) : console.log('HELLO')), // <-- "onPress" is apparently required
  };

  return (
    <TouchableOpacity {...touchProps}>
      <StyledView>
          {
            !isPress ? <FilledBtn width="362" style={{position: "absolute"}} /> : <UnFilledBtn width="362" style={{position: "absolute"}} />
          }
          <StyledText>{children}</StyledText>         
      </StyledView>
    </TouchableOpacity>
  );
};

export const GoogleButton = ({children, onPressFunc}) => {
  return (
    <TouchableOpacity onPress={()=>onPressFunc ? onPressFunc() : console.log("Hello")}>
      <StyledView>
        <BtnWhiteBg />
        <GoogleLogo style={{position:"absolute",left:75}} />
        <GoogleStyledText>{children}</GoogleStyledText>
      </StyledView>
      </TouchableOpacity>
  );
};
