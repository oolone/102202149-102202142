//answer.js
var util = require('../../utils/util.js')

var app = getApp()
Page({
  data: {
    buttonText: '申请加入',
    current:1,
    motto: 'Fzuer协创圈--微信小程序',
    userInfo: {}
  },
  //事件处理函数
  bindDateInput: function(e) {
    this.setData({
      data: e.detail.value
    });
  },
  onTapButton: function() {
    // 使用 setTimeout 延迟执行
    setTimeout(() => {
      // 更新按钮文本
      this.setData({
        buttonText: '已申请'
      });
      // 这里可以添加发送网络请求等其他逻辑
    }, 1000); // 1000 毫秒后执行
  },
  bindItemTap: function() {
    wx.navigateTo({
      url: '../answer/answer'
    })
  },
  bindItemWait: function() {
    wx.navigateTo({
      url: '../wait/wait'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  tapName: function(event){
    console.log(event)
  }
})
