<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="root-detail">
                    <div class="sub_header">
                        <div class="app_desc h2">MD5</div>
                    </div>
                    <hr/>
                    <div class="app">
                        <textarea name="code" class="h200 form-control" id="code"></textarea>
                    </div>
                    <div class="mt20">
                        <input type="button" class=" convert-btn btn btn-primary" v-on:click="md5Convert" value="md5转换"/>
                    </div>
                    <div class="mt20">
                        <textarea name="result" class="h200 form-control" id="result" placeholder="返回结果"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import $ from "jquery";
    import md5 from "md5";
    import sider from './sider'

    export default {
        components: {sider},
        name: "Md5",
        data() {
            return {};
        },
        mounted: function () {

        },
        methods: {
            md5Convert() {
                let code = $("#code").val();
                if (code == '') {
                    alert("内容不能空.");
                    return;
                }
                $("#result").val(md5(code));
            }
        }
    };
</script>

<style scoped>
    .mt20 {
        margin-top: 20px
    }

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