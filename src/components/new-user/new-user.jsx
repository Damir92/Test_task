import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Button, Dialog, DialogTitle, DialogContent, TextField, makeStyles} from '@material-ui/core';

import {postNewUser} from '../../store/api-actions';

const useStyles = makeStyles(() => ({
  form: {
    display: `grid`,
    gridTemplateColumns: `1fr 1fr`,
    gap: `20px`,
  },
}));

const NewUser = ({onSubmit}) => {
  const classes = useStyles();

  const [showModal, setShowModal] = useState(false);

  const handleClickBtn = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit({
      firstName: evt.target.firstName.value,
      lastName: evt.target.lastName.value,
      group: evt.target.group.value,
    });
    setShowModal(false);
  };

  return (
    <>
      <Button
        variant='outlined'
        color='primary'
        onClick={handleClickBtn}
      >
        Add new user
      </Button>
      <Dialog
        open={showModal}
        onClose={handleClose}
      >
        <DialogTitle>
          Add data for new user
        </DialogTitle>
        <DialogContent>
          <form
            className={classes.form}
            onSubmit={handleSubmit}
          >
            <TextField
              required
              label="First name"
              name="firstName"
            />
            <TextField
              required
              label="Last name"
              name="lastName"
            />
            <TextField
              label="Group"
              name="group"
            />
            <Button
              type="submit"
              variant="outlined"
            >
              Send
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

NewUser.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (data) => dispatch(postNewUser(data)),
});

export {NewUser};
export default connect(null, mapDispatchToProps)(NewUser);
