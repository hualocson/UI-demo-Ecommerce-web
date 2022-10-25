let more = document.querySelectorAll(".review--box .read--more");
for (let i = 0; i < more.length; i++) {
	more[i].addEventListener("click", () => {
		more[i].parentNode.classList.toggle("active");
	});
}

let content_box = document.getElementsByClassName("review--content");

for (let i = 0; i < content_box.length; i++) {
	let p_height = content_box[i].children[0].offsetHeight;
	if (p_height <= 100) {
		console.log(content_box[i].nextElementSibling);
		content_box[i].nextElementSibling.style.display = "none";
	}
}
