function format(first, middle, last) {
    return ((first || '') +
        (middle ? ` ${middle}` : '') +
        (last ? ` ${last}` : ''));
}
function range(start, end) {
    return Array(end - start + 1).fill(0).map((_, idx) => start + idx);
}
const KEYCODES = {
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    HOME: 36,
    END: 35,
    ENTER: 13,
    DELETE: 46
};

export { KEYCODES as K, range as r };
