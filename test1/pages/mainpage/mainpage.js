Page({
  data: {
    // Profile data
    username: '用户名',  // User's name
    signature: '签名',  // User's signature
    avatar: '/images/avatar.png',  // Placeholder avatar imag
    searchValue: ''//
  },
  onInputChange(event) {
    this.setData({
      searchValue: event.detail.value,
    });
  },
  onSearch() {
    const { searchValue } = this.data;
    // 在这里可以进行搜索操作，比如发送请求或者过滤数据等
    console.log('搜索内容：', searchValue);
  },
  })
  

