<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="wrapper">
                    <div class="h2">Markdown转换</div>
                    <hr/>
                    <div class="toolUsing clearfix">
                        <div class="leftBar">
                            <div class="h4">Markdown:</div>
                            <textarea name="cipher" id="a_source" class="form-control h200"># webtool

> some webtool

#### Build Setup

``` 
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```</textarea>
                        </div>

                        <div class="operateLR">
                            <button class="btn btn-primary" v-on:click="markdown2Html"> Markdown -> html</button>
                            <!-- <button class="btn btn-primary" v-on:click="html2Markdown"> html =>  Markdown </button> -->
                        </div>
                        <div class="rightBar">
                            <div class="h4">Html:</div>
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
    import {markdown} from 'markdown'

    export default {
        components: {sider},
        name: 'Markdown',
        data() {
            return {}
        },
        methods: {
            markdown2Html() {
                let a_s = $("#a_source").val();
                if ('' == a_s) {
                    alert('请输入原始字符串');
                    return;
                }
                $("#u_source").val(markdown.toHTML(a_s));
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