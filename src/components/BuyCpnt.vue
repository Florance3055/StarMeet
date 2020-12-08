<template>
  <div>
    <!-- 主容器 -->
    <el-main>
      <!-- 轮播图 绑定linkTo事件进行数值绑定，详见下方函数methods-->
      <el-carousel
        type="card"
        ref="carousel"
        :interval="0"
        arrow="never"
        trigger="click"
        indicator-position="none"
        @click.enter="linkTo"
      >
        <!-- 使用Vue的v-for循环加载数组中的每一个星球的图片地址和价钱 -->
        <el-carousel-item v-for="item in imgs" v-bind:key="item.price">
          <img :src="item.url" />
        </el-carousel-item>
      </el-carousel>

      <!-- 底部购买价钱栏 -->
      <div id="shop">
        <el-row :gutter="12">
          <el-col :span="24">
            <el-card shadow="always">
              <h2>
                费用：
                <span>¥{{bussinessInfo.money}}</span>
              </h2>
              <!-- 绑定open事件打开对话框确认购买 -->
              <el-button type="primary" id="buy_btn" @click="open">立即购买</el-button>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bussinessInfo: { money: 156000000, certification: 1 },
      // money: "156000000", //页面初始加载时第一个星球的价钱
      // certification: 1,
      imgs: [
        //星球图片地址和价钱
        {
          url: require("../assets/images/xq5.png"),
          price: 156000000
        },
        {
          url: require("../assets/images/xq6.png"),
          price: 235000000
        },
        {
          url: require("../assets/images/xq7.png"),
          price: 325000000
        },
        {
          url: require("../assets/images/xq8.png"),
          price: 499000000
        }
      ]
    };
  },
  methods: {
    changeMoney() {
      //element-ui封装的MessageBox组件

      this.$http({
        method: "post",
        url: "/api/bussiness/money",
        withCredentials: true,
        data: this.bussinessInfo
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "购买成功!"
            });
            this.changeCertification();
          } else if (res.data.code == 211) {
            this.$message({
              type: "error",
              message: "购买失败,余额不足!"
            });
          } else {
            this.$message({
              type: "error",
              message: "购买失败!"
            });
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    changeCertification() {
      this.$http({
        method: "post",
        url: "/api/bussiness/certification",
        withCredentials: true,
        data: this.bussinessInfo
      })
        .then(res => {
          if (res.data.code == 200) {
            this.$message({
              type: "success",
              message: "成功获取权限!"
            });
            setTimeout(function() {
              window.location.href = "/server";
            }, 2000);
          }
        })
        .catch(error => {
          console.log(error);
        });
    },

    open() {
      this.$confirm(
        "您将花费¥" + this.bussinessInfo.money + "  购买这颗星球, 是否继续?",
        "提示",
        {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          center: true
        }
      )
        .then(() => {
          this.changeMoney();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消"
          });
        });
    },

    linkTo() {
      //点击图片时，对该图片的价格进行数值绑定，异步操作直接响应前端
      let activeIndex = this.$refs.carousel.activeIndex;
      this.bussinessInfo.money = this.imgs[activeIndex].price;
    }
  }
};
</script>

<style scoped>
/*设置主容器的各项属性 */
.el-main {
  text-align: center;
  background-color: #333;
  padding: 0 15%;
  background: url("../assets/images/star.png");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;
}

img {
  width: 100%;
  height: 100%;
}

/*设置轮播图的位置 */
.el-carousel {
  top: 27%;
  transform: scale(1.3);
}

/*固定价格购买栏，设置宽度 */
#shop {
  position: fixed;
  bottom: 0;
  width: 70%;
  margin: 0;
  padding: 0;
}

/*去掉边框 */
.el-card {
  border: none;
  background-color: #fff;
}

/*文字左浮动*/
h2 {
  float: left;
}

h2 span {
  color: #ffc83d;
  font-size: 52px;
}

/*按钮右浮动*/
#buy_btn {
  float: right;
}
</style>