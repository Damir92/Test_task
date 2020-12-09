import React from 'react';
import {shallow} from 'enzyme';

import WelcomePage from './welcome-page';

const history = {
  push: () => {},
};

describe(`WelcomePage component`, () => {
  it(`WelcomePage snapshot`, () => {
    const tree = shallow(
        <WelcomePage
          history={history}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
