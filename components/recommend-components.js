// components/seach-components.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
     list:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },

  attached() {  
    wx.request({
      url: 'http://gzy.show:3000/login/cellphone?phone=18595926710&password=lyuqu981127.',
      success: (res)=>{
        wx.request({
          url: 'http://gzy.show:3000/recommend/resource',
          header:{
          "Cookie":res.cookies[0]
          },
          success:(res)=>{
           this.setData({
             list:res.data.recommend.slice(0,6)
           }) 
          }
        })
      }
    })
  }
})
