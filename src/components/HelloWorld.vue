<template>
  <el-container>
    <el-header>微前端</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          router
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">index</span>
          </el-menu-item>
          <el-menu-item index="/home">
            <i class="el-icon-menu"></i>
            <span slot="title">home</span>
          </el-menu-item>
          <el-menu-item index="/sub-vue2">
            <i class="el-icon-document"></i>
            <span slot="title">vue-app</span>
          </el-menu-item>
          <el-menu-item index="/sub-react">
            <i class="el-icon-setting"></i>
            <span slot="title">react-app</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-main>
          <router-view v-show="$route.name"></router-view>
          <section v-show="$route.name" id="frame"></section>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
import start from '../micro/index.js'
import Index from '../views/main/index.vue'
import Home from '../views/main/home.vue'

export default {
  components: {
    Index,
    Home
  },
  // 定义属性
  data () {
    return {}
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {},
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
    if (!window.qiankunStarted) {
      window.qiankunStarted = true
      start()
    }
  }
}
</script>

<style>
#main-app > .el-container {
  height: 100vh;
}
.el-header {
  background-color: rgb(84, 92, 100);
  line-height: 60px;
  color: white;
  font-size: 30px;
  border-bottom: 1px solid black;
}
.el-aside > .el-menu {
  height: 100%;
}
</style>
