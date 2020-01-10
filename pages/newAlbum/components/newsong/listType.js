// pages/newAlbum/components/listType.js
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
    songList: [],
    typeName: "0",
    chooseAll: false,
    hasChoose: false,
    hasChooseall: false
  },
  lifetimes: {
    attached: async function () {
      // 在组件实例进入页面节点树时执行
      let songList = await wx.request({
        url: `http://gzy.show:3000/top/song?type=0`,

        success: (res) => {
          this.setData({
            songList: res.data.data
          })
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
    clickChoosemore() {
      this.setData({
        "chooseAll": !this.data.chooseAll
      })
    },
    haschecked(e) {
      this.setData({
        "hasChoose": e.detail.hasChoose
      })
    },
    checkboxtap() {
      this.setData({
        "hasChooseall": !this.data.hasChooseall
      })
    },
    async handleChangelist(ev) {
      this.setData({
        typeName: ev.target.dataset.name
      })
      let songList = await wx.request({
        url: `http://gzy.show:3000/top/song?type=${this.data.typeName}`,
        
        success: (res)=>{
          this.setData({
            songList: res.data.data
          })
        }
      })
      
    }
  }
})
