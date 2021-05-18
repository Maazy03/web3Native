import React from 'react';
import {
  MainScreenLayout,
  RowBreakupLayout,
  ImageFilled,
} from './styled-component';
import {MainHeading, SubHeading} from '../../components/Headings';
import {Button} from '../../components/Buttons';
import SuccessHeroImage from '../../assets/images/sucessLogo.svg';

export default Signup = () => {
  return (
    <>
      <MainScreenLayout>
        <RowBreakupLayout top={115}>
          <MainHeading children="Congratulations!" />
        </RowBreakupLayout>

        <RowBreakupLayout style={{height: 145, width: 89}} top={190}>
          <SuccessHeroImage />
        </RowBreakupLayout>

        <RowBreakupLayout top={360}>
          <SubHeading
            children={`Lorem ipsum dolor sit amet, ${'\n'} consectetur adipiscing elit.`}
          />
        </RowBreakupLayout>

        <RowBreakupLayout top={510}>
          <Button children="Continue" />
        </RowBreakupLayout>
      </MainScreenLayout>
    </>
  );
};
