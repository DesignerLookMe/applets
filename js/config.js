// url appkey appsecret 配置
const baseUrl = {
    ApiUrl:'https://www.52shijing.com/api/baidu/baiduMini.php',
    app:{
        app_key:'6HEWsEKMTPWRPzBZP4IAi5vLoHHq6DcY',
        app_Secret:'yoyLMvIbwlXusNLhvyF4sNnrfrws2OeM',
    }
}

// 接口调用封装
const getDataApi = function (param){
    return new Promise((resolve, reject) => {
        swan.request({
            url: baseUrl.ApiUrl,
            header: {
                'content-type': 'application/json'
            },
            method: 'GET',
            dataType: 'json',
            responseType: 'text',
            data: param,
            success: res => {
                // console.log(res)
                resolve(res);
            },
            fail: err => {
                console.log('错误码：' + err.errCode);
                console.log('错误信息：' + err.errMsg);
            }
        });
    });
}

export {baseUrl,getDataApi}