<template>
<div class="container-fluid">
  <div class="row">
    <sider></sider>
    <div class="col-md-10" style="height:800px;overflow: scroll;">
        <div class="root-detail container-fluid">
            <div class="sub_header">
              <div class="app_desc">
                  <h2>&nbsp;&nbsp;Unixtime时间戳转换</h2>
                </div>
              </div>
              <div class="app">
                <div class="view search-box">
                  <div class="m20">
                    <div class="show-area">
                      <div class="mt20">
                        <label class="pull-left w110">现在：</label>
                        <div class="pull-left">
                          <a id="js_timestamp_now" href="javascript:;"></a>
                        </div>
                        <div class="clearfix"></div>
                      </div>
                      <div class="mt20">
                        <label class="pull-left w110">时间戳：</label>
                        <div class="pull-left w210">
                          <input type="text" placeholder="请填写时间戳" value id="js_timestamp" class="form-control w200" >
                        </div>
                        <div class="pull-left ml20">
                          <button class="btn btn-primary" id="js_convert_timestamp" v-on:click="convertFromUnixtime">转换</button>
                        </div>
                        <div class="pull-left ml20">
                          <input type="text" placeholder id="js_datetime" value class="form-control w200">
                        </div>
                        <div class="clearfix"></div>
                      </div>

                      <div class="mt20">
                        <label class="pull-left w110">时间：</label>
                        <div class="pull-left w210">
                          <input type="text" placeholder="YYYY-MM-DD HH:mm:ss" id="js_datetime_o" value="2019-02-01 17:03:13" class="form-control w200" >
                        </div>
                        <div class="pull-left ml20">
                          <button class="btn btn-primary" id="js_convert_datetime" v-on:click="convert2Unixtime">转换</button>
                        </div>
                        <div class="pull-left ml20 w260">
                          <input type="text" placeholder value id="js_timestamp_o" class="form-control w200">
                        </div>
                      </div>
                      <div class="clearfix"></div>
                      <div class="layui-col-md12 mt20">
                        <fieldset class="layui-elem-field layui-field-title site-title">
                          <legend>
                            <a name="default">描述</a>
                          </legend>
                        </fieldset>
                      </div>
                      <table class="layui-table">
                        <tbody>
                          <tr>
                            <td width="20%">Swift</td>
                            <td>
                              <pre> <code>NSDate().timeIntervalSince1970</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Go</td>
                            <td>
                              <pre><code>import (&quot;time&quot;)int32(time.Now().Unix())</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Java</td>
                            <td>
                              <pre><code>// pure java(int) (System.currentTimeMillis() / 1000)</code></pre>
                              <pre><code>// joda (int) (DateTime.now().getMillis() / 1000)</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>JavaScript</td>
                            <td>
                              <pre><code>Math.round(new Date() / 1000)</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Objective-C</td>
                            <td>
                              <pre><code>[[NSDate date] timeIntervalSince1970]</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>MySQL</td>
                            <td>
                              <pre><code>SELECT unix_timestamp(now())</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>SQLite</td>
                            <td>
                              <pre><code>SELECT strftime('%s', 'now')</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Erlang</td>
                            <td>
                              <pre><code>calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600.</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>PHP</td>
                            <td>
                              <pre><code>time()</code></pre>
                              <pre><code>strtotime('2019-01-01 12:13:15')</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Python</td>
                            <td>
                              <pre><code>import timetime.time()</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Ruby</td>
                            <td>
                              <pre><code>Time.now.to_i</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Shell</td>
                            <td>
                              <pre><code>date +%s</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Groovy</td>
                            <td>
                              <pre><code>(new Date().time / 1000).intValue()</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>Lua</td>
                            <td>
                              <pre><code>os.time()</code></pre>
                            </td>
                          </tr>
                          <tr>
                            <td>.NET/C#</td>
                            <td>
                              <pre><code>(DateTime.Now.ToUniversalTime().Ticks - 621355968000000000) / 10000000</code></pre>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
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

Date.prototype.format = function(format) {
  var date = {
    "M+": this.getMonth() + 1,
    "d+": this.getDate(),
    "h+": this.getHours(),
    "m+": this.getMinutes(),
    "s+": this.getSeconds(),
    "q+": Math.floor((this.getMonth() + 3) / 3),
    "S+": this.getMilliseconds()
  };

  if (/(y+)/i.test(format)) {
    format = format.replace(
      RegExp.$1,
      (this.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(
        RegExp.$1,
        RegExp.$1.length == 1
          ? date[k]
          : ("00" + date[k]).substr(("" + date[k]).length)
      );
    }
  }
  return format;
};
import sider from './sider'
	
export default {
	components : { sider },
  name: "Unixtime",
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
    convertFromUnixtime() {
      var js_timestamp_now = $("#js_timestamp_now");
      var js_timestamp_now = $("#js_timestamp_now");
      var js_timestamp = $("#js_timestamp");
      var js_timestamp_o = $("#js_timestamp_o");
      var js_datetime_o = $("#js_datetime_o");
      var js_timer_stop = $("#js_timer_stop");
      var js_timer_start = $("#js_timer_start");
      var js_timestamp_unit = $("#js_timestamp_unit");
      var js_timestamp_unit_o = $("#js_timestamp_unit_o");

      var timestamp = js_timestamp.val();
      timestamp = timestamp.replace(/^\s+|\s+$/, "");
      if (!/^\d+$/.test(timestamp)) {
        alert("无效的格式");
        return;
      }
      if (timestamp.length > 10) {
        timestamp = timestamp / 1000;
      }
      timestamp *= 1000;
      var newDate = new Date();
      newDate.setTime(timestamp);
      var YmdHis = newDate.format("yyyy-MM-dd h:m:s");
      $("#js_datetime").val(YmdHis);
    },
    convert2Unixtime() {
      var js_timestamp_now = $("#js_timestamp_now");
      var js_timestamp_now = $("#js_timestamp_now");
      var js_timestamp = $("#js_timestamp");
      var js_timestamp_o = $("#js_timestamp_o");
      var js_datetime_o = $("#js_datetime_o");
      var js_timer_stop = $("#js_timer_stop");
      var js_timer_start = $("#js_timer_start");
      var js_timestamp_unit = $("#js_timestamp_unit");
      var js_timestamp_unit_o = $("#js_timestamp_unit_o");
      var now = Math.round(new Date() / 1000);
      var stringTime = js_datetime_o.val();
      var timestamp2 = Date.parse(new Date(stringTime));
      timestamp2 = timestamp2 / 1000;
      js_timestamp_o.val(timestamp2);
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
  flex: 1 0 auto;
  background-color: #fff;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
  margin-top: 0;
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



