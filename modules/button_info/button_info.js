var button_info = function(p_unique_name) {
	var m_class_name = "button_info";
	var m_unique_name = p_unique_name;
	
	var m_popup_info;
	
	var m_template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	var m_template_data = {
		class_name: m_class_name,
		unique_name: m_unique_name,
		content: ""
	};
	
	var _specific_initialize = function() {
		new Opentip("#" + m_unique_name, "Help", { style: "ui_help" });
		
		m_popup_info = new window["popup_info"](m_unique_name + "_popup");
		m_popup_info.initialize("#hider", m_class_name);
		
		$("#" + m_unique_name).click(function() {
			$("#" + m_unique_name + "_popup").toggle();
			/***** console.log("#" + m_unique_name + "_popup"); *****/
		});
	};
};
//button_info.prototype = Object.create(base_module.prototype);