/*
	🖥️ Full-Stack Developer 🎨 Graphic Designer 💸 Freelancer
	-----------------------------------------------------------
	👨‍💻 Author : Nitin Chakraborty.
	-------------------------------
	🔗 Facebook : https://www.facebook.com/NitinChakraborty2001/
	🔗 Instagram : https://www.instagram.com/NitinChakraborty2001/
	🔗 YouTube : http://www.youtube.com/c/NitinChakraborty2001/
	🔗 LinkedIn : https://www.linkedin.com/in/NitinChakraborty2001/
	🔗 Twitter : https://www.twitter.com/NitinCB2001/
	--------------------------------------------------
	📧 eMail : nitin.chakraborty13@gmail.com
*/

let menu = document.querySelector(".menu");
let menuToggler = document.querySelector(".toggler");
const listItems = document.querySelectorAll("li");

menuToggler.onclick = function () {
	menu.classList.toggle("active");
	menuToggler.classList.toggle("active");
};

function activeLink() {
	listItems.forEach((item) => {
		item.classList.remove("active");
		this.classList.add("active");
	});
}

listItems.forEach((item) => {
	item.addEventListener("click", activeLink);
});
