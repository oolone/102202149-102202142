Page({
    data: {},
  
    // Login function
    login: function() {
      wx.showToast({
        title: '正在登录',
        icon: 'none'
      });
      wx.navigateTo({
        url: '/pages/login2/login2',
      })

    },
  
    // Register function
    register: function() {
      wx.showToast({
        title: '前往注册',
        icon: 'none'
        
      });
      wx.navigateTo({
        url: '/pages/enroll/enroll',
      });
    }
  });
  