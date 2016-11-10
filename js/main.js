// Reading from structure.js
var ui_elements = [];
function read_structure() {
	for (var i = 0; i < course_structure.length; i++) {
		if (course_structure[i].title == "general") {
			course_title = course_structure[i].course_title;
		}
		if (course_structure[i].title == "ui") {
			for (var j = 0; j < course_structure[i].objects.length; j++) {
				initialize_ui_object(course_structure[i].objects[j]);
			}
		}
	}
};

// Initializing ui elements
function initialize_ui_object(p_object) {
	var ui_object = new window[p_object.class_name](p_object.unique_name);
	
	var tmp_append = p_object.append;
	var tmp_parent = p_object.parent;
	var tmp_opentip = p_object.opentip;
	
	ui_object.initialize(tmp_append, tmp_parent, tmp_opentip);
	ui_elements.push(ui_object);
}

// When document is completely loaded
read_structure();