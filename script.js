let wavedark = "url('./wavedark.svg')";
let wavelight = "url('./wavelight.svg')"
let wavepurple = "url('./wavepurple.svg')";
let wavewhite = "url('./wavewhite.svg')";

let theElement, a, b, c;
let x = document.getElementsByClassName("custom-select");
for (let i = 0; i < x.length; i++) {
    theElement = x[i].getElementsByTagName("select")[0];
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = theElement.options[theElement.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (let j = 1; j < theElement.length; j++) {
        c = document.createElement("DIV");
        c.innerHTML = theElement.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            let y;
            let s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            let h = this.parentNode.previousSibling;
            for (let i = 0; i < s.length; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    y.length = y.length;
                    for (let k = 0; k < y.length; k++) {
                        y[k].removeAttribute("class");
                    }
                    let cats = ["anime", "botinfo", "botsupport", "config", "economy", "fun", "game", "general", "image", "moderation", "servermanagement", "xpsystem", "others"]
                    this.setAttribute("class", "same-as-selected");
                    let pp = document.getElementsByClassName(this.innerHTML.toLowerCase()).item(0);
                    if (!pp) pp = { innerHTML: " " };
                    cats.filter((v) => v !== pp.innerHTML.toLowerCase()).forEach((v) => {
                        let oo = document.getElementsByClassName(v).item(0);
                        if (oo) {
                            if (oo.classList.contains("commands-visible")) {
                                oo.classList.remove("commands-visible")
                            }
                        }
                    })
                    if (pp && pp.classList) {
                        if (pp.classList.contains("commands-visible") == false) {
                            pp.classList.toggle("commands-visible")
                        }
                    }
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        e.stopPropagation();
        callnow(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function callnow(elmnt) {
    let arrNo = [];
    let x = document.getElementsByClassName("select-items");
    let y = document.getElementsByClassName("select-selected");
    for (let i = 0; i < y.length; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (let i = 0; i < x.length; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
} document.addEventListener("click", callnow);

function modeChecker() {
    let a = document.getElementById("first-big-div");
    let b = document.getElementById("second-big-div");
    let c = document.getElementById("nav-bar");
    let d = document.getElementsByClassName("nav-links");
    let e = document.getElementById('mode-thing')
    let f = document.getElementById("button");
    let g = document.getElementById("main-head-top");
    let h = document.getElementById("main-a-top");
    let i = document.getElementsByClassName("stat-card");
    let j = document.getElementById("footer-bottom");
    let k = document.getElementById("footer-shit");
    let l = document.getElementsByClassName("footer-heads");
    let m = document.getElementsByClassName("footer-links-a");
    let n = document.getElementsByClassName("feature-head");
    let o = document.getElementsByClassName("feature-card");
    let p = document.getElementsByClassName("feature-card-heading");
    let q = document.getElementsByClassName("select-selected");
    let r = document.getElementsByClassName("select-items");
    let s = document.getElementById("command-note");
    let t = document.getElementsByClassName("command-div");
    let u = document.getElementsByClassName("command-name-head");
    let aa = document.getElementById("modeChoose");
    if (typeof (Storage) != undefined) {
        if (localStorage.getItem("mode") == "light") {
            aa.checked = true;
            a.style.backgroundColor = "#7851a9";
            a.style.backgroundImage = wavewhite
            b.style.backgroundColor = "#f6f5f7";
            b.style.backgroundImage = wavepurple
            c.style.boxShadow = "0px 0px 25px 1px #41025a";
            c.style.backgroundColor = "#7851a9";
            for (let i = 0; i < d.length; i++) {
                d[i].style.color = "#f6f5f7";
            }
            e.style.color = "#f6f5f7";
            f.style.boxShadow = "0px 0px 15px 1px #41025a";
            f.style.backgroundColor = "#f6f5f7"
            g.style.color = "#f6f5f7";
            h.style.color = "#7851a9";
            for (let ii = 0; ii < i.length; ii++) {
                i[ii].style.boxShadow = "0px 0px 15px 2px #41025a";
                i[ii].style.color = "#f6f5f7";
                i[ii].style.backgroundColor = "#7851a9";
            }
            j.style.backgroundColor = "#7851a9";
            k.style.color = "#f6f5f7"
            for (let i = 0; i < l.length; i++) {
                l[i].style.color = "#f6f5f7";
            }
            for (let i = 0; i < m.length; i++) {
                m[i].style.color = "#f6f5f7";
            }
            for (let i = 0; i < m.length; i++) {
                m[i].style.color = "#7851a9";
            }
            for (let i = 0; i < n.length; i++) {
                n[i].style.color = "#7851a9";
            }
            for (let i = 0; i < o.length; i++) {
                o[i].style.boxShadow = "0px 0px 15px 5px #41025a";
                o[i].style.color = "#f6f5f7";
                o[i].style.backgroundColor = "#7851a9";
            }
            for (let i = 0; i < p.length; i++) {
                p[i].style.color = "#f6f5f7";
            }
            for (let i = 0; i < q.length; i++) {
                q[i].style.backgroundColor = "#7851a9";
            }
            for (let i = 0; i < r.length; i++) {
                r[i].backgroundColor = "#7851a9";
                for (let o = 0; o < r[i].children.length; o++) {
                    r[i].children[o].style.color = "#f6f5f7";
                }
            }
        } else {
            aa.checked = false;
            a.style.backgroundColor = "#141414";
            a.style.backgroundImage = wavelight;
            b.style.backgroundColor = "#a3a8a5";
            b.style.backgroundImage = wavedark;
            c.style.boxShadow = "0px 0px 25px 1px #a3a3a3";
            c.style.backgroundColor = "#141414";
            for (let i = 0; i < d.length; i++) {
                console.log(i)
                d[i].style.color = "#a3a8a5";
            }
            e.style.color = "#f6f5f7";
            f.style.boxShadow = "0px 0px 15px 1px #a3a3a3";
            f.style.backgroundColor = "#a3a8a5"
            g.style.color = "#a3a8a5";
            h.style.color = "#141414";
            for (let ii = 0; ii < i.length; ii++) {
                i[ii].style.boxShadow = "0px 0px 15px 2px #a3a3a3";
                i[ii].style.color = "#a3a8a5";
                i[ii].style.backgroundColor = "#141414";
            }
            j.style.backgroundColor = "#141414";
            k.style.color = "#a3a8a5"
            for (let i = 0; i < l.length; i++) {
                l[i].style.color = "#a3a8a5";
            }
            for (let i = 0; i < m.length; i++) {
                m[i].style.color = "#a3a8a5";
            }
            for (let i = 0; i < m.length; i++) {
                m[i].style.color = "#141414";
            }
            for (let i = 0; i < n.length; i++) {
                n[i].style.color = "#141414";
            }
            for (let i = 0; i < o.length; i++) {
                o[i].style.boxShadow = "0px 0px 15px 5px #a3a3a3";
                o[i].style.color = "#a3a8a5";
                o[i].style.backgroundColor = "#141414";
            }
            for (let i = 0; i < p.length; i++) {
                p[i].style.color = "#a3a8a5";
            }
            for (let i = 0; i < q.length; i++) {
                q[i].style.backgroundColor = "#141414";
            }
            for (let i = 0; i < r.length; i++) {
                r[i].backgroundColor = "#141414";
                for (let o = 0; o < r[i].children.length; o++) {
                    r[i].children[o].style.color = "#a3a8a5";
                }
            }
            if (s && t && u) {
                s.style.backgroundColor = "#141414";
                s.style.boxShadow = "0px 0px 15px 3px #64038a";
                s.style.color = "#a3a8a5";
                t.style.backgroundColor = "#141414";
                t.style.boxShadow = "0px 0px 15px 3px #64038a";
                t.style.color = "#a3a8a5";
                for(let i=0;i<u.length;i++){
                    u[i].style.color = "#a3a8a5";
                }
            }
        }
    } else {
        aa.checked = false;
        a.style.backgroundColor = "#141414";
        a.style.backgroundImage = wavelight;
        b.style.backgroundColor = "#a3a8a5";
        b.style.backgroundImage = wavedark;
        c.style.boxShadow = "0px 0px 25px 1px #a3a3a3";
        c.style.backgroundColor = "#141414";
        for (let i = 0; i < d.length; i++) {
            console.log(i)
            d[i].style.color = "#a3a8a5";
        }
        e.style.color = "#f6f5f7";
        f.style.boxShadow = "0px 0px 15px 1px #a3a3a3";
        f.style.backgroundColor = "#a3a8a5"
        g.style.color = "#a3a8a5";
        h.style.color = "#141414";
        for (let ii = 0; ii < i.length; ii++) {
            i[ii].style.boxShadow = "0px 0px 15px 2px #a3a3a3";
            i[ii].style.color = "#a3a8a5";
            i[ii].style.backgroundColor = "#141414";
        }
        j.style.backgroundColor = "#141414";
        k.style.color = "#a3a8a5"
        for (let i = 0; i < l.length; i++) {
            l[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#141414";
        }
        for (let i = 0; i < n.length; i++) {
            n[i].style.color = "#141414";
        }
        for (let i = 0; i < o.length; i++) {
            o[i].style.boxShadow = "0px 0px 15px 5px #a3a3a3";
            o[i].style.color = "#a3a8a5";
            o[i].style.backgroundColor = "#141414";
        }
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < q.length; i++) {
            q[i].style.backgroundColor = "#141414";
        }
        for (let i = 0; i < r.length; i++) {
            r[i].backgroundColor = "#141414";
            for (let o = 0; o < r[i].children.length; o++) {
                r[i].children[o].style.color = "#a3a8a5";
            }
        }
        if (s && t && u) {
            s.style.backgroundColor = "#141414";
            s.style.boxShadow = "0px 0px 15px 3px #64038a";
            s.style.color = "#a3a8a5";
            t.style.backgroundColor = "#141414";
            t.style.boxShadow = "0px 0px 15px 3px #64038a";
            t.style.color = "#a3a8a5";
            for(let i=0;i<u.length;i++){
                u[i].style.color = "#a3a8a5";
            }
        }
    }
}
modeChecker();

function mode(which) {
    let a = document.getElementById("first-big-div");
    let b = document.getElementById("second-big-div");
    let c = document.getElementById("nav-bar");
    let d = document.getElementsByClassName("nav-links");
    let e = document.getElementById('mode-thing')
    let f = document.getElementById("button");
    let g = document.getElementById("main-head-top");
    let h = document.getElementById("main-a-top");
    let i = document.getElementsByClassName("stat-card");
    let j = document.getElementById("footer-bottom");
    let k = document.getElementById("footer-shit");
    let l = document.getElementsByClassName("footer-heads");
    let m = document.getElementsByClassName("footer-links-a");
    let n = document.getElementsByClassName("feature-head");
    let o = document.getElementsByClassName("feature-card");
    let p = document.getElementsByClassName("feature-card-heading");
    let q = document.getElementsByClassName("select-selected");
    let r = document.getElementsByClassName("select-items");
    let s = document.getElementById("command-note");
    let t = document.getElementsByClassName("command-div");
    let u = document.getElementsByClassName("command-name-head");

    /**
     * Purple  : #7851a9
     * White   : #f6f5f7 
     * Black   : #141414
     * Grey    : #a3a8a5
     */
    if (which == "light") {
        if (typeof (Storage) != undefined) {
            localStorage.setItem("mode", "light")
        }
        a.style.backgroundColor = "#7851a9";
        a.style.backgroundImage = wavewhite
        b.style.backgroundColor = "#f6f5f7";
        b.style.backgroundImage = wavepurple
        c.style.boxShadow = "0px 0px 25px 1px #41025a";
        c.style.backgroundColor = "#7851a9";
        for (let i = 0; i < d.length; i++) {
            d[i].style.color = "#f6f5f7";
        }
        e.style.color = "#f6f5f7";
        f.style.boxShadow = "0px 0px 15px 1px #41025a";
        f.style.backgroundColor = "#f6f5f7"
        g.style.color = "#f6f5f7";
        h.style.color = "#7851a9";
        for (let ii = 0; ii < i.length; ii++) {
            i[ii].style.boxShadow = "0px 0px 15px 2px #41025a";
            i[ii].style.color = "#f6f5f7";
            i[ii].style.backgroundColor = "#7851a9";
        }
        j.style.backgroundColor = "#7851a9";
        k.style.color = "#f6f5f7"
        for (let i = 0; i < l.length; i++) {
            l[i].style.color = "#f6f5f7";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#f6f5f7";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#7851a9";
        }
        for (let i = 0; i < n.length; i++) {
            n[i].style.color = "#7851a9";
        }
        for (let i = 0; i < o.length; i++) {
            o[i].style.boxShadow = "0px 0px 15px 5px #41025a";
            o[i].style.color = "#f6f5f7";
            o[i].style.backgroundColor = "#7851a9";
        }
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "#f6f5f7";
        }
        for (let i = 0; i < q.length; i++) {
            q[i].style.backgroundColor = "#7851a9";
        }
        for (let i = 0; i < r.length; i++) {
            r[i].backgroundColor = "#7851a9";
            for (let o = 0; o < r[i].children.length; o++) {
                r[i].children[o].style.color = "#f6f5f7";
            }
        }
        if (s && t && u) {
            s.style.backgroundColor = "#7851a9";
            s.style.boxShadow = "0px 0px 15px 3px #64038a";
            s.style.color = "#f6f5f7";
            t.style.backgroundColor = "#7851a9";
            t.style.boxShadow = "0px 0px 15px 3px #64038a";
            t.style.color = "#f6f5f7";
            for(let i=0;i<u.length;i++){
                u[i].style.color = "#f6f5f7";
            }
        }
    } else {
        if (typeof (Storage) != undefined) {
            localStorage.setItem("mode", "dark")
        }
        a.style.backgroundColor = "#141414";
        a.style.backgroundImage = wavelight
        b.style.backgroundColor = "#a3a8a5";
        b.style.backgroundImage = wavedark;
        c.style.boxShadow = "0px 0px 25px 1px #a3a3a3";
        c.style.backgroundColor = "#141414";
        for (let i = 0; i < d.length; i++) {
            console.log(i)
            d[i].style.color = "#a3a8a5";
        }
        e.style.color = "#f6f5f7";
        f.style.boxShadow = "0px 0px 15px 1px #a3a3a3";
        f.style.backgroundColor = "#a3a8a5"
        g.style.color = "#a3a8a5";
        h.style.color = "#141414";
        for (let ii = 0; ii < i.length; ii++) {
            i[ii].style.boxShadow = "0px 0px 15px 2px #a3a3a3";
            i[ii].style.color = "#a3a8a5";
            i[ii].style.backgroundColor = "#141414";
        }
        j.style.backgroundColor = "#141414";
        k.style.color = "#a3a8a5"
        for (let i = 0; i < l.length; i++) {
            l[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < m.length; i++) {
            m[i].style.color = "#141414";
        }
        for (let i = 0; i < n.length; i++) {
            n[i].style.color = "#141414";
        }
        for (let i = 0; i < o.length; i++) {
            o[i].style.boxShadow = "0px 0px 15px 5px #a3a3a3";
            o[i].style.color = "#a3a8a5";
            o[i].style.backgroundColor = "#141414";
        }
        for (let i = 0; i < p.length; i++) {
            p[i].style.color = "#a3a8a5";
        }
        for (let i = 0; i < q.length; i++) {
            q[i].style.backgroundColor = "#141414";
        }
        for (let i = 0; i < r.length; i++) {
            r[i].backgroundColor = "#141414";
            for (let o = 0; o < r[i].children.length; o++) {
                r[i].children[o].style.color = "#a3a8a5";
            }
        }
        if (s && t && u) {
            s.style.backgroundColor = "#141414";
            s.style.boxShadow = "0px 0px 15px 3px #64038a";
            s.style.color = "#a3a8a5";
            t.style.backgroundColor = "#141414";
            t.style.boxShadow = "0px 0px 15px 3px #64038a";
            t.style.color = "#a3a8a5";
           for(let i=0;i<u.length;i++){
                u[i].style.color = "#a3a8a5";
            }
        }
    }
}

function aye() {
    mode(document.getElementById("modeChoose").checked ? "light" : "dark");
}
document.getElementById("modeChoose").addEventListener("input", aye);