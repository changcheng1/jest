import {getDataThroughCallBack,getDataThroughPromise} from '../async'

describe('测试异步代码',()=>{
    it("测试callBack函数是否正常运行",(done)=>{
        expect.assertions(1);
        getDataThroughCallBack((data)=>{
            expect(data).toEqual({name:"zf"})
            done()
        })
    })
    // it.only：只执行这个一个，提高效率
    it.only("测试callBack函数是否正常运行",async ()=>{
       let data = await getDataThroughPromise();
       expect(data).toEqual({name:"zf"})
    })
})
