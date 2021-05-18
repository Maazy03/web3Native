import React from 'react';
import {
  MainScreenLayout,
  RowBreakupLayout,
  TextInputField,
  ButtonFieldView,
  TextPlaceholderImage,
  InputFieldView,
  BackView
} from './StyledComponents/styled-component';
import {SubHeading} from '../../components/Headings';
import {Button} from '../../components/Buttons';
import { TouchableOpacity } from 'react-native';
import Back from '../../assets/images/back.svg'


export default SignupName = ({ navigation }) => {

  const handleNavigation = () => {
    navigation.navigate("SignupSuccess");
  };

  return (
    <>
      <MainScreenLayout>
      <BackView top={56}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Back />
          </TouchableOpacity>
        </BackView>
        <RowBreakupLayout top={191}>
          <SubHeading
            children={`Let’s start by reserving your${'\n'} unique ethereum name `}
          />
        </RowBreakupLayout>

        <RowBreakupLayout top={305} >
          <TextInputField label="Email" labelStyle={{color: 'white'}} />
          <TextPlaceholderImage>.ovo.xyz</TextPlaceholderImage>
        </RowBreakupLayout>


        <RowBreakupLayout top={495} > 
          <Button children="Continue" onPressFunc={handleNavigation} />
        </RowBreakupLayout>
      </MainScreenLayout>
    </>
  );
};
