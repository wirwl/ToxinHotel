$(document).ready(function () {
	$('#rr-form__start-input').datepicker({
		onShow: function (datepicker, animationCompleted) {
			// if (!animationCompleted) {
			// 	datepicker.$datepicker.css('width',
			// 		datepicker.$el.parent().parent().parent().parent().parent().css('width'));
			// }
		},
		onSelect: function (fd, d, picker) {
			$("#rr-form__start-input").val(fd.split(" - ")[0]);
			$("#rr-form__end-input").val(fd.split(" - ")[1]);
		}
	});
	$('#rr-form__end-input').on('click', function () {
		$('#rr-form__start-input').data('datepicker').show();
	})
})