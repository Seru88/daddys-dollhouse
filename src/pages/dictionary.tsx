import {
  Container,
  Box,
  Link,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import React from 'react';
import DictionaryHero from '../components/banners/DictionaryHero';
import PageContext from '../PageContext';
import { Link as GatsbyLink } from 'gatsby';
import SubMessage from '../components/SubMessage';

const useStyles = makeStyles(theme =>
  createStyles({
    tagName: {
      fontWeight: theme.typography.fontWeightBold,
      display: 'block',
      color: theme.palette.primary.main
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
      <Box width="100%" p={3}>
        <Grid container spacing={4}  alignItems="center">
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              2D Artwork:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Visual creations consisting of paintings, drawings, prints, and
              photographs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              3D Artwork:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Rendered, computer generated graphics made with 3D software.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Advertisement:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A community member promoting a product, service, event, or
              publicizing a job vacancy.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Anal:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is inserted into or used in a manner to pleasure a Giant’s
              anus.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Anal vore, Rimjob)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Comic:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              An often serialized story that consists of art in the form of
              sequential juxtaposed panels that represent individual scenes.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Graphic Novel, Comic Magazine, Manga)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Cock:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is inserted into, or otherwise used in manner to pleasure a
              Giant’s penis.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Cock vore, Bodyjob)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Community:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A call-to-action post meant for generally anyone at Daddy’s
              Dollhouse. This post may have to do with an event, collaboration
              project, mental health initiative, etc.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Crush:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is mdothered either fatally or non-fatally by part of a
              Giant’s body or tool used by a Giant.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Discipline:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              The practice and/or training of a tiny to follow the demands of a
              Giant, using punishment to correct behavior.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Dominance/submission, D/s)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Entrapment:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is kept in a trap, enclosure, or on/in the body of a Giant.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Event:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A community celebration worth checking out! Events can be
              in-person or digital.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Furry:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Furries are another fan community who are interested in
              anthropomorphic animal characters with human personalities and
              characteristics.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Macrofur, Microfur)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Gay:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A Giant man with a tiny man.</Typography>
            <Typography variant="body2">
              (Alternative lingo: Macro/micro, M/m, MLM)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Giant:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant man or normal sized man alongside a comparatively tiny
              person. This can also be used as a gender-neutral term.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Macro, GT, GM, Dom, Tol)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Giantess:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant woman or normal sized woman alongside a comparatively tiny
              woman.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: GTS, Domme)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Giant Couple:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Two or more Giant people or two or more normal sized people,
              usually in a relationship, alongside a comparatively tiny person.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: GC, Tols)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Giga:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Giants that are so large, people on earth are barely visible or
              microscopic in size to them. These Giants may also be larger than
              planets in space.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Hyper, Planetary)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Gore:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Blood, guts and other visually intense content that often ends the
              life of a tiny.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Guro, Hard content)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Growing:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A person’s body increases in size.</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Handheld:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny person is either trapped in, or consensually riding on the
              palm of a Giant.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Help Requested:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A community member is looking for suggestions, advice or seeking
              services or old content.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Humiliation:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is put into a situation that causes them feelings of shame,
              degradation and/or dehumanization, often to the delight of the
              Giant.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Insertion:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is inserted into the Giant’s body, specifically through
              their mouth, anus, vagina, urethra, belly button, ears or nose.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Kink Education:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Posts that focus on sharing sex related resources, or sharing
              sexual experiences.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Lesbian:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A Giant woman with a tiny woman.</Typography>
            <Typography variant="body2">
              (Alternative lingo: F/f, WLW)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Mental Health:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content or resources that focus on mental wellness for community
              macrophiles and microphiles.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Messy:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is covered in either food or bodily fluids.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Microscopic:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny so mdall you could barely see them with the naked eye, or
              may even need a microscope to see them.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Non-Binary:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant or tiny person who identifies with no gender. Please use
              they/them pronouns.
            </Typography>
            <Typography variant="body2">(Alternative lingo: NB)</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Non-Con:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny has not agreed to acts perpetrated upon them by a Giant. An
              abbreviation for “Non-consensual”.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Not Safe For Work (NSFW):
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content that may include nudity, sex acts, fetishized material, or
              other general adult content you may find unprofessional or
              embarassing to view at work.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Nudity:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant and/or tiny is partially or fully nude.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Oral:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is inserted into a Giant’s mouth, regardless if they are
              swallowed or not. This may be to scare or perform oral sex on a
              tiny.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Mouthplay, Vore)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Other:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A type of kink not listed in our Tag system. Please add your
              unique tag(s) in your post Title!
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Ownership:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant who keeps and treats a tiny or several tinies as pets
              instead of people. There may be elements of discipline and
              dehumanization. These tinies usually wear an accessory given to
              them by their Giant to inform others they are owned.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Palm Pet, Pet Play)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Photo Collage:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Artwork made by splicing two or more images together.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Piss:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is either threatened by, or endures being peed on by a
              Giant.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Watersports, Potty play)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Plausible:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A Giant that is slightly taller than average (8~12ft/2.5~3.5m) or
              a tiny that is slightly shorter than average (2~4ft/61~122cm).
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Relationships:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content or conversations that have to do with people making
              romantic connections, or managing their relationships in real
              life.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Roleplay:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Community members who are interested in looking for partners to
              act out their fantasies with, commonly through text chat, voice or
              in-person.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Romance:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Fictionalized love between a Giant and tiny.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Safe For Work:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content that is generally safe to view by audiences of all ages.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Sequence:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A series of images that follow a specific order to tell a story,
              often without the use of words.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Sex:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A Giant and tiny engage in a sexual act.</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shifter:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              An individual who identifies as being both Giant AND tiny, and may
              change their size depending on their particular mood. Please ask
              what size they are feeling before assuming!
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Switch, Vers)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shit:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A tiny is either threatened by, or endures being defecated on by a
              Giant.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Potty Play, Scat)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shrinking:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A person’s body decreases in size.</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shrunken Couple:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Two or more tiny people or two or more normal sized people,
              usually in a relationship, alongside a comparatively Giant person.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shrunken Man:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A man who is tiny or normal sized alongside a comparatively Giant
              man.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: md, miniboy, tiny)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Shrunken Woman:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A woman who is tiny or normal sized alongside a comparatively
              Giant person.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: SW, minigirl, Sylph, tiny)
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Snuff:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>A tiny is fatally killed.</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Stink:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content in where the Giant uses their body odor to intimidate or
              humiliate a tiny.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Story:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A fictional Giant/tiny story written by a fellow community member!
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Tiny:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              A gender neutral term for a person who is very, very mdall,
              usually arriving at their size through a shrinking process.
            </Typography>
            <Typography variant="body2">(Alternative lingo: mdol)</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Torture:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content in where a Giant preforms cruel, degrading or inhuman acts
              on a tiny.
            </Typography>
            <Typography variant="body2">(Alternative lingo: Cruel)</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Trans:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content that includes a transgender Giant or tiny.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Unaware:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content where a Giant has no knowledge of a tiny’s presence.
              Oftentimes the Giant is oblivious in causing a perilous situation
              for a tiny.
            </Typography>
            <Typography variant="body2">(Alternative lingo: Voyeur)</Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Video:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Movies, TV Shows, Commercials and other video content with Giant
              men and/or shrunken women.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <Typography className={classes.tagName} variant="h6" component="p">
              Vore:
            </Typography>
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography>
              Content where the Giant consumes a tiny, either for safekeeping,
              sustenance and/or continued torture. Vore can be fatal or
              non-fatal, and the term can be used in conjunction with other
              orifices (i.e. Anal vore, Cock vore, etc). Giants are usually
              referred to as predators, and the tinies as their prey.
            </Typography>
            <Typography variant="body2">
              (Alternative lingo: Voraphile)
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Dictionary;
