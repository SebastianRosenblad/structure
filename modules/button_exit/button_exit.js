function button_exit(p_append) {
	//$(p_append).append("<br>Yo");
	// Add HTML
	document.getElementsByTagName("head")[0].appendChild(this.get_css("button_exit"));
}
button_exit.prototype.get_css = function(p_module) {
	var css_link = document.createElement("link");
        css_link.setAttribute("rel", "stylesheet");
        css_link.setAttribute("type", "text/css");
        css_link.setAttribute("href", "modules/" + p_module + "/" + p_module + ".css");
	return css_link;
};