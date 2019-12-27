import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    //mode: 'history',
    routes: [
		{
		    path: '/',
		    name: 'home',
			des:"导航",
		    component: r => require.ensure([], () => r(require('@/pages/home/index')), 'home')
		},{
		    path: '/baseInfo',
		    name: 'baseInfo',
			des:"基本资料",
		    component: r => require.ensure([], () => r(require('@/pages/jobSeekers/inputInfo/baseInfo')), 'inputInfo')
		},{
		    path: '/objective',
		    name: 'objective',
			des:"求职意向",
		    component: r => require.ensure([], () => r(require('@/pages/jobSeekers/inputInfo/objective')), 'objective')
		},{
		    path: '/workExperience',
		    name: 'workExperience',
			des:"工作经历",
		    component: r => require.ensure([], () => r(require('@/pages/jobSeekers/inputInfo/workExperience')), 'workExperience')
		},{
		    path: '/eduExperience',
		    name: 'eduExperience',
			des:"工作经历",
		    component: r => require.ensure([], () => r(require('@/pages/jobSeekers/inputInfo/eduExperience')), 'eduExperience')
		},{
		    path: '/comBaseInfo',
		    name: 'comBaseInfo',
			des:"公司基本资料",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/baseInfo')), 'comBaseInfo')
		},{
		    path: '/openPositions',
		    name: 'openPositions',
			des:"公司发布职位",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/openPositions')), 'openPositions')
		},{
		    path: '/perfectInfo',
		    name: 'perfectInfo',
			des:"公司完善资料",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/perfectInfo')), 'perfectInfo')
		},{
		    path: '/enterpriseCertification',
		    name: 'enterpriseCertification',
			des:"公司企业认证",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/enterpriseCertification')), 'enterpriseCertification')
		},{
		    path: '/enterpriseResult',
		    name: 'enterpriseResult',
			des:"企业认证结果",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/enterpriseResult')), 'enterpriseResult')
		},{
		    path: '/choosingTag',
		    name: 'choosingTag',
			des:"选择标签",
		    component: r => require.ensure([], () => r(require('@/pages/enterprise/inputInfo/choosingTag')), 'choosingTag')
		}
    ],
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    }
})
