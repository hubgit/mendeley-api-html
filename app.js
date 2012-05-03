$("form").on("submit", function(event) {
	event.preventDefault();

	var form = $(this);
	var formToSubmit = form.clone();
	$("<input/>", { name: "consumer_key", value: "b50cdbc339ff498c436da1ebc84a476a04c1dec86" }).appendTo(formToSubmit);

	// replace the placeholders in the form action URI template, and remove those inputs from the form
	formToSubmit.attr("action", formToSubmit.attr("action").replace(/\{(\w+)\}/, function getFormValue(match, field) {
		var node = formToSubmit.find("[name=" + field + "]");
		if (!node.length) return "";

		var value = node.val();
		node.remove();
		return encodeURIComponent(value);
	}));

	form.find("select").each(function() {
		var select = $(this);
		formToSubmit.find("select[name=" + select.attr("name") + "]").val(select.val());
	});

	formToSubmit.submit();
});

$("input[data-example]").each(function() {
	var input = $(this);
	var link = $("<a/>", { "class": "example", href: "#", text: input.data("example") }).insertAfter(input);
});

$(".example").on("click", function(event) {
	event.preventDefault();

	var example = $(this);
	example.prev("input|select").val(example.text());

	example.closest("form").submit();
});

$("input[name=cat],input[name=discipline]").each(function() {
	var input = $(this);
	$.getJSON("categories.json", function(data) {
		var select = $("<select/>", { name: input.attr("name") });
		if (!input.attr("required")) $("<option/>", { value: "", text: "All Categories" }).appendTo(select);
		data.forEach(function(item) {
			$("<option/>", { value: item.id, text: item.name }).appendTo(select);
		});
		input.replaceWith(select);
	});
});

