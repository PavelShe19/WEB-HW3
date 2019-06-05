function run() {
    $(document).ready(function () {
        getQuestion();
        var ul = document.querySelector('ul');
        for (var i = ul.children.length; i >= 0; i--) {
            ul.appendChild(ul.children[Math.random() * i | 0]);
        }
        localStorage.setItem("score", "0");
        $('.answer').click(function () {
            var score = parseInt(localStorage.getItem("score"));
            if (this.id == 'a1') {
                score = score + 1;
                $('#yscore').text(score+"/3");
                localStorage.setItem("score", score.toString());
                if (score == 3) {
                    window.location.href = "hw3_q3.html";
                }
            }
            getQuestion();
        });
    });

    function getQuestion() {
        $.ajax({
            url: "https://opentdb.com/api.php?amount=1&type=multiple",
            type: "GET",
            success: function (data) {
                $('#q').html(data.results[0].question);
                $('#a1').html(data.results[0].correct_answer);
                $('#a2').html(data.results[0].incorrect_answers[0]);
                $('#a3').html(data.results[0].incorrect_answers[1]);
                $('#a4').html(data.results[0].incorrect_answers[2]);
            },
            error: function (err) {

            }
        });
    }
}