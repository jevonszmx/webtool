<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="root-detail">
                    <div class="h2">
                        生成二维码Qrcode
                    </div>
                    <hr/>
                    <div class="app">
                        <div class="view search-box">
                            <div class="m20">
                                <div class="w500 pull-left">
                                    <input type="text" id="content" value="" autocomplete="off" placeholder="http://www.baidu.com" class="form-control"/>
                                </div>
                                <div class="layui-col-md2 custom-parse pull-left ml20">
                                    <button class="btn btn-primary" v-on:click="createQrcode">生成</button>
                                </div>
                                <div class="clearfix"></div>
                                <div class="mt20" style="text-align: center;margin: 0 auto">
                                    <canvas id="canvas"></canvas>
                                    <p v-show="created"><a id="download" download="qrcode.png">
                                        <button class="btn btn-primary" type="button" v-on:click="downloadQrcode">
                                            下载图片
                                        </button>
                                    </a></p>
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
    import sider from './sider'
    import QRCode from 'qrcode'

    export default {
        components: {sider},
        name: "Qrcode",
        data() {
            return {
                created: false
            };
        },
        methods: {
            createQrcode() {
                let that = this
                let content = document.getElementById('content').value
                if (content == '') {
                    alert('请填写要转换的链接或者文字')
                    return false;
                }
                QRCode.toCanvas(document.getElementById('canvas'), content, {width: '256'}, function (error) {
                    if (error) console.error(error)
                    console.log('success!');
                    that.created = true
                })
            },
            downloadQrcode() {
                let download = document.getElementById("download");
                let image = document.getElementById("canvas").toDataURL("image/png")
                    .replace("image/png", "image/octet-stream");
                download.setAttribute("href", image);
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
        flex: 1;
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




