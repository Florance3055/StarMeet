<template>
  <div>
    <!-- 页面主容器 -->
    <el-main>
      <!-- 轮播图（Click模式，点击或者自动切换轮播画面） -->
      <div class="block">
        <el-carousel trigger="click" height="444px">
          <el-carousel-item>
            <img src="../assets/images/1.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/2.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/3.jpg" alt />
          </el-carousel-item>
          <el-carousel-item>
            <img src="../assets/images/4.jpg" alt />
          </el-carousel-item>
        </el-carousel>
      </div>

      <!-- 分割空间 -->
      <div class="divider"></div>

      <!-- 介绍StarMeet主要功能信息 -->
      <div>
        <el-row :gutter="12">
          <el-col :span="24">
            <el-card class="none_border">
              <h2>StarMeet</h2>
              <p>StarMeet（星遇）是一个为您捕捉宇宙中星星，让其伴您一生夜空的理想幻想平台。助您排忧解难，提升星座运势，使您更专注于精神创造，让现实生活也能变得更加精彩。Star bless you.</p>
              <a href="/buy">
                <el-button type="primary">立即购买</el-button>
              </a>
              <a href="/server">
                <el-button>产品服务</el-button>
              </a>
            </el-card>
          </el-col>
        </el-row>
      </div>

      <!-- 分割空间 -->
      <div class="divider"></div>

      <!-- 星星的特性 -->
      <div id="star_info">
        <div class="demo-image__placeholder">
          <el-row :gutter="12">
            <el-col :span="24">
              <el-card class="none_border">
                <h2>⭐星星的特性</h2>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!-- 分割空间（较小） -->
        <div class="_divider"></div>

        <!-- 高层大气 -->
        <div class="demo-image__placeholder">
          <el-row :gutter="8">
            <el-col :span="12">
              <el-card class="left_border">
                <div class>
                  <div class="c-media">
                    <div class="c-media-img">
                      <img src="../assets/images/xq1.png" alt />
                    </div>
                    <div class="c-media-body">
                      <h4 class="c-media-heading">高层大气</h4>
                      <p
                        class="c-media-info"
                      >高层大气是由体积或气体分子百分率约88-92%的氢和约8-12%的氦所组成。由于氦原子的质量是氢原子的四倍，质量组成比例会有所改变：大气层中氢和氦分别占了总质量的75%及24%，余的1%为其他气体物质，包括微量的甲烷、水蒸气、氨以及硅的化合物。</p>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>

            <!-- 内部构造 -->
            <el-col :span="12">
              <el-card class="left_border">
                <div class>
                  <div class="c-media">
                    <div class="c-media-img">
                      <img src="../assets/images/xq2.png" alt />
                    </div>
                    <div class="c-media-body">
                      <h4 class="c-media-heading">内部构造</h4>
                      <p
                        class="c-media-info"
                      >质量为3.33×10²⁶克，为地球质量的5.58%，平均密度为 5.433克/cm³，略低于地球的平均密度。这个核球的主要成分是铁、镍和硅酸盐根据这样的结构，应含铁两万亿亿吨，按世界钢的年产量（约8亿吨）计算，可以开采2400亿年。</p>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!-- 分割空间（较小） -->
        <div class="_divider"></div>

        <div class="demo-image__placeholder">
          <el-row :gutter="8">
            <!-- 地形地貌 -->
            <el-col :span="12">
              <el-card class="left_border">
                <div class>
                  <div class="c-media">
                    <div class="c-media-img">
                      <img src="../assets/images/xq3.png" alt />
                    </div>
                    <div class="c-media-body">
                      <h4 class="c-media-heading">地形地貌</h4>
                      <p
                        class="c-media-info"
                      >南北半球的地形有着强烈的对比：北方是被熔岩填平的低原，南方则是充满陨石坑的古老高地，而两者之间以明显的斜坡分隔；火山地形穿插其中，众多峡谷亦分布各地，南北极则有以干冰（固态的二氧化碳）和水冰组成的极冠，风成沙丘亦广布整个星球。</p>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>

            <!-- 四季变化 -->
            <el-col :span="12">
              <el-card class="left_border">
                <div class>
                  <div class="c-media">
                    <div class="c-media-img">
                      <img src="../assets/images/xq4.png" alt />
                    </div>
                    <div class="c-media-body">
                      <h4 class="c-media-heading">四季变化</h4>
                      <p
                        class="c-media-info"
                      >一年最为漫长，有687个地球日。由于椭圆轨道比地球椭圆轨道要扁，导致南北半球的四季差异更为显著。由于同样的原因，四季长度的差异更大。各个季节长度的差异最多不超过5%，而上北半球的春季竟比秋季长1/3左右。</p>
                    </div>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 分割空间 -->
      <div class="divider"></div>

      <!-- 星星的配置 -->
      <div id="price_info">
        <div class="demo-image__placeholder">
          <el-row :gutter="12">
            <el-col :span="24">
              <el-card class="none_border">
                <h2>⭐多款星星满足您的不同需求</h2>
              </el-card>
            </el-col>
          </el-row>
        </div>

        <!-- 分割空间（较小） -->
        <div class="_divider"></div>

        <div class="demo-image__placeholder">
          <el-row :gutter="12">
            <el-col :span="6">
              <el-card class="bottom_border">
                <el-row :gutter="12">
                  <!-- 塞德娜 -->
                  <el-col :span="24">
                    <span class="price_title">塞德娜</span>
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    大气层中氢占比50%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    质量为3.33×10²⁶克
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    丰富的地形样式50%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    拥有687个世界地球日
                  </el-col>

                  <el-col :span="24">
                    <span class="price">￥1562,000,000/年</span>
                  </el-col>

                  <el-col :span="24">
                    <a href="buy">
                      <el-button type="primary">立即购买</el-button>
                    </a>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <!-- 阋神星 -->
            <el-col :span="6">
              <el-card class="bottom_border">
                <el-row :gutter="12">
                  <el-col :span="24">
                    <span class="price_title">阋神星</span>
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    大气层中氢占比60%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    质量为4.33×10²⁶克
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    丰富的地形样式60%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    拥有787个世界地球日
                  </el-col>

                  <el-col :span="24">
                    <span class="price">￥2356,000,000/年</span>
                  </el-col>

                  <el-col :span="24">
                    <a href="buy">
                      <el-button type="primary">立即购买</el-button>
                    </a>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <!-- 卡戎 -->
            <el-col :span="6">
              <el-card class="bottom_border">
                <el-row :gutter="12">
                  <el-col :span="24">
                    <span class="price_title">卡戎</span>
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    大气层中氢占比70%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    质量为5.33×10²⁶克
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    丰富的地形样式70%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    拥有887个世界地球日
                  </el-col>

                  <el-col :span="24">
                    <span class="price">￥3256,000,000/年</span>
                  </el-col>

                  <el-col :span="24">
                    <a href="buy">
                      <el-button type="primary">立即购买</el-button>
                    </a>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>

            <!-- 妊神星 -->
            <el-col :span="6">
              <el-card class="bottom_border">
                <el-row :gutter="12">
                  <el-col :span="24">
                    <span class="price_title">妊神星</span>
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    大气层中氢占比80%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    质量为6.33×10²⁶克
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    丰富的地形样式80%
                  </el-col>

                  <el-col :span="24">
                    <i class="el-icon-check"></i>
                    拥有987个世界地球日
                  </el-col>

                  <el-col :span="24">
                    <span class="price">￥4996,000,000/年</span>
                  </el-col>

                  <el-col :span="24">
                    <a href="buy">
                      <el-button type="primary">立即购买</el-button>
                    </a>
                  </el-col>
                </el-row>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 分割空间 -->
      <div class="divider"></div>

      <!-- 底部跳转到其他页面的链接 -->
      <div id="star_info">
        <div class="another_link">
          <el-row :gutter="8">
            <el-col :span="6">
              <a href="/">StarMeet</a>
            </el-col>
            <el-col :span="6">
              <a href="/intro">介绍</a>
            </el-col>
            <el-col :span="6">
              <a href="/buy">惠取</a>
            </el-col>
            <el-col :span="6">
              <a href="/server">服务</a>
            </el-col>
          </el-row>
        </div>
      </div>

      <!-- 分割空间 -->
      <div class="divider"></div>

      <!-- 底部标识以及提示 -->
      <div>
        <el-row :gutter="12">
          <el-col :span="24">
            <el-tooltip class="item" effect="light" content="由LFW.独立制作✨" placement="top">
              <div style="color: #fff;cursor: pointer;">@2020 StarMeet</div>
            </el-tooltip>
          </el-col>
        </el-row>
      </div>

      <!-- 右边箭头跳转到惠取页面 -->
      <a href="/buy">
        <i class="el-icon-arrow-right"></i>
      </a>
    </el-main>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped>
