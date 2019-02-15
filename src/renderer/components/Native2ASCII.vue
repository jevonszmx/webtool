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
                                <li class="active">
                                    <a v-on:click="$router.push({name : 'Native2ASCII' })">Native/ASCII</a></li>
                                <li><a v-on:click="$router.push({name : 'urlencode' })">URL转码</a></li>
                                <li><a v-on:click="$router.push({name : 'Base64' })">Base64转码</a></li>
                            </ul>
                        </div>
                        <div class="bg-warning" style="padding: 15px;">
                            <button class="close" data-dismiss="alert">×</button>
                            <p>Java中的properties配置文件可以使用这种格式</p>
                        </div>
                        <div class="leftBar">
                            <div class="h4">Native:</div>
                            <textarea name="cipher" id="n_source" class="form-control h200">这是一个例子,this is a example</textarea>
                        </div>

                        <div class="operateLR">
                            <label class="checkbox pull-left"><input type="checkbox" name="ignoreLetter" id="ignoreLetter" checked="true">不转换字母和数字&nbsp;</label>
                            <button class="btn btn-primary" v-on:click="native2ascii"> ASCII -&gt;</button>
                            <button class="btn btn-primary" v-on:onclick="ascii2native">&lt;- Native</button>
                        </div>

                        <div class="rightBar">
                            <div class="h4">ASCII:</div>
                            <textarea name="message" id="a_source" class="form-control h200"></textarea>
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
        name: 'Native2Unicode',
        components: {sider},
        data() {
            return {}
        },
        methods: {
            native2ascii() {
                let character = document.getElementById("n_source").value.split("");
                let ascii = "";
                for (let i = 0; i < character.length; i++) {
                    let code = Number(character[i].charCodeAt(0));
                    if (!document.getElementById("ignoreLetter").checked || code > 127) {
                        let charAscii = code.toString(16);
                        charAscii = new String("0000").substring(charAscii.length, 4) + charAscii;
                        ascii += "\\u" + charAscii;
                    }
                    else {
                        ascii += character[i];
                    }
                }
                document.getElementById("a_source").value = ascii;
            },
            ascii2native() {
                let character = document.getElementById("a_source").value.split("\\u");
                let native1 = character[0];
                for (let i = 1; i < character.length; i++) {
                    let code = character[i];
                    native1 += String.fromCharCode(parseInt("0x" + code.substring(0, 4)));
                    if (code.length > 4) {
                        native1 += code.substring(4, code.length);
                    }
                }
                document.getElementById("n_source").value = native1;
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
