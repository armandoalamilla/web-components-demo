var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { h } from "@stencil/core";
import { ClickOutside } from "stencil-click-outside";
/**
 * @author Alejandro Tarin, Alejandro Roiz
 */
/**
 * @author Alejandro Tarin, Alejandro Roiz
 */
/**
 * @todo
 * Documentacion:
 *    Explicar dentro del README mas externo (del proyecto) como se manejaría un tema nuevo
 * CSS-Animations (SOLO SI QUEDA TIEMPO):
 *    animations.css -> agregar el sass que tiene ya animaciones "out of the box"
 */
export class NovaCascader {
    constructor() {
        this.content = {
            data: {
                items: []
            },
            configuration: {
                expandTrigger: "click",
                name: "",
                placeholder: "Select",
                autofocus: false,
                readonly: false,
                disabled: false,
                separator: " / ",
                defaultValue: [],
                changeOnSelect: false,
                ariaParagraph: "No content selected"
            }
        };
        // States
        this.isActive = false;
        this.result = null;
        this.data = [];
        this.path = [];
        // Callbacks
        this.onPopupVisibleChange = null;
        this.onSelect = null;
    }
    // Life cycle methods
    /**
     * @description
     */
    componentDidLoad() {
        if (this.size) {
            const element = this.host.shadowRoot.querySelector("input");
            element.style.minHeight = this.size;
        }
        this.content && this.setComponentData();
    }
    /**
     * setComponentData
     *
     * @description Set component's initial data and configuration
     * @listens prop:content
     */
    setComponentData() {
        this.data = [this.content.data.items];
        this.path = [null];
        const defaultValue = this.content.configuration.defaultValue;
        if (defaultValue.length) {
            this.path = [null, ...defaultValue];
            this.setSearch();
        }
    }
    /**
     * Update cascader
     * @description Updated the path of the item and the data. If it's a final item, sets the searchbar's text.
     * @param list { cascaderItem[] } list of items where the event was fired
     * @param level { number } level of the list of items that fired the event
     * @param item  { cascaderItem } item that fired the event
     */
    updateCascader(list, level, item, event) {
        if (!item.disabled) {
            const { expandTrigger } = this.content.configuration;
            if (expandTrigger === event || expandTrigger === "hover") {
                let next = list.find((element) => element.value === item.value);
                this.path = [...this.path.slice(0, level + 1), item.value];
                if (next.children) {
                    this.data = [...this.data.slice(0, level + 1), next.children];
                }
                if (event === "click") {
                    this.setSearch();
                    if (!next.children)
                        this.Cascader();
                }
            }
        }
    }
    /**
     * focusCascader
     * @description Public API method to focus the cascader's input
     * @async
     */
    async focusCascader() {
        this.host.shadowRoot.querySelector("input").focus();
    }
    /**
     * blurCascader
     * @description Public API method to blur the cascader's input
     * @async
     */
    async blurCascader() {
        this.host.shadowRoot.querySelector("input").blur();
    }
    /**
     * onPopupChange
     * @description Sets the callback that is fired when the cascader appears or disappears
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onPopupChange(callback) {
        this.onPopupVisibleChange = callback;
    }
    /**
     * onCascaderSelect
     * @description Sets the callback that is fired when an item is selected
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onCascaderSelect(callback) {
        this.onSelect = callback;
    }
    async addCustomTrigger(el) {
        this.customTrigger = el;
    }
    // Ends Public API methods
    /**
     * onCascaderSelect
     * @description Clears the data and fires onPopupVisibleChange when clicking outside the component.
     * @event
     * @requires stencil-click-outside module
     * @requires ClickOutside
     */
    ClickOutsideHandler() {
        this.data = [this.content.data.items];
        this.path = [null];
        this.isActive = false;
        this.onPopupVisibleChange && this.onPopupVisibleChange(this.result);
    }
    // Search methods
    /**
     * Cascader
     * @description Toggle cascader visibility on click
     */
    Cascader() {
        this.isActive = !this.isActive;
        this.onSelect && this.onPopupVisibleChange(this.result);
    }
    /**
     * clearSearch
     * @description clears the search result
     */
    clearSearch() {
        this.result = "";
    }
    /**
     * setSearch
     * @description combine the search path with the separator and fires onSelect callback
     * @todo add prop to just use last item and verify search
     */
    setSearch() {
        if (this.content.configuration.changeOnSelect) {
            this.result = this.path[this.path.length - 1];
        }
        else {
            this.result = this.path
                .slice(1)
                .join(this.content.configuration.separator);
        }
        this.onSelect && this.onSelect(this.result);
    }
    /**
     * disable Event
     * @param event
     * @event
     */
    disableEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    render() {
        const { configuration: { name, placeholder, readonly, autofocus } } = this.content;
        return [
            // Search bar
            h("section", { class: "cascader" },
                h("span", { class: "cascader__search" },
                    h("input", { onKeyDown: e => readonly ? this.disableEvent(e) : e.key === 'Enter' && this.Cascader(), autoFocus: autofocus, name: name, value: this.result, onClick: _ => this.Cascader(), placeholder: placeholder, role: "combobox", "aria-readonly": readonly, "aria-controls": "Enter", "aria-haspopup": "true", "aria-expanded": this.isActive, "aria-label": this.result ? this.result : this.content.configuration.ariaParagraph }),
                    h("nova-icon", { name: "times-circle", onClick: _ => this.clearSearch() }),
                    h("nova-icon", { name: `${this.isActive ? "chevron-up" : "chevron-down"}` })),
                h("div", { class: `cascader__menu ${this.isActive ? "cascader__menu--active" : ""}` }, this.data.map((list, level) => (h("ul", { role: "listbox", class: "cascader__menu__list", id: `js-cascader-list-${level}` }, list.map((item) => (h("li", { id: `js-cascader-list-${level}-${item.value}`, role: "option", "aria-haspopup": item.children ? "true" : "false", "aria-label": item.value, "aria-selected": this.path[this.path.length - 1] === item.value ? "true" : "false", tabIndex: item.disabled ? -1 : 0, class: `cascader__menu__item ${item.disabled ? "cascader__menu__item--disabled" : ""}`, onMouseEnter: _ => this.updateCascader(list, level, item, "hover"), onClick: _ => this.updateCascader(list, level, item, "click"), onKeyDown: _event => _event.key === 'Enter' && this.updateCascader(list, level, item, "click") },
                    item.label,
                    item.children && h("nova-icon", { name: "chevron-right" })))))))),
                h("p", { class: "accessibility-paragraph" }))
        ];
    }
    static get is() { return "nova-cascader"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "default": ["nova-cascader.default.scss"],
        "dark": ["nova-cascader.dark.scss"]
    }; }
    static get styleUrls() { return {
        "default": ["nova-cascader.default.css"],
        "dark": ["nova-cascader.dark.css"]
    }; }
    static get properties() { return {
        "content": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "cascader",
                "resolved": "cascaderData & cascaderConfiguration & cascaderStyling",
                "references": {
                    "cascader": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{\r\n    data: {\r\n      items: []\r\n    },\r\n    configuration: {\r\n      expandTrigger: \"click\",\r\n      name: \"\",\r\n      placeholder: \"Select\",\r\n      autofocus: false,\r\n      readonly: false,\r\n      disabled: false,\r\n      separator: \" / \",\r\n      defaultValue: [],\r\n      changeOnSelect: false,\r\n      ariaParagraph: \"No content selected\"\r\n    }\r\n  }"
        },
        "size": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false
        }
    }; }
    static get states() { return {
        "isActive": {},
        "result": {},
        "data": {},
        "path": {},
        "customTrigger": {},
        "onPopupVisibleChange": {},
        "onSelect": {}
    }; }
    static get methods() { return {
        "focusCascader": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "focusCascader",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to focus the cascader's input"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "blurCascader": {
            "complexType": {
                "signature": "() => Promise<void>",
                "parameters": [],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "blurCascader",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to blur the cascader's input"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "onPopupChange": {
            "complexType": {
                "signature": "(callback: cascaderCallback) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "callback callback sended with the Public API",
                                "name": "param"
                            }],
                        "text": "callback sended with the Public API"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "cascaderCallback": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "onPopupChange",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when the cascader appears or disappears"
                    }, {
                        "name": "param",
                        "text": "callback callback sended with the Public API"
                    }, {
                        "name": "async",
                        "text": undefined
                    }, {
                        "name": "callback",
                        "text": undefined
                    }]
            }
        },
        "onCascaderSelect": {
            "complexType": {
                "signature": "(callback: cascaderCallback) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "callback callback sended with the Public API",
                                "name": "param"
                            }],
                        "text": "callback sended with the Public API"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "cascaderCallback": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "onCascaderSelect",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when an item is selected"
                    }, {
                        "name": "param",
                        "text": "callback callback sended with the Public API"
                    }, {
                        "name": "async",
                        "text": undefined
                    }, {
                        "name": "callback",
                        "text": undefined
                    }]
            }
        },
        "addCustomTrigger": {
            "complexType": {
                "signature": "(el: HTMLElement) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "HTMLElement": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "",
                "tags": []
            }
        }
    }; }
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "content",
            "methodName": "setComponentData"
        }]; }
}
__decorate([
    ClickOutside()
], NovaCascader.prototype, "ClickOutsideHandler", null);
