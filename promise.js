function ajax({method, url}) {
    return new Promise((resolve, reject) => {
        let request = new XMLHttpRequest()
        request.open(method, url) // 配置request
        request.send()
        request.onreadystatechange = ()=>{
            if(request.readyState === 4){
                if(request.status >= 200 && request.status < 300){
                    resolve()
                }else if(request.status >= 400){
                    reject()
                }
            }
        }
    })
}
