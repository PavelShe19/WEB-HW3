
var val = localStorage.getItem("name");
let name = val.split(" "); //split the name
if(name.length!=2) {
    name[1] = 'Doe';
}
$.ajax({
    url: "https://api.icndb.com/jokes/random?firstName=" + name[0] // take the joke from api and change the name
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
