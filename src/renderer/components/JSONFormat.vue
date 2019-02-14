<template>
<div class="container-fluid">
    <div class="row">
        <sider></sider>
        <div class="col-md-10" style="height:800px">
			<div id="mainContent" class="wrapper">
				<div class="toolName">JSON/XML/CSS格式化</div>
				<div class="toolUsing clearfix">
				
				<div class="leftBar">
					<textarea name="cipher" id="a_source">{"name":"value"}</textarea>
				</div>

				<div class="operateLR">
					<div class="OptDetail Button">
						<button class="btn btn-primary" v-on:click="jsonFormat" > JSON格式化 </button>
						<button class="btn btn-primary" v-on:click="xmlFormat"> XML格式化 </button>
						<button class="btn btn-primary" v-on:click="cssFormat"> CSS格式化 </button>
						<button class="btn btn-primary" v-on:click="sqlFormat"> SQL格式化 </button>
					</div>
				</div>
				<div class="rightBar">
					<textarea name="message" id="u_source" class="text_source"></textarea>
				</div>
			</div>
			</div>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import sider from './sider'
import vkbeautify from 'vkbeautify'
	
export default {
	components : { sider },
    name: 'JSONFormat',
    data () {
      return {

      }
    },
    methods: {
      jsonFormat () {
        let a_s = $("#a_source").val();
        if ('' == a_s) { 
            alert('请输入原始字符串'); 
            return; 
        }
		$("#u_source").val('');
		try {
			$("#u_source").val(vkbeautify.json(a_s, 4));
		} catch (error) {
			alert('请确认正确的格式方式'); 
            return; 
		}
        
	  },
	  xmlFormat () {
        let a_s = $("#a_source").val();
        if ('' == a_s) { 
            alert('请输入原始字符串'); 
            return; 
        }
		$("#u_source").val('');
		try {
			$("#u_source").val(vkbeautify.xml(a_s));
		} catch (error) {
			alert('请确认正确的格式方式'); 
            return; 
		}
        
	  },
	  cssFormat () {
        let a_s = $("#a_source").val();
        if ('' == a_s) { 
            alert('请输入原始字符串'); 
            return; 
        }
		try {
			$("#u_source").val(vkbeautify.css(a_s));
		} catch (error) {
			alert('请确认正确的格式方式'); 
            return; 
		}
        
	  },
	  sqlFormat() {
		let a_s = $("#a_source").val();
		if ('' == a_s) { 
			alert('请输入原始字符串'); 
			return; 
		}
		try {
			$("#u_source").val(vkbeautify.sql(a_s));
		} catch (error) {
			alert('请确认正确的格式方式'); 
            return; 
		}
			
	  }
    }
}
</script>

<style scoped>

.wrapper {
	width: 100%;
	margin: 0 auto;
}

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

.used  li {
	float: left;
	border: 1px solid #eee;
	margin-right: 10px;
	margin-bottom: 10px;
}

.used a,.coming a {
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

.latestTool .tags,.detailTags {
	float: right;
	width: 194px;
	font-size: 12px;
	color: #909090;
}

.boxShadow {
	box-shadow:2px 2px 10px #AAA ;
	-moz-box-shadow: 2px 2px 10px #AAA ;
	-webkit-box-shadow: 2px 2px 10px #AAA ;
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

.coming  ul {
	margin-top: 20px;
}

.coming h2 {
	color: #aaa;
}

.coming  li {
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
#header { /*  重置header  */
	height: 55px;
	position: relative;
	z-index: 1;
}

#mainContent textarea,#mainContent input[type='text'] { /*  定义textarea和input边框样式  */
	border: 1px solid #ccc;
}

.toolButton { /*  定义Button样式  */
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

.buttonSelected { /*  定义Button选中样式  */
	background-color: #bfeaff;
	border-bottom: 1px solid #65d2ff;
	border-right: 1px solid #65d2ff;
	color: #0061ab;
}

.toolUsing {
	margin-top: 30px;
}

.toolInput { /*  定义input样式  */
	line-height: 30px;
	height: 30px;
	width: 300px;
	padding: 0 5px;
	vertical-align: middle;
}

.toolLabel { /*  定义label样式  */
	font-weight: bold;
	color: #006cbf;
}


/*  END public  */

/*  左右版式  */
.leftBar {
	/* float: left; */
}

.rightBar {
	/* float: right; */
}

.leftBar .title,.rightBar .title {
	padding:5px 0;
	line-height: 30px;
	font-size: 18px;
}

.leftBar textarea,.rightBar textarea {
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
.topBar textarea,.bottomBar textarea {
	width: 998px;
	height: 200px;
}

/*  END 上下版式  */

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

.toolTable th,.toolTable td {
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
