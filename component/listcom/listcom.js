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
        pagelist:[
            {
                title:'54321',
                classname:'wuhan',
                onclick:'285',
                plnum:'68',
                titlepic:'/images/banner.png'
            },
            {
                title:'54321',
                classname:'wuhan',
                onclick:'285',
                plnum:'68',
                titlepic:'/images/banner.png'
            },
            {
                title:'54321',
                classname:'wuhan',
                onclick:'285',
                plnum:'68',
                titlepic:'/images/banner.png'
            },
            {
                title:'54321',
                classname:'wuhan',
                onclick:'285',
                plnum:'68',
                titlepic:'/images/banner.png'
            },
            {
                title:'54321',
                classname:'wuhan',
                onclick:'285',
                plnum:'68',
                titlepic:'/images/banner.png'
            }
        ]
    },
    // 私有数据，可用于模版渲染
    onInit(item){
        // 监听页面加载的生命周期函数
        this.goToDetails(item)
    },
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () {},
    detached: function () {},
    methods: {},
    //跳转到内容详情页面
    goToDetails(item){
        App.goToDetails(item)
    }
});