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
                                <li><a v-on:click="$router.push({name : 'urlencode' })">URL转码</a></li>
                                <li class="active"><a v-on:click="$router.push({name : 'Base64' })">Base64转码</a></li>
                            </ul>
                        </div>
                        <div class="leftBar">
                            <div class="h4">原始:</div>
                            <textarea name="cipher" id="a_source" class="form-control h200">这是一个例子,this is a example</textarea>
                        </div>
                        <div class="operateLR">
                            <button class="btn btn-primary" v-on:click="Base64Encode"> Base64 Encode</button>
                            <button class="btn btn-primary" v-on:click="Base64Decode"> Base64 Decode</button>
                        </div>
                        <div class="rightBar">
                            <div class="h4">编码后:</div>
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
    import {Base64} from 'js-base64';

    export default {
        components: {sider},
        name: 'Base64',
        data() {
            return {}
        },
        methods: {
            Base64Encode() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    $("#a_source").focus();
                    return;
                }
                $("#u_source").val(Base64.encode(a_s));
            },
            Base64Decode() {
                let code = $("#u_source").val();
                if (code == '') {
                    alert('请输入正确的代码！');
                    $("#u_source").focus();
                    return;
                }
                $("#a_source").val(Base64.decode(code));
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
