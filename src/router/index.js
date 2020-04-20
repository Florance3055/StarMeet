/*导入Vue和Router并使用路由 */
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

/*导入位于components文件夹下的五个子组件，分别是主页、信息、介绍、惠取、服务 */
import IndexCpnt from '../components/IndexCpnt'
import InfoCpnt from '../components/InfoCpnt'
import IntroCpnt from '../components/IntroCpnt'
import BuyCpnt from '../components/BuyCpnt'
import ServerCpnt from '../components/ServerCpnt'

/*定义路由，实例路由对象 */
const router = new VueRouter({
  routes: [{
      path: '/',
      component: IndexCpnt
    },
    {
      path: '/intro',
      component: IntroCpnt
    },
    {
      path: '/info',
      component: InfoCpnt
    },
    {
      path: '/buy',
      component: BuyCpnt
    },
    {
      path: '/server',
      component: ServerCpnt
    },
  ],
  mode: 'history' //路由路径不会出现#，美观但是在服务器刷新会404，需要在nginx设置
})

/*全局导出路由对象*/
export default router