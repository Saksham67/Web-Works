const display = document.getElementById("display");

function Display(input)
{
    display.value += input;

}
function Clear(){
    display.value = "";
}

function Calculate()
{
    display.value = eval(display.value);
}