var button_menu = function(p_unique_name, p_parent_name, p_classes) {
	this.m_class_name = "button_menu";
	this.m_unique_name = p_unique_name;
	
	p_classes = p_classes == undefined ? [] : p_classes;
	
	var template = [
		'<div id="{{unique_name}}" class="{{class_name}} {{unique_name}} {{style_classes}}">{{content}}</div>'
	].join('\n');
	var expressions = {
		unique_name: this.m_unique_name,
		class_name: this.m_class_name,
		style_classes: p_classes.join(" "),
		content: ""
	};
	this._append_html(expressions, template, p_parent_name);
	
	/***** Johannes HTML: begin() *****/
	var template = [
		'<div id="menu">',
			'<div class="menuHeader" id="menuTitle"></div>',
			'<div class="panel" id="mainmenu"></div>',
			'<div class="panel" id="submenu"></div>',
			'<div class="panel" id="subsubmenu"></div>',
		'</div>'
	].join('\n');
	/***** Johannes HTML: end() *****/
	this._append_html("", template, "#hider");
	
	unique_ui_elements.push("#menu");
};
button_menu.prototype = Object.create(base_module.prototype);

button_menu.prototype._specific_initialize = function() {
	/***** Johannes code: begin() *****/
	
	$("#menuTitle").html(course_title);
	var pdcnt=0;
	for(var i=0;i<course_structure.length;i++) {
		$("#mainmenu").append('<div class="menutile" id="m'+i+'">'+course_structure[i].title+'</div>');
		$("#submenu").append('<div id="sp'+i+'" class="submenu">');
		$("#m"+i).data("sub",i);
		if(course_structure[i].menuItem=="true"){
			$("#m"+i).data("mi",true);
			$("#m"+i).data("link",course_structure[i].link);
		} else{
			$("#m"+i).data("mi",false);
		}
		for(var iii=0;iii<i;iii++){
			$("#sp"+i).append('<div class="offsettile"></div>');
		}
		if(course_structure[i].subMenu!=undefined){
			for(var ii=0;ii<course_structure[i].subMenu.length;ii++){
				if(course_structure[i].subMenu[ii].subMenu==undefined){
					if(course_structure[i].subMenu[ii].display!="hidden"){
						if(course_structure[i].subMenu[ii].title.length>50){
							$("#sp"+i).append('<div style="line-height:1.4em;" class="submenuitem" id="sm'+i+'_'+ii+'">'+course_structure[i].subMenu[ii].title+'</div>');
						} else{
							$("#sp"+i).append('<div class="submenuitem" id="sm'+i+'_'+ii+'">'+course_structure[i].subMenu[ii].title+'</div>');	
						}
						$("#sm"+i+"_"+ii).data("pd",pdcnt);
						$("#sm"+i+"_"+ii).data("parent",$("#m"+i));
					}
					if(course_structure[i].subMenu[ii].inProgress=="false"){
						var iP=false;	
					} else{
						var iP=true;
					}
					console.log("I think it gets here");
					/*courseList.push({
						"chaptertitle":course_structure[i].title,
						"id":course_structure[i].subMenu[ii].id,
						"title":course_structure[i].subMenu[ii].title,
						"progressBar":course_structure[i].subMenu[ii].progressBar,
						"progressClick":course_structure[i].subMenu[ii].progressClick,
						"autoNext":course_structure[i].subMenu[ii].autoNext,
						"onNext":course_structure[i].subMenu[ii].onNext,
						"onPrev":course_structure[i].subMenu[ii].onPrev,
						"srctype":course_structure[i].subMenu[ii].srctype,
						"src":course_structure[i].subMenu[ii].src,
						"pimg":course_structure[i].subMenu[ii].pimg,
						"poster":course_structure[i].subMenu[ii].poster,
						"subs":course_structure[i].subMenu[ii].subs,
						"showNext":course_structure[i].subMenu[ii].showNext,
						"showPrevious":course_structure[i].subMenu[ii].showPrevious,
						"showControls":course_structure[i].subMenu[ii].showControls,
						"showWarning":course_structure[i].subMenu[ii].showWarning,
						"inProgress":iP,
						"tile":$("#sm"+i+"_"+ii)
					});*/
					console.log("But not here");
					pdcnt++;						
				} else{
					if(course_structure[i].subMenu[ii].title.length>50){
						$("#sp"+i).append('<div style="line-height:1.4em;" class="submenutile" id="sm'+i+'_'+ii+'">'+course_structure[i].subMenu[ii].title+'</div>');
					} else{
						$("#sp"+i).append('<div class="submenutile" id="sm'+i+'_'+ii+'">'+course_structure[i].subMenu[ii].title+'</div>');	
					}
					$("#sm"+i+"_"+ii).data("parent",$("#m"+i));
					$("#sm"+i+"_"+ii).data("tile","m"+i);
					$("#subsubmenu").append('<div id="ssp'+ii+'" class="subsubmenu">');
					$("#sm"+i+"_"+ii).data("sub",ii);
					for(var iiii=0;iiii<(ii+i);iiii++){
						$("#ssp"+ii).append('<div class="offsettile"></div>');
					}
					for(var iii=0;iii<course_structure[i].subMenu[ii].subMenu.length;iii++){
						if(course_structure[i].subMenu[ii].subMenu[iii]!="hidden"){
							$("#ssp"+ii).append('<div class="subsubmenuitem" id="ssm'+i+'_'+ii+'_'+iii+'">'+course_structure[i].subMenu[ii].subMenu[iii].title+'</div>');
							$("#ssm"+i+"_"+ii+"_"+iii).data("pd",pdcnt);
							$("#ssm"+i+"_"+ii+"_"+iii).data("parent",$("#sm"+i+"_"+ii));
						}
						courseList.push({
							"chaptertitle":course_structure[i].subMenu[ii].title,
							"id":course_structure[i].subMenu[ii].subMenu[iii].id,
							"title":course_structure[i].subMenu[ii].subMenu[iii].title,
							"progressBar":course_structure[i].subMenu[ii].subMenu[iii].progressBar,
							"progressClick":course_structure[i].subMenu[ii].subMenu[iii].progressClick,
							"autoNext":course_structure[i].subMenu[ii].subMenu[iii].autoNext,
							"onNext":course_structure[i].subMenu[ii].subMenu[iii].onNext,
							"onPrev":course_structure[i].subMenu[ii].subMenu[iii].onPrev,
							"src":course_structure[i].subMenu[ii].subMenu[iii].src,
							"srctype":course_structure[i].subMenu[ii].subMenu[iii].srctype,
							"pimg":course_structure[i].subMenu[ii].subMenu[iii].pimg,
							"poster":course_structure[i].subMenu[ii].subMenu[iii].poster,
							"subs":course_structure[i].subMenu[ii].subMenu[iii].subs,
							"showNext":course_structure[i].subMenu[ii].subMenu[iii].showNext,
							"showPrevious":course_structure[i].subMenu[ii].subMenu[iii].showPrevious,
							"showControls":course_structure[i].subMenu[ii].subMenu[iii].showControls,
							"showWarning":course_structure[i].subMenu[ii].subMenu[iii].showWarning,
							"tile":$("#ssm"+i+"_"+ii+"_"+iii)
						});
						pdcnt++;
					}
					$("#subsubmenu").append('</div>');
				}
			}
		}
		$("#submenu").append('</div>');
	}
	$(".menutile").each(function(){
		$(this).data("title",$(this).html());
		$(this).addClass("menuinactive");	
		if($(this).data("mi")==false){
			$(this).append('<div class="arrow"></div>');
			$(this).append('<div class="menuHider"></div>');
			$(this).click(function(){
				$(".subsubmenu").hide();
				$(".submenutile").removeClass("submenuactive").addClass("submenuinactive");
				$(".menutile").removeClass("menuactive").addClass("menuinactive");
				$(".submenu").hide();				
				$(this).removeClass("menuinactive").addClass("menuactive");
				$("#sp"+$(this).data("sub")).show();
			});
		} else{
			$(this).click(function(){
				gotoChapter(getId($(this).data("link")));
			});	
		}
	});
	$(".submenuitem").each(function(){
		$(this).append('<div class="check"></div>');
		$(this).append('<div class="menuHider"></div>');
		$(this).addClass("submenuinactive");	
		$(this).click(function(){
			gotoChapter($(this).data("pd"));
		});
	});
	$(".submenutile").each(function(){
		$(this).data("title",$(this).html());
		$(this).append('<div class="arrow"></div>');
		$(this).append('<div class="menuHider"></div>');
		$(this).addClass("submenuinactive");	
		$(this).click(function(){
			$(".submenutile").removeClass("submenuactive").addClass("submenuinactive");
			$(".subsubmenu").hide();				
			$(this).removeClass("submenuinactive").addClass("submenuactive");
			$("#ssp"+$(this).data("sub")).show();
		});
	});
	$(".subsubmenuitem").each(function(){
		$(this).append('<div class="check checkon"></div>');
		$(this).append('<div class="menuHider"></div>');
		$(this).addClass("subsubmenuinactive");	
		$(this).click(function(){
			gotoChapter($(this).data("pd"));
		});
	});
	
	/*if(gotProgress==true){
		pD=progress.split(",");
	 	for(var i=0;i<pD.length;i++){
	 		pD[i]=Number(pD[i]);
 		}
	} else{
		pD=new Array();
		for(var ip=0;ip<courseList.length;ip++){
			pD.push(0);
		}	
	}
	flushProgress();*/
	//gotoChapter(position);
	
	/***** Johannes code: end() *****/
	
	var self = this;
	
	$("#" + this.m_unique_name).click(function() {
		$("#menu").toggle();
		hide_unique_ui_elements("#menu");
	});
}