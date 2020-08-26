function createXHR() {
    if (typeof XMLHttpRequest != "undefined") {
        return new XMLHttpRequest()
    } else if (typeof ActiveXObject != "undefined") {
        if (typeof arguments.callee.activeXString != "string") {
            var versions = ["MSXML2.XMLHttp.6.0", "MSXML2.XMLHttp.3.0",
                "MSXML2.XMLHttp"],
                i, len;
            for (i = 0, len = versions.length; i < len; i++) {
                try {
                    new ActiveXObject(versions[i]);
                    arguments.callee.activeXString = versions[i];
                    break;
                } catch (ex) {
                    //跳过
                }
            }
        }
        return new ActiveXObject(arguments.callee.activeXString);
    } else {
        throw new Error("No XHR object available.");
    }
}


let xhr = createXHR()
xhr.open("get", "url", false)
xhr.send(null)
xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            console.log(xhr.responseText);

        } else {
            alert("Request was unsuccessfulL" + xhr.status)
        }
    }
}

xhr.setRequestHeader("Myheader", "MyValue")

var myheadr = xhr.getResponseHeader("Myheader")
var allheaders = xhr.getAllReponseHeader()

xhr.timeout = 1000; // 设置超时
xhr.ontimeout = function () {
    console.log('Request did not return in a second')
}
// 媒体类型（通常称为 Multipurpose Internet Mail Extensions 或 MIME 类型 ）是一种标准，用来表示文档、文件或字节流的性质和格式。

xhr.overrideMineType("text/xml")

xhr.onload = function () {

}

xhr.onprogress = function (event) {
    var divStatus = document.getElementById("status");
    if (event.lengthComputable) {
        divStatus.innerHTML = "Received " + event.position + " of " +
            event.totalSize + " bytes";
    }
};

// XHR 对象只能访问与它包含它的页面位于同一个域中的资源。