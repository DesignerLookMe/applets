const App = getApp()
import {getDataApi} from '../../js/config'
Page({
    data: {
        tohide:true,
        preloading:true,
        page:1,
        pagelist:[],
        navlist:[]
    },
    onInit(){
        // 监听页面加载的生命周期函数
        let param = {
            action:'index'
        }
        let preloading = App.data.preloading
        this.setData({
            preloading
        })
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
    },
    onShareAppMessage: function () {
        // 用户点击右上角转发
    },
    lower() {
        // swan.showToast({
        //     title: '数据加载中',
        //     icon: 'loading'
        // });
        let page = this.data.page
        page++
        this.setData({
            page
        })
        let param = {
            action:'index',
            page:page
        }
        console.log(param)
        getDataApi(param).then(
            res => {
                console.log(res)
                let arrlist = res.data.news
                let pagelist = this.data.pagelist.concat(arrlist)
                // console.log(navlist)
                this.setData({
                    pagelist
                })
            }
        )
    },
    getDataIndex(param){
        getDataApi(param).then(
            res => {
                let navlist= res.data.cate
                let bannerlist = res.data.banner
                let pagelist = res.data.news
                // console.log(navlist)
                //页面tdk
                let site = {
                    title:'看剧学历史',
                    sitekey:'历史,历史剧,学历史,历史知识',
                    siteintro:'在看一些历史电视剧的时候是不是觉得有一些历史知识非常的奇怪，又或者非常的奇妙？真正的历史上真的有这样的事情或者人存在？真正历史上他们又是什么样真实的故事？请关注我们带你解析。',
                }
                App.getTdk(site)
                App.data.navlist = navlist
                this.setData({
                    preloading:false,
                    navlist,
                    bannerlist,
                    pagelist
                })
            }
        )
    }
});