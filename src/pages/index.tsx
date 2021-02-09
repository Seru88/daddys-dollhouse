import {
  Box,
  Container,
  createStyles,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';

import MainHero from '../components/banners/MainHero';
import BorderedBox from '../components/BorderedBox';
import BorderedBoxOrnament from '../components/BorderedBoxOrnament';
import BorderedButton from '../components/BorderedButton';
import Copyright from '../components/Copyright';
import PageContext from '../PageContext';

const useStyles = makeStyles(theme =>
  createStyles({
    primary: {
      color: theme.palette.primary.main,
    },
    mid: {
      [theme.breakpoints.down('md')]: {
        order: -1,
      },
    },
    summary: {
      lineHeight: 1.2,
      marginLeft: 'auto',
      marginRight: 'auto',
      maxWidth: 325,
    },
    mature: {
      color: theme.palette.error.light,
    },
    enterBtn: {
      width: '90%',
      margin: '0 auto',
      textAlign: 'center',
      fontSize: 42,
    },
    routeBtn: {
      width: '88%',
      height: 70,
    },
    bottomSpacing: {
      marginBottom: theme.spacing(2),
    },
  })
);

const IndexPage = () => {
  const classes = useStyles();
  const setPageTitle = React.useContext(PageContext);
  React.useEffect(() => {
    setPageTitle('Home');
  }, []);
  return (
    <Container maxWidth="lg">
      <MainHero />
      <Typography variant="h4" align="center" gutterBottom>
        WELCOME TO <span className={classes.primary}>DADDY'S DOLLHOUSE</span>
      </Typography>
      <Box width="100%" p={3} pb={8}>
        <Grid container spacing={4} justify="center">
          <Grid className={classes.bottomSpacing} item xs={12} lg={3}>
            <BorderedBox height={330} position="relative">
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
                  className={classes.routeBtn}
                  title="About Us"
                  ornamentPosition="left"
                  to="/about"
                >
                  About Us
                </BorderedButton>
                <BorderedButton
                  className={classes.routeBtn}
                  to="/rules"
                  title="Community Rules"
                  ornamentPosition="right"
                >
                  Community Rules
                </BorderedButton>
                <BorderedButton
                  className={classes.routeBtn}
                  title="Helpful links"
                  ornamentPosition="left"
                  disabled
                >
                  Helpful Links
                </BorderedButton>
              </Box>
            </BorderedBox>
          </Grid>
          <Grid
            className={classes.bottomSpacing + ' ' + classes.mid}
            item
            xs={12}
            lg={5}
          >
            <Box
              p={1}
              display="flex"
              flexDirection="column"
              justifyContent="space-evenly"
              height={330}
              width="100%"
            >
              <Typography
                className={classes.summary}
                variant="h5"
                align="center"
                gutterBottom
              >
                <span className={classes.primary}>DADDY'S DOLLHOUSE</span> IS AN{' '}
                <br></br>
                <span className={classes.mature}>ADULTS ONLY</span> FORUM
                DEDICATED TO THE JUDGE-FREE DISCUSSION OF{' '}
                <span className={classes.primary}>GIANT MEN</span> &amp;{' '}
                <span className={classes.primary}>tiny women</span>
              </Typography>
              <BorderedButton
                className={classes.enterBtn}
                href="https://forum.daddysdollhouse.org"
                title="Enter Forum"
                ornamentPosition="left"
              >
                Enter Forum
              </BorderedButton>
            </Box>
          </Grid>
          <Grid className={classes.bottomSpacing} item xs={12} lg={3}>
            <BorderedBox height={330} position="relative">
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
                  className={classes.routeBtn}
                  to="/resources"
                  title="Kink Resources"
                  ornamentPosition="left"
                >
                  Kink Resources
                </BorderedButton>
                <BorderedButton
                  className={classes.routeBtn}
                  title="Get Involved"
                  ornamentPosition="right"
                  disabled
                >
                  Get Involved
                </BorderedButton>
                <BorderedButton
                  className={classes.routeBtn}
                  title="Dictionary"
                  ornamentPosition="left"
                  disabled
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
};

export default IndexPage;
