function log(d) {
    "use strict";
    window.console.log(d);
}

var o, p, q, r, s;

o = p = q = r = s;

/* 1 */
log(o);

s = true;

/* 2 */
log(o);

/* 3 */
log(s);

p = !s;

/* 4 */
log(p);

q = !p || true;

/* 5 */
log(q);

r = p && q;

o = p = q = r = s;

/* 6 */
log(o);

