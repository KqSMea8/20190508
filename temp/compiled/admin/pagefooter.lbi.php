<div id="footer">
    <p>©2019-2029 深圳市硕泰昌科技有限公司版权所有 ICP备案证书号:XXXXXX</p>
</div>
<?php echo $this->smarty_insert_scripts(array('files'=>'jquery.purebox.js,../js/jquery.picTip.js')); ?>
<?php if ($this->_var['cat_belongs'] == 0 || $this->_var['brand_belongs'] == 0): ?>
<script type="text/javascript">
$(function(){
	$.jqueryAjax('dialog.php', 'is_ajax=1&act=dialog_upgrade', function(data){
		var content = data.content;
		pb({
			id:"categroy_dialog",
			title:jl_reminder,
			width:788,
			content:content,
			ok_title:"<?php echo $this->_var['lang']['button_submit_alt']; ?>",
			drag:false,
			foot:false,
			cl_cBtn:false
		});			
	});
});
</script>
<?php endif; ?>