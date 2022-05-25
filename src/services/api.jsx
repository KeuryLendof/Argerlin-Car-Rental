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
        nombre: 'Tesla Model E',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/tesla.png'),
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
        nombre: 'Tesla Model X',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/tesla.png'),
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
        nombre: 'Tesla Model O',
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
    }
]

export default Vehiculos;