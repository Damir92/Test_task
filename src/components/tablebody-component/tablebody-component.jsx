import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {makeStyles} from '@material-ui/core';

import {Columns} from '../../const';
import {getSortedUsers} from '../../store/selectors';

const useStyles = makeStyles(() => ({
  row: {
    borderBottom: `1px solid lightgray`,
  },
  cell: {
    padding: `3px 5px`,
    textAlign: `center`,
  },
}));

const TableBodyComponent = ({users}) => {
  const classes = useStyles();

  return (
    <tbody>
      {users.map((row, index) => (
        <tr
          key={`${row.id}-${index}`}
          className={classes.row}
        >
          {Columns.map((item) => (
            <td
              key={item.key}
              className={classes.cell}
            >
              {row[item.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

TableBodyComponent.propTypes = {
  users: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        group: PropTypes.string,
      }).isRequired,
  ),
};

const mapStateToProps = (state) => ({
  users: getSortedUsers(state),
});

export {TableBodyComponent};
export default connect(mapStateToProps)(TableBodyComponent);
