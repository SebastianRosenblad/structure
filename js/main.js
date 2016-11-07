var ui_elements = [];

function read_structure() {
	for (var i = 0; i < course_structure.length; i++) {
		if (course_structure[i].title == "ui") {
			for (var j = 0; j < course_structure[i].objects.length; j++) {
				ui_elements.push(new window[course_structure[i].objects[j][0]]());
				ui_elements[j].initialize(course_structure[i].objects[j][1]);
			}
		}
	}
};

read_structure();