// pages/musicSquare/components/TabBar/TabBar.js
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
    attached:function(){
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(ev){
      let currentTag = ev.target.dataset.name
      this.setData({
        "currentTag":currentTag
      }
     )
    }
  }

})
