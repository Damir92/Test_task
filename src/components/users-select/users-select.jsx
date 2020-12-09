import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {FormControl, InputLabel, Select, MenuItem, makeStyles} from '@material-ui/core';

import {getUserGroups, getGroup} from '../../store/selectors';
import {setGroup} from '../../store/action';

const useStyles = makeStyles((theme) => ({
  formControl: {
    display: `flex`,
    justifyContent: `center`,
    marginTop: 50,
    marginBottom: 50,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const UsersSelect = ({groups, activeGroup, onGroupChange}) => {
  const classes = useStyles();

  const handleChange = (evt) => {
    onGroupChange(evt.target.value);
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel id="demo-simple-select-label">Group</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeGroup}
        onChange={handleChange}
      >
        <MenuItem value=''>None</MenuItem>
        {groups.map((item) => (
          <MenuItem key={item} value={item} name="group">{item}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

UsersSelect.propTypes = {
  groups: PropTypes.arrayOf(PropTypes.string).isRequired,
  activeGroup: PropTypes.string.isRequired,
  onGroupChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  groups: getUserGroups(state),
  activeGroup: getGroup(state),
});

const mapDispatchToProps = (dispatch) => ({
  onGroupChange: (data) => dispatch(setGroup(data)),
});

export {UsersSelect};
export default connect(mapStateToProps, mapDispatchToProps)(UsersSelect);
