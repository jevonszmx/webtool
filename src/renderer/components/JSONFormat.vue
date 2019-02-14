<template>
<div class="container-fluid">
    <div class="row">
        <sider></sider>
        <div class="col-md-10" style="height:800px">
			<div class="wrapper">
				<div class="h2">JSON/XML/CSS格式化</div>
				<hr />
				<div class="toolUsing clearfix">
				<div class="leftBar">
					<textarea name="cipher" id="a_source" class="form-control h200">{"name":"value"}</textarea>
				</div>
				<div class="operateLR">
					<button class="btn btn-primary" v-on:click="jsonFormat" > JSON格式化 </button>
					<button class="btn btn-primary" v-on:click="xmlFormat"> XML格式化 </button>
					<button class="btn btn-primary" v-on:click="cssFormat"> CSS格式化 </button>
					<button class="btn btn-primary" v-on:click="sqlFormat"> SQL格式化 </button>
				</div>
				<div class="rightBar">
					<textarea name="message" id="u_source" class="form-control h200"></textarea>
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
.h200 {
	height: 200px;
}

.operateLR {
	float: left;
	width: 100%;
	height: 50px;
	text-align: left;
	margin: 10px 0 0 10px;
}
</style>
