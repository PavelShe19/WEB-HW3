$(document).ready(function () { //using local-storage to save the visitor name by clicking on LOGIN button.
    $("#message").text(
        localStorage.getItem("name"));
    $("#login").click(function () {
        let val = $("#name").val();
        localStorage.setItem("name", val);
        alert("Welcome, you logged in as:" + val)
        window.location.assign("hw3_q2.html"); //the next page address.
    });
});
