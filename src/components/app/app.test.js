import React from 'react';
import {shallow} from 'enzyme';

import App from './app';

describe(`App component`, () => {
  it(`App snapshot`, () => {
    const tree = shallow(
        <App />
    );

    expect(tree).toMatchSnapshot();
  });
});
