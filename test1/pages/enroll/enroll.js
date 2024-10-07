Page({
  data: {
    studentNumber: '',
    password: '',
    confirmPassword: '',
    email: ''
  },

  // Function to handle student number input
  bindStudentNumber: function(e) {
    this.setData({
      studentNumber: e.detail.value
    });
  },

  // Function to handle password input
  bindPassword: function(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // Function to handle confirm password input
  bindConfirmPassword: function(e) {
    this.setData({
      confirmPassword: e.detail.value
    });
  },

  // Function to handle email input
  bindEmail: function(e) {
    this.setData({
      email: e.detail.value
    });
  },

  // Registration function
  register: function() {
    const { studentNumber, password, confirmPassword, email } = this.data;
    
    if (!studentNumber || !password || !confirmPassword || !email) {
      wx.showToast({
        title: '请填写所有字段',
        icon: 'none'
      });
      return;
    }

    if (password !== confirmPassword) {
      wx.showToast({
        title: '两次密码不匹配',
        icon: 'none'
      });
      return;
    }

    // Simulate registration request
    wx.showToast({
      title: '注册成功',
      icon: 'success'
    });
    setTimeout(()=>
      {
        wx.navigateTo({
          url: '/pages/logins/logins',
        })
      }, 1000)
    // Further implementation here (e.g., API call)
  },

  // Function to handle back button
  goBack: function() {
    wx.navigateTo();
  }
});
