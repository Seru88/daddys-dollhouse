import { createStyles, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    anchorBottom: {
      maxWidth: 500,
      position: 'absolute',
      bottom: theme.spacing(1),
      left: 0,
      right: 0,
      margin: '0 auto',
      fontFamily: "'Courier New', sans-serif",
    },
  })
);

const Copyright: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.anchorBottom}
      variant="caption"
      align="center"
      paragraph
      color="primary"
    >
      Copyright &copy; {new Date().getFullYear()} DaddysDollhouse.org. All
      Rights Reserved.
    </Typography>
  );
};

export default Copyright;
