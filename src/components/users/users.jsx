import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {TableContainer, Table, Paper, Container, Backdrop, CircularProgress, makeStyles} from '@material-ui/core';

import {fetchUsers} from '../../store/api-actions';
import {getLoading, getUpdate} from '../../store/selectors';

import UsersSelect from '../users-select/users-select';
import NewUser from '../new-user/new-user';
import TableHeadComponent from '../tablehead-component/tablehead-component';
import TableBodyComponent from '../tablebody-component/tablebody-component';

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: `#fff`,
  },
  top: {
    display: `grid`,
    gridTemplateColumns: `4fr 3fr`,
    gap: `20px`,
    alignItems: `center`,
  },
}));

const Users = ({loading, update, onLoad}) => {
  const classes = useStyles();

  useEffect(() => {
    if (update) {
      onLoad();
    }
  }, [update]);

  if (loading) {
    return (
      <Backdrop
        open={loading}
      >
        <CircularProgress />
      </Backdrop>
    );
  }

  return (
    <Container>

      <div className={classes.top}>
        <UsersSelect />

        <NewUser />
      </div>

      <TableContainer component={Paper}>
        <Table size="small">

          <TableHeadComponent />

          <TableBodyComponent />

        </Table>
      </TableContainer>
    </Container>
  );
};

Users.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLoad: PropTypes.func.isRequired,
  update: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  loading: getLoading(state),
  update: getUpdate(state),
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => dispatch(fetchUsers()),
});

export {Users};
export default connect(mapStateToProps, mapDispatchToProps)(Users);
