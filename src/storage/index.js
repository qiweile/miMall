const STORAGE_KEY = 'mall';
export default {
    // /存储值
    setItem(key,value,module_name) {
        let val = this.getStorage();
        if(module_name) {
            val[module_name][key] = value
        }else {
            val[key] = value
        }
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(val))
    },
    // 获取某一个模块下面的属性user下面的userName
    getItem(key, module_name) {
        let val = this.getStorage()
        if(module_name) {
            return val[module_name][key]
        }else {
            return val[key]
        }
    },
    // 获取全部
    getStorage() {
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)|| "{}");
    },
    clear(key,module_name) {
        let val = this.getStorage()
        if(!val) return
        if (module_name) {
            val[module_name] && delete val[module_name][key]
        } else {
            delete val[key]
        }
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    }
}