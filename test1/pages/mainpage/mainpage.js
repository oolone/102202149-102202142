Page({
  data: {
    // 页面的初始数据
  },

  // 事件处理函数
  logout: function() {
    wx.showToast({
      title: '退出登录',
      icon: 'none'
    });
    // 实际退出登录的逻辑
  },

  switchAccount: function() {
    wx.showToast({
      title: '切换账号',
      icon: 'none'
    });
    // 实际切换账号的逻辑
  },

  navigateToPrivacy: function() {
    wx.navigateTo({
      url: '/pages/privacy/privacy'
    });
  },

  navigateToPassword: function() {
    wx.navigateTo({
      url: '/pages/password/password'
    });
  }
});