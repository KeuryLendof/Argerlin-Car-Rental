import React from 'react';
import './style.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Card, Image, Text, Group, Badge, createStyles, Center, Button } from '@mantine/core';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";



const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '140px',
    borderBottom: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: -0.25,
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: 5,
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

function Cards({vehiculos}) {

  const { classes } = useStyles();

  return (
    <div className='produtive'>
      <article>
        <h3>Mas rentados</h3>
        <hr />
      </article>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {vehiculos.map((v)=>{
          return(
            <SwiperSlide>
              <Card withBorder radius="md" className="cards">
                <Card.Section className={classes.imageSection}>
                  <Image src={v.imagen} alt="Tesla Model S" />
                </Card.Section>
        
                <Group position="apart" mt="md">
                  <div>
                    <Text weight={500}>{v.nombre}</Text>
                    <Text size="xs" color="dimmed">
                      {v.subtitulo}
                    </Text>
                  </div>
                  <Badge variant="outline">{v.descuento}</Badge>
                </Group>
        
                <Card.Section className={classes.section} mt="md">
                  <Text size="sm" color="dimmed" className={classes.label}>
                    Basic configuration
                  </Text>
        
                  <Group spacing={8} mb={-8}>
                    {v.configuraciones.map((feature)=>{
                      return(
                        <Center key={feature.label}>
                          <feature.icon size={18} className={classes.icon} />
                          <Text size="xs">{feature.label}</Text>
                        </Center>
                      )
                    })}
                  </Group>
                </Card.Section>
        
                <Card.Section className={classes.section}>
                  <Group spacing={30}>
                    <div>
                      <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                        {v.precio}
                      </Text>
                      <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                        per day
                      </Text>
                    </div>
        
                    <Button radius="xl" style={{ flex: 1 }}>
                      Rent now
                    </Button>
                  </Group>
                </Card.Section>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <article>
        <h3>Mas economico</h3>
        <hr />
      </article>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {vehiculos.map((v)=>{
          return(
            <SwiperSlide>
              <Card withBorder radius="md" className="cards">
                <Card.Section className={classes.imageSection}>
                  <Image src={v.imagen} alt="Tesla Model S" />
                </Card.Section>
        
                <Group position="apart" mt="md">
                  <div>
                    <Text weight={500}>{v.nombre}</Text>
                    <Text size="xs" color="dimmed">
                      {v.subtitulo}
                    </Text>
                  </div>
                  <Badge variant="outline">{v.descuento}</Badge>
                </Group>
        
                <Card.Section className={classes.section} mt="md">
                  <Text size="sm" color="dimmed" className={classes.label}>
                    Basic configuration
                  </Text>
        
                  <Group spacing={8} mb={-8}>
                    {v.configuraciones.map((feature)=>{
                      return(
                        <Center key={feature.label}>
                          <feature.icon size={18} className={classes.icon} />
                          <Text size="xs">{feature.label}</Text>
                        </Center>
                      )
                    })}
                  </Group>
                </Card.Section>
        
                <Card.Section className={classes.section}>
                  <Group spacing={30}>
                    <div>
                      <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                        {v.precio}
                      </Text>
                      <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                        per day
                      </Text>
                    </div>
        
                    <Button radius="xl" style={{ flex: 1 }}>
                      Rent now
                    </Button>
                  </Group>
                </Card.Section>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
      <article>
        <h3>Alta Gama</h3>
        <hr />
      </article>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 35,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 45,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {vehiculos.map((v)=>{
          return(
            <SwiperSlide>
              <Card withBorder radius="md" className="cards">
                <Card.Section className={classes.imageSection}>
                  <Image src={v.imagen} alt="Tesla Model S" />
                </Card.Section>
        
                <Group position="apart" mt="md">
                  <div>
                    <Text weight={500}>{v.nombre}</Text>
                    <Text size="xs" color="dimmed">
                      {v.subtitulo}
                    </Text>
                  </div>
                  <Badge variant="outline">{v.descuento}</Badge>
                </Group>
        
                <Card.Section className={classes.section} mt="md">
                  <Text size="sm" color="dimmed" className={classes.label}>
                    Basic configuration
                  </Text>
        
                  <Group spacing={8} mb={-8}>
                    {v.configuraciones.map((feature)=>{
                      return(
                        <Center key={feature.label}>
                          <feature.icon size={18} className={classes.icon} />
                          <Text size="xs">{feature.label}</Text>
                        </Center>
                      )
                    })}
                  </Group>
                </Card.Section>
        
                <Card.Section className={classes.section}>
                  <Group spacing={30}>
                    <div>
                      <Text size="xl" weight={700} sx={{ lineHeight: 1 }}>
                        {v.precio}
                      </Text>
                      <Text size="sm" color="dimmed" weight={500} sx={{ lineHeight: 1 }} mt={3}>
                        per day
                      </Text>
                    </div>
        
                    <Button radius="xl" style={{ flex: 1 }}>
                      Rent now
                    </Button>
                  </Group>
                </Card.Section>
              </Card>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  );
}

export default Cards;