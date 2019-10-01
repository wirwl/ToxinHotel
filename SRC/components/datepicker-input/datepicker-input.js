$(document).ready(function () {
	//$(".datepicker-input__input").mask("99.99.9999",{placeholder:"ДД.ММ.ГГГГ"});

	$('#rr-form__start-input').datepicker({
		onSelect: function (fd, d, picker) {
			$("#rr-form__start-input").val(fd.split("-")[0]);
			$("#rr-form__end-input").val(fd.split("-")[1]);
		}

	});
	$('#rr-form__end-input').on('click', function () {
		$('#rr-form__start-input').data('datepicker').show();
	})


//$(".datepicker-input__input").mask("99.99.9999",{});

	//datepicker.update('onSelect',function(fd, d, picker){console.log(fd)});
	//let datepicker = $('#').data('datepicker');










})
