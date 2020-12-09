import React from 'react';
import {shallow} from 'enzyme';

import {TableBodyComponent} from './tablebody-component';

const users = [
  {
    id: `1`,
    firstName: `userName-1`,
    lastName: `userLastName-1`,
    group: ``,
  },
  {
    id: `2`,
    firstName: `userName-2`,
    lastName: `userLastName-2`,
    group: `user`,
  }
];

describe(`TableBody component`, () => {
  it(`TableBodyComponent snapshot`, () => {
    const tree = shallow(
        <TableBodyComponent
          users={users}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
