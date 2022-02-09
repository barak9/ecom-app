
const initState = {
    products: [
        {id: 1, name: 'HP Pavilion Gaming 10th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'https://in-media.apjonlinecdn.com/catalog/product/cache/b3b166914d87ce343d4dc5ec5117b502/2/1/21c1_pavilion_trixie_14_naturalsilver_frontfacing_1_3.png', price: 5000, discount: 40,
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

        {id: 2, name: 'Lanavo Development 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'acer.jpg', price: 6000, discount: 41,
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

        {id: 3, name: ' Dell Professional 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'dell.jpg', price: 6000, discount: 50,
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

        {id: 4, name: 'Acer Desginer 7th Gen Intel Core i5 14-inch (34.6 cms) FHD Gaming', image: 'acer.jpg', price: 6000, discount: 25,
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

        {id: 5, name: 'HP Desktop Computer Bundle with Intel i3 Duo Processor 8GB of RAM DVD 300Mps Wifi', image: 'dekstop1.jpeg', price: 6000, discount: 50,
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

        {id: 6, name: 'Dell Desktop Computer Bundle with Intel i5 Processor 8GB of RAM DVD 300Mps Wifi', image: 'dell-desktop.jpg', price: 6000, discount: 50,
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

        {id: 7, name: 'Lenovo Desktop Computer Bundle with Intel i5 Processor 8GB of RAM DVD 300Mps Wifi', image: 'lenovo-desktop.jpg', price: 6000, discount: 50,
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
       HardDiskSize:"256GB SSD"
    
    
    
    },

        {id: 8, name: 'Acer Desktop Computer Bundle with Intel i7 Processor 8GB of RAM DVD 300Mps Wifi', image: 'acer-Desktop.jpg', image: 'acer-Desktop.jpg', price: 6000, discount: 50,
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