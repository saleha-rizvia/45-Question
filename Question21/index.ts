type item = {
         // properties
     name : string ;
     description : string ;
     price : number ;
    
};

const objectsContainingItems = {

    object1:{
        item1:{
            name : 'laptop',
            description : 'thin and powerful laptop with SSD storage',
            price : 50000,
        },
        item2:{
            name : 'headphones',
            description : 'easy to use with high speed',
            price : 5000,
        }
    },
    
    object2:{
        item1:{
            name : 'smartphone',
            description : 'high speed',
            price : 25000,
        },
        item2:{
            name : 'smartwatch',
            description : 'easy to use',
            price : 10000,
        }
    }
};
    console.log(objectsContainingItems);
    