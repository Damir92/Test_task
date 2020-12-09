import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TableHead, TableRow, TableSortLabel, TableCell} from '@material-ui/core';

import {Columns} from '../../const';
import {getSortingType, getSortingDirection} from '../../store/selectors';
import {setSortDirection, setSortType} from '../../store/action';

const TableHeadComponent = (props) => {
  const {
    sortType,
    sortDirection,
    setSortingType,
    setSortingDirection,
  } = props;

  const handleSortClick = (type) => {
    if (type === sortType) {
      setSortingDirection(!sortDirection);
    } else {
      setSortingType(type);
    }
  };

  return (
    <TableHead>
      <TableRow>
        {Columns.map((item) => (
          <TableCell
            key={item.key}
            padding='none'
            align='center'
          >
            <TableSortLabel
              active={sortType === item.key}
              direction={sortDirection ? `asc` : `desc`}
              onClick={() => {
                handleSortClick(item.key);
              }}
            >
              {item.title}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

TableHeadComponent.propTypes = {
  sortType: PropTypes.string.isRequired,
  sortDirection: PropTypes.bool.isRequired,
  setSortingType: PropTypes.func.isRequired,
  setSortingDirection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: getSortingType(state),
  sortDirection: getSortingDirection(state),
});

const mapDispatchToProps = (dispatch) => ({
  setSortingType: (type) => dispatch(setSortType(type)),
  setSortingDirection: (direction) => dispatch(setSortDirection(direction)),
});

export {TableHeadComponent};
export default connect(mapStateToProps, mapDispatchToProps)(TableHeadComponent);
