<template>
  <div id="app">
    <!--页面容器-->
    <el-container>
      <!--头部导航栏-->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          text-color="#fff"
          active-text-color="#1e90ff"
          background-color="rgba(0, 0, 0, 0.1)"
          router
        >
          <el-menu-item index="/">StarMeet</el-menu-item>
          <el-menu-item index="intro">介绍</el-menu-item>
          <el-menu-item index="info">信息</el-menu-item>
          <el-menu-item index="buy">惠取</el-menu-item>
          <el-menu-item index="server">服务</el-menu-item>
        </el-menu>
      </el-header>
      <!--路由的坑(路由的所有子组件组件都在这个标签中显示)-->
      <router-view id="router_view"></router-view>
      <!--回到顶部按钮-->
      <el-button
        icon="el-icon-top"
        circle
        v-if="btnFlag"
        @click="backTop"
        type="button"
        class="btn btn-primary"
        style="position:fixed;right:2%;bottom: 2%;z-index:99"
        ref="backTop"
      ></el-button>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      activeIndex: "/", //当前路由路径
      btnFlag: false //回到顶部标志值
    };
  },
  created() {
    window.addEventListener("scroll", this.scrollToTop); //监听window的滚动条

    //由当前路由路径判断当前active的导航栏项（刷新不丢失active状态）
    if (this.$route.path === "/intro") {
      this.activeIndex = "intro";
    } else if (this.$route.path === "/info") {
      this.activeIndex = "info";
    } else if (this.$route.path === "/buy") {
      this.activeIndex = "buy";
    } else if (this.$route.path === "/server") {
      this.activeIndex = "server";
    } else if (this.$route.path === "/") {
      this.activeIndex = "/";
    }
  },
  unmounted() {
    window.removeEventListener("scroll", this.scrollToTop); //销毁监听window的滚动条
  },
  methods: {
    // 点击图片回到顶部方法，加计时器是为了过渡顺滑
    backTop() {
      const that = this;
      let timer = setInterval(() => {
        let ispeed = Math.floor(-that.scrollTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          that.scrollTop + ispeed;
        if (that.scrollTop === 0) {
          clearInterval(timer);
        }
      }, 16);
    },

    // 为了计算距离顶部的高度，当高度大于256显示回顶部图标，小于256则隐藏
    scrollToTop() {
      const that = this;
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      that.scrollTop = scrollTop;
      if (that.scrollTop > 256) {
        that.btnFlag = true;
      } else {
        that.btnFlag = false;
      }
    }
  }
};
</script>

<style>
/*初始化CSS*/
@import "./css/init.css";

#app {
  /*element-ui中的字体适配规范*/
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif !important;
  background: transparent;
}

.el-header {
  color: #333;
  text-align: center;
  line-height: 60px;
  position: fixed;
  z-index: 100;
}

/*设置导航栏样式*/
.el-menu {
  background-color: rgba(0, 0, 0, 0.1) !important;
  border-bottom: none !important;
}

.el-menu-item {
  margin: 0 auto !important;
}

.el-menu-item:hover {
  background-color: rgba(241, 242, 246, 0.1) !important;
  color: #1e90ff !important;
}

/*修改滚动条样式*/
::-webkit-scrollbar {
  width: 4px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 1);
  border-radius: 2px;
}

::-webkit-scrollbar-thumb {
  background: #bfbfbf;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #fff;
}

::-webkit-scrollbar-corner {
  background: #179a16;
}
</style>
