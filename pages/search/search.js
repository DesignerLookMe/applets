const App = getApp()
import {getDataApi} from '../../js/config'
Page({
    data: {
        param:{
            action:'search',
            keyword:'',
            page:'3'
        },
        searchresult:false
    },
    onInit(option){
        // 监听页面加载的生命周期函数
        this.data.param.keyword = option.keyword
        let param = this.data.param
        let preloading = App.data.preloading
        this.setData({
            preloading,
            keyword:this.data.param.keyword
        })
        this.getDataIndex(param)
    },
    onLoad: function (option) {
        // 监听页面加载的生命周期函数
        console.log(option)
    },
    onReady: function() {
        // 监听页面初次渲染完成的生命周期函数
    },
    onShow: function() {
        // 监听页面显示的生命周期函数
    },
    onHide: function() {
        // 监听页面隐藏的生命周期函数
    },
    onUnload: function() {
        // 监听页面卸载的生命周期函数
    },
    onPullDownRefresh: function() {
        // 监听用户下拉动作
    },
    onReachBottom: function() {
        // 页面上拉触底事件的处理函数
        let that = this
        let page = that.data.page
        page++
        this.setData({
            page
        })
        that.data.param.page = page
        let param = that.data.param
        // console.log(param)
        getDataApi(param).then(
            res => {
                // console.log(res)
                let arrlist = res.data.list
                let pagelist = this.data.pagelist.concat(arrlist)
                // console.log(navlist)
                this.setData({
                    pagelist
                })
            }
        )
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    getDataIndex(param){
        getDataApi(param).then(
            res => {
                console.log(res.data)
                let pagelist = res.data != null ? res.data.list : ''
                console.log(pagelist)
                if( res.data == null ){
                    this.setData({
                        searchresult: true,
                        pagelist
                    })
                }else{
                    this.setData({
                        preloading:false,
                        pagelist
                    })
                }
            }
        )
    }
});