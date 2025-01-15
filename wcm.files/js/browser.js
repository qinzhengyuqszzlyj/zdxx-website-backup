function getInfoClickCount(info_id,div_id,initval)
{
	var ic = jsonrpc.InfoBaseRPC.getInfoClickCount(info_id);
	
	if(initval != null && initval != "")
	{
		jQuery("#"+div_id).text(parseInt(ic)+initval);
	}else
		jQuery("#"+div_id).text(parseInt(ic));
}

function setClickCount(app_id,id)
{
	if(app_id == "appeal")
	{
		jsonrpc.SQRPC.setSQClickCount(id);
	}
}

//保存评论
function insertComment(app_id,site_id,item_id,cmt_content)
{
	var cb = new Bean("com.cicro.wcm.bean.system.comment.CommentBean",true);
	cb.item_id = item_id;
	cb.app_id = app_id;
	cb.site_id = site_id;
	cb.cmt_content = cmt_content;
	try{
		cb.me_id = memberBean.me_id;
		cb.me_nickname = memberBean.me_nickname;
	}catch(e){}

	return jsonrpc.CommentManRPC.insertComment(cb);
}

//得到评论总数，信息评论用
jQuery.fn.getCommentCount = function(id,type){
	if(type == null) type = "info";
	$(this).text(jsonrpc.CommentSetRPC.getCommentCount(id,type));
}