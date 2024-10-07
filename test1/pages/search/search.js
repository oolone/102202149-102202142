const App = getApp()
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
    // 自定义顶部导航
    navHeight: App.globalData.navHeight,
    navTop: App.globalData.navTop,
    // 图标
    leftIcon: "../../../img/icon/icon-left.png",
    searchIcon: "../../../img/icon/icon-search.png",
    eyeIconOne: "../../../img/icon/icon-eye-one.png",
    eyeIcon: "../../../img/icon/icon-eye.png",
    upperLeftArrow: "../../../img/icon/icon-upper-left-arrow.png",
    recommend: [ //热门推荐
      {
        title: "冰箱"
      },
      {
        title: "红魔手机"
      },
      {
        title: "洗衣机"
      },
      {
        title: "电视机"
      },
      {
        title: "冰箱 双门"
      },
      {
        title: "海尔洗衣机 滚筒"
      },
      {
        title: "手机自营"
      },
      {
        title: "小天鹅洗衣机全自动"
      },
      {
        title: "手机"
      },
      {
        title: "笔记本"
      }
    ],
    historyStorage: [],        //历史搜索
    historyStorageShow: false,
    falg: true,         //换一批
    hotsearch1: [{ title: "短裤" }, { title: "背带裙" }, { title: "牛仔裤男" }, { title: "运动 休闲男鞋" }, { title: "蕾丝连衣裙" }, { title: "电视" }, { title: "长裙" }, { title: "oppo" }, { title: "蓝牙耳机" }, { title: "女包" }, { title: "格力空调" }, { title: "魅族" }],
    hotsearch2: [{ title: "平板电脑" }, { title: "耳机" }, { title: "男鞋" }, { title: "iPhone" }, { title: "蕾丝连衣裙" }, { title: "电视" }, { title: "长裙" }, { title: "oppo" }, { title: "蓝牙耳机" }, { title: "女包" }, { title: "格力空调" }, { title: "魅族" }],
    // searchresult: false,
    inputValue: "",        //输入框输入的值
    replaceValue: "",     //替换输入框的值
    eye: true,        //显示隐藏
    searchresult: false,
    searchResult: [{ result: "苹果手机" }, { result: "手机支架" }, { result: "手机自营" }, { result: "手机套" }, { result: "手机膜" }, { result: "手机卡" }, { result: "手机报" }, { result: "苹果手机壳" }, { result: "手机车载支架" }]//虚拟的查询结果
  },
  // 点击返回上一级
  goBack: function() {
    let pages = getCurrentPages();      //获取小程序页面栈
    let beforePage = pages[pages.length - 2];       //获取上个页面的实例对象
    beforePage.setData({
      txt: "修改数据了"
    })
    beforePage.goUpdate();           //触发上个页面自定义的go_update()方法
    wx.navigateBack({
      delta: 1
    })
  },
  /**
   * 获取顶部固定高度
   */
  attached: function() {
    this.setData({
      navHeight: App.globalData.navHeight,
      navTop: App.globalData.navTop,
    })
  },
  /**
   * 换一批操作
   */
  changeother: function () {
    this.setData({
      falg: !this.data.falg
    })
  },
 
  /**
   * 热门搜索显示隐藏
   */
  reye: function () {
    this.setData({
      eye: !this.data.eye
    })
  },
 
  /**
   * 清除
   */
  remove: function () {
    var _this = this
    wx: wx.showModal({
      content: '确认清除所有历史记录?',
      success: function (res) {
        if (res.confirm) {
          wx: wx.removeStorage({
            key: 'historyStorage',
            success: function (res) {
              _this.setData({
                historyStorage: []
              })
              wx.setStorageSync("historyStorage", [])
            },
          })
        } else {
          console.log("点击取消")
        }
      },
    })
  },
 
 
  /**
   * 获取input的值
   */
  getInputValue(e) {
    // console.log("获取value值",e.detail)   // {value: "ff", cursor: 2}
    this.setData({
      inputValue: e.detail.value
    })
    this.setData({
      searchresult: true,
    })
  },
 
  /**
   * 点击搜索提交跳转并存储历史记录
   */
  searchbegin: function (e) {
    let _this = this
    var data = e.currentTarget.dataset;
    _this.data.replaceValue = e.currentTarget.dataset.postname
    // _this.data.replaceValue = 
    wx: wx.setStorage({
      key: 'historyStorage',
      data: _this.data.historyStorage.concat(_this.data.inputValue),
      data: _this.data.historyStorage.concat(_this.data.replaceValue)
    })
    // console.log(_this.data.inputValue)
    // console.log(_this.data.historyStorage)
    wx.navigateTo({
      url: '../../commodity/commodity-search-list/index?postName=' + data['postname']
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    // 历史搜索
    let that = this
    wx.getStorage({
      key: 'historyStorage',
      success: function (res) {
        console.log(res.data)
        that.setData({
          historyStorageShow: true,
          historyStorage: res.data
        })
      }
    })
  },
  //点击进入详情页
  goToList: function (e) {
    
  },
  goUpdate: function() {
    this.onLoad()
    console.log("我更新啦")
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {
 
  },
 
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
 
  },
 
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
 
  },
 
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
 
  },
 
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {
 
  }
})