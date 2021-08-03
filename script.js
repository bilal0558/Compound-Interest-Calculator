function computeInterest(){
    var principleAmount = parseInt(document.getElementById('principle-amount').value);
    var interestRate = parseInt(document.getElementById('interest-rate').value);
    var years = parseInt(document.getElementById('years').value);
    
    var interest = principleAmount * (Math.pow((1 + interestRate/100),years) - 1); 

    var totalAmount = principleAmount + interest;
    
    document.getElementById('interest').value = interest.toFixed(2);
    document.getElementById('total-amount').value = totalAmount.toFixed(2);
}