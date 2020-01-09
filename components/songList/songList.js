// components/songList/songList.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    songs:Object,
    tipsHeight:Number,
    bgimage:{
      type:String,
      value:'http://gzy.show:60001/img/background.d7b7204f.jpg'
    },
    paddingTop:{
      type:Number,
      value:128
    },
    chooseAll:{
      type:Boolean,
      value:false
    },
    hasChooseall:{
      type:Boolean,
      value:false
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    songs: [],
    smallScroll: false,
    showTopImage:true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bigscrolling(e){
      /* x */
      if(this.properties.tipsHeight-e.detail.scrollTop<=20&&this.data.showTopImage){
        this.setData({
          showTopImage: false
        })
      }
      if(this.properties.tipsHeight-20>e.detail.scrollTop&&(!this.data.showTopImage)){
        this.setData({
          showTopImage: true
        })
      }
      if(this.properties.tipsHeight-e.detail.scrollTop<=0.5){
        this.setData({
          smallScroll: true
        })
      }
      else{
        this.setData({
          smallScroll: false
        })
      }
    },
    checkgroupChange(e){
      if(e.detail.value.length === this.properties.songs.length){
        console.log(0)
        this.triggerEvent('haschecked', { hasChoose:true});
      }
      else{
        this.triggerEvent('haschecked', { hasChoose:false});
      }
    }
  },
  lifetimes: {
    attached(){
      
    }
  }
})

