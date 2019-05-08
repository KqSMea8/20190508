<!doctype html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="Keywords" content="<?php echo $this->_var['keywords']; ?>" />
<meta name="Description" content="<?php echo $this->_var['description']; ?>" />

<title><?php echo $this->_var['page_title']; ?></title>



<link rel="shortcut icon" href="favicon.ico" />
<?php echo $this->fetch('library/js_languages_new.lbi'); ?>
</head>

<body>

<?php echo $this->fetch('library/page_header_common.lbi'); ?>
<div class="content article-content">
	<div class="article-search-hd mb20">
    	<div class="w w1200">
            <div class="hd-tit">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;防伪查询&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div class="hd-search">
                <div class="article_search">
                    <div class="f-search">
                        <input name="keywords" type="text" id="requirement" value="<?php echo $this->_var['search_value']; ?>" class="text" placeholder="请输入您的防伪校验码" />
                        <a href="javascript:void(0);" class="ui-btn-submit" id="searchSubmit"><i class="iconfont icon-search"></i>查询</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="w w1200 clearfix">
        <img src="data/afficheimg/<?php echo $this->_var['ad_res']['ad_code']; ?>" alt="" style="background-color: green; width: <?php echo $this->_var['config_res']['ad_width']; ?>px; height: <?php echo $this->_var['config_res']['ad_height']; ?>px;">
        <div class="article-main" style="width: 1200px; margin: 0px;padding: 0px;">
        </div>
    </div>
</div>
<?php echo $this->fetch('library/page_footer.lbi'); ?>
<?php echo $this->smarty_insert_scripts(array('files'=>'jquery.SuperSlide.2.1.1.js')); ?>
<script type="text/javascript" src="themes/<?php echo $GLOBALS['_CFG']['template']; ?>/js/dsc-common.js"></script>
<script type="text/javascript" src="themes/<?php echo $GLOBALS['_CFG']['template']; ?>/js/jquery.purebox.js"></script>
<script type="text/javascript">
$(function(){
    $("#searchSubmit").click(function(){
        //$('#requirement').val();
        //alert($('#requirement').val());
        var check_code = $('#requirement').val();
        if($('#requirement').val() == false){
            alert('请输入您的校验码....');
            return false;
        }else{
            $.ajax({
                url:'anti_fake_verify.php?check_code='+check_code,
                dataType:'TEXT',
                success:function(data){
                    $(".article-main").html(data);
                }
            })
        }
    })
    
});
</script>

</body>
</html>
