function computeInterest(){
    var principleAmount = document.getElementById('principle-amount').value;
    var interestRate = document.getElementById('interest-rate').value;
    var years = document.getElementById('years').value;
    
    var interest = principleAmount * (Math.pow((1 + interestRate/100),years) - 1); 
    
    document.getElementById('interest').value = interest.toFixed(2);
}