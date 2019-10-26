---
title: 照片分享
date: 2019-09-16 20:02:11
type: photos
# fancybox: true
layout: true
---
<style type="text/css">
	.main-inner{
		width: 100%;
	}
	.main {
    padding-bottom: 150px;
    margin-top: 0px;
    background: rgb(238,238,238);
	}
	.main-inner{
		margin-top: unset;
	}
	.page-post-detail .post-meta{
		display: none;
	}
	body {
		background-image: unset;
		background-attachment: unset;
		background-size: 100%;
		color:#000;
		/*background-position: top left;*/
	}
	.header{
		background: rgba(28, 25, 25, 0.6);
		border-bottom: unset;
	}
	.menu .menu-item a{
		    font-weight: 300;
    		color: #000;
	}

	.imgbox{
	 width: 100%;
	 overflow: hidden;
	 height: 200px;
	 border-right: 1px solid #bcbcbc;
	}
	.box{
		/* visibility: visible;
		overflow: auto; 
		zoom: 1; */
	}
	.box li{
	float: left;
	padding-left:20px;
	padding-top:20px;
    width: 30%;
    position: relative;
    overflow: hidden;
    text-align: center;
    list-style: none;
    margin: 0;
    /*display: inline;*/
    padding-right:20px;
    height: 320px;
	}
	.box li span{
	display: block;
    padding: 4% 7% 10% 7%;
    min-height: 60px;
    background: #fff;
    color: #fff;
    font-size: 18px;
    background: #121212;
    font-weight: 600;
    line-height: 26px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
	}

	img.imgitem{
		padding: unset;
		padding: unset;
		border: unset;
		position: relative;
		padding: 0px;
		height: auto;
		width:100%;
		height:100%;
		box-shadow:0 5px 5px skyblue;
	}


div#posts.posts-expand {
    border: unset;
    padding: unset;
	/* box-shadow: 0 0 15px #000; */
    margin-bottom: 10px;
}
.posts-expand .post-body img{
	width:100%;
	padding: 0px !important;
	box-shadow: 0 0 15px #000;
}
.box p{
	display: block;
    background: #121212;
    color: #fff;
    font-size: 12px;
    font-family: 'SwisMedium';
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    text-align: center;
}

.box span strong{
	/* background: rgb(0,99,229); */
	padding: 10px;
}

.posts-expand .post-title {
	display: block;
}
.btn-more-posts{
	display: inline-block;
    vertical-align: middle;
    font: 55px/80px 'ChaletComprimeMilanSixty';
    color: #000;
    text-align: center;
	width:100%;
    border: unset;
    height: auto;
    background-color: #121212;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

/* @media (max-width: 767px){
	.box li {
    width: 100%;
} */
.title {
    height: 30px;
	outline:none;
}

.box span {
    min-height: 80px;
    border-right: unset;
    font-size: 16px;
}
.box p{
    border-right: unset;
    font-size: 12px;
  
}
.posts-expand {
    margin: unset;
}
	div#comments.comments.v {
    width: 96%;
    padding-top: 50px;
}


}
/* 
@media (min-width: 1600px){
	.container .main-inner{
		width: 100%;
		height:auto;
	}
} */

.footer{
	background-color: #121212 !important;
}
.v * {
    color: #f4f4f4 !important;
}

.v .vwrap .vmark .valert .vcode {
    background: #00050b !important;
}
.post-block{
	background:rgb(238,238,238);
	box-shadow:none;
}
.title{
	background:#000;
	box-shadow: 0 0 15px #000;
}
#conBox0 li{
box-shadow:0 3px 24px 4px #000;
	z-index:100;
	margin-left:20px;
	margin-top:10px;
}

</style>

<div id="box" class="box"></div>


<script type="text/javascript">

