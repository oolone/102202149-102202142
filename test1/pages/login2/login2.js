Page({
    data: {
      account: '',
      password: ''
    },
  
    // Function to handle account input
    bindAccountInput: function(e) {
      this.setData({
        account: e.detail.value
      });
    },
  
    // Function to handle password input
    bindPasswordInput: function(e) {
      this.setData({
        password: e.detail.value
      });
    },
  
    // Function to handle login
    login: function() {
      const { account, password } = this.data;
      if (account && password) {
        // Simulate login request
        wx.showToast({
          title: '登录成功',
          icon: 'success'
        });
        wx.navigateTo({
          url: '/pages/mainpage/mainpage',
        });
      } else {
        wx.showToast({
          title: '请输入账号和密码',
          icon: 'none'
        });
      }
    },
  
    // Function to handle the back button

  });
  