import { GasStation, Gauge, ManualGearbox, Users } from 'tabler-icons-react';

const Vehiculos = [
    {
        id: 1,
        nombre: 'Tesla Model S',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/tesla.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$168.00'
    },
    {
        id: 2,
        nombre: 'Mercedes GLE Coupé',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/mercedesamg.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '3 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$168.00'
    },
    {
        id: 3,
        nombre: 'Mercedes AMG GLE 63 S',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/mercedesamgs.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '2 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$168.00'
    },
    {
        id: 4,
        nombre: '2020 HONDA CR-V',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/honda-cr-v.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$168.00'
    },
    {
        id: 5,
        nombre: 'Kia Sportage 2022',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/kia sportage 2022.png'),
        descuento: '10% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$68.00'
    },
    {
        id: 6,
        nombre: 'Kia Sorento 2022',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/kia sorento 2022.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$50.00'
    },
    {
        id: 7,
        nombre: 'Kia Sorento 2017',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/kia sorento 2017.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$40.00'
    },
    {
        id: 8,
        nombre: 'Kia K5 2014',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/kia k5 2014.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$35.00'
    },
    {
        id: 9,
        nombre: 'Jeep Grand Cherokee 2021',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/jeep grand cherokee.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$110.00'
    },
    {
        id: 10,
        nombre: 'Hyndai Sonata 2011',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/hyndai sonata 2011.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$30.00'
    },
    {
        id: 11,
        nombre: 'Honda Civic Type R',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/Honda Civic Type R.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$50.00'
    },
    {
        id: 12,
        nombre: 'Chevrolet Tahoe 2021',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/chevrolet tahoe 2021.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$170.00'
    },
    {
        id: 13,
        nombre: 'Hyundai Santa Fe 2022',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/2022 Hyundai Santa Fe.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$50.00'
    },
    {
        id: 14,
        nombre: 'Honda Civic 2021',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/2021 Honda Civic.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$45.00'
    },
    {
        id: 15,
        nombre: 'Hyundai Tucson 2019',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/2019 Hyundai Tucson.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        precio: '$40.00'
    },
]

export default Vehiculos;