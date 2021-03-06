import {getDataApi} from '../../js/config';
Page({
    data: {
        listData:[],
        currentPage:1,
        totalPage:'',
        param:{
            action:'swan'
        }
    },
    onInit(option){
        let param = this.data.param
        this.data.param.page = option.currentPage
        console.log(param)
        this.getDataSwan(param)
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
    getDataSwan(param){
        getDataApi(param).then(
            res => {
                let listData = res.data.list
                let currentPage = res.data.currentPage
                let totalPage = res.data.totalPage
                console.log(res)
                this.setData({
                    listData,
                    currentPage,
                    totalPage
                })
            }
        )
    }
});