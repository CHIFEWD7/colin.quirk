var images = ["images/image_1.png", "images/image_2.png", "images/image_3.jpg", "images/image_4.png", "images/image_5.jpg", "images/image_6.jpg", "images/image_7.jpg", "images/image_8.jpg", "images/image_9.jpg", "images/image_10.jpg", "images/image_11.jpg", "images/image_12.jpg"];

var currentIndex = 0;

console.log(images);

$("#prev").on("click", function(e){
	e.preventDefault();

	var currentImage = $("#image-to-vote-on").attr("src"); 
	
	prevImage(currentImage);
});

$("#next").on("click", function(e){
	e.preventDefault();

	var currentImage = $("#image-to-vote-on").attr("src"); 
	
	nextImage(currentImage);
});

function nextImage(currentImage){
	currentIndex = images.indexOf(currentImage)
	var nextIndex = currentIndex + 1;

	if(nextIndex != images.length){
		$("#image-to-vote-on").attr("src", images[nextIndex]);
	}
	
	console.log(currentImage, currentIndex, images[nextIndex]);
}

function prevImage(currentImage){
	currentIndex = images.indexOf(currentImage);
	var prevIndex = currentIndex - 1;

	if(prevIndex >= 0){
		$("#image-to-vote-on").attr("src", images[prevIndex]);
	}

	console.log(currentImage, currentIndex);
}
//this look so bad 
$("#light_switch").on("click" , function  () {
	 if (!$("body").hasClass("dark")){
	 	$("body").addClass("dark");
	 }else{
	 	$("body").removeClass("dark");
	 }

	 });


