// 匹配 相等 不相等 包含

describe.only("matchers测试用例",()=>{
    it("测试相等",()=>{
        expect(1+1).toBe(2)  // 相当于js的三等
        expect({name:1}).toEqual({name:1})
        expect(true).toBeTruthy()
        expect(false).toBeFalsy()
    })
    it("测试是否不相等",()=>{
       expect(1+1).not.toBe(3)
       expect(3).toBeLessThan(10) // 返回一个值小于？
       expect(3).toBeGreaterThan(2) //  >返回一个值大于？
    })
    it("测试是否包含",()=>{
        expect("hello world").toContain("hello")
        expect("code happt").toMatch(/hap/)
    })
})

