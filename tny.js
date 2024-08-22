class tny{
    constructor(){
        this.api = "https://tny.im/yourls-api.php"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","content-type":"application/json; charset=UTF-8"}
    }
    async short_url(url){
        let req=await fetch(`${this.api}?format=json&action=shorturl&url=${url}`,{method:"GET",headers: this.headers});
        return await req.json();
    }
}
module.exports = {tny};