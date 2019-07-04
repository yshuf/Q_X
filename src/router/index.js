import Vue from 'vue'
import Router from 'vue-router'
// 登录，注册，首页
import Index from '@/views/news/Index'
import Login from '@/components/Login'
import Register from '@/components/Register'

import Header from '@/views/Header/Header'
import SystemWarn from '@/views/system/SystemWarn'

// 标准区
import StardArea from "@/views/header/StardArea"
import weatherS from '@/views/todayInfo/WeatherS'

// 年
import History from '@/views/historyInfo/year/History'
import weatherYear from "@/views/historyInfo/year/WeatherYear";


// 月
import HistoryMonth from '@/views/historyInfo/month/HistoryMonth'
import WeatherMouth from '@/views/historyInfo/month/weatherMonth'

// 日
import HistoryDay from '@/views/historyInfo/day/HistoryDay'
import WeatherDay from '@/views/historyInfo/day/WeatherDay'

import HeaderStard from '@/views/header/HeaderStard'
import Weather from '@/views/todayInfo/Weather'

import Join from '@/views/About/Join'
import HeaderSet from '@/views/Header/HeaderSet'
import WeatherSet from '@/views/Resource/WeatherSet'
// 404 
import NotFound from '@/components/404'


Vue.use(Router)

const router = new Router({
  mode:'history',  // 去掉路由地址的 # 
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
//   const isLogin =localStorage.getItem("identity");
//   console.log(isLogin);
//   if(to.path=="/login"||to.path=="/register"){
//     next();
//   }else {
//     isLogin ? next(): next('/login');
//   }
// })


export default router;
