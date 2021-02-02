import { Typography } from '@material-ui/core';
import React from 'react';

const Copyright: React.FC = () => {
  return (
    <Typography variant="subtitle2" align="center" paragraph color="primary">
      Copyright &copy; {new Date().getFullYear()} DaddysDollhouse.org. All
      Rights Reserved.
    </Typography>
  );
};

export default Copyright;
