import { Box, Button, Container, Grid, Typography } from '@material-ui/core';
import React from 'react';

import HomePageHero from '../components/banners/HomePageHero';
import BorderedBox from '../components/BorderedBox';
import BorderedBoxOrnament from '../components/BorderedBoxOrnament';
import BorderedButton from '../components/BorderedButton';
import Copyright from '../components/Copyright';

const IndexPage = () => (
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
                // py={4}
                px={4}
                width="100%"
                height={154}
                // display="flex"
                // flexDirection="column"
                // justifyContent="flex-end"
                // alignItems="center"
              >
                <Grid container >
                  <Grid item xs={6}></Grid>
                  <Grid item xs={6}>
                    <Typography
                      align="center"
                      style={{ lineHeight: 1.2, margin: '12px 0' }}
                    >
                      DADDY'S DOLLHOUSE IS AN ADULT ONLY FORUM DEDICATED TO THE
                      JUDGE-FREE DISCUSSION OF GIANT MEN &amp; tiny women
                    </Typography>
                    <Button fullWidth style={{fontSize: 24}}>Enter</Button>
                  </Grid>
                </Grid>
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
);

export default IndexPage;
