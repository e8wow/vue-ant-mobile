export default {
    path: '/demo',
    component: () => import('../../../pages/demo.vue'),
    children: [{
        path: '/',
        component: () => import('../../../pages/demo/index.vue')
    }, {
        path: 'accordion',
        component: () => import('../../../../components/accordion/demo/index.vue')
    }, {
        path: 'button',
        component: () => import('../../../../components/button/demo/index.vue')
    }, {
        path: 'flex',
        component: () => import('../../../../components/flex/demo/index.vue')
    }, {
        path: 'list',
        component: () => import('../../../../components/list/demo/index.vue')
    }, {
        path: 'swiper',
        component: () => import('../../../../components/swiper/demo/index.vue')
    }, {
        path: 'whiteSpace',
        component: () => import('../../../../components/white-space/demo/index.vue')
    }, {
        path: 'WingBlank',
        component: () => import('../../../../components/wing-blank/demo/index.vue')
    }]
}
