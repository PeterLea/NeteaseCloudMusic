// pages/recommendDaily/recommendDaily.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[],
    smallScroll:false
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  async onLoad(options) {
/*     await wx.request({
      url: 'http://gzy.show:3000/login/cellphone?phone=18595926710&password=lyuqu981127.',
      success(res){
        wx.setStorageSync('cookie', res.cookies[0])
      }
    }) */
    await wx.request({
      url: 'http://gzy.show:3000/recommend/songs',
      header: {
        'Cookie': 'MUSIC_U=b10b3a0facf5db405ffc605746009e4ba749867c644765f5c4d0d387d0eed0e61031d425e752a9123acfc9588bc9d59b41049cea1c6bb9b6; Expires=Tue 21-Jan-2020 14:22:11 GMT; Path=/'
      },
      success:(res)=>{
        this.setData({
          songs: res.data.recommend
        })
        console.log(res.data.recommend)
      }
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