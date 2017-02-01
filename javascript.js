$(document).ready(function () {
    $("#forgot").click(function () {
        alert("Sorry..");
    })

    $("#logon").click(function () {
        if ($("#name").val() == "admin" && $("#pw").val()  == "admin") {
            alert("Sucess");
        } else {
            alert("Failure");
    }})
        
});
