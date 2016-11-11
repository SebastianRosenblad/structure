var popup_subtitles = function(p_unique_name, p_parent_name) {
	this.m_class_name = "popup_subtitles";
	this.m_unique_name = p_unique_name;
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		class_name: this.m_class_name,
		unique_name: this.m_unique_name,
		content: "Subtitles"
	};
	this._append_html(expressions, template, p_parent_name);
};
popup_subtitles.prototype = Object.create(base_module.prototype);