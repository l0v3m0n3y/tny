# tny
JavaScript library for tny.im
# main
```js
async function main(){
    const {tny} = require('./tny');
    const url= new tny();
    let req=await url.short_url("url")
    console.log(req)
}
main()
```
