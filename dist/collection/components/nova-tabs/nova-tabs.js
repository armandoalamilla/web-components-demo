import { h } from "@stencil/core";
import { KEYCODES } from '../../utils/utils';
/**
 * JSdocs
 * @author Arturo & Armando & Tarin
 */
export class NovaTabs {
    constructor() {
        //Props
        this.updater = true;
        this.defaultText = "tab";
        this.defaultTag = "div";
        this.default = null;
        this.position = "horizontal";
        this.limit = "9";
        this.addButton = false;
        this.jsprefix = "nova";
        // States
        this._tabSlot = [];
        this._panelSlot = [];
        this.activeKey = -1;
        // Callbacks
        this.onEditCallback = (_index, _event) => { };
    }
    /**
     * openTab
     * @description Public API method to open a Tab and display its content.
     * @param keyIndex index to identify which tab was clicked
     * @param event event that triggered the call
     * @async
     */
    async openTab(keyIndex, event) {
        this.activeKey = keyIndex;
        this.onClickCallback && this.onClickCallback(keyIndex, event);
        this.updater = !this.updater;
    }
    /**
     * closeTab
     * @description Public API method to close a selected tab
     * @param keyIndex index to identify which tab was clicked
     * @async
     */
    async closeTab(keyIndex) {
        this._tabSlot.splice(keyIndex, 1);
        this._panelSlot.splice(keyIndex, 1);
        this.onEditCallback && this.onEditCallback(keyIndex, 'close');
        this.updater = !this.updater;
    }
    /**
     * addTab
     * @description Public API method to add a new Tab with preconfigured content.
     * @param tabData struct from where the tab content is read
     * @async
     */
    async addTab(tabNode, panelNode) {
        if (this._tabSlot.length < Number(this.limit)) {
            this._tabSlot.push(tabNode);
            this._panelSlot.push(panelNode);
            this.onEditCallback && this.onEditCallback(this._tabSlot.length, "add");
            this.updater = !this.updater;
        }
    }
    /**
     * onEdit
     * @description Set fired callback when an edit is performed on the component
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onEdit(callback) {
        this.onEditCallback = callback;
    }
    /**
     * onTabClick
     * @description Set fired callback when a click is performed on the tab
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onTabClick(callback) {
        // this.onClickCallback(keyIndex, event)
        this.onClickCallback = callback;
    }
    componentDidUpdate() {
        if (this.type === "card") {
            this.position = "horizontal";
        }
    }
    componentDidLoad() {
        this.getSlottedContent();
        this.selectDefault();
    }
    getSlottedContent() {
        const _tabSlotted = this.el.shadowRoot.querySelector('slot[name=tab]');
        const _panelSlotted = this.el.shadowRoot.querySelector('slot[name=panel]');
        this._panelSlot = _panelSlotted.assignedNodes().filter(node => { return node.nodeName !== '#text'; });
        this._tabSlot = _tabSlotted.assignedNodes().filter(node => { return node.nodeName !== '#text'; });
    }
    selectDefault() {
        if (this.default) {
            this.openTab(Number(this.default));
        }
        else {
            this.openTab(this._tabSlot.findIndex(node => node.getAttribute('selected') === "true"));
        }
    }
    handleKeyPress(index, event) {
        let el = this._tabSlot[this.activeKey];
        switch (event.keyCode) {
            case (KEYCODES.ENTER):
                this.openTab(index, event);
                this.el.shadowRoot.querySelector(`#${this.jsprefix}-tab-${this.activeKey}`).focus();
                break;
            case (KEYCODES.LEFT):
            case (KEYCODES.UP):
                do {
                    this.activeKey = this.activeKey !== 0 ? this.activeKey - 1 : this._tabSlot.length - 1;
                    el = this._tabSlot[this.activeKey];
                } while (el.getAttribute('disabled') === "true");
                this.el.shadowRoot.querySelector(`#${this.jsprefix}-tab-${this.activeKey}`).focus();
                break;
            case (KEYCODES.RIGHT):
            case (KEYCODES.DOWN):
                do {
                    this.activeKey = this.activeKey !== this._tabSlot.length - 1 ? this.activeKey + 1 : 0;
                    el = this._tabSlot[this.activeKey];
                } while (el.getAttribute('disabled') === "true");
                this.el.shadowRoot.querySelector(`#${this.jsprefix}-tab-${this.activeKey}`).focus();
                break;
            case (KEYCODES.HOME):
                if (this._tabSlot[0].getAttribute('disabled') !== "true") {
                    this.activeKey = 0;
                }
                this.el.shadowRoot.querySelector(`#${this.jsprefix}-tab-${this.activeKey}`).focus();
                break;
            case (KEYCODES.END):
                if (this._tabSlot[this._tabSlot.length - 1].getAttribute('disabled') !== "true") {
                    this.activeKey = this._tabSlot.length - 1;
                }
                this.el.shadowRoot.querySelector(`#${this.jsprefix}-tab-${this.activeKey}`).focus();
                break;
            default:
                break;
        }
    }
    createNewTab() {
        let tab = document.createElement(this.defaultTag);
        let panel = document.createElement(this.defaultTag);
        tab.innerText = this.defaultText;
        tab.setAttribute('closable', 'true');
        panel.innerHTML = this.defaultText;
        return [tab, panel];
    }
    render() {
        //HTML shadow DOM render
        return [
            // Button for adding new tabs. If property addTab is false the button is not displayed.
            h("button", { style: this.addButton ? { display: "block" } : { display: "none" }, class: "addTab addTab_circulo", onClick: _ => this.addTab(...this.createNewTab()), onKeyPress: _ => this.addTab(...this.createNewTab()) }, "ADD"),
            //Tab buttons container
            h("section", { class: `tabs__container ${this.position === "horizontal" ? " horizontal" : " vertical"} ${this.type || ""}` },
                h("ul", { class: "tabs__list", role: "tablist" },
                    this._tabSlot.map((tab, index) => {
                        const isDisabled = tab.getAttribute('disabled') === "true" ? true : false;
                        const isSelected = this.activeKey === index;
                        const isClosable = tab.getAttribute('closable') === "true" ? true : false;
                        return (h("li", { role: "tab", id: `${this.jsprefix}-tab-${index}`, class: `tab__button ${isSelected ? " active" : ""} ${isDisabled ? "disabled" : ''}`, "aria-selected": isSelected ? "true" : "false", "aria-disabled": isDisabled ? "true" : "false", "aria-controls": `${this.jsprefix}-panel-${index}`, tabIndex: isDisabled ? -1 : 0, innerHTML: tab.outerHTML, onKeyDown: e => !isDisabled && this.handleKeyPress(index, e), onClick: event => !isDisabled && this.openTab(index, event) }, !isDisabled && isClosable &&
                            h("span", { class: "tab__button__close", "aria-label": "close", onClick: _ => this.closeTab(index) }, "x")));
                    }),
                    ","),
                this._panelSlot.map((panel, index) => h("section", { class: `tab__panel ${this.activeKey === index ? "active" : ""}`, id: `${this.jsprefix}-panel-${index}`, innerHTML: panel.outerHTML }))),
            h("div", { hidden: true },
                h("slot", { name: "tab" }),
                h("slot", { name: "panel" }))
        ];
    }
    ;
    static get is() { return "nova-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "default": ["nova-tabs.default.scss"],
        "dark": ["nova-tabs.dark.scss"]
    }; }
    static get styleUrls() { return {
        "default": ["nova-tabs.default.css"],
        "dark": ["nova-tabs.dark.css"]
    }; }
    static get properties() { return {
        "updater": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "updater",
            "reflect": false,
            "defaultValue": "true"
        },
        "defaultText": {
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
            "attribute": "default-text",
            "reflect": false,
            "defaultValue": "\"tab\""
        },
        "defaultTag": {
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
            "attribute": "default-tag",
            "reflect": false,
            "defaultValue": "\"div\""
        },
        "default": {
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
            "attribute": "default",
            "reflect": false,
            "defaultValue": "null"
        },
        "type": {
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
            "attribute": "type",
            "reflect": false
        },
        "position": {
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
            "attribute": "position",
            "reflect": false,
            "defaultValue": "\"horizontal\""
        },
        "limit": {
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
            "attribute": "limit",
            "reflect": false,
            "defaultValue": "\"9\""
        },
        "addButton": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "add-button",
            "reflect": false,
            "defaultValue": "false"
        },
        "jsprefix": {
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
            "attribute": "jsprefix",
            "reflect": false,
            "defaultValue": "\"nova\""
        }
    }; }
    static get states() { return {
        "_tabSlot": {},
        "_panelSlot": {},
        "activeKey": {},
        "onEditCallback": {},
        "onClickCallback": {}
    }; }
    static get methods() { return {
        "openTab": {
            "complexType": {
                "signature": "(keyIndex: any, event?: UIEvent) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "keyIndex index to identify which tab was clicked",
                                "name": "param"
                            }],
                        "text": "index to identify which tab was clicked"
                    }, {
                        "tags": [{
                                "text": "event event that triggered the call",
                                "name": "param"
                            }],
                        "text": "event that triggered the call"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "UIEvent": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "openTab",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to open a Tab and display its content."
                    }, {
                        "name": "param",
                        "text": "keyIndex index to identify which tab was clicked"
                    }, {
                        "name": "param",
                        "text": "event event that triggered the call"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "closeTab": {
            "complexType": {
                "signature": "(keyIndex: number) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "keyIndex index to identify which tab was clicked",
                                "name": "param"
                            }],
                        "text": "index to identify which tab was clicked"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "closeTab",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to close a selected tab"
                    }, {
                        "name": "param",
                        "text": "keyIndex index to identify which tab was clicked"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "addTab": {
            "complexType": {
                "signature": "(tabNode?: Node, panelNode?: Node) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
                    }, {
                        "tags": [],
                        "text": ""
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    },
                    "Node": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "addTab",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to add a new Tab with preconfigured content."
                    }, {
                        "name": "param",
                        "text": "tabData struct from where the tab content is read"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "onEdit": {
            "complexType": {
                "signature": "(callback: any) => Promise<void>",
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
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "onEdit",
                "tags": [{
                        "name": "description",
                        "text": "Set fired callback when an edit is performed on the component"
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
        "onTabClick": {
            "complexType": {
                "signature": "(callback: any) => Promise<void>",
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
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "onTabClick",
                "tags": [{
                        "name": "description",
                        "text": "Set fired callback when a click is performed on the tab"
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
        }
    }; }
    static get elementRef() { return "el"; }
}
