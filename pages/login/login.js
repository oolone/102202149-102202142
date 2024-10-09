Page({

  /**
   * 页面的初始数据
   */
  data: {
    //登录信息
    account: '',
    password: '',
    //界面切换信息

    current:1,
    codeText:'获取验证码',
    counting:false,
    checkboxValue: false,
    //注册
    stuid:'',
    telepnum:'',
    captcha:'',
    pswd:'',
    conpaswd:'',
  },

  //勾选框
  handleCheckboxChange(event) {
    console.log('this.data.checkboxValue ==> ' , this.data.checkboxValue);
    this.setData({
      // 点击之后进行取反
      checkboxValue : !this.data.checkboxValue
    })
 
  },
 
  // 登陆注册监听
  click(e){
    let index = e.currentTarget.dataset.code;
    this.setData({
      current:index
    })
  },
  //获取验证码 
  getCode(){
    var that = this;
    if (!that.data.counting) {
      wx.showToast({
        title: '验证码已发送',
      })
      //开始倒计时60秒
      that.countDown(that, 60);
    } 
  },
  //倒计时60秒
  countDown(that,count){
    if (count == 0) {
      that.setData({
        codeText: '获取验证码',
        counting:false
      })
      return;
    }
    that.setData({
      counting:true,
      codeText: count + '秒后重新获取',
    })
    setTimeout(function(){
      count--;
      that.countDown(that, count);
    }, 1000);
  },
  handleTap: function(e) {
    var current = e.currentTarget.dataset.current;
    if (current == 1) {
      // 当current为1时，调用login函数并传入参数1
      this.login(1);
    } else {
      // 当current不为1时，调用login函数并传入参数0
      this.login(0);
    }
  },

    // 获取账号
    bindAccountInput: function(e) {
      this.setData({
        account: e.detail.value
      });
    },
  
    // 获取密码
    bindPasswordInput: function(e) {
      this.setData({
        password: e.detail.value
      });
    },
    //注册信息获取
    bindtelepnum:function (e) {
      this.setData({
        telepnum:e.detail.value
      });
    },
    bindcaptcha:function (e) {
      this.setData({
        captcha:e.detail.value
      });
    },
    bindpswd:function (e) {
      this.setData({
        pswd:e.detail.value
      });
    },
    bindconpaswd:function (e) {
      this.setData({
        conpaswd:e.detail.value
      });
    },
    bindstuid:function (e) {
      this.setData({
        stuid:e.detail.value
      });
    },
  
  login: function(current){
    if(current==1){
      const { account, password } = this.data;
       if (account && password){
      wx.switchTab({
        url: '/pages/index/index',
      });
    }else{
      wx.showToast({
        title: '请输入账号和密码',
        icon: 'none'
      })}
    }
    else{
      if (this.data.checkboxValue) {
        // 复选框已勾选
        wx.showToast({
          title: '复选框已勾选！'
        });
      } else {
        // 复选框未勾选
        wx.showToast({
          title: '请先勾选复选框！',
          icon: 'none'
        });
        return;
      }
      const { stuid, telepnum,captcha,pswd,conpaswd } = this.data;
      if(stuid && telepnum && captcha && pswd && conpaswd){
        if (pswd !== conpaswd) {
          wx.showToast({
            title: '两次密码不匹配',
            icon: 'none'
          });
          return;
        }
        wx.showToast({
          title: '注册成功',
          icon: 'success'
        });
        setTimeout(()=>
          {
            wx.navigateTo({
              url: '/pages/login/login',
            })
          }, 1400)
      
      }else{
        wx.showToast({
          title: '请输入全部信息',
          icon: 'none'
        })
      }
    }
       
  
   
  },
forgetnum:function (params) {
  wx.showToast({
    title: '修改密码',
    icon: 'none'
  });
    wx.navigateTo({
      url: '/pages/forget/forget',
    }); 
}
  
})
