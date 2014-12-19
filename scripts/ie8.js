function IE8() {
	$('#BannerWrapper .background img').attr('src', 'images/Fried_chicken_bones.jpg');

	var wingAmount = prompt('How many wings you want?', '');
	if(wingAmount < 16) alert('Too low, you\'re eating 16');
	for(var counter = 0; counter < 16; counter++) { alert('wing number ' + (Number(counter) + 1)); }
	alert('yah bitch, now learn');
}

$(document).ready(function() {
	IE8();
});