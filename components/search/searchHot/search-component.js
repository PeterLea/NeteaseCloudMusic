// components/search/search-component.js
Component({
  /**
   * 组件的属性列表
   */
  data: {
    hotlist:[]
  },
  properties: {
    flag:Boolean,
    searchlist:Array
  },
attached(){
wx.request({
  url: 'http://gzy.show:3000/search/hot/detail',
  success:(res)=>{
  this.setData({
    hotlist:res.data.data
  })
  }
})
},
  /**
   * 组件的初始数据
   */
 

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
