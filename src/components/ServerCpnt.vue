<template>
  <div>
    <!-- 页面容器 -->
    <div class="container">
      <!-- 星球 点击绑定changeColor以及提示 -->
      <el-tooltip class="item" effect="light" content="点击可以改变颜色" placement="top">
        <div class="my_star" @click="changeColor()" ref="my_star"></div>
      </el-tooltip>

      <!-- 底部标识以及提示 -->
      <el-tooltip class="item" effect="light" content="由LFW.独立制作✨" placement="top">
        <div style="color: #fff; cursor: pointer;position:fixed;bottom:0;left:46%">@2020 StarMeet</div>
      </el-tooltip>

      <!-- 右下角反馈信息 -->
      <el-button @click="openWindow" id="feedback">评论</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      params: {
        userComment: ""
      }
    };
  },
  created: function() {
    this.getBussinessInfo();
  },
  methods: {
    changeColor() {
      var deg = Math.floor(Math.random() * 360).toString(); //随机值1~360
      this.$refs.my_star.style.cssText = "filter:  hue-rotate(" + deg + "deg) "; //根据ref属性绑定用CSS滤镜修改星球的色彩
    },

    getBussinessInfo() {
      this.$http({
        method: "get",
        url: "/api/bussiness/info",
        withCredentials: true
      })
        .then(res => {
          if (res.data.code == 200) {
            this.isLogin = true;
            if (res.data.certification !== 1) {
              this.openTip();
            }
          }
        })
        .catch(error => {
          console.log(error);
          if (this.isLogin == false) {
            this.openLoginTip();
          }
        });
    },

    openTip() {
      this.$alert("您还无法使用该服务，请购买！", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          console.log(action);
          setTimeout(function() {
            window.location.href = "/buy";
          }, 800);
        }
      });
    },

    openLoginTip() {
      this.$alert("请先登录！", "提示", {
        confirmButtonText: "确定",
        callback: action => {
          console.log(action);
          setTimeout(function() {
            window.location.href = "/login";
          }, 800);
        }
      });
    },

    openWindow() {
      this.$prompt("你有什么想对我说的🐴？", "提示", {
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        center: true,
        showClose: false
      })
        .then(({ value }) => {
          if (value) {
            this.params.userComment = value;
            this.submitComment();
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消"
          });
        });
    },

    submitComment() {
      this.$http({
        method: "post",
        url: "/api/comment/add",
        withCredentials: true,
        data: this.params
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "评论成功！",
              center: true
            });
          } else {
            this.$message({
              type: "error",
              message: "评论失败！",
              center: true
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>
/* 页面背景 */
.container {
  width: 100vw;
  height: 100vh;
  margin: 0;
  background: url("../assets/images/star.png");
  padding: 0;
}

/*我的星星*/
.my_star {
  position: absolute;
  height: 320px;
  width: 320px;
  top: 50%;
  left: 50%;
  background: url("../assets/images/texture-earth.jpg");
  border-radius: 50%;
  box-shadow: 0 0 32px #ffffff;
  border: none !important;
  cursor: pointer;

  animation: rotate 6s infinite;
}

/*我的星星hover动画*/
.my_star:hover {
  -moz-animation: rotate 3s infinite;
  -webkit-animation: rotate 3s infinite;
  animation: rotate 3s infinite;
  border: none !important;
}

/*定位星星位置为正中央，旋转Z轴，利用阴影和透明度制造波纹效果*/
@keyframes rotate {
  0% {
    transform: translate(-50%, -50%) rotateZ(0);
    box-shadow: 0 0 0 0 rgba(88, 120, 243, 0.4);
    border: none !important;
  }
  70% {
    box-shadow: 0 0 0 128px rgba(88, 120, 243, 0);
    border: none !important;
  }
  100% {
    transform: translate(-50%, -50%) rotateZ(360deg);
    box-shadow: 0 0 0 0 rgba(88, 120, 243, 0);
    border: none !important;
  }
}

/* 反馈样式 */
#feedback {
  position: fixed;
  bottom: 2%;
  right: 2%;
}
</style>