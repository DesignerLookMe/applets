const app = getApp()
const bdParse = require('../../bdParse/bdParse.js');
const util = require('../../util/util');
import {baseUrl,getDataApi} from '../../js/config'

Page({
    data: {
        param:{
            action:'detail',
            id:1868
        },
        preloading:true,
        commentParam:{},
        isParamOk:false,
    },
    onInit(option){
        let that = this
        let param = that.data.param
        that.setData({
            detailsid:option.id
        })
        that.data.param.id = option.id
        console.log(param)
        this.getDataDetail(param)
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
    //查看全文
    tapclickall(){
        var that = this
        that.setData({ contentauto : true })
    },
    rendering(res){
        let base_content = util.baseDecode(res.data.content)
        let pagelistnews = res.data.list
        let site = []
        site.title = res.data.title
        site.sitekey = res.data.keywords
        site.siteintro = res.data.description
        site.img = res.data.image
        bdParse.bdParse('article', 'html', base_content, this, 5)
        this.setData({
            // 获取标题来源发文时间
            preloading:false,
            contitle:res.data.title,
            contime:res.data.time,
            conbefrom:res.data.befrom,
            pagelistnews,
        }),
        app.getTdk(site)
        this.getOpenid(res)
    },
    getDataDetail(param){
        getDataApi(param).then(
            res => {
                console.log(res)
                this.rendering(res)
            }
        )
    },
    getOpenid(resdata) {
        swan.login({
            success: res => {
                swan.request({
                    url: 'https://spapi.baidu.com/oauth/jscode2sessionkey',
                    method: 'POST',
                    header: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                    data: {
                        code: res.code,
                        client_id: baseUrl.app.app_key, // eslint-disable-line
                        sk: baseUrl.app.app_Secret
                    },
                    success: res => {
                        var that = this
                        // console.log(baseUrl)
                        // console.log(baseUrl.app.app_key)
                        console.log("netData getOpenid res", res)
                        if (res.statusCode == 200) {
                            // 这里是使用获取到的用户openid
                            console.log(res)
                            that.setData({
                                commentParam: {
                                    openid: res.data.openid,
                                    snid: that.data.detailsid,
                                    path: '/pages/details/details?id=' + that.data.detailsid,
                                    title: resdata.data.title,
                                    images: resdata.data.image,
                                },
                                toolbarConfig: {
                                    share: {
                                        title: resdata.data.title,
                                    },
                                    moduleList: ['comment', 'like', 'favor', 'share'],
                                    placeholder: "回复评论"
                                },
                                isParamOk: true,
                            });
                            console.log(resdata)
                            console.log("commentParam2 ", that.data.commentParam)
                            console.log("isParamOk ", that.data.isParamOk)

                        }
                    },
                    fail: function (err) {
                        console.log('getOpenid fail', err);
                    }
                });
            }, fail: function (err) {
                console.log('getOpenid fail 222', err);
            }
        });
    },
});