//District Id
var $pincode = 160101; //Default
var $Date = "26-05-2021";  //Default


/***************Date********************/
var today = new Date();
var dd = today.getDate();

var mm = today.getMonth()+1; 
var yyyy = today.getFullYear();
if(dd<10) 
{
    dd='0'+dd;
} 

if(mm<10) 
{
    mm='0'+mm;
} 
today = dd+'-'+mm+'-'+yyyy;
$Date = today;

// console.log($Date);

/*********************************************/


//API Url
const api_url = "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByPin?pincode="+$pincode+"&date="+$Date;

console.log(api_url);
// Global data Variable
var data;
async function getData()
{
    var response = await fetch(api_url);   //Getting the Data
    data = await response.json();      //Converting it to JSON
    
    console.log(data); /***********Delete this$$$$$$$$$$$ */
    

    /***************Setting the Data****************/
    //Address
    document.getElementById("name-0").innerHTML = data.centers[0].name.toUpperCase();
    document.getElementById("address-0").innerHTML = data.centers[0].address;
    document.getElementById("pincode-0").innerHTML = data.centers[0].pincode;

    //Avialablity[0]
    if(0<(data.centers[0].sessions.length))
    {
        document.getElementById("li-0").style.display = "list-item";
        document.getElementById("date-0").innerHTML = data.centers[0].sessions[0].date;
        document.getElementById("avialable-0").innerHTML = data.centers[0].sessions[0].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[0].vaccine;
        document.getElementById("age-0").innerHTML = data.centers[0].sessions[0].min_age_limit;
    }

    //Avialablity[1]
    if(1<(data.centers[0].sessions.length))
    {
        document.getElementById("li-1").style.display = "list-item";
        document.getElementById("date-1").innerHTML = data.centers[0].sessions[1].date;
        document.getElementById("avialable-1").innerHTML = data.centers[0].sessions[1].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[1].vaccine;
        document.getElementById("age-1").innerHTML = data.centers[0].sessions[1].min_age_limit;
    }

    //Avialablity[2]
    if(2<(data.centers[0].sessions.length))
    {
        document.getElementById("li-2").style.display = "list-item";
        document.getElementById("date-2").innerHTML = data.centers[0].sessions[2].date;
        document.getElementById("avialable-2").innerHTML = data.centers[0].sessions[2].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[2].vaccine;
        document.getElementById("age-2").innerHTML = data.centers[0].sessions[2].min_age_limit;
    }

    //Avialablity[3]
    if(3<(data.centers[0].sessions.length))
    {
        document.getElementById("li-3").style.display = "list-item";
        document.getElementById("date-3").innerHTML = data.centers[0].sessions[3].date;
        document.getElementById("avialable-3").innerHTML = data.centers[0].sessions[3].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[3].vaccine;
        document.getElementById("age-3").innerHTML = data.centers[0].sessions[3].min_age_limit;
    }

    //Avialablity[4]
    if(4<(data.centers[0].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-4").style.display = "list-item";
        document.getElementById("date-4").innerHTML = data.centers[0].sessions[4].date;
        document.getElementById("avialable-4").innerHTML = data.centers[0].sessions[4].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[4].vaccine;
        document.getElementById("age-4").innerHTML = data.centers[0].sessions[4].min_age_limit;
    }

    //Avialablity[5]
    if(5<(data.centers[0].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-5").style.display = "list-item";
        document.getElementById("date-5").innerHTML = data.centers[0].sessions[5].date;
        document.getElementById("avialable-5").innerHTML = data.centers[0].sessions[5].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[5].vaccine;
        document.getElementById("age-5").innerHTML = data.centers[0].sessions[5].min_age_limit;
    }

    //Avialablity[6]
    if(6<(data.centers[0].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-6").style.display = "list-item";
        document.getElementById("date-6").innerHTML = data.centers[0].sessions[6].date;
        document.getElementById("avialable-6").innerHTML = data.centers[0].sessions[6].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[0].sessions[6].vaccine;
        document.getElementById("age-6").innerHTML = data.centers[0].sessions[6].min_age_limit;
    }


    //********************************************** */
    //********************************************** */
    // $$$$$$$$$$   Second ROW data    $$$$$$$$$$$$$
    //********************************************** */
    //********************************************** */

    //Address
    document.getElementById("name-1").innerHTML = data.centers[1].name.toUpperCase();
    document.getElementById("address-1").innerHTML = data.centers[1].address;
    document.getElementById("pincode-1").innerHTML = data.centers[1].pincode;

    //Avialablity[0]
    if(0<(data.centers[1].sessions.length))
    {
        document.getElementById("li-1-0").style.display = "list-item";
        document.getElementById("date-1-0").innerHTML = data.centers[1].sessions[0].date;
        document.getElementById("avialable-1-0").innerHTML = data.centers[1].sessions[0].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[0].vaccine;
        document.getElementById("age-1-0").innerHTML = data.centers[1].sessions[0].min_age_limit;
    }

    //Avialablity[1]
    if(1<(data.centers[1].sessions.length))
    {
        document.getElementById("li-1-1").style.display = "list-item";
        document.getElementById("date-1-1").innerHTML = data.centers[1].sessions[1].date;
        document.getElementById("avialable-1-1").innerHTML = data.centers[1].sessions[1].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[1].vaccine;
        document.getElementById("age-1-1").innerHTML = data.centers[1].sessions[1].min_age_limit;
    }

    //Avialablity[2]
    if(2<(data.centers[1].sessions.length))
    {
        document.getElementById("li-1-2").style.display = "list-item";
        document.getElementById("date-1-2").innerHTML = data.centers[1].sessions[2].date;
        document.getElementById("avialable-1-2").innerHTML = data.centers[1].sessions[2].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[2].vaccine;
        document.getElementById("age-1-2").innerHTML = data.centers[1].sessions[2].min_age_limit;
    }

    //Avialablity[3]
    if(3<(data.centers[1].sessions.length))
    {
        document.getElementById("li-1-3").style.display = "list-item";
        document.getElementById("date-1-3").innerHTML = data.centers[1].sessions[3].date;
        document.getElementById("avialable-1-3").innerHTML = data.centers[1].sessions[3].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[3].vaccine;
        document.getElementById("age-1-3").innerHTML = data.centers[1].sessions[3].min_age_limit;
    }

    // Avialablity[4]
    if(4<(data.centers[1].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-1-4").style.display = "list-item";
        document.getElementById("date-1-4").innerHTML = data.centers[1].sessions[4].date;
        document.getElementById("avialable-1-4").innerHTML = data.centers[1].sessions[4].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[4].vaccine;
        document.getElementById("age-1-4").innerHTML = data.centers[1].sessions[4].min_age_limit;
    }

    //Avialablity[5]
    if(5<(data.centers[1].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-1-5").style.display = "list-item";
        document.getElementById("date-1-5").innerHTML = data.centers[1].sessions[5].date;
        document.getElementById("avialable-1-5").innerHTML = data.centers[1].sessions[5].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[5].vaccine;
        document.getElementById("age-1-5").innerHTML = data.centers[1].sessions[5].min_age_limit;
    }

    //Avialablity[6]
    if(6<(data.centers[1].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-1-6").style.display = "list-item";
        document.getElementById("date-1-6").innerHTML = data.centers[1].sessions[6].date;
        document.getElementById("avialable-1-6").innerHTML = data.centers[1].sessions[6].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[1].sessions[6].vaccine;
        document.getElementById("age-1-6").innerHTML = data.centers[1].sessions[6].min_age_limit;
    }


    //********************************************** */
    //********************************************** */
    // $$$$$$$$$$   THIRD ROW data    $$$$$$$$$$$$$
    //********************************************** */
    //********************************************** */

    //Address
    document.getElementById("name-2").innerHTML = data.centers[2].name.toUpperCase();
    document.getElementById("address-2").innerHTML = data.centers[2].address;
    document.getElementById("pincode-2").innerHTML = data.centers[2].pincode;

    //Avialablity[0]
    if(0<(data.centers[2].sessions.length))
    {
        document.getElementById("li-2-0").style.display = "list-item";
        document.getElementById("date-2-0").innerHTML = data.centers[2].sessions[0].date;
        document.getElementById("avialable-2-0").innerHTML = data.centers[2].sessions[0].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[0].vaccine;
        document.getElementById("age-2-0").innerHTML = data.centers[2].sessions[0].min_age_limit;
    }

    //Avialablity[1]
    if(1<(data.centers[2].sessions.length))
    {
        document.getElementById("li-2-1").style.display = "list-item";
        document.getElementById("date-2-1").innerHTML = data.centers[2].sessions[1].date;
        document.getElementById("avialable-2-1").innerHTML = data.centers[2].sessions[1].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[1].vaccine;
        document.getElementById("age-2-1").innerHTML = data.centers[2].sessions[1].min_age_limit;
    }

    //Avialablity[2]
    if(2<(data.centers[2].sessions.length))
    {
        document.getElementById("li-2-2").style.display = "list-item";
        document.getElementById("date-2-2").innerHTML = data.centers[2].sessions[2].date;
        document.getElementById("avialable-2-2").innerHTML = data.centers[2].sessions[2].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[2].vaccine;
        document.getElementById("age-2-2").innerHTML = data.centers[2].sessions[2].min_age_limit;
    }

    //Avialablity[3]
    if(3<(data.centers[2].sessions.length))
    {
        document.getElementById("li-2-3").style.display = "list-item";
        document.getElementById("date-2-3").innerHTML = data.centers[2].sessions[3].date;
        document.getElementById("avialable-2-3").innerHTML = data.centers[2].sessions[3].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[3].vaccine;
        document.getElementById("age-2-3").innerHTML = data.centers[2].sessions[3].min_age_limit;
    }

    // Avialablity[4]
    if(4<(data.centers[2].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-2-4").style.display = "list-item";
        document.getElementById("date-2-4").innerHTML = data.centers[2].sessions[4].date;
        document.getElementById("avialable-2-4").innerHTML = data.centers[2].sessions[4].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[4].vaccine;
        document.getElementById("age-2-4").innerHTML = data.centers[2].sessions[4].min_age_limit;
    }

    //Avialablity[5]
    if(5<(data.centers[2].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-2-5").style.display = "list-item";
        document.getElementById("date-2-5").innerHTML = data.centers[2].sessions[5].date;
        document.getElementById("avialable-2-5").innerHTML = data.centers[2].sessions[5].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[5].vaccine;
        document.getElementById("age-2-5").innerHTML = data.centers[2].sessions[5].min_age_limit;
    }

    //Avialablity[6]
    if(6<(data.centers[2].sessions.length))  //To check More data is avialable or not.
    {
        document.getElementById("li-2-6").style.display = "list-item";
        document.getElementById("date-2-6").innerHTML = data.centers[2].sessions[6].date;
        document.getElementById("avialable-2-6").innerHTML = data.centers[2].sessions[6].available_capacity;
        document.getElementById("vaccine-name").innerHTML = data.centers[2].sessions[6].vaccine;
        document.getElementById("age-2-6").innerHTML = data.centers[2].sessions[6].min_age_limit;
    }

}
/****** FUNCTION CALL ********/
getData();