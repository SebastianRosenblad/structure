var base_module = function(p_unique_name) {
	var m_class_name = null;
	var m_unique_name = p_unique_name;
	var m_handlebars = [];
};

base_module.prototype.initialize = function(p_append, p_parent_class, p_opentip_text) {
	for (var i = 0; i < this.m_handlebars.length; i++) {
		this._append_html(this.m_handlebars[i].expressions, this.m_handlebars[i].html, this.m_handlebars[i].append == "" ? p_append : this.m_handlebars[i].append);
	}
	
	document.getElementsByTagName("head")[0].appendChild(this._get_css(p_parent_class));
	
	if (p_opentip_text != undefined && p_opentip_text != "") {
		new Opentip("#" + this.m_unique_name, p_opentip_text, { style: "ui_help" });
	}
	
	this._specific_initialize();
};
base_module.prototype._specific_initialize = function(p_append) {};

base_module.prototype._append_html = function(p_template_data, p_template, p_append) {
	var ui_div_text = template_to_html(p_template_data, p_template);
	$(p_append).append(ui_div_text);
}
base_module.prototype._get_css = function(p_parent_class = "") {
	p_parent_class = p_parent_class == "" ? this.m_class_name : p_parent_class;
	var css_link = document.createElement("link");
        css_link.setAttribute("rel", "stylesheet");
        css_link.setAttribute("type", "text/css");
        css_link.setAttribute("href", "modules/" + p_parent_class + "/" + this.m_class_name + ".css");
	return css_link;
};