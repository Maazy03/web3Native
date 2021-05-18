import React, {Children} from 'react';
import {
  StyledView,
  StyledMainHeading,
  StyledSubHeading,
} from './styled-component';

export const MainHeading = ({children}) => {
  return (
    <>
      <StyledView>
        <StyledMainHeading>{children}</StyledMainHeading>
      </StyledView>
    </>
  );
};
export const SubHeading = ({children}) => {
  return (
    <>
      <StyledView>
        <StyledSubHeading>{children}</StyledSubHeading>
      </StyledView>
    </>
  );
};
