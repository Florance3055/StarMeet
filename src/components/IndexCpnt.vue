<template>
  <!-- 页面容器 -->
  <div id="container">
    <!-- 主页标语以及星球图片 -->
    <h1 id="h1_text">
      {{msg}}
      <img src="../assets/images/star_index.png" ref="_star" alt />
    </h1>
    <!-- 旋转的星星背景 -->
    <div id="star_container">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
    <!-- 右边箭头跳转到介绍页面 -->
    <a href="/intro">
      <i class="el-icon-arrow-right"></i>
    </a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "你值得拥有一颗属于自己的"
    };
  },
  mounted() {
    var _this = this; //将this指向setInterval函数内部
    setInterval(function() {
      var deg = Math.floor(Math.random() * 360).toString(); //随机值（1-360）
      _this.$refs._star.style.cssText = "filter:  hue-rotate(" + deg + "deg) "; //根据ref属性绑定用CSS滤镜修改星球的色彩，1秒一次
    }, 1000);
  }
};
</script>

<style scoped>
/* 设置中间标语居中以及其他样式 */
h1 {
  margin: 0;
  padding: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
  font-size: 6em;
  z-index: 2;
  font-size: 50px;
  line-height: 64px;
}

/* 设置背景星星图片为相对位置 */
#star_container {
  position: relative;
}

/* 设置背景星星图片为整个屏幕大小，并且颜色为黑色，隐藏滚动条 */
#star_container ul {
  position: absolute;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000;
}

/* 设置每张星星背景图的样式并且加入动画 */
#star_container li {
  position: absolute;
  top: 0;
  left: 0;
  list-style: none;
  width: 100%;
  height: 100%;
  background: url("../assets/images/sda.png");
  background-size: contain;
  animation: animate 10s linear infinite;
  opacity: 0;
}

/* 0%~50%旋转放大 50%~100%旋转缩小*/
@keyframes animate {
  0% {
    transform: scale(1) rotate(0deg);
    opacity: 0;
  }
  50% {
    transform: scale(1.5) rotate(180deg);
    opacity: 1;
  }
  100% {
    transform: scale(0) rotate(360deg);
    opacity: 0;
  }
}

/* 设置星星图逐张延迟2秒开始动画，让5张星星图能够同框展示，动画为10s，最后一张星星图在第8秒出现，然后无限循环*/
#star_container ul li:nth-child(1) {
  animation-delay: 0;
}

#star_container ul li:nth-child(2) {
  animation-delay: 2s;
}

#star_container ul li:nth-child(3) {
  animation-delay: 4s;
}

#star_container ul li:nth-child(4) {
  animation-delay: 6s;
}

#star_container ul li:nth-child(5) {
  animation-delay: 8s;
}

/* 右边箭头的样式*/
i {
  z-index: 1000;
  color: #fff;
  position: fixed;
  top: 50%;
  right: 2%;
  font-size: 32px;
  display: block;
  cursor: pointer;
  transition: 0.5s;
  opacity: 0.4;
}

i:hover {
  opacity: 1;
  transform: scale(1.3);
}

/* 星球图片的样式，加入过度1s效果*/
img {
  margin-left: 16px;
  width: 64px;
  float: right;
  transition: 1s;
}
</style>
