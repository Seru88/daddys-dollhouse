import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import React from 'react';

import HeroImg from './HeroImg';

const RulesHero: React.FC = () => {
  const rulesBanner = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "hero_community_rules.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const imgData = rulesBanner.placeholderImage.childImageSharp.fluid;

  return (
    <HeroImg
      title="Community Rules Page"
      alt="community rules banner"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default RulesHero;
