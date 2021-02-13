import {
  Container,
  Box,
  Link,
  Typography,
  Divider,
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import React from 'react';
import DictionaryHero from '../components/banners/DictionaryHero';
import PageContext from '../PageContext';
import { Link as GatsbyLink } from 'gatsby';
import SubMessage from '../components/SubMessage';
import tagsInfo from '../tags.json';
import Copyright from '../components/Copyright';

const useStyles = makeStyles(theme =>
  createStyles({
    tagName: {
      fontWeight: theme.typography.fontWeightBold,
      display: 'block',
      color: theme.palette.primary.main,
    },
    tagDef: {
      width: '80%',
    },
    item: {
      display: 'flex',
      width: '100%',
      // justifyContent: 'space-between',
    },
  })
);

const Dictionary: React.FC = () => {
  const setPageTitle = React.useContext(PageContext);
  const classes = useStyles();

  React.useEffect(() => {
    setPageTitle('Dictionary');
  }, []);

  return (
    <Container maxWidth="lg">
      <DictionaryHero />
      <Box ml={2} mb={2}>
        <Link component={GatsbyLink} to="/">
          HOME
        </Link>{' '}
        / DICTIONARY
      </Box>
      <Typography color="primary" variant="h4" align="center" gutterBottom>
        DICTIONARY
      </Typography>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <SubMessage
          // variant="h6"
          align="center"
          paragraph
        >
          Gather ‘round the backyard for a discussion on common lingo in the
          community! Below you’ll find our forum tag list with definitions and
          related vernacular.
        </SubMessage>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3} pb={10}>
        <Grid container spacing={4} alignItems="center">
          {tagsInfo.tags.map(tag => (
            <React.Fragment>
              <Grid item xs={12} md={2}>
                <Link href={tag.link}>
                  <Typography
                    className={classes.tagName}
                    variant="h6"
                    component="p"
                  >
                    {tag.name}
                  </Typography>
                </Link>
              </Grid>
              <Grid item xs={12} md={9}>
                <Typography>{tag.definition}</Typography>
                {tag.alt !== '' && (
                  <Typography variant="body2">{tag.alt}</Typography>
                )}
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
      {/* <Divider variant="middle" /> */}
      <Copyright />
    </Container>
  );
};

export default Dictionary;
