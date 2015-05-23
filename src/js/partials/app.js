// IE version
function GetIEVersion() {
	var sAgent = window.navigator.userAgent;
	var Idx = sAgent.indexOf("MSIE");

	// If IE, return version number.
	if (Idx > 0)
		return parseInt(sAgent.substring(Idx + 5, sAgent.indexOf(".", Idx)));

	// If IE 11 then look for Updated user agent string.
	else if (!!navigator.userAgent.match(/Trident\/7\./))
		return 11;

	else
		return 0; //It is not IE
};


// Ranges inputs slider
var inputRange = (function($, host) {
	return {
		init: function() {
			$('#inputKwota, #inputDlugsc').noUiSlider({
				start: 50,
				connect: 'lower',
				range: {
					'min': 0,
					'max': 100
				}
			})
		},

		actions: function() {
			$('.plus').click(function() {
				var currInput = $(this).parent();
				var curValue = Number(currInput.val());

				currInput.val(curValue + 5);
			});

			$('.minus').click(function() {
				var currInput = $(this).parent();
				var curValue = Number(currInput.val());

				currInput.val(curValue - 5);
			});
		}
	};
})(jQuery, document);