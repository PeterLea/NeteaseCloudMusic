// components/new/new-component.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
attached(){

},
  /**
   * 组件的初始数据
   */
  data: {
    isshow:1,
    albumlist:[],
    select:1,
    newsonglist:[]
  },
attached(){
wx.request({
  url: 'http://gzy.show:3000/top/album?offset=0&limit=3',
  success:(res)=>{  
    this.setData({
   albumlist:res.data.albums,
    }) 
   }
}),
wx.request({
  url: 'http://gzy.show:3000/personalized/newsong',
  success:(res)=>{  
     this.setData({
       newsonglist:res.data.result.slice(0,3),
     }) 
   }
})
},
  /**
   * 组件的方法列表
   */
  methods: {
    handle(e){
     let query = e.currentTarget.dataset['index'];
     this.setData({
       isshow:~~query,
       select:~~query
     })
   }
  }
})
