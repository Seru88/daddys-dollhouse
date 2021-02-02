import {
  Box,
  BoxProps,
  Button as MuiButton,
  ButtonProps,
  styled,
} from '@material-ui/core';
import React from 'react';

import '../css/akaPosseFont.css';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

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
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: `${theme.spacing(0.25)}px solid`,
  borderImage: `linear-gradient(-135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
}));

const BorderedButtonLeftOrnament: React.FC = props => {
  const ornament = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ic_decoration_left.png" }) {
        childImageSharp {
          fluid(maxWidth: 126) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = ornament.placeholderImage.childImageSharp.fluid;

  return (
    <Img
      imgStyle={{ width: 30, height: 'auto' }}
      fluid={imgData}
      style={{
        height: 'auto',
        width: 30,
        position: 'absolute',
        top: 0,
        left: 0,
        // right: 0,
        margin: '0 auto',
        textAlign: 'center',
        overflow: 'visible',
      }}
    />
  );
};

export default BorderedButtonLeftOrnament;
