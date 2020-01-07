// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     imglist:[],
     indicatorDots: true,
     vertical: false,
     autoplay: true,
     interval: 2000,
     duration: 1000,
     beforeColor:'white',
     afterColor:'red'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.request({
      url: 'http://gzy.show:3000/banner?type=2',
      success:(res)=>{
       this.setData({
         imglist:res.data.banners
       }) 
      }
    })
    // wx.request({
    //   url: 'http://gzy.show:3000/login/cellphone?phone=18595926710&password=lyuqu981127.',
    //   success: (res)=>{
    //     console.log(res.cookies)
    //   }
    // })
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