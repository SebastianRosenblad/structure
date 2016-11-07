var ui_elements = [];

function read_structure() {
	for (var i = 0; i < course_structure.length; i++) {
		//$("#content").append("<br>Got Structure");
		if (course_structure[i].title == "ui") {
			//$("#content").append("<br>Got Title");
			for (var j = 0; j < course_structure[i].objects.length; j++) {
				//$("#content").append("<br>Got Object: " + course_structure[i].objects[j]);
				ui_elements.push(new window[course_structure[i].objects[j][0]](course_structure[i].objects[j][1]));
			}
		}
	}
}

read_structure();