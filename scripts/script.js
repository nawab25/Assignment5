
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
    const para = document.createElement('p');
    para.innerText = value;
    element.appendChild(para);
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
//function for click seat button
const seatNumber = document.querySelectorAll("#seat-btn");
for (let seat of seatNumber) {
    seat.addEventListener("click", function (e) {  
        seat.classList.add("bg-[#2ad40f]");
        seat.classList.add("text-white");     
        count = count + 1;
        if(count >= 5) {
            alert('can not buy more than 4 seat at a time!');
            return;
        }
        
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
        let discountString = `You have got ${discount} taka discount for cupon!!`;
        createElementValue('discount-area', discountString);
    }
    else if (cuponValue === "Couple 20") {
        const discount = totalPrice.innerText * 20 / 100;
        let discountPrice = GrandTotal.innerText - discount;
        innerTextById("grand-total", discountPrice);
        hideElementById('input');
        let discountString = `You have got ${discount} taka discount for cupon!!`;
        createElementValue('discount-area', discountString);
    }
    else {
        innerTextById("grand-total", totalPrice.innerText);
    }
});


//passenger form validation
const nextBtn = document.getElementById('next-btn');
const phoneInput = document.getElementById('phone-input');
let value = parseInt(phoneInput.value);
phoneInput.addEventListener('input', function () {
    if (value > 1) {
        nextBtn.disabled = true;
    }
    else {
        nextBtn.disabled = false;
    }
});


