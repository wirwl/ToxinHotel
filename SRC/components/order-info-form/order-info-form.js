const $oiStart = $('#oi-form__start-input');
if ($oiStart.length)
	$oiStart.datepicker({
		onSelect: function (fd, d, picker) {
			$("#oi-form__start-input").val(fd.split("-")[0]);
			$("#oi-form__end-input").val(fd.split("-")[1]);
		}

	});

const $oiEnd = $('#oi-form__end-input');
if ($oiEnd.length)
	$('#oi-form__end-input').on('click', function () {
		$('#oi-form__start-input').data('datepicker').show();
	})