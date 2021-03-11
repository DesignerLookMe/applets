const App = getApp()
import {getDataApi} from '../../js/config'
Page({
    data: {
        navlist:[],
        param:{
            action:'cate',
            cate_id:198,
        },
        page:1,
        pagelist:[]
    },
    onInit(option){
        console.log(option)
        let that = this
        let pagename = option.name
        let tohide = App.data.tohide
        let navlist = App.data.navlist
        that.data.param.cate_id = option.id
        let param = that.data.param
        that.getDataIndex(param)
        that.setData({
            tohide:true,
            pagename,
            navlist,
        })
    },
    onLoad: function () {
        // 监听页面加载的生命周期函数
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
                let site = res.data.site
                let pagelist = res.data.list
                console.log(res)
                //页面tdk
                App.getTdk(site)
                this.setData({
                    preloading:false,
                    pagelist
                })
            }
        )
    }
});