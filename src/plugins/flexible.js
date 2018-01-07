/**
 * Created by JiangTao on 2017/6/5.
 */
export default function(n) {
  var e = n.document,
    t = e.documentElement,
    i = 720,
    d = i / 100,
    o = "orientationchange" in n ? "orientationchange" : "resize",
    a = function() {
      var n = t.clientWidth || 375;
      n > 720 && (n = 720), t.style.fontSize = n / d + "px"
    };
  e.addEventListener && (n.addEventListener(o, a, !1), e.addEventListener("DOMContentLoaded", a, !1))
}
