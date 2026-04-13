/**
 * Unblockable Scavenger UI function
 */
function showBox(t, m, x) {
    let d = document.createElement("div");
    d.style.cssText = "position:fixed;top:20px;right:20px;background:#fff;color:#333;padding:15px;border:2px solid #50dcf3;border-radius:8px;z-index:999999;box-shadow:0 4px 6px rgba(0,0,0,.3);font-family:sans-serif;max-width:300px;word-break:break-all;";

    let h = "<b style='display:block;margin-bottom:10px;'>" + t + "</b>";
    h += "<textarea readonly style='width:100%;height:80px;margin-bottom:10px;font-family:monospace;border:1px solid #ccc;padding:5px;'>" + m.replace(/</g, "&lt;").replace(/>/g, "&gt;") + "</textarea>";

    if (x) {
        h += "<button id='xbtn' style='width:100%;padding:8px;background:#e74c3c;color:#fff;border:none;border-radius:4px;cursor:pointer;margin-bottom:5px;font-weight:bold;'>" + x.L + "</button>";
    }

    h += "<button id='cbtn' style='width:100%;padding:8px;background:#50dcf3;color:#fff;border:none;border-radius:4px;cursor:pointer;font-weight:bold;'>Close</button>";

    d.innerHTML = h;
    d.querySelector("#cbtn").onclick = () => d.remove();
    if (x) {
        d.querySelector("#xbtn").onclick = () => { x.F(); d.remove(); };
    }
    document.body.appendChild(d);
}

/**
 * Deep Recursive Frame Scavenger
 */
try {
    function scout(w) {
        // 1. Check custom Nida Cookies wrapper
        try {
            if (w.Nida && w.Nida.Cookies) {
                let c = w.Nida.Cookies.get("assessment");
                if (c && c.includes("pull:")) return c;
            }
        } catch (e) { }

        // 2. Check document cookies
        try {
            let ck = w.document.cookie.split(';');
            for (let c of ck) {
                let v = c.trim();
                try { v = decodeURIComponent(v); } catch (err) { }
                if (v.includes("$$") && v.includes("pull:")) return v;
            }
        } catch (e) { }

        // 3. Check localStorage
        try {
            if (w.localStorage) {
                for (let i = 0; i < w.localStorage.length; i++) {
                    let v = w.localStorage.getItem(w.localStorage.key(i));
                    if (v && v.includes("$$") && v.includes("pull:")) return v;
                }
            }
        } catch (e) { }

        // 4. Check sessionStorage
        try {
            if (w.sessionStorage) {
                for (let i = 0; i < w.sessionStorage.length; i++) {
                    let v = w.sessionStorage.getItem(w.sessionStorage.key(i));
                    if (v && v.includes("$$") && v.includes("pull:")) return v;
                }
            }
        } catch (e) { }

        // 5. Recursively dive into child frames and iframes
        try {
            for (let i = 0; i < w.frames.length; i++) {
                let p = scout(w.frames[i]);
                if (p) return p;
            }
        } catch (e) { }

        return null; // Payload not found in this frame branch
    }

    // Begin Hunt
    let payload = scout(window);

    // Error Handling & Extraction Workaround
    if (!payload) {
        let f = document.querySelector("iframe[name='IframeLesson'], frame[name='IframeLesson']") || document.querySelector("iframe, frame");
        if (f && f.src) {
            showBox("Secured Frame Detected:", "Payload shielded by Cross-Origin laws. Click the red button to forcibly extract the assessment into an unlocked tab, then run the script there again!", {
                L: "Extract Frame to New Tab",
                F: () => window.open(f.src, '_blank')
            });
            throw new Error("Payload shielded by cross-origin security.");
        }
        throw new Error("Could not find payload and no frames detected on this page.");
    }

    // Decoding Logic
    let part = payload.split("$$").find(p => p.startsWith("pull:"));
    if (!part) throw new Error("No pull section in payload.");

    let res = part.split(":")[1].split(",").map((q, t) => {
        let s = parseInt(q.substr(q.length - 3, 3), 10) - 13 - t;
        return String.fromCharCode(s);
    }).join("");

    console.log("Decoded Solution:", res);
    showBox("Decoded Answer Key Created:", res);

} catch (e) {
    showBox("Error:", e.message);
}
