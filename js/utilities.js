function template_to_html(data, template) {
    var compile = Handlebars.compile(template);
    return compile(data);
};