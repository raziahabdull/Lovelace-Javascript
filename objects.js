const cup = {
    color:"red",
    size:"small",
    shape:"cylindrical",
     functionality:{
        drinkType:"tea",
        temperature:"hot"
     },
     design: ['floral','polka','checked'],
     drink:function(){
        console.log('use me to drink tea');
         console.log(`My main use is to drink ${}`);
     }
};
console.log('size',cup.size);
console.log({design : cup.design[0]});
console.log('shape',cup['shape']);
console.log('drinktype', cup.functionality.drinkType);
console.log('temperature',cup.functionality.temperature);
console.log('color',cup.color);
console.log('shape', cup.shape);
cup.drink();
const values = Object.values(cup);
console.log({values});

const keys = Object.keys(cup);
console.log({keys});
