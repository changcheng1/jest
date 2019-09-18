import {forEach,fetchUser,fetchList} from '../4.mock'
describe("mock相关测试 ",()=>{
    it("测试传入的参数是否靠谱",()=>{
        let fn = jest.fn();
        forEach([1,2,3],fn);
        expect(fn.mock.calls.length).toBe(3)  //长度是否是3
        expect(fn.mock.calls[0][0]).toBe(1)
        expect(fn.mock.calls[1][0]).toBe(2)
        expect(fn.mock.calls[2][0]).toBe(3)
    })
    
    //测试请求的mock
    it("测试fetchUser 能否获取列表",()=>{
        return fetchUser().then(data=>{
            expect(data).toEqual({name:"zf"})
        })
    })
    
    it("测试fetchList 能否获取列表",()=>{
        return fetchList().then(data=>{
            expect(data).toEqual([1,2,3])
        })
    })
})
