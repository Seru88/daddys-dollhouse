import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';

import BorderedBox from '../components/BorderedBox';
import BorderedButton from '../components/BorderedButton';
import HomePageHero from '../components/banners/HomePageHero';
import BorderedBoxOrnament from '../components/BorderedBoxOrnament';
import BackgroundImage from 'gatsby-background-image';
import { graphql, useStaticQuery } from 'gatsby';
import { FluidObject } from 'gatsby-image';
import Copyright from '../components/Copyright';

const IndexPage = () => {
  const bgImage = useStaticQuery<{
    placeholderImage?: {
      childImageSharp?: { fluid: FluidObject | FluidObject[] };
    };
  }>(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "BG_tile.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  const dataImg = bgImage.placeholderImage.childImageSharp.fluid;

  return (
    <BackgroundImage
      // Tag="span"
      fluid={dataImg}
      // role="image"
      preserveStackingContext
      style={{
        // width: '100vw',
        // minHeight: '100vh',
        backgroundPosition: 'top left',
        backgroundRepeat: 'repeat',
        backgroundSize: 10,
        // padding: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="lg">
        <HomePageHero />
        <Box width="100%" p={3} my={4}>
          <Grid container spacing={2} justify="space-around">
            <Grid item xs={12} lg={3}>
              <BorderedBox height={325} position="relative">
                <BorderedBoxOrnament />
                <Box
                  py={2}
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <BorderedButton
                    title="About Us"
                    ornamentPosition="left"
                    style={{ width: '88%', height: 70 }}
                  >
                    About Us
                  </BorderedButton>
                  <BorderedButton
                    title="Community Rules"
                    ornamentPosition="right"
                    style={{ width: '88%', height: 70 }}
                  >
                    Community Rules
                  </BorderedButton>
                  <BorderedButton
                    title="Helpful links"
                    ornamentPosition="left"
                    style={{ width: '88%', height: 70 }}
                  >
                    Helpful Links
                  </BorderedButton>
                </Box>
              </BorderedBox>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <BorderedBox
                    py={4}
                    width="100%"
                    height={154}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    Enter
                  </BorderedBox>
                </Grid>
                <Grid item xs={12}>
                  <BorderedBox
                    py={4}
                    width="100%"
                    height={154}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                  >
                    Other info
                  </BorderedBox>
                </Grid>
                <Grid item xs={12}></Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} lg={3}>
              <BorderedBox height={325} position="relative">
                <BorderedBoxOrnament />
                <Box
                  py={2}
                  width="100%"
                  height="100%"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                  alignItems="center"
                >
                  <BorderedButton
                    title="Kink Resources"
                    ornamentPosition="left"
                    style={{ width: '88%', height: 65 }}
                  >
                    Kink Resources
                  </BorderedButton>
                  <BorderedButton
                    title="Get Involved"
                    ornamentPosition="right"
                    style={{ width: '88%', height: 65 }}
                  >
                    Get Involved
                  </BorderedButton>
                  <BorderedButton
                    title="Dictionary"
                    ornamentPosition="left"
                    style={{ width: '88%', height: 65 }}
                  >
                    Dictionary
                  </BorderedButton>
                </Box>
              </BorderedBox>
            </Grid>
          </Grid>
        </Box>
        <Copyright />
      </Container>
    </BackgroundImage>
  );
};

export default IndexPage;
