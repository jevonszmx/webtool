<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="wrapper">
                    <div class="h2">编码转换</div>
                    <hr/>
                    <div class="toolUsing clearfix">
                        <div class="toolsTab  clearfix">
                            <ul class="nav nav-tabs">
                                <li><a v-on:click="$router.push({name : 'Native2Unicode' })">Native/Unicode</a></li>
                                <li><a v-on:click="$router.push({name : 'Native2UTF8' })">Native/UTF-8</a></li>
                                <li><a v-on:click="$router.push({name : 'Native2ASCII' })">Native/ASCII</a></li>
                                <li class="active"><a v-on:click="$router.push({name : 'urlencode' })">URL转码</a></li>
                                <li><a v-on:click="$router.push({name : 'Base64' })">Base64转码</a></li>
                            </ul>
                        </div>
                        <div class="leftBar">
                            <div class="h4">待编码:</div>
                            <textarea name="url" id="source" class="form-control h200">测试</textarea>
                        </div>
                        <div class="operateLR">
                            <label class=" pull-left" id="en_tip"><input type="radio" name="_type" checked="checked"/>encodeURI</label>
                            <label class=" pull-left ml20" id="co_tip"><input type="radio" name="_type" id="co_t"/>encodeURIComponent</label>
                            <button class="btn btn-primary ml20" v-on:click="encode_uri"> URL编码 -&gt;</button>
                            <button class="btn btn-primary ml20" v-on:click="decode_uri"> -&lt; URL解码</button>
                        </div>

                        <div class="rightBar">
                            <div class="h4">编码结果:</div>
                            <textarea name='message' id='result' class="form-control h200"></textarea>
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

    export default {
        components: {sider},
        name: 'urlencode',
        data() {
            return {}
        },
        methods: {
            encode_uri() {
                if ($("#co_t").attr("checked")) {
                    $("#result").val(encodeURIComponent($("#source").val()));
                }
                else {
                    $("#result").val(encodeURI($("#source").val()));
                }
            },
            decode_uri() {
                if ($("#co_t").attr("checked")) {
                    $("#source").val(decodeURIComponent($("#result").val()));
                }
                else {
                    $("#source").val(decodeURI($("#result").val()));
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