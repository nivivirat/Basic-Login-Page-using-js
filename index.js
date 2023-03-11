console.log("triggered");
// used this just for tsting purpose

function checkfn(){
    // if the login button is clicked, the text given by the user 
    // in the user and password input box will be saved in the variable

    var username = document.getElementById("user").value;   
    var pass = document.getElementById("pass").value;

    if(username == "NIVI" && pass =="virat")
    {
        // there is an empty div tag in the html file ,to get the element 
        // the following line is used 
        var extra = document.getElementById("if_success");

        // this will include the given text in the div
        extra.innerHTML="SUCCESS";
    }

    else
    {
        var extra = document.getElementById("if_success");
        
        // this will include the given text in the div
        extra.innerHTML = "FAIL";
    }
}