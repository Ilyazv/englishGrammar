//alert("script.js is work");
$(document).ready(function() {
    $('#submit').mouseenter(function() {
        $('#submit').fadeTo('fast', 1);
    });
    $('#submit').mouseleave(function() {
        $('#submit').fadeTo('slow', 0.5);
    });
    $('#submit').click(function() {
    	var divTag = document.createElement("div");
    	divTag.id = "correct";
    	divTag.innerHTML = "✓";
    	$('#task').append(divTag);
    });
    $('select[name="ans"]').change(function(){
    	if ($(this).val() == 'blank') {
    		$('#dropdown').fadeTo('slow', 0.5);
    	} else {
    		$('#dropdown').fadeTo('fast', 1);
    	}
    });
    $('#dropdown').mouseenter(function() {
        $('#dropdown').fadeTo('fast', 1);
    });
    $('#dropdown').mouseleave(function() {
        $('#dropdown').fadeTo('slow', 0.5);
    });
});
/*$(document).ready(function() {
    $('#dropdown').click(function() {
        $('#dropdown').fadeTo('fast', 1);
    });
});*/