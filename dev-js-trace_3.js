function log(d) {
    "use strict";
    window.console.log(d);
}

var lettres, nombres, utilisateurs;

lettres = ['a', 'b', 'c', 'd', 'z'];
nombres = [23, 13, 130, 10.5];
utilisateurs = [{name: 'Jill'}, {name: 'Jack'}, {name: 'Joe'}];

/* 1 */
log(lettres);

/* 2 */
log(nombres[0]);

/* 3 */
log(lettres[1]);

/* 4 */
log(nombres[nombres.length - 1]);

/* 5 */
log(typeof utilisateurs[0]);

/* 6 */
log(typeof utilisateurs[1].name);

/* 7 */
log(lettres[0] + lettres[1]);

/* 8 */
log(utilisateurs[0].name);

/* 9 */
log(nombres[4]);

/* 10 */
log(nombres[0] - nombres[0]);








