// pages/newAlbum/components/newcd/newcd.js
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
    cdList: []
  },
  lifetimes: {
    attached: async function () {
      // 在组件实例进入页面节点树时执行
      let songList = await wx.request({
        url: `http://gzy.show:3000/top/album?offset=0&limit=30`,

        success: (res) => {
          this.setData({
            cdList: res.data.albums
          })
        console.log(this.data.cdList)
        }
      })
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
