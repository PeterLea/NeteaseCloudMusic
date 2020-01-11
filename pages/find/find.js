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
     afterColor:'red',
     mvlist:[],
     num:4,
     Isshow:true,
     keyword:'',
     searchlist:[],
     ishot:true
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
    }),
    wx.request({
      url: 'http://gzy.show:3000/mv/exclusive/rcmd?limit=4',
      success:(res)=>{
       this.setData({
         mvlist:res.data.data
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
  handlenew(){
    wx.request({
      url: 'http://gzy.show:3000/mv/first?limit=10',
      success:(res)=>{
       this.setData({
         mvlist:res.data.data
       }) 
      }
    })
  },
  bindfocus(){
      this.setData({
        Isshow:false
      })
  },
  searchCancel(){
    this.setData({
      Isshow:true
    })
  },
  bindinput(e){
   if(e.detail.value){
    wx.request({
      url: `http://gzy.show:3000/search/suggest?keywords=${e.detail.value}&type=mobile`,
      success:(res)=>{
       this.setData({
         ishot:false,
         searchlist:res.data.result.allMatch
       }) 
      }
    })
  }else{
    this.setData({
      searchlist:[]
    })
  }
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
    let num=9
    wx.request({
      url: `http://gzy.show:3000/mv/exclusive/rcmd?limit=${num}`,
      success:(res)=>{ 
       this.setData({
         mvlist:res.data.data
       }) 
      }
    })
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})