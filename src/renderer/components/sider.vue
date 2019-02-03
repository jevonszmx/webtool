<template>

<div class="col-md-2 bg-primary" style="height:800px">
    <div class="page-header">
    <div>
        <h2>开发者工具</h2>
    </div>
    </div>
    <ul class="sider">
        <li><a href="#" class="white" v-on:click="$router.push({name: 'index'})">首页</a></li>
        <li><a href="#" v-on:click="$router.push({name : 'urlencode'});" class="white">URL转码</a></li>
        <li><a href="#" v-on:click="$router.push({name : 'JSONFormat'});" class="white">JSON格式化</a></li>
        <li><a href="#" v-on:click="$router.push({name : 'Unixtime'});" class="white">时间戳转换</a></li>
        <li><a href="#" v-on:click="$router.push({name : 'Md5'});" class="white">MD5加密</a></li>
    </ul>
</div>
       
</template>

<script>

</script>

<style>
ul.sider {
    padding-left: 20px;
}
ul.sider li {
    height: 30px;
    /* list-style: none; */
    
}
 a.white, a.white:hover {
     color:white;
 }
</style>