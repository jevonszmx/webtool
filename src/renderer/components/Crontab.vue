<template>
<div class="container-fluid">
    <div class="row">
        <sider></sider>
        <div class="col-md-10" style="height:800px">
            <div class="root-detail">
            <div class="sub_header">
              <div class="app_desc">
                <h2>Crontab表达式生成</h2>
              </div>
            </div>
            <div class="app">
                <div class="view search-box">
                <div class="layui-form-item m20"> 
                <label class="layui-form-label w110  pull-left">表达式：</label>
                <div class="layui-col-md10 layui-input-inline w500 pull-left"> 
                    <input type="text" id="content" value="0 */12 * * * *" autocomplete="off" placeholder="0 */12 * * * * crontab" class="form-control" />
                </div>
                <div class="layui-col-md2 custom-parse pull-left ml20"> 
                <button class="btn btn-primary" v-on:click="createCrontab">解析</button>
                </div>
                <div class="clearfix"></div>
                <div class="layui-col-md12 mt20">
                <fieldset class="layui-elem-field layui-field-title site-title">
                    <legend><a name="default" title="接下来7次的执行时间">接下来5次的执行时间</a></legend>
                </fieldset>
                <div class="layui-card-body">
                </div>
                <pre><code>Crontab
            *    *    *    *    *    *
            -    -    -    -    -    -
            |    |    |    |    |    |
            |    |    |    |    |    + year [optional]
            |    |    |    |    +----- day of week (0 - 7) (Sunday=0 or 7)
            |    |    |    +---------- month (1 - 12)
            |    |    +--------------- day of month (1 - 31)
            |    +-------------------- hour (0 - 23)
            +------------------------- min (0 - 59)
            </code>
            </pre>
                </div>
                <div class="layui-col-md12 short-area"></div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
import later from "later";
import layer from "layer";
import sider from './sider'
	
export default {
	components : { sider },
  name: "Crontab",
  data() {
    return {};
  },
  mounted: function() {
    var js_timestamp_now = $("#js_timestamp_now");
    var js_timestamp = $("#js_timestamp");
    var now = Math.round(new Date() / 1000);
    js_timestamp.val(now);

    var timer = setInterval(function() {
      var now = Date.parse(new Date()) / 1000;
      js_timestamp_now.text(now);
    }, 1000);
  },
  methods: {
    createCrontab () {
        var link = $("#content").val();
        if (link == '') {
            alert("内容不能空.");
            return;
        }
        var sched = later.parse.cron(link);
        later.date.localTime();
        var results = later.schedule(sched).next(5);
        $(".layui-card-body").html("");
        for (var i = 0; i < results.length; i++) {
            $(".layui-card-body").append(results[i].toLocaleString() + "<hr/>");
        }
    }
  }
};
</script>

<style scoped>
.searchBox {
  padding-right: 10px;
}

.searchBox .inputContainer {
  width: 100%;
  position: relative;
}

.searchBox .inputContainer select {
  width: 100%;
  font-size: 110%;
  font-family: open sans, sans-serif;
  font-weight: 300;
  border-radius: 5px;
  border: 2px solid #d1d1d1;
  transition: border-color 200ms ease-in-out;
  outline: none;
  padding: 6px 8px;
  padding-left: 27px;
  padding-right: 5px;
  box-sizing: border-box;
  background-size: 14px;
  background-repeat: no-repeat;
  background-position: 8px 10px;
}

.searchBox .inputContainer .clear:hover,
.searchBox .inputContainer .clear:active {
  opacity: 1;
}

.searchBox .inputContainer.hasValue .clear {
  display: block;
}

.searchBox .inputContainer.hasValue input {
  padding-right: 35px;
}

.searchBox .inputContainer.nothingFound input {
  border-color: #e99999;
}

.searchBox .ex {
  font-size: 12px;
  margin-top: 6px;
  color: #999;
}

.searchBox .ex .text {
  color: #666;
  cursor: pointer;
}

.searchBox .ex .text:hover {
  color: #000;
}

