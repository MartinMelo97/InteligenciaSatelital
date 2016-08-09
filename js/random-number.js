$(document).ready(function() {

	var number = Math.floor(Math.random()* 9000) + 1000;
	document.getElementById("number").value = number;


});

function CompareNumbers() {

	var original = document.getElementById('number').value;
	var inputted = document.getElementById('code').value;

	if(original == inputted)
	{
		alert('Los numeros coinciden!');
		window.location.assign('../contacto.html');
	}
	else
	{
		alert('Los números no coinciden, inténtalo nuevamente')
		//var number = Math.floor(Math.random()* 9000) + 1000;
		//document.getElementById("number").value = number;
		//document.getElementById("code").value = null;
		window.location.assign('../contacto.html');
	}

}