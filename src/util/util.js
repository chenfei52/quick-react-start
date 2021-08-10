/**
 * 获取url上面的参数
 * @param key 要获取的参数的名字 不传则直接返回整个参数对象
 * @returns {*}
 */
export function getUrlParams(name) {
    let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    let r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return null;
}

/**
 * 获取IE的版本
 * @returns {*}
 * @constructor
 */
export function IEVersion() {
    let userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    let isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1; //判断是否IE<11浏览器
    let isEdge = userAgent.indexOf("Edge") > -1 && !isIE; //判断是否IE的Edge浏览器
    let isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf("rv:11.0") > -1;
    if (isIE) {
        let reIE = new RegExp("MSIE (\\d+\\.\\d+);");
        reIE.test(userAgent);
        let fIEVersion = parseFloat(RegExp["$1"]);
        if (fIEVersion == 7) {
            return 7;
        } else if (fIEVersion == 8) {
            return 8;
        } else if (fIEVersion == 9) {
            return 9;
        } else if (fIEVersion == 10) {
            return 10;
        } else {
            return 6;//IE版本<=7
        }
    } else if (isEdge) {
        return 'edge';//edge
    } else if (isIE11) {
        return 11; //IE11
    } else {
        return -1;//不是ie浏览器
    }
}

/**
 * 深拷贝
 * @param target
 * @returns
 */
function deepCopy(target) {
    if (typeof target !== 'object') return target;
    let res = target instanceof Array ? [] : {};
    for (let key in target) {
        if (typeof target[key] === 'object') {
            res[key] = deepCopy(target[key]);
        } else {
            res[key] = target[key];
        }
    }
    return res;
}


/**
 * 一维数组还原树状数据
 * @param data 一维数组
 * @param parentIdKey 标示父级的KEY
 * @param idKey
 * @returns {*[]}
 */
export function getTreeData(data = [], parentIdKey, idKey) {
    let tree = [];
    let _data = [...data];

    function getLeaf() {
        let over = true;
        _data.forEach(item => {
            if (!item.replace && item[parentIdKey] && (!_data.find(it => (!it.replace && it[parentIdKey] === item[idKey])))) {
                over = false;
                let index = _data.findIndex(it => it[idKey] === item[parentIdKey]);
                if (index > -1) {
                    if (!_data[index].children) _data[index].children = [];
                    _data[index].children.push({...item});
                    item.replace = true;
                }
            }
            if (item[parentIdKey] && !_data.find(it => (it[idKey] === item[parentIdKey]))) {
                item.replace = true;
            }
        });
        return over;
    }

    let i = 0;//防止因为数据出错导致死循环
    while (!getLeaf() && (i < 100)) {
        i++;
        getLeaf();
    }
    tree = _data.filter(item => !item.replace);
    return tree;
}

//一个数组字符串按照首字母顺序分组
export function groupByFirstLetter(arr) {
    if (!String.prototype.localeCompare) return null;
    let letters = "*abcdefghjklmnopqrstwxyz".split('');
    let zh = "阿八嚓哒妸发旮哈讥咔垃痳拏噢妑七呥扨它穵夕丫帀".split('');
    let result = [];
    let curr;
    letters.forEach(function (item, i) {
        curr = {letter: item, list: []};
        arr.forEach(function (item2) {
            let firstLetter = item2[0].toLowerCase();
            let code = item2.charCodeAt(0);
            if(code >= 97 && (code <=122) || (code >=65 && (code <= 90))){
                if(firstLetter === item) curr.list.push(item2);
                return null;
            }

            if ((!zh[i - 1] || zh[i - 1].localeCompare(item2) <= 0) && item2.localeCompare(zh[i]) === -1) {
                curr.list.push(item2);
            }
        });
        if (curr.list.length) {
            curr.list.sort(function (a, b) {
                return a.localeCompare(b);
            });
            result.push(curr);
        }
    });
    return result;
}

/**
 * 数组的扁平化
 * @param arr
 * @returns {[]|*[]}
 */
export function flatten(arr){
    if(!Array.isArray(arr)) return [];
    let res = [];
    arr.forEach(item=>{
        if(Array.isArray(item)){
            res = res.concat(flatten(item));
        }else{
            res.push(item);
        }
    })
    return res;
}


export function copyAction(text, callBack){
    if(!text) return ;
    const input = document.createElement('input');
    document.body.appendChild(input);
    input.setAttribute('value', text);
    input.select()
    if (document.execCommand('copy')) {
        document.execCommand('copy');
    }
    document.body.removeChild(input);
    callBack && callBack();
}