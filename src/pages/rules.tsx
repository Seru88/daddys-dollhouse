import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  styled,
  Typography,
} from '@material-ui/core';
import React from 'react';

import RulesHero from '../components/banners/RulesHero';
import Copyright from '../components/Copyright';
import SubMessage from '../components/SubMessage';

const CommunityRules: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <RulesHero />
      <Box px={3} pb={8}>
        <Typography color="primary" variant="h4" align="center" gutterBottom>
          COMMUNITY RULES
        </Typography>
        <Divider variant="middle" />

        <Box width="100%" p={3}>
          <SubMessage
            // variant="h6"
            align="center"
            paragraph
          >
            Welcome to the community! Before you jump straight into the forum,
            have a look at our community rules so you don’t piss anyone off -
            thanks!
          </SubMessage>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>
              1.EVERYONE 18 OR OLDER IS WELCOME; DISCRIMINATION IS NOT ALLOWED!
            </b>
          </Typography>
          <Typography paragraph>
            Do not discriminate against anyone in the community! Difference of
            opinion is expected, but that does not give you permission to
            attack, degrade, insult, or otherwise belittle anyone. Harassment,
            gaslighting or abuse of any member is a serious offense that can
            lead to permanently being ejected from the community.
          </Typography>
          <Typography paragraph>
            To keep Daddy’s Dollhouse an inclusive space, we must be mindful of
            each other, especially of comments that may seem disrespectful or
            hurtful based on race/ethnicity, religion, sexuality, gender and
            kink!
          </Typography>
          <Typography paragraph>
            Anyone age 18 or older is allowed to make a community account. While
            we may not cater to Giantess/shrunken man content, those folks are
            still welcome here. We want to provide a space for straight
            Giantesses and shrunken men to explore switching, their bicuriosity
            or general curiosity.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>2.POSTS SHOULD FOCUS ON GIANT MEN AND/OR TINY WOMEN.</b>
          </Typography>
          <Typography paragraph>
            Being a diverse community, discussions will be more lenient on this
            rule, but when it comes to content creation and advertising, please
            make sure you keep the following in mind.
          </Typography>
          <Typography gutterBottom>
            <b>{'<ALLOWED>'}</b>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">✅</Typography>
              </ListItemAvatar>
              <ListItemText
                primary="GIANT MEN: solo, or with a tiny person"
                secondary="(ie: M/f, M/m, M/f+m M/nonbinary, M/trans)"
              />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">✅</Typography>
              </ListItemAvatar>
              <ListItemText
                primary="TINY WOMEN: solo, or with a Giant person"
                secondary="(ie: M/f, F/f, M+F/f, NONBINARY/f, TRANS/f)"
              />
            </ListItem>
          </List>
          <Typography gutterBottom>
            <b>{'<NOT ALLOWED>'}</b>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">❌</Typography>
              </ListItemAvatar>
              <ListItemText
                primary="GIANT WOMEN + SHRUNKEN MEN: No exceptions!"
                secondary="We suggest checking out a community like Giantesscity instead 👍"
              />
            </ListItem>
          </List>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>3.ONLY SHARE “LEGAL” CONTENT.</b>
          </Typography>
          <Typography paragraph>
            To protect this community for the long term, let’s follow some
            simple content sharing rules!
          </Typography>
          <Typography gutterBottom>
            <b>{'<NOT ALLOWED>'}</b>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">❌</Typography>
              </ListItemAvatar>
              <ListItemText primary="MINORS: Do not share ANY content, including art and written stories with minors. If you’re thinking “hmmm...do they look old enough?” - then err on the side of caution and don’t post it." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">❌</Typography>
              </ListItemAvatar>
              <ListItemText primary="ANIMALS: Specifically anything that can be seen as beastiality or content with animals being killed or tortured. This rule does NOT apply to furry or fictional creature content." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">❌</Typography>
              </ListItemAvatar>
              <ListItemText primary="SPAM: Malicious links and basically anything not size related. Politics, religion and celebrity gossip are not welcome." />
            </ListItem>
          </List>
          <Typography gutterBottom>
            <b>{'<BE CAUTIOUS!>'}</b>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">⚠️</Typography>
              </ListItemAvatar>
              <ListItemText primary="EXTREME GORE: While blood, violence and snuff are allowed, please be careful with visual content that may seem too real, detailed or intense for the typical person. A moderator may take down this content if they find it is too upsetting for the community." />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">⚠️</Typography>
              </ListItemAvatar>
              <ListItemText primary="COPYRIGHT MATERIAL: Since a lot of source of size content isn’t always clear, do a little research before posting. Take at least a minute, and see if you find a paid source. If you do find one, link that instead so that we give back to our size content creators!" />
            </ListItem>
          </List>
          <Typography gutterBottom>
            <b>{'<ALLOWED>'}</b>
          </Typography>
          <List>
            <ListItem>
              <ListItemAvatar>
                <Typography variant="h6">✅</Typography>
              </ListItemAvatar>
              <ListItemText primary="MOST SIZE STUFF: From fluffy, sweet romance to non-consensual hard-core porn, most everything is allowed at Daddy’s Dollhouse. Here, we also celebrate all sorts of “taboo” size related topics like vore, kidnapping, humiliation, ownership, discipline and so much more! We are also welcoming to cross-kink content, for example, Macro Furries, or Breast Expanded tinies." />
            </ListItem>
          </List>
          <Typography paragraph>
            Rest assured, Tags are mandatory for any new forum post!
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>4.RESPECT EACH OTHERS PRIVACY</b>
          </Typography>
          <Typography paragraph>
            Aside from your own personal details, no posting personal details of
            other community members without prior and explicit permission.
          </Typography>
          <Typography paragraph>
            Do not publicly share private or confidential conversations without
            prior and explicit permission of all parties involved.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>5.BE MINDFUL OF PEOPLE’S PREFERENCES AND TIME</b>
          </Typography>
          <Typography paragraph>
            Take the time to read someone’s size preference and/or gender
            pronoun(s) on their profile, don’t just assume - ask first! This
            also applies to those looking for a roleplay partner. If a user
            doesn’t specifically on their profile if they roleplay, ask first if
            they’re open to it! Some people already have roleplay partners or
            don’t enjoy roleplaying - and that’s OK! Other community members may
            have hard lines on certain content as well, so please practice
            mindfulness!
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>6.DO YOUR PART IN THE COMMUNITY - SPEAK UP TO KEEP THE PEACE!</b>
          </Typography>
          <Typography paragraph>
            If another user is making you uncomfortable, please clearly and
            respectfully communicate with that user that you’re not comfortable
            with their conduct. Stewing in hate, fear or anger doesn't solve
            anything, and may encourage them to repeat the behavior with someone
            else. If things escalate between you and another user, a moderator
            will step in.
          </Typography>
          <Typography paragraph>
            If another user communicates with you that they’re uncomfortable
            with something you said or did - they do not owe you an explanation
            as to why. Just because another user may be OK with this sort of
            engagement doesn’t mean this specific user is. If you’re unsure of
            your boundaries with said user, ask for clarification. This user
            does not need to hear your reasoning for your actions. Please just
            be respectful and do not do that to them again.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>7.DON’T SHAME.</b>
          </Typography>
          <Typography paragraph>
            Celebrate our unique culture! If you don’t like something, do not
            leave hurtful, awkward or otherwise insensitive comments. If you
            have nothing nice to say, the best option is to say nothing at all.
          </Typography>
          <Typography paragraph>
            There isn’t one person on this forum who will like EVERYTHING that
            they see or read, so we all must practice a certain level of respect
            and acceptance for our fellow community members. We might not like
            what they like, but we all agree they deserve a space to explore
            their kinks just as much as anyone else does!
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>8.TREAT THE FORUM WITH LOVE AND RESPECT.</b>
          </Typography>
          <Typography paragraph>
            Do not spam and do not derail threads
          </Typography>
          <Typography paragraph>
            Tag, tag, tag! All new posts need at least 3 tags to be published,
            but if you have more tags you want to add, do it! Your community
            members will thank you. Remember, you can add up to 15 tags per
            post.
          </Typography>
          <Typography paragraph>
            Post advertisements in the paid services section.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" mt={6}>
          <Typography align="center">
            <b>THANK YOU FOR READING AND FOLLOWING THE RULES!</b>
          </Typography>
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
};

export default CommunityRules;
