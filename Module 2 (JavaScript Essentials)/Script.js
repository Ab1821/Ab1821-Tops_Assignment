

let quantity1 = document.getElementById('quantity1')
let showprice1 = document.getElementById('showprice1')
const btnRemove1 = document.getElementById('btnRemove1')
const quantity2 = document.getElementById('quantity2')
const showprice2 = document.getElementById('showprice2')
const btnRemove2 = document.getElementById('btnRemove2')
const subtotal = document.getElementById('showsubtotal')

function displayPrice() {

    let x = quantity1.value * 29.99;
    showprice1.textContent = Number(x);

    let y = quantity2.value * 12.99
    showprice2.textContent = Number(y);

    let total = (x + y).toFixed(2);
    console.log(total);

    subtotal.textContent = `$${total}`;

}
function remove1() {
    if (quantity1.value > 0) {
        quantity1.value--
        displayPrice();

    }

}
function remove2() {
    if (quantity2.value > 0) {
        quantity2.value--
        displayPrice();

    }
}

/* Different way

let quant1 = document.getElementById('quantity1').value;
let price1 = document.getElementById('price1').innerHTML;


function displayPrice() {
    // let quant1 = document.getElementById('quantity1').value;
    // const price1 = document.getElementById('price1').innerHTML;
    console.log(quant1, price1);
    document.getElementById('showprice1').innerHTML = showprice1;

    const quant2 = document.getElementById('quantity2').value;
    const price2 = document.getElementById('price2').innerHTML;
    document.getElementById('showprice2').innerHTML = showprice2;

    const x = quant1 * price1.replace('$', '');
    // const p1 = `$${x * quant1}`;
    let a = showprice1.textContent = `$${x}`;
    // alert(x);
    document.getElementById('showprice1').innerHTML = a;

    // const y = price2.replace('$', '');
    // showprice2.textContent = `$${y * quant2}`;

    const y = quant2 * price2.replace('$', '');
    // const p2 = `$${y * quant2}`;
    let b = showprice2.textContent = `$${y}`;
    document.getElementById('showprice2').innerHTML = b;

    document.getElementById('showsubtotal').innerHTML = showsubtotal;
    showsubtotal.textContent = `$ ${(x + y).toFixed(2)}`;

    let btnRemove1 = document.getElementById('btnRemove1');
    // let btn2 = document.getElementById('btnRemove2').value;

    // btnRemove1.addEventListener('click', function () {
    //     if (quant1 > 0) {
    //         quant1--;

    //         showprice1.textContent = `$${quant1 * price1.replace('$', '')}`;;
    //         // console.log(quant1);

    //         document.getElementById("quantity1").value = quant1;



    //     }
    // });
}
btnRemove1.addEventListener('click', function () {
    if (quant1 > 0) {
        quant1--;

        showprice1.textContent = `$${quant1 * price1.replace('$', '')}`;
        // console.log(quant1);

        document.getElementById("quantity1").value = quant1;

    }
});

// let btn1 = document.getElementById('btnRemove1').value;
// let btn2 = document.getElementById('btnRemove2').value;

// // btnRemove1.addEventListener('click', () => {
// //     quant1--
// // })

// // console.log(btn1);
// const removeQuantity = function () {
//     if (quant1 > 0) {
//         quant1--
//     }
// }


*/
// btnRemove1.addEventListener('click', function () {
//     if (quantity1 > 0) {
//         quantity1.value--
//         showprice1.textContent = x;
//         console.log('clicked');
//     }
//     else {
//         console.log('not clicked');

//     }
// })