function loadXMLDoc(xmlUrl) 
{
	try //Internet Explorer
	{
		xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
	}
	catch(e)
	{
	  try //Firefox, Mozilla, Opera, etc.
	    {
		  xmlDoc=document.implementation.createDocument("","",null);
	    }
	  catch(e) {alert(e.message)}
	}
	
	try 
	{
		  xmlDoc.async=false;
		  xmlDoc.load(xmlUrl);
	}
	catch(e) {
		try //Google Chrome  
		  {  
			var chromeXml = new XMLHttpRequest();
			chromeXml.open("GET", xmlUrl, false);
			chromeXml.send(null);
			xmlDoc = chromeXml.responseXML.documentElement; 				
			//alert(xmlDoc.childNodes[0].nodeName);
			//return xmlDoc;    
		  }  
		  catch(e)  
		  {  
			  alert(e.message)  
		  }  		  	
	}
	return xmlDoc; 
}

var xmllink="https://hexophoto-1259178461.cos.ap-beijing.myqcloud.com"
//访问域名链接就是我上面提到的那个访问域名xml链接

xmlDoc=loadXMLDoc(xmllink);
var urls=xmlDoc.getElementsByTagName('Key');
var date=xmlDoc.getElementsByTagName('LastModified');
var wid=250;
var showNum=12; //每个相册一次展示多少照片
if ((window.innerWidth)>1200) {wid=(window.innerWidth*3)/18;}
var box=document.getElementById('box');
var i=0;

var content=new Array();
var tmp=0;
var kkk=-1;
for (var t = 0; t < urls.length ; t++) {
	var bucket=urls[t].innerHTML;
	var length=bucket.indexOf('/');
	if(length===bucket.length-1){
		kkk++;
		content[kkk]=new Array();
		content[kkk][0]={'url':bucket,'date':date[t].innerHTML.substring(0,10)};
		tmp=1;
	}
	else {
		content[kkk][tmp++]={'url':bucket.substring(length+1),'date':date[t].innerHTML.substring(0,10)};
	}
}

for (var i = 0; i < content.length; i++) {
	var conBox=document.createElement("div");
	conBox.id='conBox'+i;
	box.appendChild(conBox);
	var item=document.createElement("div");
	var title=content[i][0].url;
	item.innerHTML="<button class=title><span style=display:inline;><strong style=color:#fff; >"+title.substring(0,title.length-1)+"</strong></span></button>";
	conBox.appendChild(item);

	for (var j = 1; j < content[i].length && j < showNum+1; j++) {
		var con=content[i][j].url;
		var item=document.createElement("li");
		item.innerHTML="<div class=imgbox id=imgbox><img class=imgitem src="+xmllink+'/'+title+con+" alt="+con+"></div><span>"+con.substring(0,con.length-4)+"</span><p>上传于"+content[i][j].date+"</p>";
		conBox.appendChild(item);
	}
	if(content[i].length > showNum){
		var moreItem=document.createElement("button");
		moreItem.className="btn-more-posts";
		moreItem.id="more"+i;
		moreItem.value=showNum+1;
		let cur=i;
		moreItem.onclick= function (){
			moreClick(this,cur,content[cur],content[cur][0].url);
		}
		moreItem.innerHTML="<span style=display:inline;><span style=color:#f40;>加载更多</span></span>"; 
		conBox.appendChild(moreItem);
	}
}

function moreClick(obj,cur,cont,title){
	var parent=obj.parentNode;
	parent.removeChild(obj);
	var j=obj.value;
	var begin=j;
	for ( ; j < cont.length && j < Number(showNum) + Number(begin); j++) {
		console.log( Number(showNum) + Number(begin));
		var con=cont[j].url;
		var item=document.createElement("li");
		item.innerHTML="<div class=imgbox id=imgbox style=height:"+wid+"px;><img class=imgitem src="+xmllink+'/'+title+con+" alt="+con+"></div><span>"+con.substring(0,con.length-4)+"</span><p>上传于"+cont[j].date+"</p>";
		parent.appendChild(item);
	}
	if(cont.length > j){
		obj.value=j;
		parent.appendChild(obj);
	}
}

</script>