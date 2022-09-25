var status = "Start";
var answer = document.getElementById("answer");
var buttons = document.getElementById("buttons");

var update = function () {
	var q = questions[status];
	answer.innerHTML = q.question;
	keys = Object.keys(q.buttons);
	for (let i = 0; i < keys.length; i++) {
		buttons.innerHTML += "<button class='question' id='" + i + "' value='" + 
		q.buttons[keys[i]] + "'>" + keys[i] + " </button>";
	}
	for (let i = 0; i < keys.length; i++) {
		var t = document.getElementById(String(i));
		t.onclick = button_answer_onclick;
		t.style.background = q.color;
		t.style.width = 600 / keys.length + "px";
	}
}

var button_answer_onclick = function () {
	status = this.value;
	buttons.innerHTML = "";
	update();
}

window.onload = update();