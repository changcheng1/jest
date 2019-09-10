// 测试用例的写法
// babel转义语法 babel-jest
import {stringify} from '../qs.js'
describe('测试qs库是否合法',()=>{
    it("测试parser是否能解析数据",()=>{
        expect(stringify({name:123})).toBe("name=123")
    })
})
