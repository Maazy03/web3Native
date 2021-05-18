import React from 'react';
import {MainScreenLayout, RowBreakupLayout, BackView, GoogleLoginView} from './StyledComponents';
import {MainHeading, SubHeading} from '../../components/Headings';
import {GoogleButton} from '../../components/Buttons';
import Back from '../../assets/images/back.svg';
import {TouchableOpacity, View} from 'react-native';

export default Signup = ({navigation}) => {

  const handleNavigation = () => {
    navigation.navigate("SignupName");
  };

  return (
    <>
      <MainScreenLayout>
        <BackView top={56}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        </BackView>

        <RowBreakupLayout top={216}>
          <MainHeading children="Great Choice!" />
        </RowBreakupLayout>

        <RowBreakupLayout top={267}>
          <SubHeading
            children={`Now, let’s register using your google account`}
          />
        </RowBreakupLayout>

        <GoogleLoginView top={400}>
          <GoogleButton children="Register with Google" onPressFunc={handleNavigation} />
        </GoogleLoginView>

      </MainScreenLayout>
    </>
  );
};
