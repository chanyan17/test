<template>
  <div id="app">
    <div class="text">{{ $t("message.hello") }}</div> 
    <div>
        <button v-on:click="enLang">英语</button>
        <button v-on:click="zhCHSLang">中文简体</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
            msg: 'Welcome to Your Vue.js App'
        }
    },
    methods: {
        enLang: function() {
            this.$i18n.locale = 'en';
        },
        zhCHSLang: function() {
            this.$i18n.locale = 'zhCHS';
        }
    }
}
</script>

<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}

h1, h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

button {
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    border-color: #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
}
.text {
    height: 50px;
    line-height: 50px;
    font-size: 20px;
}
</style>
