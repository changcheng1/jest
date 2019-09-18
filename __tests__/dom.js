import {removeNode,addNode,insertNode} from '../dom'
describe("测试dom",()=>{
    it("测试是否成功删除元素 removeChild",()=>{
        document.body.innerHTML = '<div><button></button></div>';
        let button = document.querySelector('button');
        expect(button).not.toBe(null);
        removeNode(button)
        button = document.querySelector('button');
        expect(button).toBe(null)
    })
})