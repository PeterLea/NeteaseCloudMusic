// pages/musicSquare/musicSquare.js
const http = require('../../utils/http.js')
Page({
  /**
   * 页面的初始数据
   */
  data: {
    hotCate:[],
    albumList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx.request({
    //   url: 'http://gzy.show:3000/artist/list?cat=1001&initial=b',
    //   header:{
    //     'cookie': "MUSIC_U=ea585542a7c954c3388825b37323d8216322bdb3e088a070e59c8ec132a4007665b10ef2c1bed822ee7942a9d0f8813b41049cea1c6bb9b6; Expires=Tue 21-Jan-2020 11:17:14 GMT; Path=/"
    //   },
    //   success(res) {
    //     console.log(res)
    //   }
    // })
  },

  /* 获取歌单列表详情 */

  getAlbumList:async function(ev){
    await this.setData({
      "albumList":ev.detail
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: async function () {
    let result =  await http.getData({
      url:'http://gzy.show:3000/playlist/hot'
    })
    this.setData({
      "hotCate":result.data.tags
    })
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