const state = {
  driverIdcard: '320382199003078572',
  shopMallMenu: [{
    title: '首页',
    path: '/home'
  }, {
    title: '商城',
    path: '/shop'
  }, {
    title: '加工',
    path: '/machining'
  }, {
    title: '帮我找',
    path: '/order'
  }, {
    title: '物流',
    path: '/logistics'
  }, {
    title: '解决方案',
    path: '/stealwork'
  }],
  managementMenu: [{
    title: '合同管理',
    icon: 'icon-wenjian',
    child: [{
      title: '合同管理',
      path: '/management/contract'
    }, {
      title: '发票管理',
      path: '/management/invoice'
    }, {
      title: '合同回收站',
      path: '/'
    }, {
      title: '历史单据',
      path: '/'
    }]
  }, {
    title: '提单管理',
    icon: 'icon-wenjian',
    child: [{
      title: '退货管理',
      path: '/'
    }, {
      title: '提单管理',
      path: '/'
    }]
  }, {
    title: '求购',
    icon: 'icon-wenjian',
    child: [{
      title: '求购发布',
      path: '/'
    }, {
      title: '求购管理',
      path: '/'
    }]
  }, {
    title: '我的物流',
    icon: 'icon-wenjian',
    child: [{
      title: '物流预约',
      path: '/'
    }, {
      title: '我的物流单',
      path: '/'
    }]
  }, {
    title: '加工管理',
    icon: 'icon-wenjian',
    child: [{
      title: '我的加工',
      path: '/'
    }, {
      title: '加工跟踪',
      path: '/'
    }]
  }, {
    title: '资金管理',
    icon: 'icon-wenjian',
    child: [{
      title: '账户信息',
      path: '/'
    }, {
      title: '账户收支明细',
      path: '/'
    }]
  }, {
    title: '基础管理',
    icon: 'icon-wenjian',
    child: [{
      title: '公司信息管理',
      path: '/'
    }, {
      title: '站内信息管理',
      path: '/'
    }, {
      title: '支付密码管理',
      path: '/'
    }, {
      title: '登录密码管理',
      path: '/'
    }, {
      title: '个人资料',
      path: '/'
    }]
  }, {
    title: '子账号管理',
    icon: 'icon-wenjian',
    child: [{
      title: '子账号管理',
      path: '/'
    }, {
      title: '子账号权限',
      path: '/'
    }, {
      title: '子账号密码管理',
      path: '/'
    }]
  }]
}

export default state
