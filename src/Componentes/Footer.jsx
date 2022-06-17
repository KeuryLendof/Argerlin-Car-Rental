import React from 'react';
import { createStyles, Container, Group, ActionIcon } from '@mantine/core';
import { BrandWhatsapp, BrandFacebook, BrandInstagram } from 'tabler-icons-react';
import './style.css'
// import { MantineLogo } from '../../shared/MantineLogo';

const useStyles = createStyles((theme) => ({
  footer: {
    marginTop: 120,
    borderTop: '2px solid rgb(0, 0, 0)',
    borderRadius: '5% 5% 0 0',
    backgroundColor:'#ff1616de',
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
    color: '#fff'
  },
}));

function Footer() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        {/* <MantineLogo /> */}
        <article className='containerLogoFooter'>
          <a href="/" className="logoFooter">ARGERLIN</a>
        </article>
        <Group spacing={0} className={classes.links} position="right" noWrap>
          <ActionIcon size="lg">
            <BrandWhatsapp size={20} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandFacebook size={20} />
          </ActionIcon>
          <ActionIcon size="lg">
            <BrandInstagram size={20} />
          </ActionIcon>
        </Group>
      </Container>
    </div>
  );
}

export default Footer;