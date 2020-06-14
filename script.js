document.addEventListener('DOMContentLoaded', function() {
	'use strict';
	function tabs(tabClass, tabHeaderClass, tabContClass) {
		let tab = document.querySelectorAll('.' + tabClass),
		tabHeader = document.querySelector('.' + tabHeaderClass),
		tabContent = document.querySelectorAll('.' + tabContClass);

		function hideAllTabsContent(a) {
			for(let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}

		hideAllTabsContent(1);

		function showAllTabsContent(b) {
			if(tabContent[b].classList.contains('hide')) {
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}

		tabHeader.addEventListener('click', function(event) {
			let target = event.target;

			if(target && target.classList.contains('info-header-tab')) {
				for(let i = 0; i < tab.length; i++) {
					if(target == tab[i]) {
						hideAllTabsContent(0);
						showAllTabsContent(i);
						break;
					}
				}
			}
		});
	}

	tabs('info-header-tab', 'info-header', 'info-tabcontent');
});