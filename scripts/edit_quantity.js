window.onclick = (e) => {
	let element = e.target;
	if ("plus--button" === element.classList[2]) {
		let quantity = element.previousElementSibling;
		var val = parseInt(quantity.textContent);
		val = isNaN(val) ? 1 : val;
		val++;
		quantity.textContent = val;
	} else if ("minus--button" === element.classList[2]) {
		let quantity = element.nextElementSibling;
		var val = parseInt(quantity.textContent);
		val = isNaN(val) ? 1 : val;
		if (val > 1) val--;
		quantity.textContent = val;
	}
};
