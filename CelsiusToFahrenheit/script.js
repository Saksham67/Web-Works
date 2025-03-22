function convertTemperature(){
    let celsius = document.getElementById("celsius").value;
    if (celsius === "") {
        document.getElementById("result").innerHTML = "Please enter a temperature.";
        return;
    }
    let Fahrenheit =  (parseFloat(celsius) * 9/5) + 32;
    document.getElementById("result").innerHTML = `Fahrenheit: ${fahrenheit.toFixed(2)}`;
}