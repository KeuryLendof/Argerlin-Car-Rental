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
    }
]

export default Vehiculos;