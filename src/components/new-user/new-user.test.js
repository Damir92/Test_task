import React from 'react';
import {shallow} from 'enzyme';

import {NewUser} from './new-user';

describe(`New user component`, () => {
  it(`NewUser snapshot`, () => {
    const tree = shallow(
        <NewUser
          onSubmit={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
