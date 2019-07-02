import Vue from 'vue'
import Router from 'vue-router'

// 登录，注册，首页
import Index from '@/views/news/index'
import Login from '@/components/login'
import Register from '@/components/register'

import Header from '@/views/Header/header'
import SystemWarn from '@/views/system/systemWarn'

// 标准区
import StardArea from "@/views/header/StardArea"
import weatherS from '@/views/todayInfo/weatherS'

// 年
import History from '@/views/historyInfo/year/history'
import weatherYear from "@/views/historyInfo/year/weatherYear";


// 月
import HistoryMonth from '@/views/historyInfo/month/historyMonth'
import WeatherMouth from '@/views/historyInfo/month/weatherMonth'

// 日
import HistoryDay from '@/views/historyInfo/day/historyDay'
import WeatherDay from '@/views/historyInfo/day/weatherDay'

import HeaderStard from '@/views/header/headerStard'
import Weather from '@/views/todayInfo/weather'

import Join from '@/views/About/join'
import HeaderSet from '@/views/Header/HeaderSet'
import WeatherSet from '@/views/Resource/weatherSet'
// 404 
import NotFound from '@/components/404'


Vue.use(Router)

const router = new Router({
  // mode:'history',  // 去掉路由地址的 # 
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children: [{
          path: '/index/header',
          name: 'header',
          component: Header,
          children: [{
              path: '/index/header/weather',
              name: 'weather',
              component: Weather
            }
          ]
        },
        {
          path: '/index/stardArea',
          name: 'stardArea',
          component: StardArea,
          children: [{
            path: '/index/stardArea/weather',
            name: 'weatherS',
            component: weatherS
          }
        ]
        },
        {
          path: '/index/headerSet',
          name: 'headerSet',
          component: HeaderSet,
          children: [{
              path: '/index/headerSet/weatherSet',
              name: 'weatherSet',
              component: WeatherSet
            }
          ]
        },
        {
          path: '/index/headerStard',
          name: 'stard',
          component: HeaderStard,
          children: [{
              path: '/index/headerStard/weatherWarn',
              name: 'weatherWarn',
              component: SystemWarn
            }
          ]
        },
        {
          path: '/index/history',
          name: 'history',
          component: History,
          children:[
            {
              path: '/index/history/weatherYear',
              name: 'weatherYear',
              component: weatherYear
            }
          ]
        },
        {
          path: '/index/historyMonth',
          name: 'historyMonth',
          component: HistoryMonth,
          children:[
            {
              path: '/index/historyMonth/weatherMonth',
              name: 'weatherMouth',
              component: WeatherMouth
            }
          ]
        },
        {
          path: '/index/historyDay',
          name: 'historyDay',
          component: HistoryDay,
          children: [
            {
              path: '/index/historyDay/weatherDay',
              name: 'weatherDay',
              component: WeatherDay
            }
          ]
        },
        {
          path: '/index/join',
          name: 'join',
          component: Join
        }
      ]
    },

  ]

})

// 路由守卫
// router.beforeEach((to,from,next)=>{
//   const isLogin =localStorage.getItem("isLogin");
//   if(to.path=="/login"||to.path=="/register"){
//     next();
//   }else {
//     isLogin ? next(): next('/login');
//   }
// })


export default router;
