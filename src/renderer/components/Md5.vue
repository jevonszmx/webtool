<template>
<div class="container-fluid">
    <div class="row">
        <sider></sider>
        <div class="col-md-10" style="height:800px">
            <div class="root-detail">
            <div class="sub_header">
                <div class="app_desc">
                <h2>MD5加密</h2>
                </div>
            </div>
            <div class="app">
                <div class="view">
                    <textarea name="code" class="code form-control" id="code" > 欢迎,如果您觉得还不错,麻烦分享给您的朋友,谢谢. </textarea>
                </div>
            </div>
            <p class="clearfix"></p>
            <div class="layui-form-item mt20"> 
                <input type="button" class=" convert-btn btn btn-primary" v-on:click="md5Convert" value="md5转换" />
            </div>
            <div class="app">
                <div class="view">
                    <textarea name="result" class="result form-control" id="result" placeholder="返回结果" ></textarea>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
import md5 from "md5";
import layer from "layer";
import sider from './sider'
	
export default {
components : { sider },
  name: "Md5",
  data() {
    return {};
  },
  mounted: function() {

  },
  methods: {
    md5Convert () {
        var code = $("#code").val();
        if (code == '') {
            alert("内容不能空.");
            return;
        }
        $("#result").val(md5(code));
        return;
    }
  }
};
</script>

<style scoped>

.root-detail {
  min-height: 100%;
  padding-bottom: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  /* background-color: #f7f7f7; */
  /* margin-left: 12px; */
  /* margin-right: 12px; */
  flex: 1;
  /* max-width: 1100px */
}

.root-detail .sub_header {
  flex: 0 0 auto;
  display: flex;
  justify-content: space-between;
  align-content: flex-start;
  flex-direction: row;
  flex-wrap: nowrap;
  padding-top: 0;
}

.root-detail .sub_header .app_desc {
  margin-top: 10px;
}

.root-detail .sub_header .app_desc h1 {
  font-size: 240%;
  font-weight: 400;
  line-height: 1;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  color: #333;
  letter-spacing: -1px;
}

.root-detail .sub_header .app_desc .desc {
  padding: 0;
  padding-bottom: 2px;
  margin: 0;
  margin-top: 10px;
  font-weight: 300;
  font-size: 72%;
  color: #999;
  overflow-y: hidden;
  transition: all 300ms;
  max-height: 50px;
  opacity: 1;
  padding-right: 15px;
}

.root-detail .sub_header .ad {
  margin-top: 10px;
  min-height: 60px;
  flex: 1;
  text-align: right;
}

.root-detail .app {
  /* flex: 1 0 auto; */
  /* background-color: #fff; */
  /* box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1); */
  margin-top: 20px;
  transition: margin-top 300ms;
}

.root-detail .app .view {
  width: 100%;
}

.waves-effect {
  position: relative;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
}

.waves-effect:hover {
  color: #39bf83;
}

.mt10 {
  margin-top: 10px !important;
}

.CodeMirror-line-numbers {
  width: 2.2em;
  color: #aaa;
  background-color: #eee;
  text-align: right;
  padding-right: 0.3em;
  font-size: 10pt;
  font-family: monospace;
  padding-top: 0.4em;
  line-height: normal;
}

.m10 {
  margin: 10px;
}

.m20 {
  margin: 16px;
}

.mt20 {
  margin-top: 20px !important;
}

.mt40 {
  margin-top: 40px;
}

.ml20 {
  margin-left: 20px;
}

.w120 {
  width: 120px !important;
}

.w180 {
  width: 180px !important;
}

.w210 {
  width: 210px !important;
}

.w260 {
  width: 260px !important;
}

.w110 {
  width: 110px !important;
}

.w500 {
  width: 500px !important;
}

.p9 {
  padding: 9px;
}

.p10 {
  padding: 10px;
}

.pt4 {
  padding-top: 4px !important;
}

.pb30 {
  padding-bottom: 30px;
}

.mtb20 {
  margin-top: 20px;
  margin-bottom: 20px;
}
.custom-btn-color {
  background-color: #9377ce !important;
}

.CodeMirror-code {
  color: #484646 !important;
}

.layui-timeline-item {
  padding-bottom: 0 !important;
}

.layui-elem-quote {
  margin-bottom: 0 !important;
}

.layui-form-select dl dd.layui-this {
  background-color: #8e78c9 !important;
}

.layui-form-select {
  text-align: left !important;
}

@media only screen and (max-width: 480px) {
  .header-timeline,
  .header-shang,
  .header-link {
    display: none;
  }

  .sub_header {
    padding-top: 2px !important;
  }

  .group-custom {
    display: block;
    margin: 10px 0;
  }

  .group-custom-innel {
    margin: 10px 0;
  }

  #CollapsibleViewDetail a {
    padding-left: 8px !important;
  }

  .w110 {
    width: 90px !important;
  }

  .w260 {
    width: auto !important;
  }

  .w210 {
    width: 200px !important;
  }

  .label-select {
    display: block;
    margin: 10px 0;
  }

  .layui-input-block {
    margin-left: 80px !important;
  }

  .layui-form-label {
    width: 40px !important;
  }

  .layui-input-custom {
    width: 68% !important;
  }

  .root-detail .sub_header .app_desc {
    margin-bottom: 20px;
  }

  .root-detail .sub_header .app_desc .desc {
    font-size: 14px !important;
  }

  .mt20 {
    margin-left: 20px;
    margin-bottom: 20px;
  }

  .ml20 {
    margin-left: 0 !important;
  }

  .mtb20 {
    margin-left: 20px;
  }

  .m20 {
    margin: 8px !important;
  }

  .root-detail .sub_header .app_desc h1 {
    font-size: 220% !important;
  }
}

.theme_color {
  color: #8e78c9;
}

h1,
h2,
h3 {
  font-size: 20px;
}

.cus_h1 {
  font-weight: 200;
  display: inline-block;
  margin-left: 8px;
}

.w200 {
  width: 200px;
}

.code,.result {
    height: 300px;
}
</style>




