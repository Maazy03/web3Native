import React from 'react';
import {
  MainScreenLayout,
  RowBreakupLayout,
  StyledText,
  TextPlaceholderImage,
  TextInputField,
  OrRowBreakupLayout,
  BackView
} from './StyledComponents/styled-component';
import {MainHeading, SubHeading} from '../../components/Headings';
import {Button, GoogleButton} from '../../components/Buttons';
import Back from '../../assets/images/back.svg';
import Ovo from '../../assets/images/Ovo.png';
import { TouchableOpacity } from 'react-native';

export default Login = ({ navigation }) => {
  return (
    <>
      <MainScreenLayout>
        <BackView top={56}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        </BackView>

        <RowBreakupLayout top={131} >
          <MainHeading children="Welcome Back." />
        </RowBreakupLayout>

        <RowBreakupLayout top={195} >
          <SubHeading children={`Enter your ovo username`} />
        </RowBreakupLayout>

        <RowBreakupLayout top={261} >
          <TextInputField label="Email" maxLength={25} labelStyle={{color: 'white'}} />
          <TextPlaceholderImage source={Ovo} />
        </RowBreakupLayout>

        <OrRowBreakupLayout>
          <StyledText>or</StyledText>
        </OrRowBreakupLayout>

        <RowBreakupLayout top={356}>
          <GoogleButton children="Login with Google" />
        </RowBreakupLayout>

        <RowBreakupLayout top={495}>
          <Button children="Continue" />
        </RowBreakupLayout>
      </MainScreenLayout>
    </>
  );
};