@media only screen and (max-width: 760px) {
  .searchBox {
    padding-right: 0;
  }

  .searchBox .inputContainer select {
    width: 80%;
  }
}

@media only screen and (max-width: 500px) {
  .searchBox {
    padding-right: 0;
  }

  .searchBox .inputContainer select {
    width: 90%;
  }
}

.root {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  min-height: 100%;
  width: 100%;
  background-color: #f7f7f7;
}

.root .sidebar {
  padding-left: 40px;
  padding-right: 30px;
  padding-top: 25px;
  background-color: #f7f7f7;
  width: 300px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.root .sidebar .top {
  flex: 1;
}

.root .sidebar .top .logo {
  width: 230px;
  display: inline-block;
}

.root .sidebar .top .lang {
  margin-bottom: 27px;
}

.root .sidebar .top .lang .sub_menu {
  margin-left: -24px;
  padding-top: 8px;
}

.root .sidebar .top .desc {
  font-size: 152%;
  font-weight: 300;
  margin-top: 22px;
  line-height: 1.35;
  color: #949494;
}

.root .sidebar .top .searchBox {
  margin-top: 26px;
}

.root .sidebar .bottom {
  color: #949494;
  font-weight: 300;
  padding-bottom: 15px;
}

.root .sidebar .bottom .copyright {
  margin-bottom: 15px;
}

.root .sidebar .bottom .contact a {
  color: #666;
  text-decoration: none;
}

.root .sidebar .bottom .contact a:hover {
  color: #333;
  text-decoration: underline;
}

.root .sidebar .bottom .anchors a {
  color: inherit;
  text-decoration: none;
  margin-right: 15px;
}

.root .sidebar .bottom .anchors a:hover {
  text-decoration: underline;
}

.root .sidebar .bottom .anchors a:last-child {
  margin-right: 0;
}

.root .apps {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;
  flex: 1;
  background-color: #f7f7f7;
}

.root .apps .app {
  text-decoration: none;
  color: #000;
  background-color: #fff;
  width: 50%;
  height: auto;
  animation: fadeIn 0.5s;
  box-sizing: border-box;
  border-right: 2px solid #f7f7f7;
  border-bottom: 2px solid #f7f7f7;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0.05);
}

.root .apps .app .padding {
  padding-left: 50px;
  padding-right: 30px;
  padding-top: 31px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.root .apps .app .padding img {
  margin-top: 32px;
  margin-bottom: 12px;
  border: none;
}

.root .apps .app .padding .js_icon {
  width: 100px;
  height: 80px;
  margin-bottom: 0;
  margin-left: -19px;
}

.root .apps .app .padding .js_icon.compress {
  margin-left: -24px;
}

.root .apps .app .padding .js_icon.merge {
  margin-left: -15px;
}

.root .apps .app .padding .js_icon.split {
  margin-left: -10px;
}

.root .apps .app .padding .js_icon.protect {
  margin-left: -25px;
}

.root .apps .app .padding .js_icon.unlock {
  margin-left: -27px;
}

.root .apps .app .padding .js_icon.watermark {
  margin-left: -28px;
}

.root .apps .app .padding .js_icon.page-numbers {
  margin-left: -20px;
}

.root .apps .app .padding .js_icon.rotate {
  margin-left: -22px;
}

.root .apps .app .padding .js_icon.convert {
  margin-left: -18px;
}

.root .apps .app .padding .js_icon.ocr {
  margin-left: -29px;
}

.root .apps .app .padding .js_icon.optimize {
  margin-left: -29px;
}

.root .apps .app .padding .js_icon.more {
  margin-left: -25px;
}

.root .apps .app .padding .title {
  font-size: 130%;
  font-weight: 700;
  color: #333;
  margin-bottom: 13px;
}

.root .apps .app .padding .desc {
  font-size: 85%;
  font-weight: 300;
  color: #999;
  line-height: 1.75;
}

.root .apps .app:hover {
  background-color: #f9f9f9;
}

.root .apps .app.hidden {
  display: none;
}

.root .apps .app.hidden {
  display: none;
}

@media screen and (min-width: 980px) {
  .root .apps .app {
    width: 33.33333%;
  }
}

@media screen and (min-width: 1200px) {
  .root .sidebar {
    width: 320px;
  }

  .root .apps .app {
    width: 25%;
  }
}

@media screen and (min-width: 1500px) {
  .root .sidebar {
    width: 340px;
  }

  .root .apps .app {
    width: 20%;
  }
}

@media screen and (min-width: 1800px) {
  .root .sidebar {
    width: 360px;
  }

  .root .apps .app {
    width: 16.66667%;
  }
}

@media screen and (min-width: 2100px) {
  .root .sidebar {
    width: 380px;
  }

  .root .apps .app {
    width: 14.28571%;
  }
}

@media screen and (min-width: 2400px) {
  .root .sidebar {
    width: 400px;
  }

  .root .apps .app {
    width: 12.5%;
  }
}

.mobile_footer {
  display: none;
  background-color: #f7f7f7;
  padding-top: 30px;
  padding-bottom: 20px;
  text-align: center;
}

.mobile_footer .anchors {
  text-align: center;
}

.mobile_footer .anchors a {
  text-decoration: none;
  color: #949494;
  margin-right: 30px;
}

.mobile_footer .anchors a:last-child {
  margin-right: 0;
}

.mobile_footer .copyright {
  text-align: center;
  color: #dedede;
}

.center {
  text-align: center;
}

.mobile_footer .contact {
  color: #949494;
  text-align: center;
}

.mobile_footer .contact a {
  color: #666;
  text-decoration: none;
}

.mobile_footer .contact a:hover {
  color: #333;
  text-decoration: underline;
}

.mobile_footer .lang_row {
  padding-bottom: 10px;
}

.mobile_footer .lang_row .my_select_1 {
  margin: 0;
  font-size: 100%;
}

.mobile_footer .lang_row .my_select_1:focus {
  outline: none;
}

@media only screen and (max-width: 760px) {
  html,
  body {
    height: auto;
  }

  .root {
    display: block;
    min-height: 0;
  }

  .root .sidebar {
    width: 100%;
    max-width: none;
    display: block;
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 0;
  }

  .root .sidebar .top {
    padding-top: 30px;
    padding-bottom: 20px;
    text-align: center;
  }

  .root .sidebar .top .lang {
    display: none;
  }

  .root .sidebar .top .desc {
    margin-top: 14px;
    padding-right: 0;
  }

  .root .sidebar .bottom {
    display: none;
  }

  .root .apps .app {
    border-width: 3px;
    width: 33.33333%;
  }

  .root .apps .app .padding {
    padding-left: 10px;
    padding-right: 10px;
    padding-bottom: 33px;
    padding-top: 23px;
  }

  .root .apps .app .padding .img_cont {
    min-width: 100px;
    text-align: center;
  }

  .root .apps .app .padding .img_cont .js_icon {
    margin-left: 0 !important;
  }

  .root .apps .app .padding .text {
    text-align: center;
  }

  .root .apps .app .padding .text .title {
    margin-top: 5px;
    margin-bottom: 0;
    font-size: 140%;
    font-weight: 400;
  }

  .root .apps .app .padding .text .desc {
    display: none;
  }

  .root .apps .app:nth-child(2n) {
    border-right-width: 3px;
  }

  .root .apps .app:nth-child(3n) {
    border-right-width: 0;
  }

  .mobile_footer {
    display: block;
  }
}

@media only screen and (max-width: 500px) {
  .root .sidebar {
    padding-left: 12px;
    padding-right: 12px;
  }

  .root .apps .app {
    width: 50%;
  }

  .root .apps .app:nth-child(2n) {
    border-right-width: 0;
  }

  .root .apps .app:nth-child(3n) {
    border-right-width: 3px;
  }
}

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
  flex: 1 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
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
</style>




