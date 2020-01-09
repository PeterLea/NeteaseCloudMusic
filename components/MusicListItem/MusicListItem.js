/*
组件接收参数

*/
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    name:String,
    coverImgUrl:String,
    playCount:Number,
  },

  /**
   * 组件的初始数据
   */
  data: {
    computedCount:Number
  },

  lifetimes:{
    attached(){
      this.setData({
        "computedCount":this.getCount(this.properties.playCount)
      })
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    getCount(count){
      if (count>=50000&&count<=100000000){
        return (count/10000).toFixed(2) + '万'
      } else if (count >= 100000000){
        return (count / 100000000).toFixed(2) + '亿'
      }
      else {
        return count
      }
    }
  }
})
