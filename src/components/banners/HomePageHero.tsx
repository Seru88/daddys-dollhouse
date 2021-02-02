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

const HomePageHero: React.FC = () => {
  const classes = useStyles();
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
    <Img
      className={classes.hero}
      title="Home Page Hero"
      alt="home page hero"
      imgStyle={{ width: '100%', height: 'auto' }}
      fluid={imgData}
    />
  );
};

export default HomePageHero;