/* 主容器样式 */
.el-main {
  background-color: #e9eef3;
  text-align: center;
  background-color: #333;
  padding: 0 15%;
  background: url("../assets/images/4.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

/* 图片填充满容器 */
img {
  width: 100%;
  height: 100%;
}

/* 卡片块样式 */
.el-card {
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  color: #fff;
}

/* 卡片左边框的hover效果 */
.left_border {
  position: relative;
}

.left_border::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 1px;
  height: 50%;
  width: 4px;
  opacity: 0;
  background-color: #5778f3;
  transition: all 0.3s ease-in-out;
}

.left_border:hover::after {
  height: 100%;
  opacity: 1;
}

/* 卡片底部边框的hover效果 */
.bottom_border {
  position: relative;
}

.bottom_border::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: -3px;
  width: 60%;
  height: 10px;
  opacity: 0;
  background-color: #5778f3;
  transform: translate(-50%, 0);
  transition: all 0.3s ease-in-out;
}

.bottom_border:hover::after {
  width: 100%;
  opacity: 1;
}

/* 分割块高度 */
.divider {
  height: 24px;
}

._divider {
  height: 2px;
}

/* 字体设置 */
h2 {
  font-size: 32px;
  margin: 8px auto;
  text-align: left;
}

p {
  text-indent: 2em; /* 段前空两格 */
  text-align: left;
  line-height: 24px;
  margin-top: 12px;
}

