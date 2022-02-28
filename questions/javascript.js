const questions = document.querySelectorAll(".question");
//choosing the each article

questions.forEach(function (question) {
  //question here references the three articles
  //console.log(question);
  const btn = question.querySelector(".question-btn");

  //console.log(btn);
  btn.addEventListener("click", function () {
    // console.log(question);

    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });

    question.classList.toggle("show-text");
  });
});