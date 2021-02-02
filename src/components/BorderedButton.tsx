import '../css/akaPosseFont.css';

import {
  Box,
  Button as MuiButton,
  ButtonProps,
  styled,
} from '@material-ui/core';
import React from 'react';

import BorderedButtonLeftOrnament from './BorderedButtonLeftOrnament';
import BorderedButtonRightOrnament from './BorderedButtonRightOrnament';

const Button = styled(MuiButton)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  fontSize: theme.typography.h6.fontSize,
  boxShadow: theme.shadows[24],
  padding: theme.spacing(1),
  '& .MuiButton-label': {
    height: '100%',
  },
}));

const InnerBorderBox = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100%',
  border: `${theme.spacing(0.25)}px solid`,
  borderImage: `linear-gradient(-135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
  position: 'relative',
}));

const BorderedButton: React.FC<
  ButtonProps & Record<'ornamentPosition', 'left' | 'right'>
> = props => {
  const { children, ornamentPosition, ...rest } = props;
  return (
    <Button {...rest}>
      <InnerBorderBox className="use-custom-font">
        {ornamentPosition === 'left' ? (
          <BorderedButtonLeftOrnament />
        ) : (
          <BorderedButtonRightOrnament />
        )}

        <Box
          // py={2}
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="center"
        >
          {children}
        </Box>
      </InnerBorderBox>
    </Button>
  );
};

export default BorderedButton;
