import { Typography } from '@material-ui/core';
import React from 'react';

const Copyright: React.FC = props => {
  return (
    <Typography variant="caption" align="center" paragraph color="primary">
      Copyright &copy; {new Date().getFullYear()} DaddysDollhouse.org. All Rights Reserved.
    </Typography>
  );
};

export default Copyright;
