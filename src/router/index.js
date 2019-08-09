import Vue from 'vue'
import Router from 'vue-router'
// 引用页面模板->供路由使用
import index from '../pages/index.vue'
import pageQuiButton from '../pages/pageQuiButton.vue'
import pageQuiList from '../pages/pageQuiList.vue'
import pageQuiNav from '../pages/pageQuiNav.vue'
//table
import vueTable from '../pages/vueTable.vue'
import vueForm from '../pages/vueForm.vue'
import editForm from '../pages/editForm.vue'
import pagination from '../pages/pagination.vue'

Vue.use(Router)

export default new Router({
  routes: [
     {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/btn',
      name: 'btn',
      component: pageQuiButton
    },
    {
      path: '/list',
      name: 'list',
      component: pageQuiList
    },
    {
      path: '/nav',
      name: 'nav',
      component: pageQuiNav
    },
    {
      path: '/tab',
      name: 'tab',
      component: vueTable
    },
     {
      path: '/form',
      name: 'form',
      component: vueForm
    },
     {
      path: '/editForm',
      name: 'editForm',
      component: editForm
    },
     {
      path: '/pagination',
      name: 'pagination',
      component: pagination
    }
  ]
})
