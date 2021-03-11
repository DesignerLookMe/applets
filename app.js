/**
 * @file app.js
 * @author swan
 */

/* globals swan */

App({
    data(){},
    onLaunch(options) {
        // do something when launch
    },
    onShow(options) {
        // do something when show
    },
    onHide() {
        // do something when hide
    },
    goToDetails(item){
        let id = item.currentTarget.dataset.item.id
        let classId = item.currentTarget.dataset.item.classid
        // console.log('125')
        if( item.currentTarget.dataset.id == id ){
            return false
        }else{
            swan.navigateTo({
                url: "/pages/details/details?id=" + id
            });
        }
    },
    goToList(item){
        console.log(item.currentTarget.dataset.item)
        if( item.currentTarget.dataset.item == undefined ){
            swan.reLaunch({
                url: "/pages/home/home"
            });
        }else{
            let id = item.currentTarget.dataset.item.classid
            let classname = item.currentTarget.dataset.item.classname
            swan.navigateTo({
                url: "/pages/list/list?id=" + id + "&name=" + classname
            });
        }

        console.log()
        // swan.navigateTo({
        //     url: "/pages/list/list?id=" + id + "&name=" + classname
        // });
    },
    getTdk(site){
        // console.log(site)
        let img = (site != undefined && site.img != undefined) ? site.img : ""
        if( site != undefined ){
            swan.setPageInfo({
                title: site.title,
                keywords: site.sitekey,
                description: site.siteintro,
                image: img,
                success: function () {
                    console.log('setPageInfo success');
                    // console.log(site.banner)
                  },
                  fail: function (err) {
                      console.log('setPageInfo fail', err);
                  }
              })
        }
    }
});
