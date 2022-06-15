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
        masFotos:[
            {foto: require('../assets/images/tesla.png')},
            {foto: 'https://th.bing.com/th/id/OIP.omSHB2C-HPHYPb_-_bkj2AHaD4?pid=ImgDet&rs=1'},
            {foto: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/Tesla-Model-S-interior.jpeg?resize=1536,864'},
            {foto: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/S_Yoke_Steering.jpeg'},
            {foto: 'https://i2.wp.com/electrek.co/wp-content/uploads/sites/3/2021/01/S_Game_from_Anywhere.jpeg?strip=info&w=1038&ssl=1'},
            {foto: 'https://electrek.co/wp-content/uploads/sites/3/2021/01/S_Glass_Roof.jpeg'}
        ],
        precio: '$168.00',
        categoria: 'Alta Gama'
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
        masFotos:[
            {foto: require('../assets/images/mercedesamg.png')},
            {foto: 'https://th.bing.com/th/id/R.555d252e28530cc5af850c3f0d64ccf5?rik=n%2f5m7LBAR%2bKbfg&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.wh5lQ_q2azGJkj6NBIPsiQHaE7?pid=ImgDet&rs=1'},
            {foto: ''}
        ],
        precio: '$168.00',
        categoria: 'Alta Gama'
    },
    {
        id: 3,
        nombre: 'AMG GLE 63 S',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/mercedesamgs.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '2 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        masFotos:[
            {foto: require('../assets/images/mercedesamgs.png')},
            {foto: 'https://th.bing.com/th/id/R.555d252e28530cc5af850c3f0d64ccf5?rik=n%2f5m7LBAR%2bKbfg&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.wh5lQ_q2azGJkj6NBIPsiQHaE7?pid=ImgDet&rs=1'}
        ],
        precio: '$168.00',
        categoria: 'Alta Gama'
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
        masFotos:[
            {foto: require('../assets/images/honda-cr-v.png')},
            {foto: 'https://th.bing.com/th/id/R.dbedc30b5030143f48101a2b5241b109?rik=rzu9E5Gfg1lITg&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.68365632e9a6504914620d28cd1b257a?rik=jA3FFZrwApiJCA&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.8gb8tG43stPC-9lB5Uk36QHaE8?pid=ImgDet&rs=1'}
        ],
        precio: '$168.00',
        categoria: 'Mas rentados'
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
        masFotos:[
            {foto: require('../assets/images/kia sportage 2022.png')},
            {foto: 'https://th.bing.com/th/id/R.f59c1eb97c538859f9acf3e5e7cffc4d?rik=QDlwfiesIAlo0A&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.65YXzOmz_tlr1o2R_2daBwHaEh?pid=ImgDet&rs=1'},
            {foto: 'https://th.bing.com/th/id/R.fb87f659b7ea3f38f3d47f85940e49b9?rik=cOMRG%2bYrZdgypA&pid=ImgRaw&r=0'}
        ],
        precio: '$68.00',
        categoria: 'Mas rentados'
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
        masFotos:[
            {foto: require('../assets/images/kia sorento 2022.png')},
            {foto: 'https://th.bing.com/th/id/R.b667a4f08cfb28b1f0e1eb9bedeb7b67?rik=pXpjJ3Wa%2fw5IQQ&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.d77b78fa36e6451d131e45c727f11b82?rik=Pu6KWcOPRyYc0A&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.xRBPducoL4jv0xLhyjmRMgHaE8?pid=ImgDet&rs=1'}
        ],
        precio: '$50.00',
        categoria: 'Mas rentados'
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
        masFotos:[
            {foto: require('../assets/images/kia sorento 2017.png')},
            {foto: 'https://th.bing.com/th/id/R.448491540e331bd51bbb82ef69d3b294?rik=QFM8IQ%2fQEauztA&pid=ImgRaw&r=0'}
        ],
        precio: '$40.00',
        categoria: 'Mas rentados'
    },
    {
        id: 8,
        nombre: 'Kia K5 2014',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/kia k5 2014.png'),
        descuento: '10% OFF',
        configuraciones:[
            { label: '5 passengers', icon: Users },
            { label: 'Up to 290 HP', icon: Gauge },
            { label: 'Traction Enhancingx', icon: ManualGearbox },
            { label: '29/38 City/Hwy', icon: GasStation }
        ],
        masFotos:[
            {foto: require('../assets/images/kia k5 2014.png')},
            {foto: 'https://di-uploads-pod18.dealerinspire.com/gurleyleepkia/uploads/2020/07/Kia_K5_Interior_Dashboard.jpg'},
            {foto: 'https://di-uploads-pod18.dealerinspire.com/gurleyleepkia/uploads/2020/07/Kia_K5_Cabin_Space-364x364.jpg'}
        ],
        precio: '$35.00',
        categoria: 'Mas economico'
    },
    {
        id: 9,
        nombre: 'Grand Cherokee 2021',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/jeep grand cherokee.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '4 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        masFotos:[
            {foto: require('../assets/images/jeep grand cherokee.png')},
            {foto: 'https://imgcdn.zigwheels.my/large/gallery/interior/40/1379/jeep-cherokee-srt-steering-wheel-513462.jpg'},
            {foto: 'https://imgcdn.zigwheels.my/large/gallery/interior/40/1379/jeep-cherokee-srt-front-ac-controls-561685.jpg'}
        ],
        precio: '$110.00',
        categoria: 'Alta Gama'
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
        masFotos:[
            {footo: require('../assets/images/hyndai sonata 2011.png')},
            {foto: 'https://th.bing.com/th/id/R.62bbaf705d03362f124cea0d778655ca?rik=I4EIQOvdEOkHJA&riu=http%3a%2f%2f3.bp.blogspot.com%2f-kyfUlrn9YBs%2fTi44K0MdUsI%2fAAAAAAAABzE%2fMecVOGWWxuQ%2fs1600%2ftirekicker.blogspot.com2011hyundaisonataseinterior.jpg&ehk=qTbCB4AYtyIsbn3DQ8bWQo64wBonJDUYkPaDrdqKhzo%3d&risl=&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.c467dd48701b40f45b34134e6600e8ba?rik=OVaDxxMZ6qayNQ&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.b07fb7af2413914e5dae8d09f6c8539e?rik=lBvzb21cjSZdjw&riu=http%3a%2f%2f4.bp.blogspot.com%2f_3Nq7CKYaRdQ%2fTLtj1OHq7OI%2fAAAAAAAAXWs%2fc3-IfAH21rY%2fw1200-h630-p-k-no-nu%2f2011_Hyundai_Sonata_interior.jpg&ehk=gdlyPYdQDLWft0X%2bHmGTyyMNVRvJMbDHONHbCfu60hk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1'}
        ],
        precio: '$30.00',
        categoria: 'Mas economico'
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
        masFotos:[
            {foto: require('../assets/images/Honda Civic Type R.png')},
            {foto: 'https://th.bing.com/th/id/R.603d5e31f971c21a461f69cd287387df?rik=TBUfbtVxeLCdPw&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/OIP.K9NuDBXxcZUEn_sO0Zk4ggHaE8?pid=ImgDet&rs=1'},
            {foto: 'https://th.bing.com/th/id/R.77c514e60c7022eb25b4d7e8aaef0f47?rik=t8PQPNKXTQbHFw&pid=ImgRaw&r=0'}
        ],
        precio: '$50.00',
        categoria: 'Alta Gama'
    },
    {
        id: 12,
        nombre: 'Chevrolet Tahoe 2021',
        subtitulo: 'Free recharge at any station',
        imagen: require('../assets/images/chevrolet tahoe 2021.png'),
        descuento: '20% OFF',
        configuraciones:[
            { label: '7 passengers', icon: Users },
            { label: '100 km/h in 4 seconds', icon: Gauge },
            { label: 'Automatic gearbox', icon: ManualGearbox },
            { label: 'Electric', icon: GasStation }
        ],
        masFotos:[
            {foto: require('../assets/images/chevrolet tahoe 2021.png')},
            {foto: 'https://th.bing.com/th/id/R.7ebfa89e88701610d4f33df53c991504?rik=XH6ajKYKT6FO4Q&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.138344edf23085e095e6b2fc23e22702?rik=SmdPb7aWWwTT3A&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.766db80c83740d8f4cd0088ee004b8b1?rik=2rrbakFPU9iHnw&pid=ImgRaw&r=0'}
        ],
        precio: '$170.00',
        categoria: 'Alta Gama'
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
        masFotos:[
            {foto: require('../assets/images/2022 Hyundai Santa Fe.png')},
            {foto: 'https://th.bing.com/th/id/R.c8444a5dd7f14473fa115472af56bfd8?rik=1BzsWIkgRWewJg&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.71a42e35df5572ca7213d6910dabf2f1?rik=jUjqCA4tH17juA&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.e8ba155922e9df3eef0147de0dfcd8be?rik=C4ZFhunVYzyqmw&pid=ImgRaw&r=0'}
        ],
        precio: '$50.00',
        categoria: 'Mas rentados'
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
        masFotos:[
            {foto: require('../assets/images/2021 Honda Civic.png')},
            {foto: 'https://th.bing.com/th/id/R.58d618fa53511b0484f75bcc3a770d87?rik=Id2ZsnhxFeFWMA&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.62ee7dfaf5f4eb019209fc4401c12006?rik=S2NLwz4Igm0gxA&pid=ImgRaw&r=0'}
        ],
        precio: '$45.00',
        categoria: 'Mas rentados'
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
        masFotos:[
            {foto: require('../assets/images/2019 Hyundai Tucson.png')},
            {foto: 'https://th.bing.com/th/id/R.6538eb31db905e282179c6da5030e558?rik=6pwzpZ47CznFWw&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.a638a00119c3b3fc5b1d650313060509?rik=OutSK%2fDor64nyw&pid=ImgRaw&r=0'}
        ],
        precio: '$40.00',
        categoria: 'Mas economico'
    },
    {
        id: 16,
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
        masFotos:[
            {foto: require('../assets/images/2019 Hyundai Tucson.png')},
            {foto: 'https://th.bing.com/th/id/R.6538eb31db905e282179c6da5030e558?rik=6pwzpZ47CznFWw&pid=ImgRaw&r=0'},
            {foto: 'https://th.bing.com/th/id/R.a638a00119c3b3fc5b1d650313060509?rik=OutSK%2fDor64nyw&pid=ImgRaw&r=0'}
        ],
        precio: '$40.00',
        categoria: 'Mas economico'
    }
]

export default Vehiculos;