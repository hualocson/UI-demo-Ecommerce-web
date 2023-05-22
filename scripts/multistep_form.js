var form_1 = document.querySelector(".form_1.form--container");
var form_2 = document.querySelector(".form_2.form--container");

var form_1_btn = document.querySelector(".form_1_btn");
var form_2_btn = document.querySelector(".form_2_btn");

var form_1_next_btn = document.querySelector(".form_1_btn .next--button");
var form_2_back_btn = document.querySelector(".form_2_btn .back--button");

var progessbar = document.querySelector(".progressbar");

form_1_next_btn.addEventListener("click", () => {
	form_1.style.display = "none";
	form_1_btn.style.display = "none";

	form_2_btn.style.display = "flex";
	form_2.style.display = "block";

  progessbar.children[0].classList.toggle("active")
  progessbar.children[1].classList.toggle("active")
});

form_2_back_btn.addEventListener("click", () => {
	form_1_btn.style.display = "flex";
	form_1.style.display = "block";

	form_2_btn.style.display = "none";
	form_2.style.display = "none";

  progessbar.children[0].classList.toggle("active")
  progessbar.children[1].classList.toggle("active")
});
