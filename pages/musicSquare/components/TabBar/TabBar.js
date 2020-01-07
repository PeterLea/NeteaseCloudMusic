// pages/musicSquare/components/TabBar/TabBar.js
const http = require('../../../../utils/http.js')
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    hotCate:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentTag:"华语"
  },
  lifetimes:{
    attached:async function(){
      let result = await http.getData({
        url: "http://gzy.show:3000/top/playlist",
        data: {
          offset: 0,
          limit: 20,
          cat: this.data.currentTag,
        }
      })
      if (result.statusCode === 200) {
        console.log(result.data.playlists)
        this.triggerEvent('getAlbumList', result.data.playlists)
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    async handleClick(ev){
      let currentTag = ev.target.dataset.name
      this.setData({
        "currentTag":currentTag
      })
      let result = await http.getData({
        url:"http://gzy.show:3000/top/playlist",
        data:{
          offset:0,
          limit:20,
          cat:currentTag,
        }
      })
      if (result.statusCode===200){
        this.triggerEvent('getAlbumList',result.data.playlists)
      }
    }
  }

})
