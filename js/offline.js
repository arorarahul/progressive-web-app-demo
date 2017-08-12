/**
 * This file makes the look and feel difference whenever you switch
 * from online to offline or vice-versa
 *
 */
(function(){

	'use strict';

	var header = document.querySelector('header');
	var menuHeader = document.querySelector('.menu__header');

	//After DOM loaded
	document.addEventListener('DOMContentLoaded', function(e) {
		//On initial load to check connectivity
		if(!navigator.onLine){
			updateNetworkStatus();
		}

		window.addEventListener('online', updateNetworkStatus, false);
		window.addEventListener('offline', updateNetworkStatus, false);

	});

	function updateNetworkStatus() {
		if (!navigator.onLine){
			toast('You are now offline');
			header.classList.add('app__offline');
			menuHeader.style.background = '#9E9E9E';

		}else {
			header.classList.remove('app__offline');
			menuHeader.style.background = "#1E88E5";
		}
	}

})();
