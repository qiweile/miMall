// 接口的环境设置
// 适用于jsonp和cors
// 如果想自定义package.json中的"serve": "vue-cli-service serve --mode=development",  自定义参数：development 方法：
// 在src目录下新建一个 “.env.某某” 的文件文件，某某：就是你想定义的development的名称；文件内容为： NODE_ENV = '某某'；然后将case 的值改为 ‘某某’
let baseURL;
switch (process.env.NODE_ENV) {
    case 'development':
        baseURL = 'http://dev-mall-pre.springboot.cn/api';
        break;
    case 'test':
        baseURL = 'http://test-mall-pre.springboot.cn/api';
        break;
    case 'prod':
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
    default:
        baseURL = 'http://mall-pre.springboot.cn/api';
        break;
}
export default {
    baseURL
}