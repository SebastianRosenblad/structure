// Reading from structure.js
var ui_elements = [];
function read_structure() {
	for (var i = 0; i < course_structure.length; i++) {
		if (course_structure[i].type == "general") {
			course_title = course_structure[i].course_title;
		}
		else if (course_structure[i].type == "ui") {
			for (var j = 0; j < course_structure[i].objects.length; j++) {
				initialize_ui_object(course_structure[i].objects[j]);
			}
		}
	}
};

// Initializing ui elements
function initialize_ui_object(p_object) {
	var ui_object = new window[p_object.class_name](p_object.unique_name, p_object.parent_name, p_object.style_classes);
	ui_object.initialize(p_object.module_name, p_object.opentip_text, p_object.child_modules);
	
	ui_elements.push(ui_object);
}

// When document is completely loaded
read_structure();