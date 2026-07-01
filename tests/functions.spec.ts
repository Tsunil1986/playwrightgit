// Functions

// 1. Function Declaration

function functionName() {
    // code
}

welcomeCustomer()

function welcomeCustomer(){
        console.log("Welcome to Amazon")
}



// 2. Function Expression

const variableName = function(){
    // code
}



const showOffer = function() {
    console.log("Flat 50% Offer")
}

showOffer()

// 4. Arrow Functions

const functionName = () => {}

const calculateGST = () => {
    console.log("GST Calculated")
}

const calculateGST = () => console.log("GST Calculated")

calculateGST()

// 5. Parameters & Arguments

function functionName (parameter) {

}

functionName(argument)

function productDetails(productName) {
    console.log(productName)
}

productDetails("iPhone")

// 6. Return Values

function calculatePrice() {
    
    console.log("Hello")
    return 5000
}

console.log(calculatePrice())

// 7. Default Parameters

function applyCoupon(coupon = "I am the CM") {
    console.log(coupon)
}

applyCoupon("50% off")

// 8. Rest Parameters

function test(...values) {

}


function cartItems(...items) {
    console.log(items)
}

cartItems("iPhone", "Shoes", "Watch", "Bag")

// 9. Callback Functions

function processPayment(paymentSuccess, email){
    paymentSuccess()
}

function successMessage(){
    console.log("Payment Successful")
}

function sendEmail(){
    console.log("Email Successful")
}

processPayment(successMessage, sendEmail)

// 10. Higher Order Function


function login(action){
    action();
}

login(function(){
    console.log("Redirect to Homepage")
})



