function validation(){
    let fname=document.getElementById("fname").value;
    let lname=document.getElementById("lname").value;
    let city=document.getElementById("city").value;
    let phoneno=document.getElementById("phoneno").value;
    let address=document.getElementById("address").value;
    if((phoneno.length<10))
    {
        alert("Phone no must be 10 numbers");
        return false;
    }
    else if(address=="")
    {
        alert("Address must be filled");
        return false;
    }
    else{
        alert("Form Submitted Successfully")
    }
}