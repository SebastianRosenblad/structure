course_structure = [
	{ "type":"general", "course_title":"Blah blah blah" },
	{ "type":"ui", "objects":[
		{"class_name":"button_menu", "unique_name":"flying", "parent_name":"#footer", "style_classes":["ui_button", "no_select"], "opentip_text":"Menu"},
		{"class_name":"button_info", "unique_name":"turtle", "parent_name":"#footer", "module_name":"button_info", "style_classes":["ui_button", "no_select"], "opentip_text":"Help"},
		{"class_name":"button_sound", "unique_name":"in", "parent_name":"#footer", "style_classes":["ui_button", "no_select"], "opentip_text":"Sound on/off"},
		{"class_name":"ui_field", "unique_name":"the", "parent_name":"#footer", "style_classes":["no_select"]},
		{"class_name":"manager_navigation", "unique_name":"so", "parent_name":"#footer", "module_name":"manager_navigation", "style_classes":["no_select"], "child_modules":[
			{"class_name":"button_nav_forward", "unique_name":"graceful", "parent_name":"#so", "module_name":"manager_navigation", "style_classes":["ui_button", "float_right", "no_select"], "opentip_text":"Next"},
			{"class_name":"button_nav_back", "unique_name":"and", "parent_name":"#so", "module_name":"manager_navigation", "style_classes":["ui_button", "float_right", "no_select"], "opentip_text":"Previous"},
			{"class_name":"button_replay", "unique_name":"high", "parent_name":"#so", "module_name":"manager_navigation", "style_classes":["ui_button", "float_right", "no_select"], "opentip_text":"Replay"}
		]},
		{"class_name":"button_subtitles", "unique_name":"skies", "parent_name":"#footer", "module_name":"button_subtitles", "style_classes":["ui_button", "float_right", "no_select"], "opentip_text":"Subtitles"}
	]},
	{ "type":"chapter", "title":"Best title in the entire world!", "subMenu":[
		{ "title":"First", "src":"assets/0.0.0/0.0.0.html", "subs":"", "progressBar":"false" }
	]}
];