.el-button {
  margin: 12px 8px;
}

h4 {
  font-size: 24px;
}

h3 {
  font-size: 18px;
}

/* 星球的名字字体大小 */
.price_title {
  font-size: 24px;
}

/* 布局行块样式 */
.el-col {
  margin: 4px auto;
}

.el-col i {
  color: #ffc83d;
}

/* 价格样式 */
.price {
  font-size: 24px;
  color: #ffc83d;
}

/* 卡片块的位置和hover效果 */
h2 {
  transition: all 0.5s ease-in-out;
}

#price_info:hover h2 {
  transform: translateX(30%);
}

#star_info:hover h2 {
  transform: translateX(39%);
}

/* 底部链接 */
.another_link {
  background-color: rgba(0, 0, 0, 0.3);
}

a {
  color: #fff !important;
}

/* 右边箭头 */
.el-icon-arrow-right {
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

.el-icon-arrow-right:hover {
  opacity: 1;
  transform: scale(1.3);
}

/* 去除卡片标题的hover效果 */
.none_border::after {
  width: 0 !important;
}

.none_border:hover::after {
  width: 0 !important;
}

/* 设置卡片图片的大小 */
.c-media-img img {
  width: 84px;
  height: 84px;
}

/* 设置布局行块的行高，美化字体间距 */
.el-col {
  line-height: 32px;
}

/* a标签hover效果 */
.el-col:hover a {
  color: #66b1ff !important;
}
</style>