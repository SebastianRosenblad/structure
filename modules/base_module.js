var base_module = function(p_unique_name, p_parent_name, p_classes) {};

base_module.prototype.initialize = function(p_module_name, p_opentip_text, p_children) {
	document.getElementsByTagName("head")[0].appendChild(this._get_css(p_module_name));
	
	if (p_opentip_text != undefined && p_opentip_text != "") {
		new Opentip("#" + this.m_unique_name, p_opentip_text, { style: "ui_help" });
	}
	
	this._specific_initialize(p_children);
};
base_module.prototype._specific_initialize = function(p_children) {};

base_module.prototype._append_html = function(p_expressions, p_template, p_parent) {
	var module_div_text = template_to_html(p_expressions, p_template);
	$(p_parent).append(module_div_text);
}
base_module.prototype._get_css = function(p_module_name) {
	p_module_name = (p_module_name == "" || p_module_name == undefined) ? this.m_class_name : p_module_name;
	var css_link = document.createElement("link");
        css_link.setAttribute("rel", "stylesheet");
        css_link.setAttribute("type", "text/css");
        css_link.setAttribute("href", "modules/" + p_module_name + "/" + this.m_class_name + ".css");
	return css_link;
};

var unique_ui_elements = [];
hide_unique_ui_elements = function(p_ele) {
	unique_ui_elements.forEach(function(ui_ele) {
		if (ui_ele != p_ele) {
			$(ui_ele).hide();
		}
	});
};