
var pin_code;
function get_pin()
{
    pin_code = document.getElementById("pin").value;
    localStorage.setItem("numberLS", pin_code);  
} 
