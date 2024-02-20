
//all declarations
const totalSeat = document.getElementById('total-seat');
const seatCount = document.getElementById('seat-count');
const totalPrice = document.getElementById('total-price');
const GrandTotal = document.getElementById('grand-total');
const applyCuponBtn = document.getElementById('apply-btn');
const cuponBox = document.getElementById('cupon-box');


//Create element function
function createElementValue(id, value) {
    let element = document.getElementById(id);
    const h4 = document.createElement('h4');
    h4.innerText = value;
    element.appendChild(h4);
}
//hide element function
function hideElementById(id) {
    const element = document.getElementById(id);
    element.classList.add('hidden');
}
//common function for inner text
function innerTextById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
}
let count = 0;
let arr = [];
//function for click seat button
const seatNumber = document.querySelectorAll("#seat-btn");
for (let seat of seatNumber) {
    seat.addEventListener("click", function (e) {
        //add color
        seat.classList.add("bg-[#2ad40f]");
        seat.classList.add("text-white");
        seat.classList.add("selected");

        //can not buy more than 4 seat  
        count++;
        if (count >= 5) {
            seat.classList.remove("bg-[#2ad40f]");
            seat.classList.remove("text-white");
            return alert("Sorry! You can't buy more than 4 seat.");
        }
        arr.push(e.target.innerText);
        if(arr.includes(e.target.innerText)) {
            
        }
        //decrease seat from total seat number
        let convertedSeat = parseInt(totalSeat.innerText);
        innerTextById('total-seat', convertedSeat - 1);

        //increase the seat badge numbers per click
        let convertedSeatCount = parseInt(seatCount.innerText);
        innerTextById('seat-count', convertedSeatCount + 1);

        //create element functionality
        const tr = document.createElement('tr');
        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');

        td1.innerText = e.target.innerText;
        td2.innerText = "Economy";
        td3.innerText = parseInt(550);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);

        let table = document.getElementById('table');
        table.appendChild(tr);

        //total price
        let convertedTotalPrice = parseInt(totalPrice.innerText);
        let finalPrice = parseInt(td3.innerText) + convertedTotalPrice;
        totalPrice.innerText = finalPrice;

        //Grand total price
        GrandTotal.innerText = finalPrice;

        //enable the apply button
        if(count === 4) {
            applyCuponBtn.removeAttribute('disabled');
        }

    })
}


//use cupon
applyCuponBtn.addEventListener('click', function () {
    let cuponValue = cuponBox.value;
    if (cuponValue === "NEW15") {
        const discount = totalPrice.innerText * 15 / 100;
        let discountPrice = GrandTotal.innerText - discount;
        innerTextById("grand-total", discountPrice);
        hideElementById('input');
        let discountString = `Discount -${discount}`;
        createElementValue('discount-area', discountString);
    }
    else if (cuponValue === "Couple 20") {
        const discount = totalPrice.innerText * 20 / 100;
        let discountPrice = GrandTotal.innerText - discount;
        innerTextById("grand-total", discountPrice);
        hideElementById('input');
        let discountString = `Discount -${discount}`;
        createElementValue('discount-area', discountString);
    }
    else {
        alert("Invalid cupon!!")
    }
});


//passenger form input validation
const nextBtn = document.getElementById('next-btn');
const phoneInput = document.getElementById('phone-input');
let value = parseInt(phoneInput.value);
phoneInput.addEventListener('keyup', function (e) {
    if (e.target.value.length > 0 && count > 0) {
        nextBtn.removeAttribute('disabled');
    }
});


