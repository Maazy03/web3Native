import 'react-native';
import React from 'react';
import AuthenticationOptions from './index';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders AuthenticationOptions Component correctly', () => {
  renderer.create(<AuthenticationOptions />);
  const tree = renderer.create(<AuthenticationOptions />).toJSON();

  expect(tree).toMatchSnapshot();
});
