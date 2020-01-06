 function getData ({url,method="GET",data}){
  return new Promise ((resolve,reject)=>{
    wx.request({
      url,
      method,
      data,
      header:{
          'cookie': "MUSIC_U=ea585542a7c954c3388825b37323d8216322bdb3e088a070e59c8ec132a4007665b10ef2c1bed822ee7942a9d0f8813b41049cea1c6bb9b6; Expires=Tue 21-Jan-2020 11:17:14 GMT; Path=/"
        },
      success: (res => {
        resolve(res)    
      }),
      fail: (res => {
        if (this._errorHandler != null) {
          this._errorHandler(res)
        }
        reject(res)
      })
  })

  })
}

exports.getData = getData