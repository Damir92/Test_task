import React from 'react';
import {shallow} from 'enzyme';

import {Users} from './users';

describe(`Users component`, () => {
  it(`Users snapshot without loading`, () => {
    const tree = shallow(
        <Users
          loading={false}
          onLoad={() => {}}
          update={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });

  it(`Users snapshot with loading`, () => {
    const tree = shallow(
        <Users
          loading={true}
          onLoad={() => {}}
          update={false}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
