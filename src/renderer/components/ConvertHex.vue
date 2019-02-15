<template>
    <div class="container-fluid">
        <div class="row">
            <sider></sider>
            <div class="col-md-10" style="height:800px">
                <div class="root-detail ">
                    <div class="app">
                        <div class="view search-box">
                            <div class=" mtb20">
                                <fieldset class=" site-title">
                                    <legend>&nbsp;&nbsp;进制转换</legend>
                                </fieldset>
                                <blockquote class="">
                                    js中规定安全整数的范围是-2^53~2^53，所以大于 9007199254740991 &lt;的数进制转换会存在精度问题&gt;
                                </blockquote>
                                <p class="clearfix  radio-div">
                                    <label for="hex_2"><input type="radio" class="js-hex" name="hex" id="hex_2" value="2"/>
                                        2 进制</label>
                                    <label for="hex_8"><input type="radio" class="js-hex" name="hex" id="hex_8" value="8"/>
                                        8 进制</label>
                                    <label for="hex_10"><input type="radio" class="js-hex" name="hex" id="hex_10" value="10" checked=""/>
                                        10 进制</label>
                                    <label for="hex_16"><input type="radio" class="js-hex" name="hex" id="hex_16" value="16"/>
                                        16 进制</label>
                                    <label for="hex_32"><input type="radio" class="js-hex" name="hex" id="hex_32" value="32"/>
                                        32 进制</label>
                                    <label for="hex_36"><input type="radio" class="js-hex" name="hex" id="hex_36" value="36"/>
                                        36 进制</label>
                                    <label for="hex_58"><input type="radio" class="js-hex" name="hex" id="hex_58" value="58"/>
                                        58 进制</label>
                                    <label for="hex_62"><input type="radio" class="js-hex" name="hex" id="hex_62" value="62"/>
                                        62 进制</label>
                                    <label for="hex_64"><input type="radio" class="js-hex" name="hex" id="hex_64" value="64"/>
                                        64 进制</label></p>
                                <div class="mtb20">
                                    <input type="text" id="num" name="num" class="form-control w200 cus-input" style="display: inline-block" value="1987"/>
                                    <button type="button" class="btn btn-primary" v-on:click="convertHex">转换</button>
                                </div>

                                <table class="table table-bordered table-condensed table-striped">
                                    <thead>
                                    <tr>
                                        <th width="10%">进制</th>
                                        <th width="55%">结果</th>
                                        <th width="35%">描述</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>2</td>
                                        <td><input type="text" class="form-control w200" id="base_2" value=""/></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>8</td>
                                        <td><input type="text" class="form-control w200" id="base_8" value=""/></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>10</td>
                                        <td><input type="text" class="form-control w200" id="base_10" value=""/></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>16</td>
                                        <td><input type="text" class="form-control w200" id="base_16" value=""/></td>
                                        <td></td>
                                    </tr>
                                    <tr>
                                        <td>26</td>
                                        <td><input type="text" class="form-control w200" id="base_26" value=""/></td>
                                        <td>小写字母</td>
                                    </tr>
                                    <tr>
                                        <td>32</td>
                                        <td><input type="text" class="form-control w200" id="base_32" value=""/></td>
                                        <td>不包含 ILOU 字符</td>
                                    </tr>
                                    <tr>
                                        <td>36</td>
                                        <td><input type="text" class="form-control w200" id="base_36" value=""/></td>
                                        <td>数字 + 小写字母</td>
                                    </tr>
                                    <tr>
                                        <td>52</td>
                                        <td><input type="text" class="form-control w200" id="base_52" value=""/></td>
                                        <td>大写字母 + 小写字母</td>
                                    </tr>
                                    <tr>
                                        <td>58</td>
                                        <td><input type="text" class="form-control w200" id="base_58" value=""/></td>
                                        <td>不包含 0OlI 字符</td>
                                    </tr>
                                    <tr>
                                        <td>62</td>
                                        <td><input type="text" class="form-control w200" id="base_62" value=""/></td>
                                        <td>数字 + 小写字母 + 大写字母</td>
                                    </tr>
                                    <tr>
                                        <td>64</td>
                                        <td><input type="text" class="form-control w200" id="base_64" value=""/></td>
                                        <td></td>
                                    </tr>
                                    </tbody>
                                </table>
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

    const bases = (typeof exports !== 'undefined' ? exports : (window.Bases = {}));
    bases.toAlphabet = function (num, alphabet) {
        var base = alphabet.length;
        var digits = [];
        do {
            digits.push(num % base);
            num = Math.floor(num / base);
        } while (num > 0);
        var chars = [];
        while (digits.length) {
            chars.push(alphabet[digits.pop()]);
        }
        return chars.join('');
    };
    bases.fromAlphabet = function (str, alphabet) {
        var base = alphabet.length;
        var pos = 0;
        var num = 0;
        var c;
        var isUpper;
        while (str.length) {
            c = str[str.length - 1];
            str = str.substr(0, str.length - 1);
            isUpper = c.charCodeAt(0) >= 65 && c.charCodeAt(0) <= 90;
            if (alphabet.indexOf(c) === -1) {
                if (isUpper) {
                    c = c.toLowerCase();
                } else {
                    c = c.toUpperCase();
                }
            }
            num += Math.pow(base, pos) * alphabet.indexOf(c);
            pos++;
        }
        return num;
    };
    bases.NUMERALS = '0123456789';
    bases.LETTERS_LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
    bases.LETTERS_UPPERCASE = bases.LETTERS_LOWERCASE.toUpperCase();
    bases.KNOWN_ALPHABETS = {};
    for (var i = 2; i <= 10; i++) {
        bases.KNOWN_ALPHABETS[i] = bases.NUMERALS.substr(0, i);
    }
    for (var i = 11; i <= 16; i++) {
        bases.KNOWN_ALPHABETS[i] = bases.NUMERALS + bases.LETTERS_LOWERCASE.substr(0, i - 10);
    }
    bases.KNOWN_ALPHABETS[36] = bases.NUMERALS + bases.LETTERS_LOWERCASE;
    bases.KNOWN_ALPHABETS[62] = bases.NUMERALS + bases.LETTERS_LOWERCASE + bases.LETTERS_UPPERCASE;
    bases.KNOWN_ALPHABETS[26] = bases.LETTERS_LOWERCASE;
    bases.KNOWN_ALPHABETS[52] = bases.LETTERS_LOWERCASE + bases.LETTERS_UPPERCASE;
    bases.KNOWN_ALPHABETS[64] = bases.LETTERS_UPPERCASE + bases.LETTERS_LOWERCASE + bases.NUMERALS + '+/';
    bases.KNOWN_ALPHABETS[58] = bases.KNOWN_ALPHABETS[62].replace(/[0OlI]/g, '');
    bases.KNOWN_ALPHABETS[32] = bases.NUMERALS + bases.LETTERS_UPPERCASE.replace(/[ILOU]/g, '');

    function makeAlias(base, alphabet) {
        bases['toBase' + base] = function (num) {
            return bases.toAlphabet(num, alphabet);
        };
        bases['fromBase' + base] = function (str) {
            return bases.fromAlphabet(str, alphabet);
        };
    }

    for (var base in bases.KNOWN_ALPHABETS) {
        if (bases.KNOWN_ALPHABETS.hasOwnProperty(base)) {
            makeAlias(base, bases.KNOWN_ALPHABETS[base]);
        }
    }
    bases.toBase = function (num, base) {
        return bases.toAlphabet(num, bases.KNOWN_ALPHABETS[base]);
    };
    bases.fromBase = function (str, base) {
        return bases.fromAlphabet(str, bases.KNOWN_ALPHABETS[base]);
    };

    import sider from './sider'

    export default {
        components: {sider},
        name: 'ConvertHex',
        data() {
            return {
                electron: process.versions.electron,
                name: this.$route.name,
                node: process.versions.node,
                path: this.$route.path,
                platform: require('os').platform(),
                vue: require('vue/package.json').version
            }
        },
        methods: {
            convertHex() {
                let num = $('#num').val();
                let hex = $("input[name='hex']:checked").val();
                num = bases.fromBase(num, hex);
                if (num < 0) {
                    alert("无效的数据.");
                    return false;
                }
                $('#base_2').val(bases.toBase(num, 2));
                $('#base_8').val(bases.toBase(num, 8));
                $('#base_10').val(bases.toBase(num, 10));
                $('#base_16').val(bases.toBase(num, 16));
                $('#base_26').val(bases.toBase(num, 26));
                $('#base_32').val(bases.toBase(num, 32));
                $('#base_36').val(bases.toBase(num, 36));
                $('#base_52').val(bases.toBase(num, 52));
                $('#base_58').val(bases.toBase(num, 58));
                $('#base_62').val(bases.toBase(num, 62));
                $('#base_64').val(bases.toBase(num, 64));
            }
        }
    }
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
        padding-top: 26px
    }

    .root-detail .sub_header .app_desc {
        margin-top: 10px
    }

    .root-detail .sub_header .app_desc h1 {
        font-size: 240%;
        font-weight: 400;
        line-height: 1;
        padding: 0;
        margin: 0;
        margin-bottom: 10px;
        color: #333;
        letter-spacing: -1px
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
        padding-right: 15px
    }

    .root-detail .sub_header .ad {
        margin-top: 10px;
        min-height: 60px;
        flex: 1;
        text-align: right
    }

    .root-detail .app {
        flex: 1 0 auto;
        background-color: #fff;
        margin-top: 0;
        transition: margin-top 300ms
    }

    .root-detail .app .view {
        width: 100%
    }
    .mt10 {
        margin-top: 10px !important
    }

    .m10 {
        margin: 10px
    }

    .m20 {
        margin: 16px
    }

    .mt20 {
        margin-top: 20px !important
    }

    .mt40 {
        margin-top: 40px
    }

    .ml20 {
        margin-left: 20px
    }

    .w120 {
        width: 120px !important
    }

    .w180 {
        width: 180px !important
    }

    .w210 {
        width: 210px !important
    }

    .w260 {
        width: 260px !important
    }

    .w110 {
        width: 110px !important
    }

    .w500 {
        width: 500px !important
    }

    .p9 {
        padding: 9px
    }

    .p10 {
        padding: 10px
    }

    .pt4 {
        padding-top: 4px !important
    }

    .pb30 {
        padding-bottom: 30px
    }

    .mtb20 {
        margin-top: 20px;
        margin-bottom: 20px
    }

    .w200 {
        width: 200px;
    }
</style>

