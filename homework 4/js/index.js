// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery

// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

// Remember parseFloat() and toFixed() to deal with formatting numbers. This will come in handy when dealing with displaying a "currency friendly" format (HINT: create an additional function to format your number into a "currency friendly" format)
var total = 0

$('form').submit(function() {

	var itemCost = $("#newEntry").val();
	itemCost = parseInt(itemCost);

		$("#newEntry").val("");	
	
	if (itemCost > 0) {

		addToReceipt(itemCost);
		updateTotal(itemCost);
		return false;	
	} else {
		return false;
	}

});


function addToReceipt(itemCost) {

	removePlus();
	$("#entries").append("<tr><td></td><td>+ $" + formatPrice(itemCost) + '</td></tr>');

}

function updateTotal(itemCost) {

	total = total + itemCost;
	$("#total").html("$" + formatPrice(total));

} 

function formatPrice(price) {

	formattedPrice = price.toFixed(2);
	return formattedPrice;

}

function removePlus () {

	var lastItem = $("td:last").text();
	lastItem = lastItem.substring(2);
	$("td:last").html(lastItem);

}
