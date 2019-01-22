$(document).ready(function () {
    $("#limpar").on('click', function () {
        $.get(location.href).then(function (page) {
            $("#div-cards").html($(page).find("#div-cards").html())
            return false;
        });
    });
});

$(document).ready(function() {
	$(this).on('hidden.bs.modal', '.modal', function() {
		$.get(location.href).then(function(page) {
            document.querySelector('#sorted-table').innerHTML = "";
			return false;
		});
	});
});

