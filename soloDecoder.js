const frame = window.frames['IframeLesson'].contentWindow;
let cookie = frame.Nida.Cookies.get("assessment");
function decode(input) {
	let encoded = input.split("$$").find(p => p.startsWith("pull:")).split(":")[1]
	let encodedSplit = encoded.split(",")
    return encodedSplit.map((q, i) => {
        let parsed = parseInt(q.substr(q.length - 3, 3), 10);
        let value = parsed - 13 - i;
        return String.fromCharCode(value);
    });
}
console.log(decode(cookie));
