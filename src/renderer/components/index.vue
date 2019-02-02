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
            <div class="col-md-3">
                <div class="list-group">
                <p class="list-group-item active">
                    加密/转码工具
                </p>
                <a href="#" v-on:click="$router.push({name : 'Native2ASCII'});" class="list-group-item">Native转ASCII</a>
                <a href="#" v-on:click="$router.push({name : 'Native2Unicode'});" class="list-group-item">Native转Unicode</a>
                <a href="#" v-on:click="$router.push({name : 'Native2UTF8'});" class="list-group-item">Native转UTF8</a>
                <a href="#" v-on:click="$router.push({name : 'urlencode'});" class="list-group-item">URL转码</a>
                <a href="#" v-on:click="$router.push({name : 'Base64' })" class="list-group-item">Base64转码</a></li>
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

            
        </div>
    </div>
</div>
</template>

<script>
import $ from "jquery";
import sider from './sider'

export default {
  name: "index",
  components : { sider },
  data() {
    return {};
  }
};
</script>

<style>
    a.white, a.white:hover {
        color:#fff;
    }
</style>