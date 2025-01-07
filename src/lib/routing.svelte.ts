import {page} from '$app/state';
;
export const routing = new (class Routing {
    #nameUpper = $derived(page.params.name?.toUpperCase());
    get nameUpper() {
        return this.#nameUpper;
    }
})();
