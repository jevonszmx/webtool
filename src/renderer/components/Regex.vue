<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div id="mainContent" class="wrapper clearfix">
                    <div class="h2">
                        正则表达式测试
                    </div>
                    <hr />
                    <div class="row-fluid">
                        <div class="span8">
                            <div class="topBar">
                                <textarea id="textSour" placeholder="在此输入待匹配文本" class="form-control h200"></textarea>
                            </div>
                            <div class="operateTB">
                                <form class="well form-inline">
                                    <div class="form-group">
                                        <span class="add-on">正则表达式</span>
                                        <input type="text" id="textPattern" placeholder="在此输入正则表达式" class="form-control" />
                                    </div>
                                    <label class="checkbox"><input type="checkbox" value="global" checked="checked" id="optionGlobal" name="optionGlobl"/>全局搜索</label>
                                    <label class="checkbox"><input type="checkbox" value="ignoreCase" id="optionIgnoreCase" name="optionIgnoreCase"/>忽略大小写</label>
                                    <a v-on:click="onMatch" class="btn btn-primary"><i class="icon-chevron-down icon-white"></i>测试匹配</a>
                                </form>
                            </div>
                            <div class="bottomBar">
                                <div class="h4">匹配结果：</div>
                                <textarea readonly="readonly" id="textMatchResult" class="form-control h100"></textarea>
                            </div>
                            <div class="operateTB">
                                <form class="well form-inline">
                                    <div class="form-group">
                                        <span class="add-on">替换文本</span>
                                        <input type="text" id="textReplace" class="form-control" placeholder="在此输入替换文本" />
                                    </div>
                                    <a v-on:click="onReplace" class="btn btn-primary"><i class="icon-chevron-down icon-white"></i>替换</a>
                                </form>
                            </div>
                            <div class="bottomBar">
                                <div class="h4">替换结果：</div>
                                <textarea readonly="readonly" id="textReplaceResult" class="form-control h100"></textarea><br/>
                            </div>
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

    function setVisible(idElement, visible) {
        let obj = document.getElementById(idElement);
        obj.style.visibility = visible ? "visible" : "hidden";
    }
    function isValidFields() {
        let textSour = document.getElementById("textSour");
        if (null==textSour.value || textSour.value.length<1) {
            textSour.focus();
            alert("请输入待匹配文本");
            return false;
        }
        let textPattern = document.getElementById("textPattern");
        if (null==textPattern.value || textPattern.value.length<1) {
            textPattern.focus();
            alert("请输入正则表达式");
            return false;
        }
        return true;
    }
    function buildRegex() {
        let op = "";
        if (document.getElementById("optionGlobal").checked)op = "g";
        if (document.getElementById("optionIgnoreCase").checked)op = op + "i";
        return new RegExp(document.getElementById("textPattern").value, op);
    }

    export default {
        components: {sider},
        name: 'Regex',
        data() {
            return {}
        },
        methods: {
            onMatch() {
                if (!isValidFields())
                    return false;
                document.getElementById("textMatchResult").value = "";
                let regex = buildRegex();
                let result = document.getElementById("textSour").value.match(regex);
                if (null == result || 0 == result.length) {
                    document.getElementById("textMatchResult").value = "（没有匹配）";
                    return false;
                }
                if (document.getElementById("optionGlobal").checked) {
                    let strResult = "共找到 " + result.length + " 处匹配：\r\n";
                    for (var i=0;i < result.length;++i)strResult = strResult + result[i] + "\r\n";
                    document.getElementById("textMatchResult").value = strResult;
                }
                else {
                    document.getElementById("textMatchResult").value = "匹配位置：" + regex.lastIndex + "\r\n匹配结果：" + result[0];
                }
                return true;

            },
            onReplace() {
                let str = document.getElementById("textSour").value;
                let regex = buildRegex();
                document.getElementById("textReplaceResult").value= str.replace(regex, document.getElementById("textReplace").value);
            }
        }
    }
</script>

<style scoped>
    .w200 {
        width: 200px;
    }

    .h100 {
        height: 100px;
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