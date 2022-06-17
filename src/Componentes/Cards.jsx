import { useState } from 'react';
import './style.css'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import swal from 'sweetalert';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, Grid, TextInput, Checkbox, Box,  NumberInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { ShoppingCartPlus } from 'tabler-icons-react';
import { useModals } from '@mantine/modals';
import { DateRangePicker } from '@mantine/dates';
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
  const modals = useModals();
  const [value, setValue] = useState('')

  const rentNow=({nombre, imagen})=>{
    // if(value.length===0){
    //   swal("Oops", "Tienes que colocar cuantos dias quieres rentar!", "error")
    // }else{
    //   console.log(value)
    // }
    console.log(`Estas rentando un/a: ${nombre} `, imagen)
    swal("Bien hecho!", "Su renta esta en proceso!", "success")
  }

  //console.log(value)
  const openContentModal = (name, img) => {
    modals.openModal({
      title: `${name}`,
      size: "lg",
      children: (
        <>
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            breakpoints={{
              700: {
                slidesPerView: 1,
              },
            }}
            modules={[Pagination, Navigation]}
            className="mySwiperMas"
          >
            {img.map((f)=>{
              return(
                <SwiperSlide>
                  <Image
                    style={{justifyContent:'center', alignItems:'center'}}
                    radius="md"
                    src={f.foto}
                    alt={name}
                  />
                </SwiperSlide>
              )
            })}
            <br />
          </Swiper>
          <Grid justify="center" align="center">
            <Grid.Col md={8}>
              <DateRangePicker
                // label="Cuantos dias quieres rentar?"
                placeholder="Cuantos dias quieres rentar?"
                onChange={setValue}
              />
            </Grid.Col>
            <Grid.Col md={3}>
              <Button 
                component="a" 
                // target="_blank"
                // rel="noopener noreferrer"
                // href="https://twitter.com/mantinedev"
                onClick={()=>rentNow({nombre:name, imagen:img[0]})}
                variant="outline"
                leftIcon={<ShoppingCartPlus size={18} />}
              >
                Rent now
              </Button>
            </Grid.Col>
          </Grid>
        </> 
      ),
    });
  };

  return (
    <div className='produtive'>
      <article>
        <h3>Más rentados</h3>
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
        {vehiculos.map((v) => {
          if (v.categoria === 'Mas rentados') {
            return (
              <SwiperSlide className='probando'>
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
                      {v.configuraciones.map((feature) => {
                        return (
                          <Center key={feature.label}>
                            <feature.icon size={18} className={classes.icon} />
                            <Text size="xs">{feature.label}</Text>
                          </Center>
                        );
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

                      <Button onClick={()=>openContentModal(v.nombre, v.masFotos)} radius="xl" style={{ flex: 1 }}>
                        Rent now
                      </Button>
                    </Group>
                  </Card.Section>
                </Card>
              </SwiperSlide>
            );
          }
        })}
        <br />
      </Swiper>
      <article>
        <h3>Más económico</h3>
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
        {vehiculos.map((v) => {
          if (v.categoria === 'Mas economico') {
            return (
              <SwiperSlide className='probando'>
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
                      {v.configuraciones.map((feature) => {
                        return (
                          <Center key={feature.label}>
                            <feature.icon size={18} className={classes.icon} />
                            <Text size="xs">{feature.label}</Text>
                          </Center>
                        );
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

                      <Button onClick={()=>openContentModal(v.nombre, v.masFotos)} radius="xl" style={{ flex: 1 }}>
                        Rent now
                      </Button>
                    </Group>
                  </Card.Section>
                </Card>
              </SwiperSlide>
            );
          }
        })}
        <br />
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
        {vehiculos.map((v) => {
          if (v.categoria === 'Alta Gama') {
            return (
              <SwiperSlide className='probando'>
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
                      {v.configuraciones.map((feature) => {
                        return (
                          <Center key={feature.label}>
                            <feature.icon size={18} className={classes.icon} />
                            <Text size="xs">{feature.label}</Text>
                          </Center>
                        );
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

                      <Button onClick={()=>openContentModal(v.nombre, v.masFotos)} radius="xl" style={{ flex: 1 }}>
                        Rent now
                      </Button>
                    </Group>
                  </Card.Section>
                </Card>
              </SwiperSlide>
            );
          }
        })}
        <br />
      </Swiper>
    </div>
  );
}

export default Cards;