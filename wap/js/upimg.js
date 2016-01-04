$(".file").on("change", function(){    //input:file改变时
	var files = !!this.files ? this.files : [];
	if (!files.length || !window.FileReader) return;
	if (/^image/.test( files[0].type)){
		var reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onloadend = function(){
			$(".upImg").attr({"src": this.result });
		}
	}
});
