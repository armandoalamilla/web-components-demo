import { setMode } from '@stencil/core';
setMode(elm => {
    return elm.mode || elm.getAttribute('mode') || 'default';
});
