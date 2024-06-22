// JavaScript Document

const product = [
    {
        id: 0,
        image: 'images/1.jpg',
        title: 'D01',
        price: 1500,
    },
    {
        id: 1,
        image: 'images/125.jpg',
        title: 'D02',
        price: 2000,
    },
    {
        id: 2,
        image: 'images/N2.jpeg',
        title: 'D03',
        price: 1500,
    },
    {
        id: 3,
        image: 'images/122.jpg',
        title: 'D04',
        price: 1000,
    },
	{
        id: 4,
        image: 'images/121.jpg',
        title: 'D05',
        price: 1500,
    },
	{
        id: 5,
        image: 'images/100.jpg',
        title: 'D06',
        price: 1800,
    },
	
	{
        id: 6,
        image: 'images/110.jpg',
        title: 'D07',
        price: 1700,
    },
	{
        id: 7,
        image: 'images/113.jpg',
        title: 'D08',
        price: 1000,
    }
	
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>Rs. ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "Rs. "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "Rs. "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>Rs ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
