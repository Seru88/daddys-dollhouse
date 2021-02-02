import { BoxProps } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';

const BorderedBoxOrnament: React.FC<BoxProps> = props => {
  const heart = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "heart.png" }) {
        childImageSharp {
          fluid(maxWidth: 64) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = heart.placeholderImage.childImageSharp.fluid;

  return (
    <Img
      imgStyle={{ width: 64, height: 'auto' }}
      fluid={imgData}
      style={{
        height: 36.39,
        width: 64,
        position: 'absolute',
        top: -28,
        left: 0,
        right: 0,
        margin: '0 auto',
        textAlign: 'center',
        overflow: 'visible',
      }}
    />
  );
};

export default BorderedBoxOrnament;
