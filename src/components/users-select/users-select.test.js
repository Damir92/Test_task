import React from 'react';
import {shallow} from 'enzyme';

import {UsersSelect} from './users-select';

const groups = [`user`, `admin`, `director`];


describe(`Users select component`, () => {
  it(`UsersSelect snapshot`, () => {
    const tree = shallow(
        <UsersSelect
          groups={groups}
          activeGroup={``}
          onGroupChange={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
