$(document).ready(function(){ 
	//$(".dd-input__input").mask("99.99.9999",{placeholder:"ДД.ММ.ГГГГ"});

	$('.js-datapicker').datepicker({ 				
		clearButton:true,
		onSelect: function (fd, d, picker) { 
			$("#rr-form__start-input").val(fd.split("-")[0]);
			$("#rr-form__end-input").val(fd.split("-")[1]);
		}
	});
})
