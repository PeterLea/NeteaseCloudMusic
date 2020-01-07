// pages/rank/rank.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    rankList: '',
    officialList: '',
    globalList: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
    /* await wx.request({
      url: 'http://gzy.show:3000/login/cellphone?phone=18595926710&password=lyuqu981127.',
      success: (res) => {
        this.setData({
          token: res.cookies
        })
      }
    }) */
    await wx.request({
      url: 'http://gzy.show:3000/toplist/detail',
      header: {
        'cookie': '__remember_me=true; Expires=Sun 19-Jan-2020 14:19:14 GMT; Path=/' 
      },
      success: (res)=> {
        this.setData({
          rankList: res.data
        })
        this.handleData()
      }
    })
    console.log(this.data)
  },
  handleData: function(){
      var list1 = []
      var list2 = []
      for(let i=0;i<4;i++){
        list1.push(this.data.rankList.list[i])
      }
      for (let i = 4; i < this.data.rankList.list.length; i++) {
        list2.push(this.data.rankList.list[i])
      }
      this.setData({
        officialList: list1,
        globalList: list2
      })
    },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})