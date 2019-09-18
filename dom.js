// 删除节点
export const removeNode = node =>{
    node.parentNode.removeChild(node)
}

// 增加节点
export const addNode = (container,node)=>{
    container.appChild(node)
}

// 插入节点

export const insertBefore = (newEl,oldEl)=>{
    oldEl.parentNode.insertBefore(newEl,oldEl)
}