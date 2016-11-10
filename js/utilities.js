// Basic needs
var course_structure = [];
var course_title = "";

// Handlebars
function template_to_html(data, template) {
    var compile = Handlebars.compile(template);
    return compile(data);
};

// Opentip
// Opentip Styles
Opentip.styles.ui_help = {
	target: true,
	tipJoint: "bottom",
	background: "#fff",
	borderColor: "#ccc"
};