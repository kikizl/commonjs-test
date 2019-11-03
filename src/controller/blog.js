const { exec } = require('../db/mysql')

// 占位类似用法：xx.html?a=1&k1=v1&k2=v2&k3=v3
// promise链式用法

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
    const sql = `select * from blogs where id='${id}'`
    return exec(sql).then(rows => {
        return rows[0]
    })
}

const newBlog = (blogData = {}) => {
    // blogData 是一个博客对象，包含 title content author 属性
    const title = blogData.title
    const content = blogData.content
    const author = blogData.author
    const createTime = Date.now()

    const sql = `
        insert into blogs (title, content, createtime, author)
        values ('${title}', '${content}', ${createTime}, '${author}');
    `
    return exec(sql).then(insertData => {
        console.log('insert', insertData)
        return {
            id: insertData.insertId
        }
    })
}

const updateBlog = (id, blogData = {}) => {
    // id 就是更新的博客的id
    // blogData 是一个博客对象，包含title content 属性

    const title = blogData.title
    const content = blogData.content
    
    const sql = `
        
    `
}

module.exports = {
    getList,
    getDetail,
    newBlog
}