const { exec } = require('../db/mysql')

// 占位类似用法：xx.html?a=1&k1=v1&k2=v2&k3=v3

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 ` // 1=1 永远成立，占位（如果author和keyword没有）
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`
    
    // 返回promise
    return exec(sql)
}

const getDetail = (id) => {
    // 先返回假数据
    return {
        id: 1,
        title: '标题B',
        content: '内容B',
        createTime: 1568886244831,
        author: 'zhangsan'
    }
}

module.exports = {
    getList,
    getDetail
}