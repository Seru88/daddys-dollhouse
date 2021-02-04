import { styled } from '@material-ui/core';
import Img from 'gatsby-image';

const HeroImg = styled(Img)(({ theme }) => ({
  borderBottom: `${theme.spacing(0.4)}px solid`,
  borderImage: `linear-gradient(to left, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
  marginBottom: theme.spacing(4),
}));

export default HeroImg;
