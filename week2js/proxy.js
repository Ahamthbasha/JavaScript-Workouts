const target={
    message:"hello world!",
}
const handler={
    get(target,property){
        console.log(`getting property:${property}`)
        return target[property]
    },
    set(target,property,value){
        console.log(`setting the value${property} to ${value}`)
        target[property]=value;
        return true;
    }
}
const proxy=new Proxy(target,handler)
console.log(proxy.message)
proxy.message="hello proxy"
console.log(proxy.message)