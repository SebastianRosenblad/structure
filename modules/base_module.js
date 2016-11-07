var base_module = function() {
	this.m_class_name = null;
	this.m_template = null;
	this.m_template_data = null;
};
base_module.prototype.initialize = function(p_append) {
	var ui_div_text = template_to_html(this.m_template_data, this.m_template);
	$(p_append).append(ui_div_text);
	
	document.getElementsByTagName("head")[0].appendChild(this.get_css());
};
base_module.prototype.get_css = function() {
	var css_link = document.createElement("link");
        css_link.setAttribute("rel", "stylesheet");
        css_link.setAttribute("type", "text/css");
        css_link.setAttribute("href", "modules/" + this.m_class_name + "/" + this.m_class_name + ".css");
	return css_link;
};