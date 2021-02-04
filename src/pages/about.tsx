import { Box, Container, Divider, Link, Typography } from '@material-ui/core';
import React from 'react';

import AboutHero from '../components/banners/AboutHero';
import Copyright from '../components/Copyright';
import SubMessage from '../components/SubMessage';
import PageContext from '../PageContext';

const AboutPage: React.FC = () => {
  const setPageTitle = React.useContext(PageContext);
  React.useEffect(() => {
    setPageTitle('About Us');
  }, []);
  return (
    <Container maxWidth="lg">
      <AboutHero />
      <Box px={3} pb={8}>
        <Typography color="primary" variant="h4" align="center" gutterBottom>
          ABOUT US
        </Typography>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <SubMessage align="center" paragraph>
            Daddy’s Dollhouse is an Adults only forum dedicated to the
            fascination of size difference, with a specialty focus on Giant men
            and tiny women - M/f for short.
          </SubMessage>
          <SubMessage align="center" paragraph>
            This is a home for all macrophiles and microphiles alike.
          </SubMessage>
        </Box>
        <Divider variant="middle" />

        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>WHEN DID THIS COMMUNITY BEGIN?</b>
          </Typography>
          <Typography paragraph>
            While fans of Giant men and tiny women have more than likely existed
            always, the community in earnest began to organize in the 90’s and
            into the early 00’s. Back then, spaces like The-Minimizer’s forum
            and the Violent Shrunken Women board were popular hangouts. Webrings
            and DeviantArt kept artists and other creatives connected as well.
            After several of the biggest forums went offline and new forums and
            groups fed into growing rifts within the community, the community
            itself eventually splintered. During this time, Social Media sites
            (Tumblr, Twitter, etc) became alternative platforms that filled that
            void, and so we remain scattered around the internet.
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>HOW WILL THIS COMMUNITY BE DIFFERENT?</b>
          </Typography>
          <Typography paragraph>
            We hope to achieve our goal of reuniting the community by being
            respectful, inclusive and above all empowering! A community isn’t
            worth investing in if it doesn’t invest back in you. We hope to not
            only do that through community interaction but through links and
            other resources to help equip you with the tools to invest in love,
            happiness and tranquility as an adult living with macrophilia and/or
            microphilia. Because, let’s face it. Having a size kink isn’t just
            about sex. It can affect your relationship(s) outside the bedroom,
            romantically, domestically, and beyond. Better understanding your
            sexuality not only helps you, but your current or future partners as
            well!
          </Typography>
          <Typography paragraph>
            Our community has unfortunately spent much of its existence
            assigning self-appointed stigma to M/f content. Content that is
            commonplace in Giantess communities or Gay Giant communities were
            often times called out for being misogynistic or abusive when in the
            context of M/f characters. At Daddy’s Dollhouse, no such commentary
            will be tolerated!
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>
              CAN I REALLY DISCUSS OR SHARE CONTENT ABOUT NON-CONSENSUAL, CRUEL,
              HUMILIATING, ETC TYPE FANTASIES AT DADDY’S DOLLHOUSE?
            </b>
          </Typography>
          <Typography paragraph>
            Yes! Our forum is focused on FANTASY. Last we checked, fantasy is
            not reality. The size scenarios we discuss, roleplay, share content
            of, etc, couldn’t actually really happen, and feeling bad about a
            scenario that will never happen, will only make you feel bad. We’re
            here to fix that!
          </Typography>
          <Typography paragraph>
            We’d like to remind all our community members that your fantasies
            are not reflective of you as a person - your real life actions are!
            Men can still be respectable and kind, yet enjoy fantasies that may
            be viewed by others as domineering and abusive. Women can still be
            strong and independent, yet enjoy fantasies that may be viewed by
            others as pathetic and humiliating.
          </Typography>
          <Typography paragraph>
            Normalizing M/f fantasies can help empower you, and can help empower
            others in the community as well! If you struggle with accepting your
            fantasies, I highly recommend checking out this short, informative
            video on secret fantasies.
          </Typography>
          <Typography paragraph align="center">
            <Link
              href="https://www.youtube.com/watch?v=E7qhI2Hz6pM"
              target="_blank"
            >
              Our Secret Fantasies - YouTube
            </Link>
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>
              WHY DOES THIS SITE USE THE ACRONYM “M/f” VERSUS THE TRADITIONAL
              “SW”?
            </b>
          </Typography>
          <Typography paragraph>
            While both <em>M/f</em> (Giant male / tiny female) and <em>SW</em>{' '}
            (shrunken woman) imply similarities in context in the broader size
            kink community, <em>SW</em>
            is a term that only focuses on the female subject and is intended to
            entice a mostly male audience. To be more <u>inclusive</u> to our
            female members, we decided to go with a term that didn’t just
            fetishize the women, but the men as well. Fair is fair!
          </Typography>
          <Typography paragraph>
            While it is totally acceptable to call a tiny woman an <em>SW</em>{' '}
            on this board, or refer to yourself as an <em>SW</em> fan, when
            discussing Daddy’s Dollhouse as a whole, please try and refer to us
            as an{' '}
            <u>
              <em>M/f</em> community
            </u>{' '}
            and not an{' '}
            <u>
              <em>SW</em> community
            </u>
          </Typography>
        </Box>
        <Divider variant="middle" />
        <Box width="100%" p={3}>
          <Typography variant="h6" gutterBottom>
            <b>WHO CREATED THIS WEBSITE?</b>
          </Typography>
          <Typography paragraph>
            This site was constructed in early 2021 by kinky duo{' '}
            <Link href="https://forum.daddysdollhouse.org/user/jitensha">
              Jitensha
            </Link>{' '}
            and her husband{' '}
            <Link href="https://forum.daddysdollhouse.org/user/seru">Seru</Link>
            . Jitensha, a tiny woman with big ambitions, has been an active
            community member for over 15 years. She is long-time{' '}
            <Link href="https://www.deviantart.com/jitenshasw">artist</Link> of
            M/f content, the creative designer for this website, and the
            visionary and co-founder of{' '}
            <Link href="https://www.sizecon.com/">SizeCon</Link>. With her solid
            record of participation in the community, she hopes to keep Daddy’s
            Dollhouse alive for generations to come.
          </Typography>
          <Typography paragraph>
            Seru is Jitensha’s husband of 10+ years and is the programmer behind
            this community website! He not only cares about kink, but he has a
            deep passion for tech, and has built this website to last for the
            future. While he’s always been kink curious, Jitensha introduced him
            to the size community early in their relationship, and to this day
            he is her loving, albeit rough, Giant husband. They both practice a
            Dominant/submissive relationship and feel passionate about helping
            others exploring their own sexualities too.
          </Typography>
          <Typography paragraph>
            If you’re able to, and would like to support our
            kinky-duo-developers, you can send tips{' '}
            <Link
              href="https://www.paypal.com/paypalme/jitensha"
              target="_blank"
            >
              here
            </Link>
            . Thank you! We very much appreciate the encouragement and support
            from our fellow kinksters!
          </Typography>
        </Box>
        <Divider variant="middle" />
      </Box>
      <Copyright />
    </Container>
  );
};

export default AboutPage;
