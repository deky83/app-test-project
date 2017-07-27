$(document).ready(function() {
    $('.pgwSlider').pgwSlider();

	// Get the modal
	var modal = document.getElementById('myModal');
	var btn = document.getElementById("myBtn");
	var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	    modal.style.display = "block";
	}

	span.onclick = function() {
	    modal.style.display = "none";
	}
 
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}


	// Set the date we're counting down to
	var countDownDate = new Date("Oct 10, 2017 00:00:00").getTime();


	var x = setInterval(function() {

	    var now = new Date().getTime();
	    
	    var distance = countDownDate - now;
	    
	    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
	    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
	    
	    document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
	    
	    if (distance < 0) {
	        clearInterval(x);
	        document.getElementById("demo").innerHTML = "EXPIRED";
	    }
	}, 1000);


	//Number increase
	var input = document.getElementById("number");

	function minus(){
	  var num = +input.value;//+ for convert from string to number
	  num=num-5;
	  input.value = num;
	}

	function plus(){
	  var num = +input.value;//+ for convert from string to number
	  num=num+5;
	  input.value = num;
	}

	document.getElementById("minus").onclick = minus;
	document.getElementById("plus").onclick = plus;


});
