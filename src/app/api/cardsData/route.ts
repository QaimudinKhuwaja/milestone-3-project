import { NextResponse } from "next/server"

export async function GET() {
    return NextResponse.json([
        {
            id:1,
            slug:"product1",
            title:"Vacheron Constantin",
            price:51.98,
            image:'/pro1.png',
        },
        {
            id:2,
            slug:"product2",
            title:"Jaeger-LeCoultre",
            price:73.82,
            image:'/pro9.png',
        },
        {
            id:3,
            slug:"product3",
            title:"Cartier Omega",
            price:91.63,
            image:'/pro3.png',
        },
        {
            id:4,
            slug:"product4",
            title:"Audemars Piguet",
            price:72.93,
            image:'/pro4.png',
        },
        {
            id:5,
            slug:"product5",
            title:"Patek Philip",
            price:72.93,
            image:'/pro8.png',
        },
        {
            id:6,
            slug:"product6",
            title:"Baume & Mercier",
            price:94.43,
            image:'/pro6.png',
        },
        {
            id:7,
            slug:"product7",
            title:"Baume & Mercier",
            price:46.93,
            image:'/pro7.png',
        },
        {
            id:8,
            slug:"product8",
            title:"Baume & Mercier",
            price:25.87,
            image:'/pro8.png',
        },
        {
            id:9,
            slug:"product9",
            title:"Baume & Mercier",
            price:86.34,
            image:'/pro10.png',
        },
        {
            id:10,
            slug:"product10",
            title:"Baume & Mercier",
            price:78.23,
            image:'/pro11.png',
        },


    ],
    {status:200}

)
}