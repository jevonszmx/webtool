<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="page-header">
                    <div>
                        <p>让我们能节省出更多的时间去陪伴我们的家人及做我们自己想做的事</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group">
                            <p class="list-group-item active">
                                加密/转码工具
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'Native2ASCII'});" class="list-group-item">Native转ASCII</a>
                            <a href="#" v-on:click="$router.push({name : 'Native2Unicode'});" class="list-group-item">Native转Unicode</a>
                            <a href="#" v-on:click="$router.push({name : 'Native2UTF8'});" class="list-group-item">Native转UTF8</a>
                            <a href="#" v-on:click="$router.push({name : 'urlencode'});" class="list-group-item">URL转码</a>
                            <a href="#" v-on:click="$router.push({name : 'Base64' })" class="list-group-item">Base64转码</a>
                            <a href="#" v-on:click="$router.push({name : 'Md5' })" class="list-group-item">MD5加密</a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="list-group">
                            <p href="#" class="list-group-item active">
                                其他工具
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'Unixtime'});" class="list-group-item">时间戳转换</a>
                            <a href="#" v-on:click="$router.push({name : 'Crontab'});" class="list-group-item">Crontab表达式</a>
                            <a href="#" v-on:click="$router.push({name : 'ConvertHex'});" class="list-group-item">进制转换</a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="list-group">
                            <p href="#" class="list-group-item active">
                                格式化
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'JSONFormat'});" class="list-group-item">JSON格式化</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONFormat'});" class="list-group-item">CSS格式化</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONFormat'});" class="list-group-item">XML格式化</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONFormat'});" class="list-group-item">SQL格式化</a>
                        </div>
                    </div>

                    <div class="col-md-3">
                        <div class="list-group">
                            <p href="#" class="list-group-item active">
                                压缩
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'JSONMinify'});" class="list-group-item">JSON压缩</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONMinify'});" class="list-group-item">CSS压缩</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONMinify'});" class="list-group-item">XML压缩</a>
                            <a href="#" v-on:click="$router.push({name : 'JSONMinify'});" class="list-group-item">SQL压缩</a>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-3">
                        <div class="list-group">
                            <p href="#" class="list-group-item active">
                                Markdown
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'Markdown'});" class="list-group-item">Markdown</a>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="list-group">
                            <p href="#" class="list-group-item active">
                                其他实用工具
                            </p>
                            <a href="#" v-on:click="$router.push({name : 'Regex'});" class="list-group-item">正则表达式</a>
                            <a href="#" v-on:click="$router.push({name : 'Qrcode'});" class="list-group-item">二维码生成</a>
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
        name: "index",
        components: {sider},
        data() {
            return {};
        }
    };
</script>

<style>
    a.white, a.white:hover {
        color: #fff;
    }
</style>