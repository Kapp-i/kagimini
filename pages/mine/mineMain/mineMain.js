// pages/mine/mineMain/mineMain.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
		startY: 0,     //滑动开始y轴位置
		lastY: 0,     //滑动开始y轴位置
		stars:{
			height:0,
			htmlStart:"<div style='position:relative;top:0px;left:0px;width:100vw;height:0px;display:block;box-sizing: border-box;background:#B8789D;'>",
			html:"",
			htmlEnd: "</div>"
		}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

	},
	/**
	 * 下拉刷新成功 （页面回弹）清空新生星星
	 */
	onPullDownRefresh() {
		let stars = this.data.stars;
		stars.htmlStart = "<div style='position:relative;top:0px;left:0px;width:100vw;height:0px;display:block;box-sizing: border-box;background:#B8789D;'>";
		stars.html="";
		stars.height = 0;
		this.setData({
			stars
		})
		wx.stopPullDownRefresh()
	},
	// 监听页面滚动事件 - 持续滚动函数
	handletouchmove(event) {
		// console.log(event)
		let currentY = event.changedTouches[0].clientY
		// console.log(currentY)
		// console.log(this.data.startY)
		if (currentY > this.data.startY) {
			// 下拉时函数
			let stars = this.data.stars;
			let top = this.getNum(10, 190); // 距离顶部位置
			let left = this.getNum(1, 99); // 距离左侧位置
			let font = this.getNum(8,12); // 点的字体大小
			if (stars.height<=50){
				stars.htmlStart = "<div style='position:relative;top:0px;left:0px;width:100vw;height:" + (stars.height += 1) + "px;display:block;box-sizing: border-box;background:#B8789D;'>";
			}else{
				stars.htmlStart = "<div style='position:relative;top:0px;left:0px;width:100vw;height:50px;display:block;box-sizing: border-box;background:#B8789D;'>";
			}
			
			stars.html += "<span style='position: absolute; top: " + top + "px; left: " + left + "vw;font-size:" + font +"px;color:#dedede;'>.</span>";
			this.setData({
				stars
			})
		}
	},
	//滑动开始事件-开始瞬间函数
	handletouchstart: function (event) {
		this.data.startY = event.changedTouches[0].clientY
		//在这里获取 手 落点 距离event的位置 （应该是)
	},
	getNum(max,min){
			return 	Math.floor(Math.random() * (max - min + 1) + min);
	}
})