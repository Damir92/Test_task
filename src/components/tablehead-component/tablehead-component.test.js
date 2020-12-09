import React from 'react';
import {shallow} from 'enzyme';

import {TableHeadComponent} from './tablehead-component';

describe(`TableHead component`, () => {
  it(`TableHeadComponent snapshot`, () => {
    const tree = shallow(
        <TableHeadComponent
          sortType={``}
          sortDirection={true}
          setSortingType={() => {}}
          setSortingDirection={() => {}}
        />
    );

    expect(tree).toMatchSnapshot();
  });
});
