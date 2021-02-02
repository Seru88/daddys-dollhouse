import { Box, BoxProps, styled } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

const Border = styled(Box)(({ theme }) => ({
  // border: `${theme.spacing(0.25)}px solid ${theme.palette.primary.main}`
  border: `${theme.spacing(.4)}px solid`,
  borderImage: `linear-gradient(-135deg, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
}));

const BorderedBox: React.FC<BoxProps> = props => {
  const border = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "container_info.png" }) {
        childImageSharp {
          fluid(maxWidth: 350) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = border.placeholderImage.childImageSharp.fluid;

  return (
    <Border>
      <Box
        {...props}
        style={{
          border: '5px solid transparent',
          borderImage: `url(${
            (imgData as FluidObject).src
          }) 50 / 50px repeat`,
        }}
      />
    </Border>
  );
};

export default BorderedBox;
