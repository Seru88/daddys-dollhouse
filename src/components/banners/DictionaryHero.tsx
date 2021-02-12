import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import HeroImg from './HeroImg';

const DictionaryHero: React.FC = () => {
  const aboutBanner = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero_kink_dictionairy.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = aboutBanner.placeholderImage.childImageSharp.fluid;

  return (
    <HeroImg
      title="About Us Page"
      alt="about us banner"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default DictionaryHero;
