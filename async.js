// callBack 1s后获取数据

export const getDataThroughCallBack = fn=>{
    setTimeout(()=>{
        fn({name:"zf"})
    },1000)
}
// 获取数据通过promise方式
export const  getDataThroughPromise = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({name:'zf'})
        },1000)
    })
}