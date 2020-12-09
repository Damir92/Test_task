import React from 'react';
import PropTypes from 'prop-types';
import {Box, CssBaseline, Link, makeStyles} from '@material-ui/core';

import {Routes} from '../../const';

const useStyles = makeStyles(() => ({
  box: {
    backgroundImage: `linear-gradient(310deg,#3c5052,#18191b)`,
    height: `100vh`,
    display: `flex`,
    alignItems: `center`,
    justifyContent: `center`,
  },
  link: {
    fontSize: `24px`,
    color: `white`,
  },
}));

const WelcomePage = ({history}) => {
  const classes = useStyles();

  const handleClickLink = () => {
    history.push(Routes.USERS);
  };

  return (
    <>
      <CssBaseline />
      <Box
        className={classes.box}
        component="div"
      >
        <Link
          className={classes.link}
          component="button"
          onClick={handleClickLink}
        >
          Show list
        </Link>
      </Box>
    </>
  );
};

WelcomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default WelcomePage;
