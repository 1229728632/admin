import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:"/login",
      component:()=>import("../pages/login/login.vue")
    },
    {
      path:"/",
      component:()=>import("../pages/index/index.vue"),
      children:[
        {
          path:"home",
          component:()=>import("../pages/home/home.vue"),
          name:"首页"
        },
        {
          path:"menu",
          component:()=>import("../pages/menu/menu.vue"),
          name:"菜单管理"
        },
        {
          path:"role",
          component:()=>import("../pages/role/role.vue"),
          name:"角色管理"
        },
        {
          path:"manage",
          component:()=>import("../pages/manage/manage.vue"),
          name:"管理员管理"
        },
        {
          path:"cate",
          component:()=>import("../pages/cate/cate.vue"),
          name:"商品分类"
        },
        {
          path:"spec",
          component:()=>import("../pages/spec/spec.vue"),
          name:"商品规格"
        },

         {
          path:"goods",
          component:()=>import("../pages/goods/goods.vue"),
          name:"商品管理"
        },
        {
          path:"member",
          component:()=>import("../pages/member/member.vue"),
          name:"会员管理"
        },
        {
          path:"banner",
          component:()=>import("../pages/banner/banner.vue"),
          name:"轮播图管理"
        },
        {
          path:"seckill",
          component:()=>import("../pages/seckill/seckill.vue"),
          name:"秒杀活动"
        },

      ]
    },
  ]
})
