var regmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var regname = new RegExp ('^[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ][a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ \'-]{1,50}$');
var regmsg = new RegExp('^[0-9a-zA-Zaàâªæáäãåā -“,?;./:$*€] {1,1000}$');
inputs = null;
err=0;


function check(elem){
	console.info(document.getElementById('email-input'));
	if(elem.tagName=='FORM'){
		err=0;
		inputs = document.getElementsByClassName('form-control');
		for(var i=0;i<inputs.length;i++){
			tests(inputs[i]);
		}
		if(err){
			return false;
		}
		else{
			sendmail.php
			return true;
		}
	}
	else{
		tests(elem)
	}
}

function tests(e){
	if(e.id.includes("email")){
		reg=regmail;
	}
	if(e.id.includes("name")){
		reg=regname;
	}
	if(e.id.includes("msg")){
		reg=regmsg;
	}
	if(reg.test(e.value)){
		$(e).addClass("form-control-success");
		$(e).removeClass("form-control-danger");
		$(e).parent().addClass("has-success");
		$(e).parent().removeClass("has-danger");
	}
	else{
		err=1;
		$(e).addClass("form-control-danger");
		$(e).removeClass("form-control-success");
		$(e).parent().addClass("has-danger");
		$(e).parent().removeClass("has-success");
	}
}
