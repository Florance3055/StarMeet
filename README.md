用到的技术：

	-Vue.js		（渐进式JavaScript 框架）

	-Vue Router	（Vue Router 是 Vue.js 官方的路由管理器。它和 Vue.js 的核心深度集成，让构建单页面应用变得易如反掌）

	-Vuex		(Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式)

	-Element-UI	（Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库）

	-Axios		（Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中）

	-qs		（具有一些增加安全性的querystring解析和字符串化库）

	-HTML5		（HTML5 是下一代的 HTML）

	-CSS3		（CSS3 是最新的 CSS 标准）

	-JavaScript	（一种具有函数优先的轻量级，解释型或即时编译型的编程语言）


作品的整体规划：

	
	这个设计缘起三体的云天明赠送星球（DX3906）给程心的故事，如果未来人来能够霸主银河系甚至系外宇宙，我们就可售卖个人星球，一个银河系的星星大概1000亿~4000亿颗，分配给人类绰绰有余。

	先是首页勾起用户对星球的向往；
	接着介绍宇宙的奇妙，捉住用户的好奇心；
	然后通过信息页面展示星球的信息和购买套餐；
	在购买页面可以预览星球的样子，购买后转入产品服务的页面；
	最后在产品服务的页面体验星球美妙之旅。

	StarMeet（星遇）是一个为您捕捉宇宙中星星，让其伴您一生夜空的理想幻想平台。助您排忧解难，提升星座运势，使您更专注于精神创造，让现实生活也能变得更加精彩。

	Star bless you.


每个页面的功能：

	-主页（StarMeet）:
			1.头部导航栏
			2.使用CSS3编写的背景动画
			3.星球图片的样式美化
			4.右边的链接箭头

	-介绍（intro）：	
			1.固定的背景层，滑动滚动条有不一样的切换界面和文字浏览效果
			2.段落hover标题有标识效果
			3.底部标识以及提示
			4.回到顶部
			5.右边的链接箭头
	-信息（info）：
			1.轮播图
			2.卡片24格布局，分别分成2栏4栏
			3.卡片的hover效果
			4.底部的链接跳转
			5.底部标识以及提示
			6.右边的链接箭头	

	-惠取（buy）：
			1.卡片式轮播图，不自动切换，可以点击切换
			2.点击获取并传价格的数值到全局，利用vue的数值绑定，异步获取价格
			3.点击购买打开消息框，可以确认购买星球或者取消，购买成功后等待1s跳转到服务页面
			4.购买成功后获取certification自动跳转值服务页面。

	-服务（server）：
			1.设置星星背景，画面居中星球的图像
			2.星球每6s循环一次动画，旋转，波纹效果
			3.星球hover状态每3s循环一次动画，旋转，波纹效果，有提示信息
			4.点击星球可以切换星球的色彩
			5.有下角可以发请求提交反馈给作者（利用axios发请求存入MySQL）
			6.底部标识以及提示
			7.如果用户没有certification将无法进入此页面。

	-登录（login）：
			1.设计左右分栏，左边为登录、注册和修改密码部分，右边为用户信息展示部分，还有退出登录，删除账号等操作。
			2.注册输入password检测两次密码是否一致，空密码框检测

	-评论（comment）：
			1.利用table组件设计评论读取，嵌入删除评论的操作
			
    PS：
        1. 未适配移动端，请勿用PC端Google浏览器以外的设备软件打开StarMeet
	    2.项目已编译至dist文件夹，开启web服务器即可浏览
	    3.若无法浏览网页，可行至本人部署到服务器的网页地址：http://sm.2key.top

```
starmeet_vue
├─ .gitignore
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  └─ images
│  ├─ components
│  │  ├─ BuyCpnt.vue
│  │  ├─ CommentCpnt.vue
│  │  ├─ IndexCpnt.vue
│  │  ├─ InfoCpnt.vue
│  │  ├─ IntroCpnt.vue
│  │  ├─ LoginCpnt.vue
│  │  └─ ServerCpnt.vue
│  ├─ element.js
│  ├─ init.css
│  ├─ main.js
│  ├─ router.js
│  └─ store.js
└─ vue.config.js

```