imgUpload();
//上传
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
