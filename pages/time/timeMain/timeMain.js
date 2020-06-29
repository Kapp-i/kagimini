// pages/time/time.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    contStyle:[
      {
        id:0,
        title: "学习",
        color:"#B777FF",
        styleClass:"study",
        icon:"icon-xuexi"
      },
      {
        id:1,
        title: "写作",
        color:"#FF9620",
        styleClass:"write",
        icon:"icon-xiezuo"
      },
      {
        id:2,
        title: "运动",
        color:"#FF7373",
        styleClass:"sport",
        icon:"icon-jianshen"
      },
      {
        id:3,
        title: "读书",
        color:"#3C9EF2",
        styleClass:"read",
        icon:"icon-yuedu1"
      },
    ],
    chooseData:{
        id:0,
        title: "学习",
        color:"#B777FF",
    }
  },
  contChange: function (e) {
    let {index} = e.currentTarget.dataset;
    let {contStyle} = this.data;
    let chooseData = contStyle[index];
    this.setData({
      chooseData
    })
    console.log(this.data.chooseData)
  }
})
