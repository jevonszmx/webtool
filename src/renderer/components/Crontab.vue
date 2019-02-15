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
                    <hr/>
                    <div class="app">
                        <div class="view search-box">
                            <div class="layui-form-item m20">
                                <label class="layui-form-label w110  pull-left">表达式：</label>
                                <div class="layui-col-md10 layui-input-inline w500 pull-left">
                                    <input type="text" id="content" value="0 */12 * * * *" autocomplete="off" placeholder="0 */12 * * * * crontab" class="form-control"/>
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
    import sider from './sider'

    export default {
        components: {sider},
        name: "Crontab",
        data() {
            return {};
        },
        methods: {
            createCrontab() {
                let link = $("#content").val();
                if (link == '') {
                    alert("内容不能空.");
                    return;
                }
                let sched = later.parse.cron(link);
                later.date.localTime();
                let results = later.schedule(sched).next(5);
                $(".layui-card-body").html("");
                for (let i = 0; i < results.length; i++) {
                    $(".layui-card-body").append(results[i].toLocaleString() + "<hr/>");
                }
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
        margin-top: 20px;
        transition: margin-top 300ms;
    }

    .root-detail .app .view {
        width: 100%;
    }

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

    .w200 {
        width: 200px;
    }
</style>




