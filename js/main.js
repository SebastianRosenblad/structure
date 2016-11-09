// Reading from Structure and Initializing
var ui_elements = [];
function read_structure() {
	for (var i = 0; i < course_structure.length; i++) {
		if (course_structure[i].title == "ui") {
			for (var j = 0; j < course_structure[i].objects.length; j++) {
				initialize_ui_object(course_structure[i].objects[j]);
			}
		}
	}
	console.log(ui_elements);
};

function initialize_ui_object(p_object) {
	var ui_object = new window[p_object.class_name](p_object.unique_name);
	if (p_object.append != "undefined") {
		ui_object.initialize(p_object.append);
	}
	ui_elements.push(ui_object);
}

// When document is completely loaded
read_structure();