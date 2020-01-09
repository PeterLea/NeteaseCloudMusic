// pages/recommendDaily/recommendDaily.js
const http = require('../../utils/http.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    songs:[],
    smallScroll:false,
    day:new Date().getDate()>9?new Date().getDate():'0'+new Date().getDate(),
    mounth:new Date().getMonth()+1>9?new Date().getMonth()+1:'0'+(new Date().getMonth()+1),
    chooseAll:false,
    hasChoose:false,
    hasChooseall:false
  },
  clickChoosemore(){
    this.setData({
      "chooseAll":!this.data.chooseAll
    })
  },
  haschecked(e){
    this.setData({
      "hasChoose":e.detail.hasChoose
    })
  },
  checkboxtap(){
    this.setData({
      "hasChooseall":!this.data.hasChooseall
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad:async function(options){
    let result =  await http.getData({
      url:'http://gzy.show:3000/recommend/songs'
    })
    this.setData({
      "songs": result.data.recommend
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