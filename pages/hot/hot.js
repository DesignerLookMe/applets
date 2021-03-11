const App = getApp()
import {getDataApi} from '../../js/config'
Page({
    data: {
        preloading:true,
        param:{
            action:'channel',
            type:'hot',
            page:1
        },
        pagelist:[],
    },
    onInit(){
        let param = this.data.param
        this.getDataIndex(param)
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
        // 页面上拉触底事件的处理函数
        let page = this.data.param.page
        page++
        this.data.param.page = page
        let param = this.data.param
        getDataApi(param).then(
            res => {
                let arrlist = res.data.list
                let pagelist = this.data.pagelist.concat(arrlist)
                // console.log(res)
                this.setData({
                    preloading:false,
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
                let pagelist = res.data.list
                let site = {
                    title:'最热看剧学历史文章合集',
                    sitekey:'历史,历史剧,学历史,历史知识',
                    siteintro:'集合了看剧学历史近期比较热点一些的内容，最热最好看的历史剧，历史知识都在本页面了哦。',
                }
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