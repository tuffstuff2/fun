let hotel = [

    // 1 этаж //

    [
    {
    room: 1,
    price: 300,
    brand: "Luxe",
    children: false,
    },
    {
    room: 2,
    price: 4000,
    brand: "Deluxe",
   children: true,
    },
    {
    room: 3,
    price: 1000,
    brand: "Deluxe",
    children: false,
    },
    {
   room: 4,
    price: 900,
   brand: "Luxe",
    children: true,
    },
    ],

    // 2 этаж //

    [
    {
    room: 5,
    price: 700,
    brand: "Luxe",
    children: true,
   },
    {
   room: 6,
    price: 79000,
    brand: "President",
    children: true,
    },
   {
    room: 7,
    price: 600,
    brand: "Luxe",
    children: false,
   },
    {
    room: 8,
    price: 950,
    brand: "Luxe",
    children: true,
    },
    ],

     // 3 этаж //

    [
    {
    room: 9,
    price: 1900,
    brand: "Deluxe",
    children: false,
    },
   {
    room: 10,
    price: 5000,
   brand: "Deluxe",
    children: true,
    },
    {
    room: 11,
    price: 1000,
    brand: "Deluxe",
    children: false,
    },
   {
    room: 12,
    price: 250,
    brand: "Luxe",
    children: false,
    },
    ],

     // 4 этаж //

    [
    {
    room: 13,
    price: 10000,
    brand: "President",
    children: true,
    },
    {
    room: 14,
    price: 8000,
    brand: "President",
    children: false,
    },
    ],
   ];
  
   let rooms = {
    all_roms: [],
   rooms: 0,
   };
   let brands = {
    president: [],
    deluxe: [],
    luxe: [],
   };
  
   let room_level = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
   };
 
let fun = function(){
   let child_room = []

   // 1 задание //
for(let item of hotel){
  for(let i of item){
   let branding = i.brand
   if(branding == "President"){
       brands.president.push(branding)
   }else if(branding == "Deluxe"){
   brands.deluxe.push(branding)
}else if(branding == "Luxe"){
   brands.luxe.push(branding)
}else{
   break
}
}

// 2 задание //
for(let eat of item){
   eat.eating = true
}
  

// 3 задание //
for(let rum of item){
   rooms.all_roms.push(rum.room)
   rooms.all_roms.sort((a, b)=> a - b)
   rooms.rooms++
}
  
// 7 задание //

   for(let chl of item){
       if(chl.children == true){
           child_room.push(chl)
       }else{
          
       }
   }
  
}




// 4 задание //
let max_price = hotel.flat().sort((a, b) => a.price - b.price );
let ma_price = max_price.pop()

  
// 5 задание //

for (let item = 0; item < hotel.length; item++) {
    let floor_price = 0;
   for (let i = 0; i < hotel[item].length; i++) {
    floor_price += hotel[item][i].price;
    }
    if (item === 0) {
    room_level.perviy = floor_price;
    } else if (item === 1) {
   room_level.vtoroy = floor_price;
    } else if (item === 2) {
    room_level.tretiy = floor_price;
    } else if (item === 3) {
   room_level.chetvertiy = floor_price;
    }else{
       break
   }
   }

   // 6 задание //
let all_price = hotel.flat().reduce((a, b) => a + b.price, 0)


console.log(room_level);
console.log(brands);
console.log(rooms);
console.log(child_room);
console.log(all_price);
console.log(ma_price);
}
console.log(fun())
 
 
 
 
 
 let discount = +prompt('Какая скидка?')

let totalSale = 0

let total = 0

let max = {
    name: '',
    pricee: 0,
}

let min = {
    name: '',
    pricee: 0,
}

let average = 0

let arr = [

{

name: 'Milk',

price: 3.25

},

{

name: 'Coffee',

price: 1.5

},

{

name: 'Ice Cream',

price: 7.85

},

{

name: 'Tomatos',

price: 4.14

},

{

name: 'Onion',

price: 2.25

}

]

let arr_sale = []

// 1. Сохранить самый дорогой товар в переменнуюmax*

// 2. Сохранить самый дешевый товар в переменнуюmin*

// 3. Сохранить общую цену без скидок в переменнуюtotal*

// 4. Сохранить общую цену со скидкой в переменнуюtotalSale*

// 5. Сохранить элементы из массива arr с обновленной ценой (цена со скидкой) в переменную arr_sale*

// 6. Сохранить в переменнойaverage среднюю цену всех продуктов без скидок*
function store(){
for(let i of arr){
    total += i.price
    totalSale = total - (total / 100 * discount)
    let ar = i.price - (i.price / 100 * discount) 
    arr_sale.push(`Цена со скидкой ${discount}% на продукт ${i.name} составляет ${ar}`)
    average = total / arr.length
}
let maxx = arr.flat().sort((a, b)=> a.price - b.price)
max = maxx.pop()
let minn = arr.flat().sort((a, b)=> a.price - b.price)
min = minn.shift()

 console.log(max)
 console.log(min)
 console.log(total);
 console.log(totalSale);
 console.log(arr_sale);
 console.log(average);
}
    
console.log(store());
