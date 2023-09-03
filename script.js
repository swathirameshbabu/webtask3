document.getElementById('convert').onclick = tempC;
document.getElementById('reset').onclick = resetf;

function tempC()
{
    var fahrenheit = document.getElementById("fahrenheit").value;
    var celsius = document.getElementById("celsius").value;
    if (fahrenheit != ''){
        celsius =(parseFloat(fahrenheit) -32)/1.8;
    } else{
        fahrenheit = (parseFloat(celsius) *1.8)+ 32;
    }

    document.getElementById('fahrenheit').value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById('celsius').value = parseFloat(celsius).toFixed(1);
}
function resetf()
{
    document.getElementById('fahrenheit').value ='';
    document.getElementById('celsius').value ='';
}