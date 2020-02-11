function language(lang) {
	$('*').each(function() {
		if (lang === 'ID') {
			var data = $(this).attr('lang-id');
			$('[lang-id="'+ data +'"]').html(data);
		}
	});
}

$('#lang').change(function() {
	var x = $(this).val();
	localStorage.setItem("lang", x);
	location.reload();
});

var x = localStorage.getItem("lang");
if ( x !== null ) {
	language(x);
	$('#lang option[value="'+ x +'"]').attr('selected','selected');
}