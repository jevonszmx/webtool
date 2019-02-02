<template>
  <div class="container-fluid">
    <div class="row">
      <sider></sider>
      <div class="col-md-10" style="height:800px">
        <div id="mainContent" class="wrapper">
          <div class="toolName">编码转换</div>
          <div class="toolUsing clearfix">
            <div class="toolsTab clearfix">
              <ul class="nav nav-tabs">
                <li><a  v-on:click="$router.push({name : 'Native2Unicode' })">Native/Unicode</a></li>
				<li class="active"><a  v-on:click="$router.push({name : 'Native2UTF8' })">Native/UTF-8</a></li>
				<li><a  v-on:click="$router.push({name : 'Native2ASCII' })">Native/ASCII</a></li>
				<li><a  v-on:click="$router.push({name : 'urlencode' })">URL转码</a></li>
				<li><a  v-on:click="$router.push({name : 'Base64' })">Base64转码</a></li>
              </ul>
            </div>

            <div class="leftBar">
              <div class="title">Native:</div>
              <textarea name="cipher" id="n_source">这是一个例子,this is a example</textarea>
            </div>

            <div class="operateLR">
              <div class="OptDetail Button">
                <button class="btn btn-primary" v-on:click="Native2UTF8">UTF-8 -&gt;</button>
                <button class="btn btn-primary" v-on:click="UTF82Native">-&lt; Native</button>
              </div>
            </div>

            <div class="rightBar">
              <div class="title">Unicode:</div>
              <textarea name="message" id="u_source" class="text_source"></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import sider from './sider'
	
export default {
	components : { sider },
	name: "Native2UTF8",
  		data() {
    		return {};
  		},
  	methods: {
		Native2UTF8() {
		var n_s = $("#n_source").val();
		if ("" == n_s) {
			alert("请输入Native字符串");
			return;
		}
		$("#u_source").val(
			n_s.replace(/[^\u0000-\u00FF]/g, function($0) {
			return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;");
			})
		);
		},
		UTF82Native() {
		var code = $("#u_source").val();
		$("#n_source").val(
			unescape(code.replace(/&#x/g, "%u").replace(/;/g, ""))
		);
		}
  	}
};
</script>

<style scoped>
.wrapper {
  width: 100%;
  margin: 0 auto;
}

.clearfix:after {
  clear: both;
  content: " ";
  display: block;
  font-size: 0;
  height: 0;
  visibility: hidden;
}

.clearfix {
  display: block;
  height: 1%;
}

.texthidden {
  text-indent: -9999px;
  white-space: nowrap;
  line-height: 0;
}

.mr20 {
  margin-right: 20px;
}

#header {
  height: 50px;
  width: 100%;
}

#mainSearch {
  float: right;
  margin-top: 10px;
}

.searchBox {
  height: 30px;
  line-height: 30px;
  padding: 0 15px 0 5px;
  background-color: #fff;
  color: #aaa;
  font-size: 14px;
  vertical-align: middle;
}

.searchButton {
  display: inline-block;
  padding: 2px 5px;
  margin-left: 20px;
  *height: 30px;
  height: 30px\9;
  background-color: #ff9600;
  font-size: 18px;
  color: #fff;
  cursor: pointer;
  vertical-align: middle;
}

.searchButton:hover {
  background-color: #ff8000;
}

#footer {
  margin-top: 20px;
  background-color: #ececec;
  line-height: 30px;
}
/* END 公共部分 */

/*  INDEX  */
.column {
  margin-top: 10px;
}

.column h2 {
  color: #006cbf;
  font-size: 24px;
  font-weight: normal;
}

.used ul {
  margin-top: 20px;
}

.used li {
  float: left;
  border: 1px solid #eee;
  margin-right: 10px;
  margin-bottom: 10px;
}

.used a,
.coming a {
  height: 60px;
  width: 60px;
  display: block;
}

.latestTool {
  width: 300px;
  float: left;
  margin-top: 20px;
  padding: 10px;
  background-color: #f6fcff;
  position: relative;
  z-index: 1;
}

.latestTool dt {
  float: right;
  font-size: 18px;
  line-height: 24px;
}

.latestTool img {
  float: left;
  margin-right: 10px;
  width: 96px;
}

.toolDescription dt {
  width: 194px;
  overflow: hidden;
  white-space: nowrap; /*不显示的地方用省略号...代替*/
  text-overflow: ellipsis; /* 支持 IE */
  -o-text-overflow: ellipsis; /* 支持 Opera */
}

.latestTool .intro {
  height: 36px;
  float: right;
  width: 194px;
  margin: 5px 0;
  overflow: hidden;
}

.latestTool .tags,
.detailTags {
  float: right;
  width: 194px;
  font-size: 12px;
  color: #909090;
}

