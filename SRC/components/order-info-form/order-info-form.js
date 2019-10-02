$(document).ready(function () {
  $('#oi-form__start-input').datepicker({
		onSelect: function (fd, d, picker) {
			$("#oi-form__start-input").val(fd.split("-")[0]);
			$("#oi-form__end-input").val(fd.split("-")[1]);
		}

	});
	$('#oi-form__end-input').on('click', function () {
		$('#oi-form__start-input').data('datepicker').show();
	})
})