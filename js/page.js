if('serviceWorker' in navigator){
	window.addEventListener('load',function(){
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('sw.js');
        }
	});
}
document.addEventListener("DOMContentLoaded",function(event){
	document.querySelector('.arrows').addEventListener("click",function(e){						
		document.querySelector('#about').scrollIntoView();
	});

});