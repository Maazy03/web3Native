import React, {useEffect, useRef, useState} from 'react';

import {
  Wrapper,
  RowView,
  ButtonView,
  BtnView,
  HeroImageView,
} from './StyledComponents';

import {Button} from '../../components/Buttons';

import OVOLogo from '../../assets/images/OVOlogo.svg';
import HeroImage from '../../assets/images/heroImage.svg';
import {Animated} from 'react-native';

export default AuthenticationOptions = ({navigation}) => {
  const [activated, setActivated] = useState(false);
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const [showRest, setShowRest] = useState(false);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true, // Add This line
    }).start();
  }, [fadeAnim]);

  const [logoAnimation, setLogoAnimation] = useState(new Animated.Value(0));

  const startAnimation = () => {
    setActivated(!activated);

    Animated.timing(logoAnimation, {
      toValue: activated ? 0 : -176,
      duration: 1200,
      useNativeDriver: true, // Add This line
    }).start();

    setTimeout(() => {
      setShowRest(true);
    }, 50);
  };

  const animatedStyles = {
    logoAnimator: {
      transform: [
        {
          translateY: logoAnimation,
        },
      ],
    },
  };

  useEffect(() => {
    setTimeout(() => {
      startAnimation();
    }, 2000);
  }, []);

  const handleNavigation = route => {
    navigation.navigate(route);
  };

  return (
    <Wrapper>
      <RowView top={261}>
      <Animated.View style={[animatedStyles.logoAnimator]} >
        <OVOLogo />
        </Animated.View>
      </RowView>
      <Animated.View // Special animatable View
        style={{
          opacity: fadeAnim, // Bind opacity to animated value
          position: 'absolute',
          top: 266,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {showRest && (
          <>
            <HeroImageView>
              <HeroImage />
            </HeroImageView>

            <BtnView>
              <ButtonView>
                <Button
                  children="Create a new wallet"
                  onPressFunc={handleNavigation}
                  screenToNavigate="Signup"
                />
              </ButtonView>
              <ButtonView>
                <Button
                  children="I already have a wallet"
                  onPressFunc={handleNavigation}
                  screenToNavigate="Login"
                />
              </ButtonView>
            </BtnView>
          </>
        )}
      </Animated.View>
    </Wrapper>
  );
};
