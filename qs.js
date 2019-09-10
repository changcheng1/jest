export const stringify = obj =>{
    const arr = [];
    Reflect.ownKeys(obj).forEach(key=>{
        arr.push(`${key}=${obj[key]}`);
    })
    return arr.join("&");
}
