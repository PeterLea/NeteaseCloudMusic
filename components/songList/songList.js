// components/songList/songList.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    songs:Object
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    songs: [],
    smallScroll: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handletoTop() {
      this.setData({
        smallScroll: false
      })
      //console.log('上')
    },
    handletoBottom() {
      this.setData({
        smallScroll: true
      })
      //console.log('内层开始滚动')
    },
    smalltoTop() {
      this.setData({
        smallScroll: false
      })
      //console.log('外层开始滚动')
    }
  }
})
