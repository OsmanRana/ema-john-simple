const addToDb  = id => {
// console.log(id)
const exists = getDb ();
let shopping_cart = {};

if (!exists) {
    shopping_cart[id] = 1;
    
}
else {
    shopping_cart = JSON.parse(exists);
    console.log(shopping_cart)
    if(shopping_cart[id]) {
        const newCount = shopping_cart[id];
        console.log(newCount)
        shopping_cart[id] = newCount;
    }
    else {
        shopping_cart[id] = 1;
    }
}
updateCart(shopping_cart)
} 

const getDb = () => {localStorage.getItem('shopping_cart')};
const updateCart = cart => {localStorage.setItem('shopping_cart', JSON.stringify(cart))}

const getStoredCart = () => {
    const exists = getDb();
    return exists ? JSON.parse(exists) : {};
  }

export {addToDb,getStoredCart}