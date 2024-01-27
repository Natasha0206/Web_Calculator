function CalculateInterest(){
    const principal = document.getElementById("Principal").value;
    const rate = document.getElementById("Rate").value;
    const time = document.getElementById("Time").value;
    const element = document.getElementById("Calculate");
    element.innerHTML = (parseInt(principal) *  parseInt(rate) * parseInt(time)) / 100;
    console.log(element)
}
