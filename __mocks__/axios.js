export default{
    get(url){
        return new Promise((resolve,reject)=>{
            if(url == '/user'){
                resolve({name:"zf"})
            }else if(url == "/list"){
                resolve([1,2,3])
            }
        })
    }
}