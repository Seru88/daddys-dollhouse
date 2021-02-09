import {
  Box,
  Container,
  createStyles,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  makeStyles,
  Typography,
} from '@material-ui/core';
import React from 'react';
import ResourcesHero from '../components/banners/ResourcesHero';
import PageContext from '../PageContext';
import { Link as GatsbyLink } from 'gatsby';
import SubMessage from '../components/SubMessage';
import Copyright from '../components/Copyright';

const useStyles = makeStyles(theme =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(5),
    },
  })
);

const KinkResources: React.FC = () => {
  const setPageTitle = React.useContext(PageContext);

  const classes = useStyles();

  React.useEffect(() => {
    setPageTitle('Kink Resources');
  }, []);

  return (
    <Container maxWidth="lg">
      <ResourcesHero />
      <Box ml={2} mb={2}>
        <Link component={GatsbyLink} to="/">
          HOME
        </Link>{' '}
        / KINK RESOURCES
      </Box>
      <Typography color="primary" variant="h4" align="center" gutterBottom>
        KINK RESOURCES
      </Typography>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <SubMessage
          // variant="h6"
          align="center"
          paragraph
        >
          Being a macrophile or microphile is not a choice, so instead of
          denying ourselves, let’s explore instead! With a lack of resources
          specifically on size kink, we hope the catered guide below will help
          you along your personal journey!
        </SubMessage>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>BEFORE WE DIVE IN...</b>
        </Typography>
        <Typography paragraph>
          Hello and welcome to Daddy’s Dollhouse Size-kink Guide, written by me,{' '}
          <Link
            href="https://forum.daddysdollhouse.org/user/jitensha"
            target="_blank"
          >
            Jitensha
          </Link>
          ! I want to start this guide off by being transparent with those
          reading this - I am NOT a licensed sex therapist. However, as a
          volunteer, speaker and organizer in kink spaces, I speak with A LOT of
          kinky people as well as with kink-aware therapists and other kinky
          professionals. Navigating a kink relationship myself, I see a lot of
          patterns among people like us that we can try and avoid or treat.
        </Typography>
        <Typography paragraph>
          While I’ve written this guide myself, I can’t take full credit for all
          the ideas expressed, as many of these practices are based on the rules
          and principles built by the BDSM community who have paved the way for
          us to explore and practice kink safely. While I encourage you to go
          out and further educate yourself on BDSM and kink-play, this guide
          should provide boiled down points in an easily digestible size kink
          themed package. These tips are suggestions that might not help
          everyone, but should hopefully help many of you!
        </Typography>
        <Typography paragraph>
          While I’ve written this guide from my perspective as someone in a
          monogamous hetero relationship, and as a tiny woman, thus ocassionaly
          using pronouns that reflect my experience as someone into M/f, this
          information should be generally helpful for anyone with a size kink,
          or even people interested in other unrelated kinks - Please enjoy the
          read..it’s a long one!
        </Typography>
        <Typography paragraph align="center">
          - Jitensha
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>1. DON’T BEAT YOURSELF UP</b>
        </Typography>
        <Typography paragraph>
          It’s easy for someone with a size kink to think of themselves as
          sexually damaged goods for having to live out their lifetime with such
          a bizarre fantasy. But thankfully here, at Daddy’s Dollhouse you are
          not alone and resources are available! Having a fetish was not your
          choice, and so it shouldn’t be a reason to self-loathe - it’s not your
          fault! Sexuality forms fairly early in life, so as babies, we learned
          to associate certain things or experiences with arousal. Maybe it was
          an adult playfully threatening to eat you whole. Or an observation of
          the largest adult in the room making all the demands. We don’t know
          what exactly triggers these fascinations, but regardless we made
          certain connections as babies and toddlers, that through puberty,
          those things that excited us as young children took on a new,
          fetishized meaning.
        </Typography>
        <Typography paragraph>
          Having a fetish does not mean it is a disease or mental disorder!
          Which shouldn’t be a surprise when many of you reading this may live
          quiet, private lives separate from your kinky fantasies. You may have
          not had the opportunity yourself, but if you had the chance to visit a
          kink convention, you’d be sure to meet all sorts of people. They may
          be your Doctor, or children’s Teacher, the local grocery store cashier
          or your friendly neighbor. You might be surprised to see crowds that
          are diverse in race/ethnicity, gender, age and interests. That’s
          because fetishes really can form in anyone! So next time you feel
          alone, remember that having a fetish is actually more common than you
          think!
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>2. FIND A SUPPORTIVE OUTLET THAT WORKS FOR YOU</b>
        </Typography>
        <Typography paragraph>
          One of the first really challenging hurdles for any person with a
          fetish is to get a hold of your feeling of shame. Shame is an
          extremely common feeling throughout the size kink community. Ask any
          macrophile or microphile and more than likely they will sympathize
          with their own stories of deep shame. This shame could be caused by
          comments made from family, friends, partners or people in your
          community. It could be religious or moral pressures. Or possibly the
          passive observation in life, media, etc that the way we love is
          just... <em>different</em>. The benefit of having a safe space to
          verbally share or explore your kink is that those social and moral
          expectations are not there. A supportive community will listen without
          judgement and offer support. Without those barriers, you can express
          your thoughts freely and{' '}
          <u>shame can finally loosen its grip on you.</u>
        </Typography>
        <Typography paragraph>
          Joining Daddy’s Dollhouse is already a positive first step - plus it’s
          FREE! However, we may not be able to provide the personalized and
          professional help that you can get from a Kink-Aware therapist. If
          you’ve never heard about these types of therapists, they work
          specifically with individuals like ourselves and can help you manage
          and better understand your mind, sexually and romantically. My husband
          and I both found our kink-aware therapists at{' '}
          <Link href="http://www.therapyden.com" target="_blank">
            Therapy Den
          </Link>
          , but feel free to google the term “Kink-aware therapist” as there are
          lots of options nowadays!
        </Typography>
        <Typography paragraph>
          Due to covid, most of these therapists offer telehealth services, so
          you don’t even need to leave home. Most of these therapists also take
          insurance, or offer bundled packages for those paying out of pocket
          (For example: $180 month/4 sessions). Kinky seniors may also be happy
          to learn that some of these unique therapists accept Medicare too!
        </Typography>
        <Typography paragraph>
          I know finding mental health help can be scary because there is a
          stigma. My husband and I, being both Latino, we knew nobody growing up
          who saw a therapist, and we struggled a lot with making this first
          step. My family made therapy out to be something for the “locos” out
          there. So, for most of my life, it was easier for me to play “normal”
          than to engage and explore my feelings.
        </Typography>
        <Typography paragraph>
          It’s very, very scary to be vulnerable and confront feelings you enjoy
          but don’t exactly morally agree with. However, if you are sexually or
          romantically functioning with rolls of duct tape under your hood, are
          you really demonstrating you’re in control, or are you just keeping up
          appearances for the outward appearance of happiness? If shame is
          debilitating you or affecting your relationship(s), or your own
          personal happiness, then the best thing for your mental health is to
          empower yourself by trying to figure out how your brain ticks!
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>3. WORK TOWARDS SELF-ACCEPTANCE</b>
        </Typography>
        <Typography paragraph>
          Finding pride in something you’ve promised to never tell a soul about
          can seem like an impossibility. Sharing your kink will always be up to
          you. However, because your sexuality is so innately part of you, it
          only benefits you to try and better understand it. Trust me when I say
          that getting rid of the weight of shame and guilt can be a really
          freeing and transformative experience!
        </Typography>
        <Typography paragraph>
          While I know M/f type content has its own stigma, I’d like to remind
          all our community members again that your fantasies are not reflective
          of you as a person - your real life actions are! To further push my
          point, please enjoy this short, informative video.
        </Typography>
        <Box height={0} paddingBottom="56.25%" position="relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/E7qhI2Hz6pM"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
          />
        </Box>
        <Typography paragraph>
          The easiest way to build courage and find self-acceptance is through
          our peers normalizing their kinks. Imagine being in a space with only
          other macrophiles and microphiles, speaking openly and with passion
          and pride about their size kink. It might be a bit intimidating to
          participate at first, but with shame absent, eventually you’d more
          than likely talk about your kinks too. So, where do these special
          spaces even exist?
        </Typography>
        <Typography paragraph>
          Luckily, our broader community has a yearly in-person convention
          called{' '}
          <Link href="https://www.sizecon.com/" target="_blank">
            SizeCon
          </Link>{' '}
          which is an amazing and extremely validating experience that
          celebrates size kinksters and provides educational and entertaining
          workshops and panels geared towards people like us! Although covid has
          stalled any plans for a 2021 convention, SizeCon is hosting virtual
          events in the interim - so check it out! Informal meetups have also
          moved virtually and can be found or organized on sites like ours or
          other kink related sites like{' '}
          <Link href="https://fetlife.com/" target="_blank">
            Fetlife
          </Link>
          .
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>4. CONSIDER WHO YOU SHARE WITH</b>
        </Typography>
        <Typography paragraph>
          One way to find peace and validation is telling others close to you
          about your kink. Having others you know you can trust to be 100%
          yourself around is extremely empowering, affirming and can offer some
          mental relief. Confessing your kink to others is an intimate and
          vulnerable experience for the majority of us. The most important piece
          of advice when deciding to ‘come out’ to someone is to first use your
          own intuition. For example, is your relationship mature enough to know
          your partner would be open-minded, or are you unsure if they’d leave
          having dated for only a short time? If coming out to a family member
          or friend, have they been always supportive of you, or do they enjoy
          cracking jokes at your expense? Trust your gut! Don’t open up to
          people who won't respect you or your privacy. Finding others in local
          kink communities might make friendship building easier too.
        </Typography>
        <Typography paragraph>
          Ideally, if there is one person who <em>should</em> know about your
          kink, it
          <em>should</em> be your partner. While there are events now for people
          like us to meetup in real life, the reality of us ending up in a
          perfectly corresponding size kink relationship and living happily ever
          after, is still very unrealistic. Many of us will end up in what we
          suspect to be ‘normal’ or ‘vanilla’ relationships, and thus predict
          for ourselves a gloomy, frustrating or heartbroken outlook. For many
          in this community, that means continued secrecy, even throughout
          years, decades of marriage.
        </Typography>
        <Typography paragraph>
          I challenge that mindset! If you feel like your partner truly cares
          about you, then <u>don’t make that judgement call for them</u>. It’s
          unfair to you, and it’s unfair for them. Every partner deserves the
          truth, and seeing as that sex is an activity that includes them too,
          you should give them the benefit of the doubt. Who knows, maybe they
          want to get involved! One of the most popular panels at SizeCon is a
          discussion on relationships with a panel full of all types of couples.
          Many of the folks introduced to the community are often happy to be
          able to share or play along with something that is unique and intimate
          to them and their partner. Some even find they have kinky,
          power-dynamic based desires as well, but maybe didn’t see the
          connection because thematically, their kink is different from yours.
          We can work with this!
        </Typography>
        <Box height={0} paddingBottom="56.25%" position="relative">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ddKwb3Wzz0w"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, border: 'none' }}
          />
        </Box>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>5. BE BRAVE</b>
        </Typography>
        <Typography paragraph>
          Now that you’ve decided to come out to your significant other, you’ll
          need to find your courage. Speak to any macrophile or microphile who’s
          come out to their partner and engages with them in their size kink,
          and most will say their bond with their loved one has strengthened
          considerably. You know that you are more than just your fetish. Your
          partner, who may not have known about your fetish, is in love with all
          those other aspects of you too. So, maybe, just maybe, they have
          enough space in their heart to love this secret part of you as well.
          Telling them doesn’t change who you are. You were always this person.
          By telling them, you are unlocking another private door into your
          heart. And while you might find the idea of selling your perversions
          to your partner horrifying, they might feel moved by the beautiful
          gesture of trust in them. This could become something special between
          the both of you.
        </Typography>
        <Typography paragraph>
          I wish I could promise that every coming out story will always result
          in a happy ending - but that’s not always the case and something you
          must consider. We can do our best to analyze when is the right time to
          share with them, but that doesn’t mean that your partner will always
          be receptive to what you have to offer. And even when you may have an
          answer, it’s not always so black-and-white. A partner may tell you
          that they still love you but doesn’t want to participate in a kinky
          lifestyle at all. Some people live happily as just parents or just
          romantic partners, but not as sex partners, and that’s OK, but there
          are factors you need to consider when thinking about your long term
          happiness.
        </Typography>
        <Typography paragraph>
          Maybe you find yourself wanting, relying heavily on porn, or even
          other people online to scratch your itch. If that bothers you, talk to
          your partner about it first, tell them how that makes you feel, and
          see how that makes them feel too. If they’re receptive, they’re always
          a chance to make it work. If not, then it’s up to you to gauge what
          your personal limits are. There’s a lot of reasons why people break
          up, separate or divorce, and a disconnect in sex is a totally
          reasonable reason why. For some people, living unfulfilled can be a
          miserable existence. But of course, we all have our own limits.
        </Typography>
        <Typography paragraph>
          Some people have other methods to scratch their itch while making
          their relationships work, for example, seeking professional services
          from Dominants or submissives, that may not even include nudity, let
          alone sex. Others may have consensual open or polyamorous
          relationships. They don’t always need to be sexual in nature.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>6. OWN YOUR KINK</b>
        </Typography>
        <Typography paragraph>
          Now that you’ve decided to come out, it’s time to actually own your
          kink. It doesn’t matter if you’ve hooked up with a kinky person or
          not, I promise you, you will need to sit down and really talk about
          your kink to make this work. For most of us, the way we find relief in
          our fantasies is by acting them out through roleplay. I understand for
          many of us, the idea of asking our partner to participate in ‘adult
          pretend time’ can be a gut-wrenching ask, but thankfully the concept
          of roleplay in the bedroom is not as taboo of a subject as it used to
          be. You may be surprised to find your partner receptive to exploring
          the idea of roleplay with you! But again, that means you will have to
          have those honest conversations. That means you will need to tell your
          husband/boyfriend you want him to suffocate under his giant twitchy
          asshole. You will need to tell your wife/girlfriend you want her to
          wear her oversized pajamas and ‘shrink’ down on her knees to service
          you. Whatever your fantasy is, you will need to share!
        </Typography>
        <Typography paragraph>
          For many individuals with fetishes, this period can become rather
          stressful. You may have come to find sexual conversations frustrating
          with them. You try and explain, but they’re not getting it, and you
          wish you didn’t have to explain it again because it’s excruciating!
          It’s often easier to reminisce about the peaceful times before you
          came out to your partner and feel regret, or even selfishness for
          telling them. But I have some food for thought.
        </Typography>
        <Typography paragraph>
          See, you and your partner are both equal individuals, each deserving
          of love. It doesn’t matter if kink is hard for them to grasp - making
          normal sex appealing can be challenging for you too. Them deciding to
          do a little roleplay with you shouldn’t be seen as a favor or a chore.
          To combat that feeling, you should not only encourage yourself to be
          open and honest, but encourage your partner to be open and honest as
          well. Try and explore what their fantasies are and include them in
          your combined roleplay - you’ll find tips on that towards the end!
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>7. BE PATIENT</b>
        </Typography>
        <Typography paragraph>
          Having come out to them and now told them many of your fantasies, you
          may want to believe things might finally start to click. But
          unfortunately, things are more than likely not to go that smoothly in
          the beginning. You may have moments of size-play fun and think “Ah,
          they finally get it!” and other moments where you think “They have no
          idea what I want…”. It will take time and a lot of communication, and
          of course cooperation and a willingness to engage from both parties.
        </Typography>
        <Typography paragraph>
          We must always remember that while we might have a complex universe in
          our minds that caters to our desires, our partner will have{' '}
          <u>no insight</u>
          into our inner world, aside from what you decide to share with them.
          The less information you give them, the more they will rely on their
          own biases. Maybe that’s a cringy recreation from a character in a
          size related movie, or a poor attempt at BDSM play. For many people,
          they’ve never even considered the idea of a tiny person and a Giant
          person doing anything remotely sexual or romantic, so taking the time
          to communicate your desires and the motivations for those desires are
          paramount.
        </Typography>
        <Typography paragraph>
          Sometimes doing that verbally can be agonizing, but trust me when I
          say - <u>do not</u> encourage your partner to google on their own due
          to your lack of sharing. They might be scared or unsure of what they
          find! Take control on how you expose them to your fetish and consider
          writing out texts, snapchats, emails or using other text-based
          messaging apps to share fantasies. Sharing artwork, videos, stories or
          other media is always an excellent way to show your partner what you
          like as well. Make sure to point out the parts that really make you
          excited! The Xconfessions app is another great resource created by a
          Sex Therapist, available for{' '}
          <Link
            href="https://play.google.com/store/apps/details?id=com.gorillaarm.android.xconfessions&amp;hl=en_US&amp;gl=US"
            target="_blank"
          >
            Android
          </Link>{' '}
          and{' '}
          <Link
            href="https://apps.apple.com/us/app/xconfessions/id1318649256"
            target="_blank"
          >
            Apple
          </Link>{' '}
          devices. It works similar to Tinder, wherein you and your partner
          swipe left or right to find ‘matches’ in sexy ideas, and those are
          then pushed to your phone as suggestions of fun things to do together.
        </Typography>
        <Typography paragraph>
          Lastly, don’t be disappointed if you don’t progress as quickly as
          you’d like. It’s very hard to live a kinky lifestyle 24-7, and like
          any adult, you and your partner both have other responsibilities you
          need to attend to. Finding harmony between your size kink and your
          partner will not be something you achieve overnight. For most people,
          it will take plenty of time, practice, repetitive conversations and
          actual play until you can start to see the positive change you crave
          in your relationship.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>8. CONSIDER SHARING HOW YOUR KINK AFFECTS YOU</b>
        </Typography>
        <Typography paragraph>
          As many of you know, our kink can affect us in many ways, even in ways
          outside the bedroom or after sex is over. One important consideration
          is to understand the benefits of after care. When you’ve finished a
          play session or sex, a submissive person may become VERY emotional.
          They may cry, breathe heavily, feel faint or need other attention from
          their Dominant. When I began having sex around 18 years of age, I
          would get very emotional after sex and never understood why! It was
          something I was very embarrassed about because I wasn’t actually upset
          or sad. For a submissive little tiny like myself however, the way we
          find pleasure is often through very scary situations. After care was a
          great way for me to find emotional and physical support with my Giant
          Dominant, to help me come down from the adrenaline rush I’d just
          experienced. For most couples who engage in power-play,{' '}
          <u>after care is a must!</u>
        </Typography>
        <Typography paragraph>
          Another consideration for women specifically is to discuss your
          submissive needs. You may not know it, but you might be looking for a
          D/s (Dominant/submissive) style relationship! I myself struggled with
          a very, very short fuse that is common in a lot of submissive women
          who have no outlet. For many submissive women, we have certain social
          expectations of men. However, as our roles become more ‘equal’,
          statistically, women are still taking on the brunt of the housekeeping
          and child-raising, adding on more stressful burdens. This has caused a
          lot of explosive anger from submissive women who often instinctively
          love to serve and take on a lot, but become frustrated in having to
          tell their man what to do constantly. Having kink-play outlets for
          submissive women to let go of that meticulous home, work, and
          child-rearing responsibilities (among other things) and let their
          partner be in charge or ‘own’ them for sometime, can help tremendously
          with this feeling! I myself have not had an outburst in almost 7
          years, and I couldn’t be happier. Here’s a nice{' '}
          <Link
            href="https://kinkyevents.co.uk/dom-sub-relationships-the-ultimate-guide-for-beginners/"
            target="_blank"
          >
            beginners guide
          </Link>{' '}
          for those interested in a D/s relationships!
        </Typography>
        <Typography paragraph>
          This of course is a double-edged sword, and I encourage any submissive
          person to explain to your partner how your brain works. It’s
          unfortunate to say, but often submissives like myself can easily be
          taken advantage of, and in our need to please, we may not always
          clearly tell our Dominant when we feel they’ve crossed a line.
        </Typography>
        <Typography paragraph>
          Sometimes our fantasies can also trigger us negatively in different
          ways, and that’s important to share with your partner as well. For
          example, I suffer from size dysphoria. This means that for most of my
          life I’ve struggled with the idea that my body is just far too large!
          Since childhood I thought if I were smaller I’d be more beautiful, or
          popular, interesting or accepted. While being a few inches tall is an
          absurd beauty standard I will never achieve, I still struggle with
          these thoughts. While my partner can’t solve this issue for me, he
          puts an effort into fighting these feelings through verbal and
          physical affirmations. It really can make a difference!
        </Typography>
        <Typography paragraph>
          Last, but certainly not least is understanding how Subspace and
          Domspace can affect you! While experiences may vary, a submissive may
          reach a state called Subspace in which she may be completely and
          utterly enthralled and at the mercy of her Dominant. When I experience
          Subspace, or “smallspace,” I find myself melting in my husband’s hand,
          a blubbering zombie too stimulated to even fight back. I often will
          even go completely limp! While not being a Domme myself, I have no
          idea what Domspace feels like, but I’ve heard Dominants compare it to
          having a heightened connection with their submissive, where instincts
          take over and they feel complete control over their partner.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>9. BUILD A FOUNDATION FOR SIZEPLAY</b>
        </Typography>
        <Typography paragraph>
          Now that your partner has somewhat of an idea of what turns you on,
          you may want to look into how others structure their play. After all,
          size fantasies aren’t fantasies that can actually be reproduced in
          reality. To find some relief from this fantasy, you may include some
          roleplay, which can be super sexual or very tame and romantic, in the
          bedroom and outside of it too. Make sure to discuss with your partner
          where and when roleplay is appropriate! But before we get into some
          techniques used for roleplay, we need to understand what foundation we
          need to build before fully immersing ourselves into scenes.
        </Typography>
        <Typography paragraph>
          For many in this community, myself included, the connection to BDSM
          was not very apparent at first. It took sometime for me to notice the
          correlation. Giant fingers were like bondage and ropes. My need to be
          owned and humiliated was not unlike a sexual slave. And the need for
          discipline and punishment didn’t sound too far removed from a
          community who is known for whips and paddles. The more I researched,
          the more I realized pretty much all fetishes have a power-play element
          to them.
        </Typography>
        <Typography paragraph>
          Some reading this may think you have a very fluffy fantasy, but even
          those who may only have a shrinking fantasy for example, need to
          understand that there is still power-play in action here. For many of
          us, just seeing individuals of two very different sizes is enough to
          trigger this excitement, with the Giant person clearly in the position
          to take advantage of the tiny person. They don’t even have to be nude,
          heck, they may not even need to notice the tiny person at all! Coming
          to terms with and being introspective of your power-play desires can
          help your sex-game considerbly! Who knows, BDSM might be for you after
          all.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>10. CONSIDER BDSM PRINCIPLES</b>
        </Typography>
        <Typography paragraph>
          As mentioned earlier, the BDSM community is a great source of
          information on how to play out your fantasies in reality. These
          moments of play are called “Scenes” and don’t necessarily need to
          involve actual intercourse. While I encourage you to do your own
          research, before engaging in kink-play, I encourage you to follow the
          fundamental BDSM principle of{' '}
          <Link
            href="https://en.wikipedia.org/wiki/Safe,_sane_and_consensual"
            target="_blank"
          >
            Safe, Sane &amp; Consent
          </Link>{' '}
          (SSC) explained below in 3 sections.
        </Typography>
        <Typography variant="h6" gutterBottom></Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={<b>⦿ Be Safe!</b>}
              primaryTypographyProps={{ variant: 'h6' }}
            />
          </ListItem>
          <List>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span>
                    <Link
                      href="https://en.wikipedia.org/wiki/Safeword"
                      target="_blank"
                    >
                      Safe words
                    </Link>{' '}
                    or signals should be decided on beforehand.
                  </span>
                }
              />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Discuss both of your physical and mental limitations." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Discuss and practice acts before you start a scene. Doing some research doesn’t hurt either! While the help from a professional Dominant is always best, there are many free resources online that show you how to properly and safely spank, choke, facesit, etc." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Be risk aware of play, especially if it could cause injury or worse." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Be prepared for an emergency. For example, I very much enjoy my husband choking me “between his fingers”, but he’s made sure he’s CPR certified in case he squeezes a little too hard." />
            </ListItem>
          </List>

          <ListItem>
            <ListItemText
              primary={<b>⦿ Be Sane!</b>}
              primaryTypographyProps={{ variant: 'h6' }}
            />
          </ListItem>
          <List>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="You are not to practice any scene that may cause harm while under the influence of drugs or alcohol." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="BDSM should not be used as a way to get revenge or vent anger at your partner." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Dominants should provide after-care to their submissives to help both of them wind down from their play session." />
            </ListItem>
          </List>

          <ListItem>
            <ListItemText
              primary={<b>⦿ Be Consensual!</b>}
              primaryTypographyProps={{ variant: 'h6' }}
            />
          </ListItem>
          <List>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Your scene has been discussed and negotiated before play begins and everyone involved has consented." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Tell your partner if they’re approaching your limits by using safewords." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText primary="Be honest! Misleading your partner is a breach of consent and can seriously hurt the trust between you and your partner." />
            </ListItem>
            <ListItem className={classes.nested}>
              <ListItemAvatar>
                <Typography variant="h6">{'>'}</Typography>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span>
                    A submissive person may put themselves in a vulnerable
                    position, easy to be taken advantage of. Let your Dominant
                    know your well-being is something you are temporarily
                    entrusting them with. If you are a Dominant, be aware of not
                    abusing your power or neglecting your agreement. She is in{' '}
                    <u>your</u> care!
                  </span>
                }
              />
            </ListItem>
          </List>
        </List>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>11. BE MINDFUL OF YOUR WORDS</b>
        </Typography>
        <Typography paragraph>
          Remember, as you both begin to engage in structured play, let them
          know how they’re doing! As mentioned earlier, your partner is playing
          blindly, and they need your feedback to know if they’re doing it
          “right”. This is even more critical if the partner introduced to your
          kink is to play your Dominant, and much of the story telling is left
          up to them. Think about how scary that might be for them! Make sure to
          keep feedback until after sex, and use positive and encouraging
          language. If they missed the mark, consider offering constructive
          criticism or alternative suggestions so it doesn’t seem like you’re
          just complaining.
        </Typography>
        <Typography paragraph>
          As you get comfortable roleplaying with your partner, don’t forget to
          also let them know outside of roleplay spaces how important they are
          to you. It’s not uncommon in the size community to hear about insecure
          partners who think their loved one is only obsessed with their mouth,
          or only wearing oversized clothing for example. It’s very easy,
          especially in the beginning to be obsessed with our new found sexual
          freedom, so make sure to remind your partner that they are more than
          just a tool to fulfill our fantasies.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>12. HELP YOUR PARTNER FIND THEIR OWN VOICE</b>
        </Typography>
        <Typography paragraph>
          Building confidence is <u>extremely important!</u> If your partner has
          decided that they want to explore a kinky lifestyle with you, chances
          are that they might have a little kinkiness inside them too! And heck,
          maybe without you knowing, that’s what attracted you to them in the
          first place! It’s easy to assume that your partner is not kinky
          because they didn’t approach you with their kinky fantasies, or you
          feel as if their fantasies are more mainstream than your own.
        </Typography>
        <Typography paragraph>
          At the start of my D/s relationship, I often felt that because my
          husband didn’t want to put the work into being a Dominant that he was
          not kinky. But I honestly wasn’t looking hard enough at what turned
          him on. His fantasies dealt directly with stripping women of their
          freedoms and rights, and using them for his own selfish, sexual,
          free-use desires. I’m sure you can see some of the parallels with
          shrunken women fantasies out there. He cared less of the journey in
          obtaining said pussy, and more of the outcome - a pretty lady at work,
          the gym, etc. that he could take for himself without asking. I
          eventually realized I could work with this, and we’ve tried mixing his
          aesthetic and narrative preferences with the rough housing foreplay I
          need as a tiny submissive. Without even knowing it, we were actually a
          really good match! We only had to refine the edges of our puzzle
          pieces to fit a little better.
        </Typography>
        <Typography paragraph>
          Sometimes your partner may actually have very strong kinks, and that’s
          super amazing, but can also be disappointing if you feel you might not
          be a sexual match. However, please consider what may seem like obvious
          Dominant or submissive behavior for you might not be so for your
          partner. We all see kink from different perspectives, and something
          that may seem like a dominant behavior, like someone growing for
          example, might not be seen as a dominant behavior in another fetish
          like Expansion, where becoming so big you’re imobile or stuck is seen
          generally as submissive behavior. Make sure you understand each
          other’s kinky motivations and see how you can combine them in play!
        </Typography>
        <Typography paragraph>
          Help your partner find resources and other tools to help them in their
          Dominant or Submissive journey. If they’re not quite getting what you
          want from their Giant or tiny performance, or your relationship
          outside the bedroom, consider trying to explain their character's
          motivation behind certain activities. This of course works both ways,
          as you should try and consider what sort of Giant or tiny your partner
          wants in response. For example, I’d often defer to a state of subspace
          and just ‘take’ whatever it was my Giant husband did to me. This
          became a little boring for him, and with some clear communication, I
          found out he preferred a tiny who put up more of a fight and was more
          verbal.
        </Typography>
        <Typography paragraph>
          Making size related roleplay fun for both parties will set you up for
          future success. In time sexual association can even help make sizeplay
          sexy for your partner!
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>13. TRY AND BE THE BEST GIANT AND/OR TINY YOU CAN BE!</b>
        </Typography>
        <Typography paragraph>
          As mentioned before, it’s important to be open to your partner trying
          new things with you, but it’s also equally important to put the effort
          back into it! It can be VERY scary to roleplay, but being equally
          involved is really important! Remember, to suspend belief = relief! If
          you’re thinking how ridiculous your roleplay is, you’re not focusing
          on your partner, and you’re being unfair to both of you. As the one
          who invited their partner into kink play, you must do your part and
          always be present. The more confident your partner is in playing with
          you, the more they may even be comfortable trying things they weren’t
          comfortable doing in the past.
        </Typography>
        <Typography paragraph>
          Set sexual expectations, preferably through a contract so that there
          isn’t any miscommunication or disappointment between your and your
          partner. A BDSM style contract may not only help with bedroom
          expectations, but help set rules and limits for those seeking a D/s
          style relationship. A contract may also outline duties for both Dom
          and sub, discipline for rule violations, rewards for good behavior,
          etc.
        </Typography>
        <Typography paragraph>
          Whether you play Giants and tinies outside of the bedroom or not,
          learning your partner’s language of love can help with figuring out
          each other's romantic expectations. It’s also great for bonding!
        </Typography>
        <img
          width="100%"
          height="auto"
          src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/love-languages-static-1560977777.jpg"
          alt="five languages of love"
          style={{ marginBottom: 10 }}
        />
        <Typography paragraph>
          Most of us may consider all 5 of these points very important to us,
          but it’s natural that we may have preferences. Luckily for my husband
          and I, we both share <u>Quality Time</u> as our favored language of
          love. And it’s true, for the past 15+ years I can scarcely think of a
          day I haven’t spent with him. Many of our friends and family even joke
          we’re glued at the hip. Unfortunately for me, my idea of quality time
          includes things like talking, touching, doing an activity together,
          etc. My husband however is content with me just being near him. So,
          make sure to explain what your needs are when reviewing this list
          above with your partner, as this list can be very vague.
        </Typography>
        <Typography paragraph>
          You may not have love languages that line up, and that’s OK too! My
          next favored language of love is physical touch, while my husband’s is
          service. And while it can be sweet for my husband to worry and fret
          over me, making me coffee to cheer me up or bringing me a blanket to
          keep me warm, I realized I needed to up my service game to show him I
          love him back, and also needed to redirect his need to service me so I
          didn’t feel like a spoiled brat. Thankfully, without any such
          conversation, my husband realized how much I enjoy touch, and instead
          used that as a way to provide his time and care to me. There’s always
          a way to make it work!
        </Typography>
        <Typography paragraph>
          Lastly, to be the best Giant or tiny possible, you’ll want to set you
          and your partner up for success! This means being consistent with the
          time you invest into your kinky relationship. For some people who have
          children or live with roommates or other family members, this can be
          extremely difficult. It may seem unsexy, but planning a time for play
          is a MUST for busy folks. If you can’t find enough privacy in your
          home, consider booking a hotel room or leaving your children at their
          grandparents for a night. With covid, things have definitely become
          more complicated, but I’m sure you and your partner can come up with a
          solution, even if it’s only a once a month occasion. It’s important to
          have something to look forward to!
        </Typography>
        <Typography paragraph>
          If sticking to your scene plans seems difficult, or you feel like you
          both get distracted during scenes, make sure to decide on the scene
          before you start. Even describing the scene and characters right
          before you begin, even if it’s just a short 1-2 sentences long, can
          help you both keep focus during your session.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <Typography variant="h6" gutterBottom>
          <b>14. EMBRACE YOUR CREATIVITY TO LIVE OUT THE FANTASY</b>
        </Typography>
        <Typography paragraph>
          While our fantasies don’t live in reality, there are many ways couples
          play out and explore these fantasies in reality. These suggestions may
          not work for everyone, but hopefully they’ll give you the inspiration
          needed to find something that works for you and your partner!
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Perspective</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          One of the easiest types of sizeplay to master is using perspective to
          your benefit. While having a taller partner might make things a little
          easier, using perspective can even help a shorter person seem like
          they’re towering above you. One of the most common methods used in the
          community is one where the Giant partner stands, straddling over the
          tiny partner. This can be used as a quick, non-sexual declaration of
          size dominance over a partner. However, many in the community also use
          this position for masturbation purposes, unaware, crush or foot play
          among other things. This position may also provide the Dominant with
          the extra height he needs to feel more confident in his role. Even
          though the submissive laying on the floor or bed has not actually
          shrunk, she nevertheless is at a physical disadvantage in defending
          herself from a calculated “Giant” tease from above.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Another example of using perspective, is one of my favorites my
          husband utilizes, which is to imitate growth. To initiate a short
          scene between us, he may without warning, corner me in a{' '}
          <Link href="https://en.wikipedia.org/wiki/Kabedon" target="_blank">
            kabedon
          </Link>
          -like style, both of his hands on the wall behind me, as he begins to
          tiptoe slowly, looming greedily above me, appearing as if he’s
          growing! I often instinctually ‘shrink’ in response from the
          intimidation, sliding my back down against the wall. The best part is
          when he asks “What’s wrong?” with cocky, faux concern, acting as if
          nothing novel is happening. It’s very sexy!
        </Typography>
        <Typography className={classes.nested} paragraph>
          Another use of perspective my husband and I utilize is giving him
          control to "shrink" me at will. My husband may command me to "shrink"
          for him, wherein I’d find myself kneeling next to him for a romantic
          pet or quality time. When his command sounds lustful, him "shrinking"
          me could imply he wants me to kneel before him as he unbuckles his
          pants for a blowjob. At my new "shrunken" height, I feel helpless to
          fight back and happy to oblige - it’s quite the fun feeling for a
          submissive!
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Sex-Friendly P.O.V. (Point-of-View)</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          While sexual scenes can easily be played without intercourse, I get a
          lot of questions from other size kinksters eager to learn about how
          they can combine these two activities. Obviously, the example in the
          previous section, of a Giant towering above his tiny partner might
          make intercourse a little difficult, so he will need to be creative
          with the POV he’s producing for his submissive, while also having sex
          with her. Having so many things to consider can be really taxing on a
          Dominant, so the submissive should not take it personally if he
          doesn’t climax - he’s trying to focus on her. If this is the case,
          providing the Dominant with separate time to service him might be more
          effective.
        </Typography>
        <Typography className={classes.nested} paragraph>
          One of the most common, safe, and sex-friendly POVs a Dominant can
          preform is opening his mouth. Voraphilia is very popular in the size
          kink community, and having a Dominant pretend he is going to eat his
          submissive is a pretty easy concept for most newbies to kink to
          understand. This POV can easily be achieved in a missionary or
          seashell position with the Dominant always on top. It can also be
          achieved in a Doggy or Flatiron position, but the submissive will need
          to turn their head towards the Dominant’s open mouth. The Dominant
          forcing the submissive to look can also be sexy - just be careful with
          her neck! While you’ll want to have a certain distance between you and
          your partner so things don’t look too blurry, a Dominant can get
          rather close to his submissive, surrounding much of her POV with his
          hungry maw. This is a great opportunity to include other forms of
          humiliation, like burping, drooling, spitting, eating, etc.
        </Typography>
        <Typography className={classes.nested} paragraph>
          When done properly, hands can also be a really great tool for forcing
          a perspective. The submissive can only see with their eyes, so a
          Dominant imagining their submissive's head as a representation of the
          tiny they are playing with, they can achieve some really interesting
          POV for their submissive. My husband for example, may place his open
          palm right over my face as we have sex - enough to feel trapped but
          also enough to see between his fingers, him looking at me. Being
          careful with my neck, he may also put his hand over my turned head,
          sandwiching my eyes and ears between his hand and the pillow. Because
          of that, it becomes very difficult to hear his muffled words, causing
          a serious ‘trapped’ under his body vibe, which enhances the POV!
        </Typography>
        <Typography className={classes.nested} paragraph>
          Last but not least are POVs that may need extra research and practice
          before performing. Having a Dominant on top during sex can help
          enhance his strength by letting his weight and gravity imobilize his
          submissive. Using POV, a Giant can easily roleplay crushing a tiny by
          choking her or pinning her down with his arms to provide the pressure
          to fool her brain. This can also be done with facesitting techniques
          which will require some balance and leg strength to keep your partner
          safe. Protip: Find something like a headboard or wall to lean on if
          you get tired! Also, very important, it is imperative that when
          practicing any technique that keeps someone from breathing, you are
          not just aware of their safe words, or an agreed on ‘tap-out’ touch,
          but also keenly attuned to their facial responses to know if they are
          in actual distress. Dominants should make sure to check-in often if
          they cannot see their submissive. I highly recommend any Dominant
          engaging in breathe play to consider learning CPR.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Clothing</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          Clothing is another fun way to assert dominance or set a size scene.
          Many Giants for example will utilize oversized clothing to make their
          tinies appear as if they're shrinking. My husband doesn't care much
          for baggy clothing, but does enjoy clothing he can easily rip off,
          which I know some other Giant men enjoy too. Pantyhose is a cheap,
          accessible option if you or your Dominant enjoy destroying clothing
          for either shrink or growth scenarios. There are other cheap fabrics
          that rip easily, as well as reusable tearaway pants that have buttons
          lining the side of each leg.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Dress-up in general can also be a fun activity to share between
          Dominant and submissive. I very much love when my husband gives me his
          thoughts on how I should present myself. It may not always be a
          request to wear an entire outfit - it could be a small detail like an
          accessory, a set of undergarments, or a request to style my hair a
          certain way. As a submissive, it personally makes me happy to be
          visually pleasing for him as well as following through on a task he’s
          assigned me.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Your Body</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          Body worship is commonplace in kinky play and especially so for those
          with a size fetish. And while I could argue this may be more
          pronounced in macrophiles over microphiles, generally speaking, most
          fetishists want to be able to explore and be intimate with every
          corner of their partner's body. For Giants this may be about bodily
          control over another person, for tinies it might be about exploring
          intimate areas, usually through explicit permission to worship/explore
          or "forced" bullying in an effort to be humiliated by their Dominant.
        </Typography>
        <Typography className={classes.nested} paragraph>
          While it is commonplace for macrophiles to be infatuated with “private
          parts,” intimate parts of the body go beyond just commonly sexualized
          genitalia, anuses and breasts. For tinies especially, this can mean
          exploring a Giant's mouth, armpits, feet, etc. In polite society,
          these body parts might not be seen as typical areas to show affection
          towards, hence the excitement for the submissive tiny to explore them
          - they are taboo! Furthermore, it can make a submissive feel inferior
          to their Dominant to not be treated as an equal person in polite
          society, which can be an arousing feeling for many submissives.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Smell</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          Being gigantic around a tiny, you would assume that smells might be
          more pronounced, so it's no surprise that bodily smells also play a
          big role in sizeplay for many tinies who yearn to be overwhelmed any
          way possible by their Giant. You may be surprised to see how many
          submissive women out there enjoy the smell of men's armpits, crotches,
          and feet, among other places. If you are a Dominant who enjoys using
          your smell to tease or torture your submissives, make sure to ask your
          partner what they think first, as a person who is grossed-out easily
          isn't always a clear indication that they are turned off by bodily
          smells during sex. Make sure to start off slow, as your submissive may
          have preferences. She might be comfortable with your underwear tied
          around her face, but not stuffed in her mouth. She might be
          comfortable with you demanding that she smell your armpit, but not
          with being forced face-first by you into your armpit. <u>ALWAYS</u>{' '}
          discuss and negotiate your play beforehand.
        </Typography>
        <Typography className={classes.nested} paragraph>
          For the submissives who are shy about sharing this secret with your
          partner - I completely sympathize! If your partner has not on their
          own tried to use their smell in play or sex, in can be very
          intimidating to bring up your interest on your own. Whether that be
          sweat, feet, cum, urine, flatulence, or what he had for lunch, these
          are intimate spaces a submissive may very eagerly want to explore but
          feel embarrassed about due to societal norms. What submissives hope to
          get from their Dominant is their blessing to be intimate with these
          spaces.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Because of these very societal norms, If your partner is open to the
          idea, it’s really important to keep encouraging him that what he’s
          doing is acceptable and wanted behavior. They may have their own
          hang-ups over their own body odor, and explaining to them that you
          enjoy it whether they perceive it as ‘good’ or ‘bad’ doesn’t matter to
          you. Smell can actually have a very powerful effect on the brain
          during sex, and using it as a tool for humiliation can be very
          effective at enhancing orgasms.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Touch</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          Touch can also have a big impact on sexual arousal, and thankfully
          with some very basic tools, even touch from a normal sized partner can
          provide the Giant or tiny sensations you are craving. One of the most
          accessible tools many people have laying around their home is a
          blindfold. Keeping someone from seeing their surroundings can help
          tremendously in spiriting them away into another reality.
        </Typography>
        <Typography className={classes.nested} paragraph>
          My husband may use his foot or fist to represent his proding
          fingertip. Submissives could use their fingers to ‘walk along’ their
          partner’s body to simulate a tiny taking a stroll. It can also be done
          with a hand job as well, and other light, one-handed touches. Being
          blindfolded also allows us to recreate reality. For example, a hardy
          slap on the ass could be described by the Dominant as a tiny flick.
          Without seeing the stimuli, it’s easier for the submissive to suspend
          belief. Eye-masks also make monologuing and building anticipation
          easier as well.
        </Typography>
        <Typography className={classes.nested} paragraph>
          There are plenty of other tools out there that provide interesting
          touch sensations like whips, paddles, candle wax, electro prods and so
          much more! The shower is also a fun place to get certain touch
          sensations in for submissives. A wet, full-body groping from a
          Dominant can feel like Giant tongue getting very personal. A gushing
          hot shower head can feel like a humiliating cum or piss bath.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Demands</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          If your or your partner are into bondage or caging, the Dominant would
          naturally want to do it by force or authority. Unfortunately, because
          you and your partner are roughly similar in size, some size scenarios
          may be awkward to play out in reality. Some methods of working around
          this is by using demands. Some submissives might not be eager to
          submit at first, so starting your play with the submissive already in
          some light bondage (i.e. handcuffs) might give you the advantage
          needed as the Dominant to easily put her in her place. In the end,
          this is what we submissive women are craving, to be the loser in this
          battle with our Dominant. Using demands can be a useful, touch-free
          tool that can also be used in conjunction with blindfolds.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Another tool to help in defying reality is{' '}
          <Link
            href="https://www.mindbodygreen.com/articles/erotic-hypnosis-guide"
            target="_blank"
          >
            erotic hypnosis
          </Link>
          . And no, I’m not talking about taking out a swirly wheel and asking
          your partner repeatedly if they’re feeling sleepy. There are
          techniques used by the Hypno-kink community that help submissives
          reach a temporary altered state of mind. Having reached subspace many
          times myself, I could see how a submissive who truly lets go mentally
          for their Dominant can be persuaded to believe just about anything.
          Including momentarily that I am only a few inches tall. Or that I must
          stand still as I’m tied up with “dental floss”. Or that I will be
          crushed to death if I don’t follow my Dominants directions. I don’t
          have much experience with Hypno-kink myself, but I encourage you to do
          some research if this is a technique that piques your interest.
        </Typography>
        <Typography variant="h6" gutterBottom>
          <b>⦿ Using Technology to Immerse Yourself</b>
        </Typography>
        <Typography className={classes.nested} paragraph>
          While technology might not be exactly where we need it to be to fulfil
          our deepest fantasies, there is some tech out there that can at least
          scratch the itch. One of my favorite technologies is Virtual Reality.
          Nowadays VR technology has become more affordable, with sets like the
          Oculus Quest costing less than $300. With Virtual Reality you can put
          yourself in Giant or tiny avatars throughout several free to play
          games, including one of the most popular: VRchat. While the technology
          is limited, the effect can really trick your brain into thinking you
          have a Giant or tiny person standing before you.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Although not much use for tinies, Augmented Reality apps can be a fun
          tool for Giants to play out their fantasies too. On the flipside, 360
          cameras may not offer Giants much, but for a submissive, it can fully
          immerse them in their shrunken world.
        </Typography>
        <Typography className={classes.nested} paragraph>
          Believe it or not, phone calls and photos can also be a convincing way
          to play out your fantasy too. For example, some Giants like to speak
          to their partners with their phone in their shirt pocket. They can
          easily imagine the voice coming from the phone as their partner sits
          snugly in their pocket. Photo sharing apps are also an excellent way
          to trick your partner into believing they are Giant or tiny. POV
          photos and videos that make the viewer feel small or big are very
          easily obtained without any special effects or filters. If you’re
          worried about saving such media, the SnapChat app will delete these
          for you after you’ve seen them.
        </Typography>
      </Box>
      <Divider variant="middle" />
      <Box width="100%" p={3}>
        <SubMessage
          // variant="h6"
          align="center"
          paragraph
        >
          In conclusion, fight for love, because you deserve it! Thank you for
          reading, and I hope you find this information useful and a helpful
          start to your kinky journey.
        </SubMessage>
        <SubMessage
          // variant="h6"
          align="center"
          paragraph
        >
          Good luck, and may your naughty wishes come true!
        </SubMessage>
        <Typography align="center" paragraph>
          - Jitensha
        </Typography>
      </Box>
      <Copyright />
    </Container>
  );
};

export default KinkResources;
