const getList = (author, keyword) => {
    // 先返回假数据（格式是正确的）
    return [
        {
            id: 1,
            title: '标题A',
            content: '内容A',
            createTime: 1568886192018,
            author: 'zhangsan'

        },
        {
            id: 1,
            title: '标题B',
            content: '内容B',
            createTime: 1568886244831,
            author: 'zhangsan'

        }
    ]
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