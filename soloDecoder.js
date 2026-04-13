const frame = window.frames['IframeLesson'].contentWindow;
let cookie = frame.Nida.Cookies.get("assessment");

const isDevToolsOpen = (window.outerWidth - window.innerWidth > 200) ||
    (window.outerHeight - window.innerHeight > 200);

function decode(input) {
    let encoded = input.split("$$").find(p => p.startsWith("pull:")).split(":");
    let encodedSplit = encoded[1].split(",");
    return encodedSplit.map((q, i) => {
        let parsed = parseInt(q.substr(q.length - 3, 3), 10);
        let value = parsed - 13 - i;
        return String.fromCharCode(value);
    }).join("");
}

function showBox(title, msg) {
    let div = document.createElement("div");
    div.style.cssText = "position:fixed;top:20px;right:20px;background:white;color:black;padding:15px;border:2px solid #50dcf3;border-radius:8px;z-index:2147483647;box-shadow:0 4px 6px rgba(0,0,0,0.3);font-family:sans-serif;max-width:400px;word-wrap:break-word;";
    let escMsg = msg.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    div.innerHTML = "<b style='font-size:16px;display:block;margin-bottom:10px;'>" + title + "</b><textarea readonly style='width:100%;height:80px;margin-bottom:10px;font-family:monospace;border:1px solid #ccc;padding:5px;'>" + escMsg + "</textarea><button style='display:block;width:100%;padding:8px;background:#50dcf3;color:white;border:none;border-radius:4px;cursor:pointer;font-weight:bold;font-size:14px;'>Close</button>";
    div.querySelector("button").onclick = function(){ div.remove(); };
    document.body.appendChild(div);
}

let res = decode(cookie);
if (isDevToolsOpen) {
    console.log("Decoded Assessment:\n\n", res);
} else {
    showBox("Decoded Answer Key Created", res);
}
