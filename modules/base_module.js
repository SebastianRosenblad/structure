var base_module = function(p_unique_name) {
	var m_class_name = null;
	var m_unique_name = p_unique_name;
	
	var m_template = null;
	var m_template_data = null;
	
	var initialize = function(p_append, p_parent_class = "") {
		var ui_div_text = template_to_html(m_template_data, m_template);
		$(p_append).append(ui_div_text);
		
		document.getElementsByTagName("head")[0].appendChild(get_css(p_parent_class));
		
		_specific_initialize();
	};
	var _specific_initialize = function() {};
	
	var get_css = function(p_parent_class = "") {
		p_parent_class = p_parent_class == "" ? m_class_name : p_parent_class;
		var css_link = document.createElement("link");
			css_link.setAttribute("rel", "stylesheet");
			css_link.setAttribute("type", "text/css");
			css_link.setAttribute("href", "modules/" + p_parent_class + "/" + this.m_class_name + ".css");
		return css_link;
	};
	
	return {
		initialize: initialize,
		get_css: get_css
	};
};