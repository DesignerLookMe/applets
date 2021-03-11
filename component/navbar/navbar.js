const App = getApp()
Component({
    properties: {
        propName: { // 属性名
            type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
            value: 'val', // 属性初始值（必填）
            observer: function(newVal, oldVal) {
                // 属性被改变时执行的函数（可选）
            }
        }
    },

    data: {
        navlist:[],
        searchfixed:false,
        hot:['风起霓裳'],
    }, // 私有数据，可用于模版渲染
    onInit(){
        console.log(getCurrentPages() )
        this.goToList(item)
    },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},
    detached: function () {},
    methods: {},
    bindFoucsInput(){
        this.setData({
            searchfixed:true
        })
    },
    bindBlurInput(){
        this.setData({
            searchfixed:false
        })
    },
    gotosearch(item){
        console.log(item)
        let keyword = item.currentTarget.dataset.item
        swan.navigateTo({
            url: "/pages/search/search?keyword=" + keyword
        });
    },
    bindconfirm(){
        let keyword = App.data.keyword?App.data.keyword:''
        if(keyword==''){
            swan.showToast({
                title: '请输入搜索词',
                icon: 'none'
            });
        }else{
            swan.navigateTo({
                url: "/pages/search/search?keyword=" + keyword
            });
        }
    },
    bindKeyInput(e){
        App.data.keyword = e.detail.value
        if( e.detail.cursor == 0 ){
            this.setData({
                searchfixed:false
            })
        }else{
            this.setData({
                searchfixed:true
            })
        }
    },
    goToList(item){
        App.goToList(item)
    }
});