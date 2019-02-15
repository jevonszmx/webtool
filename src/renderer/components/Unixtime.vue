<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px;overflow: scroll;">
                <div class="wrapper">
                    <div class="app_desc h2">时间戳转换</div>
                    <hr/>
                    <div class="app">
                        <div class="view search-box">
                            <div class="m20">
                                <div class="show-area">
                                    <div class="mt20">
                                        <label class="pull-left w110">现在：</label>
                                        <div class="pull-left">
                                            <p id="js_timestamp_now"></p>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>
                                    <div class="mt20">
                                        <label class="pull-left w110">时间戳：</label>
                                        <div class="pull-left w210">
                                            <input type="text" placeholder="请填写时间戳" value id="js_timestamp" class="form-control w200">
                                        </div>
                                        <div class="pull-left ml20">
                                            <button class="btn btn-primary" id="js_convert_timestamp" v-on:click="convertFromUnixtime">
                                                转换
                                            </button>
                                        </div>
                                        <div class="pull-left ml20">
                                            <input type="text" placeholder id="js_datetime" value class="form-control w200">
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>

                                    <div class="mt20">
                                        <label class="pull-left w110">时间：</label>
                                        <div class="pull-left w210">
                                            <input type="text" placeholder="YYYY-MM-DD HH:mm:ss" id="js_datetime_o" value="2019-02-01 17:03:13" class="form-control w200">
                                        </div>
                                        <div class="pull-left ml20">
                                            <button class="btn btn-primary" id="js_convert_datetime" v-on:click="convert2Unixtime">
                                                转换
                                            </button>
                                        </div>
                                        <div class="pull-left ml20 w260">
                                            <input type="text" placeholder value id="js_timestamp_o" class="form-control w200">
                                        </div>
                                    </div>
                                    <div class="clearfix"></div>
                                    <div class="mt20">
                                        <fieldset>
                                            <legend>
                                                <a name="default">描述</a>
                                            </legend>
                                        </fieldset>
                                    </div>
                                    <table class="table">
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

    Date.prototype.format = function (format) {
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
        components: {sider},
        name: "Unixtime",
        data() {
            return {};
        },
        mounted: function () {
            let js_timestamp_now = $("#js_timestamp_now");
            let js_timestamp = $("#js_timestamp");
            let now = Math.round(new Date() / 1000);
            js_timestamp.val(now);

            setInterval(function () {
                js_timestamp_now.text(Date.parse(new Date()) / 1000);
            }, 1000);
        },
        methods: {
            convertFromUnixtime() {
                let js_timestamp = $("#js_timestamp");
                let js_timestamp_o = $("#js_timestamp_o");
                let js_datetime_o = $("#js_datetime_o");
                let js_timer_stop = $("#js_timer_stop");
                let js_timer_start = $("#js_timer_start");
                let js_timestamp_unit = $("#js_timestamp_unit");
                let js_timestamp_unit_o = $("#js_timestamp_unit_o");

                let timestamp = js_timestamp.val();
                timestamp = timestamp.replace(/^\s+|\s+$/, "");
                if (!/^\d+$/.test(timestamp)) {
                    alert("无效的格式");
                    return;
                }
                if (timestamp.length > 10) {
                    timestamp = timestamp / 1000;
                }
                timestamp *= 1000;
                let newDate = new Date();
                newDate.setTime(timestamp);
                let YmdHis = newDate.format("yyyy-MM-dd h:m:s");
                $("#js_datetime").val(YmdHis);
            },
            convert2Unixtime() {
                let js_timestamp = $("#js_timestamp");
                let js_timestamp_o = $("#js_timestamp_o");
                let js_datetime_o = $("#js_datetime_o");
                let js_timer_stop = $("#js_timer_stop");
                let js_timer_start = $("#js_timer_start");
                let js_timestamp_unit = $("#js_timestamp_unit");
                let js_timestamp_unit_o = $("#js_timestamp_unit_o");
                let now = Math.round(new Date() / 1000);
                let stringTime = js_datetime_o.val();
                let timestamp2 = Date.parse(new Date(stringTime));
                timestamp2 = timestamp2 / 1000;
                js_timestamp_o.val(timestamp2);
            }
        }
    };
</script>

<style scoped>
    .mt10 {
        margin-top: 10px !important;
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

    .w110 {
        width: 90px !important;
    }

    .w260 {
        width: auto !important;
    }

    .w210 {
        width: 200px !important;
    }

    .w200 {
        width: 200px;
    }
</style>



