import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import HeroImg from './HeroImg';

const ResourcesHero: React.FC = () => {
  const resourecesBanner = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero_kink_resources.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = resourecesBanner.placeholderImage.childImageSharp.fluid;

  return (
    <HeroImg
      title="Kink Resources Page"
      alt="kink resources banner"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default ResourcesHero;
