
/*=============================================================
        #Buy ticket part start
==============================================================*/

document.getElementById('buyTicketBtn').addEventListener('click',function(){
    let phParibahan = document.getElementById('phParibahan')
    
    phParibahan.scrollIntoView({ behavior: 'smooth' })
    
})

/*=============================================================
        #Buy ticket part End
==============================================================*/


/*=======================================================================================
            #Seat part start
=========================================================================================*/ 

let seatList = document.getElementsByClassName('sBtn')
let selectedSeatNumber = document.getElementById('selectedSeatNumber')
let totalSeatPrice = document.getElementById('totalSeatPrice')
let remainingSeat = document.getElementById('remainingSeat')
let remainingSeatValue = parseInt(remainingSeat.innerText)
let grandTotal = document.getElementById('grandTotal')
let remainingSeatCounter = 0;
let seatPriceCounter =0;
let seatCounter = 0


for (let seatL of seatList){
    seatL.addEventListener('click',function(){
        seatCounter++;
        if(seatCounter<5){
            remainingSeatCounter++;
            seatPriceCounter+= 550;
            totalSeatPrice.innerText =seatPriceCounter;
            grandTotal.innerText =seatPriceCounter;
            remainingSeat.innerText = remainingSeatValue -remainingSeatCounter;
            let seatNameList = document.getElementById('seatName')
            let seatClassName = document.getElementById('seatClassName')
            let seatPrice = document.getElementById('seatPrice')
            let li = document.createElement('li')
            let liForSeatClass = document.createElement('li')
            let liForSeatPrice = document.createElement('li')
            liForSeatClass.innerHTML = 'Economoy'
            liForSeatPrice.innerText = 550;
             li.innerHTML = seatL.innerHTML

            seatNameList.appendChild(li)
            seatClassName.appendChild(liForSeatClass)
            seatPrice.appendChild(liForSeatPrice)
            selectedSeatNumber.innerText = seatCounter;
            seatL.style.background = '#1DD100'
            seatL.style.color = 'white'
            seatL.setAttribute('disabled', true)

            if(seatCounter===4){
                couponBtn.removeAttribute('disabled')
            }else if(seatCounter>0 && (numberInput.value) ){
                nextButton.removeAttribute('disabled')
            }
            
        }else{
            alert('You can select maximum 4 seats.')
        }
       
    })
}

/*=======================================================================================
            #Seat part end
=========================================================================================*/ 

/*=======================================================================================
            #Coupon part start
=========================================================================================*/ 





let fifteenParcentCouponCode = document.getElementById('fifteenParcentCouponCode')
let twentyParcentCouponCode = document.getElementById('twentyParcentCouponCode')
let couponInput = document.getElementById('couponInput')
let TotalDiscount = document.getElementById('TotalDiscount')
let CouponPortion = document.getElementById('CouponPortion')


let discount = 0;

let couponBtn = document.getElementById('couponBtn')




const error1 = document.getElementById('error1')
couponBtn.addEventListener('click',function(){
    if(couponInput.value ===fifteenParcentCouponCode.innerText){
        let totalTicketsPrice = parseInt(totalSeatPrice.innerText)
        let newDiscount1 = (totalTicketsPrice*15)/100;
        discount = newDiscount1;
        grandTotal.innerText = totalTicketsPrice -discount;
        CouponPortion.style.display= 'none'
        discountPortion.style.display= 'flex'
        error1.style.display= 'none'
        TotalDiscount.innerText = discount
        
    }
    else if(couponInput.value === twentyParcentCouponCode.innerText ){
        let totalTicketsPrice = parseInt(totalSeatPrice.innerText)
        let newDiscount2 = (totalTicketsPrice*20)/100;
        discount = newDiscount2;
        grandTotal.innerText = totalTicketsPrice -discount;
        CouponPortion.style.display= 'none'
        discountPortion.style.display= 'flex'
        error1.style.display= 'none'
        TotalDiscount.innerText = discount
    }
    else{
        error1.innerText = 'Invalid or expired coupon code!'
    }
})
/*=======================================================================================
            #Coupon part End
=========================================================================================*/ 

/*=======================================================================================
            #Next btn start
=========================================================================================*/ 
const nextButton = document.getElementById('nextButton')
const numberInput = document.getElementById('numberInput')

numberInput.addEventListener('keyup',function(e){
    if(seatCounter>0 && typeof parseInt(e.target.value) === 'number' ){
        nextButton.removeAttribute('disabled')
    }
})


/*=======================================================================================
            #Next btn End
=========================================================================================*/ 
