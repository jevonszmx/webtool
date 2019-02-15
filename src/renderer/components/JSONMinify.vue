<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="wrapper">
                    <div class="h2">JSON/XML/CSS压缩</div>
                    <hr/>
                    <div class="toolUsing clearfix">
                        <div class="leftBar">
                            <textarea name="cipher" id="a_source" class="form-control h200"></textarea>
                        </div>
                        <div class="operateLR">
                            <button class="btn btn-primary" v-on:click="jsonMinify"> JSON压缩</button>
                            <button class="btn btn-primary" v-on:click="xmlMinify"> XML压缩</button>
                            <button class="btn btn-primary" v-on:click="cssMinify"> CSS压缩</button>
                            <button class="btn btn-primary" v-on:click="sqlMinify"> SQL压缩</button>
                        </div>
                        <div class="rightBar">
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
    import vkbeautify from 'vkbeautify'

    export default {
        components: {sider},
        name: 'JSONMinify',
        data() {
            return {}
        },
        methods: {
            jsonMinify() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    return;
                }
                $("#u_source").val('');
                try {
                    $("#u_source").val(vkbeautify.jsonmin(a_s));
                } catch (error) {
                    alert('请确认正确的格式');
                    return;
                }

            },
            xmlMinify() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    return;
                }
                $("#u_source").val('');
                try {
                    $("#u_source").val(vkbeautify.xmlmin(a_s));
                } catch (error) {
                    alert('请确认正确的格式');
                    return;
                }

            },
            cssMinify() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    return;
                }
                try {
                    $("#u_source").val(vkbeautify.cssmin(a_s));
                } catch (error) {
                    alert('请确认正确的格式');
                    return;
                }

            },
            sqlMinify() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    return;
                }
                try {
                    $("#u_source").val(vkbeautify.sqlmin(a_s));
                } catch (error) {
                    alert('请确认正确的格式');
                    return;
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