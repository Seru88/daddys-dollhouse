import { createStyles, makeStyles } from '@material-ui/core';
import { graphql, useStaticQuery } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';
import React from 'react';

const useStyles = makeStyles(theme =>
  createStyles({
    hero: {
      borderBottom: `${theme.spacing(0.4)}px solid`,
      borderImage: `linear-gradient(to left, ${theme.palette.primary.light}, ${theme.palette.primary.dark}) 1`,
    },
  })
);

const RulesPageHero: React.FC = () => {
  const classes = useStyles();
  const homeBanner = useStaticQuery<{
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

  const imgData = homeBanner.placeholderImage.childImageSharp.fluid;

  return (
    <Img
      className={classes.hero}
      title="Community Rules Page"
      alt="community rules banner"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default RulesPageHero;
