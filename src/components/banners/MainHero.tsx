import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import HeroImg from './HeroImg';

const MainHero: React.FC = () => {
  const homeBanner = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero_home.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = homeBanner.placeholderImage.childImageSharp.fluid;

  return (
    <HeroImg
      title="Home Page"
      alt="home page hero"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default MainHero;
