var popup_subtitles = function(p_unique_name) {
	this.m_class_name = "popup_subtitles";
	this.m_unique_name = p_unique_name;
	this.m_handlebars = [];
	
	var handelbar_object = {"html":"", "expressions":"", "append":""};
	handelbar_object.html = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	handelbar_object.expressions = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		content: "subtitles"
	};
	this.m_handlebars.push(handelbar_object);
};
popup_subtitles.prototype = Object.create(base_module.prototype);