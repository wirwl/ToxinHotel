const $rrStart = $('#rr-form__start-input');

if ($rrStart.length)
	$rrStart.datepicker({
		onShow: function (datepicker, animationCompleted) {
		},
		onSelect: function (fd, d, picker) {
			$("#rr-form__start-input").val(fd.split(" - ")[0]);
			$("#rr-form__end-input").val(fd.split(" - ")[1]);
		}
	});

const $rrEnd = $('#rr-form__end-input');

if ($rrEnd.length)
	$rrEnd.on('click', function () {
		$rrStart.data('datepicker').show();
	})