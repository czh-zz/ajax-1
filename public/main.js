console.log('我是main.js')
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'style.css');//request.open(method,url);
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);
        //创建style标签
        const style = document.createElement('style')
        //填写style内容
        style.innerHTML = request.response
        //插入到HTML头部
        document.head.appendChild(style)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send();
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '2.js');//request.open(method,url);
    request.onload = () => {
        console.log('request.response');
        console.log(request.response);
        //创建script标签
        const script = document.createElement('script')
        //填写script内容
        script.innerHTML = request.response
        //插入到HTML头部
        document.body.appendChild(script)
    }
    request.onerror = () => {
        console.log('失败了')
    }
    request.send();
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '3.html')
    request.onload = () => {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () => {
        console.log('访问失败')
    }
    request.send();
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '4.xml')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
            const dom = request.responseXML
            const text = dom.getElementsByTagName('warning')[0].textContent
            console.log(text.trim())
        }
    }
    request.send();
}
getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '5.json')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status >= 200 && request.status <= 300) {
            let object
            try {
                object = JSON.parse(request.response)
            } catch (error) {
                console.log('出错了,错误详情是')
                console.log(error)
                object = { 'name': 'wu' }
            }//try catch 捕获错误
            myName.textContent = "," + object.name
        }
    }
    request.send()
}