.boxShadow {
  box-shadow: 2px 2px 10px #aaa;
  -moz-box-shadow: 2px 2px 10px #aaa;
  -webkit-box-shadow: 2px 2px 10px #aaa;
}

.detailTags {
  width: 294px;
}

.detail {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  width: 400px;
  padding: 10px;
  background-color: #dff5fe;
}

.detail dt {
  width: 294px;
}

.detailIntro {
  float: right;
  width: 294px;
  margin: 5px 0;
}

.coming ul {
  margin-top: 20px;
}

.coming h2 {
  color: #aaa;
}

.coming li {
  float: left;
  border: 1px solid #eee;
  margin-right: 10px;
  margin-bottom: 10px;
}

.advise {
  margin: 30px 0 30px 20px;
  font-size: 16px;
  color: #333;
}

.toolActive {
  z-index: 998;
}

/* END INDEX  */
/*  tools  */

/*  public  */
#header {
  /*  重置header  */
  /*background: #006cbf url(../img/headerBg.gif) left bottom repeat-x;*/
  height: 55px;
  position: relative;
  z-index: 1;
}

#mainContent textarea,
#mainContent input[type="text"] {
  /*  定义textarea和input边框样式  */
  border: 1px solid #ccc;
}

.toolButton {
  /*  定义Button样式  */
  padding: 0 10px;
  margin: 5px;
  line-height: 33px;
  height: 33px;
  width: auto;
  overflow: visible;
  background-color: #eaf8ff;
  border-bottom: 1px solid #a8e6ff;
  border-right: 1px solid #a8e6ff;
  border-top: 1px solid #fafdff;
  border-left: 1px solid #fafdff;
  font-weight: bold;
  cursor: pointer;
  color: #666;
  vertical-align: middle;
}

.toolButton:hover {
  color: #006cbf;
}

.buttonSelected {
  /*  定义Button选中样式  */
  background-color: #bfeaff;
  border-bottom: 1px solid #65d2ff;
  border-right: 1px solid #65d2ff;
  color: #0061ab;
}

.toolUsing {
  margin-top: 30px;
}

.toolInput {
  /*  定义input样式  */
  line-height: 30px;
  height: 30px;
  width: 300px;
  padding: 0 5px;
  vertical-align: middle;
}

.toolLabel {
  /*  定义label样式  */
  font-weight: bold;
  color: #006cbf;
}

/*  description  */
.description {
  background-color: #dff5fe;
  padding: 15px 10px;
  margin-top: -4px;
}

.description h2,
.intro,
.tags {
  width: 874px;
  float: right;
}

.description h2 {
  line-height: 24px;
  font-size: 18px;
}

.description .img {
  float: left;
  margin-right: 10px;
  width: 96px;
}

.description .intro {
  margin: 5px 0;
}

.description .tags {
  font-size: 12px;
  color: #909090;
}

.toolName {
  line-height: 24px;
  font-size: 24px;
  color: #777;
  margin-top: 10px;
}
/* 　END description  */

/*  END public  */

/*  左右版式  */

.leftBar {
  /* float: left; */
}

.rightBar {
  /* float: right; */
}

.leftBar .title,
.rightBar .title {
  padding: 5px 0;
  line-height: 30px;
  font-size: 18px;
}

.leftBar textarea,
.rightBar textarea {
  width: 100%;
  height: 200px;
}

.operateLR {
  float: left;
  width: 100%;
  height: 50px;
  text-align: left;
  margin: 10px 0 0 10px;
}
/*  END 左右版式  */

/*  上下版式  */
.topBar textarea,
.bottomBar textarea {
  width: 998px;
  height: 200px;
}

/*  END 上下版式  */

/*  工具切换
.toolsTab {
	margin-bottom: 10px;
	line-height: 40px;
	background-color: #f6fcff;
	font-size: 18px;
}
  

.toolsTab li {
	float: left;
	padding: 0 10px;
	background-color: #e8e8e8;
	color: #000;
	cursor: pointer;
	border-right:1px solid #ccc;
}

.toolsTab li.focus {
	margin-right: 1px;
	margin-top: -1px;
	background-color: #0f5992;
	color: #fff;
	line-height: 42px;
}
*/
/*  END 工具切换  */

/*  表格样式  */
.toolTable {
  text-align: center;
  line-height: 36px;
  border-collapse: collapse;
  border: none;
  margin: 10px 0 20px 0;
}

.toolTable caption {
  margin-bottom: 20px;
  font-size: 24px;
  color: #777;
}

.toolTable th,
.toolTable td {
  border: solid #ccc 1px;
}

.toolTable th {
  color: #006cbf;
}

.separateColor {
  background-color: #f4f4f4;
}
/*  END 表格样式  */
</style>
