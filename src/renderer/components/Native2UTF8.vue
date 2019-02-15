<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="wrapper">
                    <div class="h2">编码转换</div>
                    <hr/>
                    <div class="toolUsing clearfix">
                        <div class="toolsTab clearfix">
                            <ul class="nav nav-tabs">
                                <li><a v-on:click="$router.push({name : 'Native2Unicode' })">Native/Unicode</a></li>
                                <li class="active">
                                    <a v-on:click="$router.push({name : 'Native2UTF8' })">Native/UTF-8</a></li>
                                <li><a v-on:click="$router.push({name : 'Native2ASCII' })">Native/ASCII</a></li>
                                <li><a v-on:click="$router.push({name : 'urlencode' })">URL转码</a></li>
                                <li><a v-on:click="$router.push({name : 'Base64' })">Base64转码</a></li>
                            </ul>
                        </div>

                        <div class="leftBar">
                            <div class="h4">Native:</div>
                            <textarea name="cipher" id="n_source" class="form-control h200">这是一个例子,this is a example</textarea>
                        </div>

                        <div class="operateLR">
                            <button class="btn btn-primary" v-on:click="Native2UTF8">UTF-8 -&gt;</button>
                            <button class="btn btn-primary" v-on:click="UTF82Native">-&lt; Native</button>
                        </div>

                        <div class="rightBar">
                            <div class="h4">Unicode:</div>
                            <textarea name="message" id="u_source" class="form-control h200"></textarea>
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
        components: {sider},
        name: "Native2UTF8",
        data() {
            return {};
        },
        methods: {
            Native2UTF8() {
                let n_s = $("#n_source").val();
                if ("" == n_s) {
                    alert("请输入Native字符串");
                    return;
                }
                $("#u_source").val(
                    n_s.replace(/[^\u0000-\u00FF]/g, function ($0) {
                        return escape($0).replace(/(%u)(\w{4})/gi, "&#x$2;");
                    })
                );
            },
            UTF82Native() {
                let code = $("#u_source").val();
                $("#n_source").val(
                    unescape(code.replace(/&#x/g, "%u").replace(/;/g, ""))
                );
            }
        }
    };
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