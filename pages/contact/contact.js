// 简单版
Page({
  data: {
      content: '',
      // 当前登录者信息
      login: {
          id: '2023',
          user: '知安.',
          avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head5.jpeg'
      },
      // 聊天信息
      chatList: [{
              msgId: '2023',
              nickname: '知安。',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head5.jpeg',
              message: '一个简单的聊天对话窗口界面',
              type: 'text',
              date: '05-02 14:24' // 每隔5分钟记录一次时间
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '现在的聊天功能暂未完善。',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: '知安.',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head5.jpeg',
              message: '是的，现在只能实现简单的消息发送。',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '而且无法同步消息。',
              type: 'text',
              date: '05-04 16:05'
          },

          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '敬请关注后续版本',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '该消息为撤回消息',
              type: 'custom'
          },
          {
              msgId: '2023',
              nickname: '知安',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head5.jpeg',
              message: '这是该项目的github链接',
              type: 'text'
          },
          {
              msgId: '2023',
              nickname: '知安.',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head5.jpeg',
              message: 'https://github.com/oolone/102202149-102202142',
              type: 'text'
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '欢迎前来参观。',
              type: 'text',
              date: '05-06 11:21'
          },
          {
              msgId: '2022',
              nickname: '田园犬',
              avatar: 'cloud://fuzer-8g3jfjkw7588b9ec.6675-fuzer-8g3jfjkw7588b9ec-1330249328/images/head9.jpeg',
              message: '已滑动至消息最底部',
              type: 'text',
              date: '05-07 19:08'
          },
      ],
  },
  onLoad() {
      this.scrollToBottom();
  },
  // 输入监听
  inputClick(e) {
      this.setData({
          content: e.detail.value
      })
  },
  // 发送监听
  sendClick() {
      var that = this;
      var list = this.data.chatList;
      // 获取当前时间
      var date = new Date();
      var month = date.getMonth() + 1;
      var day = date.getDate();
      var hour = date.getHours();
      var minu = date.getMinutes();
      var now1 = month < 10 ? '0' + month : month;
      var now2 = day < 10 ? '0' + day : day;
      // 组装数据
      var msg = {
          msgId: this.data.login.id,
          nickname: this.data.login.user,
          avatar: this.data.login.avatar,
          message: this.data.content,
          type: 'text',
          date: now1 + '-' + now2 + ' ' + hour + ':' + minu
      }
      this.setData({
          chatList: list.concat(msg)
      }, () => {
          that.scrollToBottom();
          that.setData({
              content: ''
          })
      })
  },
  // 滑动到最底部
  scrollToBottom() {
      setTimeout(() => {
          wx.pageScrollTo({
              scrollTop: 200000,
              duration: 3
          });
      }, 600)
  },
})
