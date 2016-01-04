图片上传案例
PC端：
基于Jquery，调用fileuploader插件，调用如下：
function imgUpload(){   
    var uploader = new qq.FileUploader({
        element:$('.upFile')[0],                   //模拟file层
        listElement: null,
        action: 'index.php?mod=upfile&ac=up',      //提交地址
        allowedExtensions: ['gif','jpg','png','jpeg'],    //限定格式，视频为flv
        onSubmit: function(id, fileName){                 //提交
            $('.upImg').attr('src', '');
        },        
        onComplete: function(id, fileName, responseJSON){ //完成
            if (responseJSON.result){                     //上传成功       
                $('.upImg').attr({'src':responseJSON.fileurl}).css({'border':'1px solid #66552F'});    //预览  
            }else{
                alert('上传失败，请稍后再试！');
                imgUpload();
            }
        }
    })
}


移动端：
调用zepto库，使用html5上传
结构：<input type="file" name="" id="" class="file" accept="image/*" />
JS如下：
$(".file").on("change", function(){    //input:file改变时
	var files = !!this.files ? this.files : [];
	if (!files.length || !window.FileReader) return;
	if (/^image/.test( files[0].type)){
		var reader = new FileReader();
		reader.readAsDataURL(files[0]);
		reader.onloadend = function(){
			$(".upImg").attr({"src": this.result });  //this.result为base64位编码格式
		}
	}
});
