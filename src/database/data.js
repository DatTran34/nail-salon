const data = {
    services : [
        {
            name: "Acrylic",
            description: "Dip powder is more lightweight than acrylic, which allows it to wear and tear better and last longer",
            menu: [
                {
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },
                {
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },
                {
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },{
                    name: "Full Set Acylic",
                    price: 35
                },
            ]
        }, {
            name: "Dipping Power",
            description: "Dip powder is more lightweight than acrylic, which allows it to wear and tear better and last longer",
            menu: [
                {
                    name: "Full Set Dipping Power 1",
                    price: 35
                },{
                    name: "Full Set Dipping Power 2",
                    price: 35
                },{
                    name: "Full Set Dipping Power 3",
                    price: 35
                },
            ]
        }, {
            name: "Gel Nail",
            description: "Dip powder is more lightweight than acrylic, which allows it to wear and tear better and last longer",
            menu: [
                {
                    name: "Full Set Gel Nail 1 ",
                    price: 35
                },{
                    name: "Full Set Gel Nail 2",
                    price: 35
                },{
                    name: "Full Set Gel Nail 3",
                    price: 35
                },
            ]
        },
    ],
    openingHour:[
        {
            date:"Monday - Thursday",
            time: "10:00 am - 8:00 pm "
        },
        {
            date:"Friday",
            time: "9:00 am - 8:00 pm "
        },
        {
            date:"Saturday",
            time: "9:00 am - 8:00 pm "
        },
        {
            date:"Sunday",
            time: "Closed"
        },
    ]
};
const reviews = [
    {
        name: "Christian Nguyen",
        img: require('../images/ava1.jpg').default,
        comment: "They do an awesome job especially with dip powder gel",
        star: 5
    },
    {
        name: "Cindy Keith",
        img: require('../images/ava2.jpg').default,
        comment: "Awesome people.. priced just right and they definitely take of me!!",
        star: 5
    },
    {
        name: "Victoria Hills",
        img: require('../images/ava3.jpg').default,
        comment: "Very friendly staff, great prices, great atmosphere.",
        star: 4
    },
    {
        name: "Phillipa Rodriquez",
        img: require('../images/ava4.jpg').default,
        comment: "Very friendly staff, great prices, great atmosphere.",
        star: 5
    },
]
export {
    data,
    reviews
}