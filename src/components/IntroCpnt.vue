<template>
  <div>
    <!-- 第一张背景图片 -->
    <section class="sec1"></section>

    <!-- 第一段文字 -->
    <section class="secText">
      <h1>
        <span>|</span>神秘的爆炸
      </h1>
      <p>星星灾难性爆炸爆发出强烈的冲击波，外围辐射的速度可达每小时3500万公里。有些星星的生命终结会是一次波澜壮观的天文事件。当一颗8倍太阳质量以上的超新星烧尽时，地心引力的内力将会将这颗星星的“内脏”撕得三分五裂。这些爆炸还导致高能光线和物质喷射出来，进入太空。自约翰尼斯·开普勒1604年发现超新星以来，天文学家在我们的星系中再也没有看到过超新星。</p>
    </section>

    <!-- 第二张背景图片 -->
    <section class="sec2"></section>

    <!-- 第二段文字 -->
    <section class="secText">
      <h1>
        <span>|</span>可怕的黑洞
      </h1>
      <p>黑洞密度大到足以让任何东西都无法逃脱其地心引力的控制。一旦经过黑洞边界就无路可逃，甚至光线都不能逃脱。现在，天文学家已经掌握了恒星黑洞和超大黑洞存在的证据。恒星黑洞是大星星爆炸形成的，而超大黑洞有数百万太阳物质大。</p>
    </section>

    <!-- 第三张背景图片 -->
    <section class="sec3"></section>

    <!-- 第三段文字 -->
    <section class="secText">
      <h1>
        <span>|</span>太阳耀斑
      </h1>
      <p>太阳大气——日冕的温度可以达到200万摄氏度，能够以近似光速的速度诡秘般地发射出高能粒子。这些带电粒子称为太阳耀斑，能够促使磁场向地球方向偏移，干扰地面的通讯、卫星技术和电子设备甚至手机的信号。最大的太阳耀斑能够释放出相当于数百万个氢弹的能量，加以利用的话，这些能量足以让美国用上十万年。天文学家刚刚开始知道太阳内部的运作情况，并有了预测这些暴躁耀斑的目标。</p>
    </section>

    <!-- 第四张背景图片 -->
    <section class="sec4"></section>

    <!-- 第四段文字 -->
    <section class="secText">
      <h1>
        <span>|</span>恒星尸体
      </h1>
      <p>磁星是高密度的中子星，是一种恒星尸体，其磁场较地球上的任何磁体都要强上数十亿倍。它们大约每10秒就会释放出X射线，偶尔也会放射出伽马射线。直到1998年，磁星才被确定为一种独特的星体，这离首次发现其光线已近20年之久：1979年3月，9艘太空船发现，来自于称为N49的超新星残体处的辐射能量相当于太阳在1000年之内释放出来的能量总和。</p>
    </section>

    <!-- 底部标识以及提示 -->
    <el-tooltip class="item" effect="light" content="由LFW.独立制作✨" placement="top">
      <div style="color: #000; text-align:center; cursor: pointer;">@2020 StarMeet</div>
    </el-tooltip>

    <!-- 右边箭头 -->
    <a href="/info">
      <i class="el-icon-arrow-right"></i>
    </a>
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
/* 内外贴紧 */
body {
  margin: 0;
  padding: 0;
}

/* 设置背景图片固定 cover */
section {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

section.sec1 {
  background: url("../assets/images/1.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

section.sec2 {
  background: url("../assets/images/2.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

section.sec3 {
  background: url("../assets/images/3.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

section.sec4 {
  background: url("../assets/images/4.jpg");
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
}

/* 设置文字的样式 */
section.secText {
  padding: 50px 100px;
  height: auto;
}

section.secText h1 {
  margin: 0;
  padding: 0;
  font-size: 48px;
  color: #262626;
}

section.secText p {
  text-indent: 2em;
  margin-top: 16px;
  line-height: 28px;
  font-size: 18px;
}

/* 设置右边箭头的样式和hover效果 */
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

/* 标题文字左边的竖线 */
span {
  opacity: 0;
  transition: 1s;
}

.secText:hover span {
  opacity: 1;
}
</style>
