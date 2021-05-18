import 'react-native';
import React from 'react';
import Signup from './index';
 
 // Note: test renderer must be required after react-native.
 import renderer from 'react-test-renderer';
 
 it('renders correctly', () => {
   renderer.create(<Signup />);
   const tree = renderer.create( <Signup /> ).toJSON();
  
   expect(tree).toMatchSnapshot();
 });