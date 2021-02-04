import { styled, Typography } from '@material-ui/core';

const SubMessage = styled(Typography)(({ theme }) => ({
  maxWidth: '80%',
  margin: theme.spacing(2, 'auto'),
}));

export default SubMessage;
