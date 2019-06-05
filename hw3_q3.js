
var val = "Matan Neyman";
let name = val.split(" "); //split the name 
$.ajax({
    url: "http://api.icndb.com/jokes/random?firstName=" + name[0] // take the joke from api and change the name
        + "&lastName=" + name[1],
    type: "get",
    success: function (data) {
        $("#message").text(
            data.value.joke,

        );
    },
    error: function (err) {
        console.log(err);
    }
});
