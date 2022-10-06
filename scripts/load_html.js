class MyHeader extends HTMLElement {
	connectedCallback() {
		fetch("../views/header.html")
			.then((response) => response.text())
			.then((text) => (this.innerHTML = text));
	}
}

customElements.define("my-header", MyHeader);

class MyFooter extends HTMLElement {
	connectedCallback() {
		fetch("../views/footer.html")
			.then((response) => response.text())
			.then((text) => (this.innerHTML = text));
	}
}

customElements.define("my-footer", MyFooter);
