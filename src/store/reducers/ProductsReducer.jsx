
const initState = {
    products: [
        {id: 1, name: 'HP Pavilion Gaming 10th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'https://cc.cnetcontent.com/vcs/hp/inline-content/KV/0/1/B/3/3/01B33AE71A6375CF4FE037AB49594CB1AC95144B_w_400_hero.jpg', price: 5000, discount: 40,
         discountPrice: 5000 - 2000, quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
    
  Brand : "HP Series", 
 Colour:"Black", 
 ScreenSize :"14Inches", 
 ItemWeight: "2.3Kg", 
 Dimensions:	"59.3 x 39 x 10.3 cm", 
 Batteries:	"1 Lithium ion batteries required", 
 Brand: "Intel", 
 Processor: "Core i5",
RAMSize:"4GB",
HardDiskSize:"256GB SSD"

    
    
    
    },

        {id: 2, name: 'Lanavo Development 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'https://www.lenovo.com/medias/15-Gen-2-Intel-XXTBXTMI500-725x515-logo.png?context=bWFzdGVyfHJvb3R8NzYwNjF8aW1hZ2UvcG5nfGgxYS9oMzkvMTI4NTgzMzkzNjA3OTgucG5nfDdjNGI0M2Y4ZjQ2MTg4NTBiYTkwOTY5N2ExMWYyYzU4ZTc3MDA3YTRiMzFkMWI2MDQ2Y2E0YTMxMmVjMjkzYTU', price: 6000, discount: 41,
         discountPrice: 6000 - 2500 , quantity: 1,
         desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
         Brand : "Lanavo Series", 
 Colour:"Gray", 
 ScreenSize :"14Inches", 
 ItemWeight: "2.3Kg", 
 Dimensions:	"59.3 x 39 x 10.3 cm", 
 Batteries:	"1 Lithium ion batteries required", 
 Brand: "Intel", 
 Processor: "Core i5",
RAMSize:"4GB",
HardDiskSize:"256GB SSD"
        
        },

        {id: 3, name: ' Dell Professional 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'https://m.media-amazon.com/images/I/71y6fc7Tk4L._AC_SY450_.jpg', price: 6000, discount: 50,
         discountPrice: 8000 - 4000 , quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.", Brand : "HP Series", 
        Brand:"Dell", 
        Colour:"Black", 
        ScreenSize :"14Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i5",
       RAMSize:"4GB",
       HardDiskSize:"256GB SSD"
     },

        {id: 4, name: 'Acer Desginer 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'https://www.thestatesman.com/wp-content/uploads/2022/02/comp.jpg', price: 6000, discount: 25,
         discountPrice: 6000 - 1500 , quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
        Brand:"Acer", 
        Colour:"Black", 
        ScreenSize :"14Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i5",
       RAMSize:"4GB",
       HardDiskSize:"256GB SSD" },

        {id: 5, name: 'HP Desktop Computer Bundle with Intel i3 Duo Processor 8GB of RAM DVD 300Mps Wifi', image: 'https://www.hp.com/us-en/shop/app/assets/images/product/20W58AA%23ABA/left_facing.png?_=1638007569591', price: 6000, discount: 50,
         discountPrice: 6000 - 3000, quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
        Brand:"HP Desktop", 
        Colour:"Black", 
        ScreenSize :"17 Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i3",
       RAMSize:"8GB",
       HardDiskSize:"256GB SSD"
    
    
    
    
    },

        {id: 6, name: 'Dell Desktop Computer Bundle with Intel i5 Processor 8GB of RAM DVD 300Mps Wifi', image: 'https://m.media-amazon.com/images/I/61wqsR2wrUL._SX450_.jpg', price: 6000, discount: 50,
         discountPrice: 6000 - 3000 , quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
        Brand:"Dell Desktop", 
        Colour:"Black", 
        ScreenSize :"17 Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i5",
       RAMSize:"8GB",
       HardDiskSize:"256GB SSD"
    
    
    
    
    },

        {id: 7, name: 'Lenovo Desktop Computer Bundle with Intel i5 Processor 8GB of RAM DVD 300Mps Wifi', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOBpJu5y_4HnX82sSLCfDVmTtTs8loy29ZfrRuPm1GeeqbkPqaFr46Sy1-3WRWqfSQlrE&usqp=CAU', price: 6000, discount: 50,
         discountPrice: 6000 - 3000, quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
        Brand:"Lenovo Desktop", 
        Colour:"Black", 
        ScreenSize :"17 Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i5",
       RAMSize:"8GB",
       HardDiskSize:"256GB SSD",
    
    
    
    },

        {id: 8, name: 'Acer Desktop Computer Bundle with Intel i7 Processor 8GB of RAM DVD 300Mps Wifi', image: 'https://static.acer.com/up/Resource/Acer/Desktop/Aspire%20Z%20Series/Aspire_Z_24/Image/20180713/Acer-Aspire-Z24-890-891-preview.png', price: 6000, discount: 50,
         discountPrice: 6000 - 3000, quantity: 1,
        desc: "Lorem Picsum is a service providing easy to use,stylish placeholders. ... It's written in Go, and uses Redis, PostgreSQL and DigitalOcean Spaces.",
        Brand:"Acer Desktop", 
        Colour:"Black", 
        ScreenSize :"17 Inches", 
        ItemWeight: "2.3Kg", 
        Dimensions:	"59.3 x 39 x 10.3 cm", 
        Batteries:	"1 Lithium ion batteries required", 
        Brand: "Intel", 
        Processor: "Core i5",
       RAMSize:"8GB",
       HardDiskSize:"256GB SSD"
    
    
    
    
    
    
    
    },

       
    ],

    product: {}
}


const ProductsReducer = (state = initState, action) =>{
    switch(action.type){
        case 'PRODUCT':
            return {...state, product: state.products.find(product => product.id === parseInt(action.id))}

        default:
            return state;
    }
}

export {ProductsReducer};