import { h } from "@stencil/core";
/**
 * JSdocs
 * @author Arturo & Armando
 */
export class NovaTabs {
    constructor() {
        this.updater = true;
        this.newTabData = {
            title: "New tab",
            icon: "plus-square",
            enable: true,
            closable: false,
            content: "<p>Content of NewTab Pane</p><p>This is an added tab.</p>"
        };
        this.activeKey = 0;
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
        this.datajson.items.splice(keyIndex, 1);
        this.onEditCallback && this.onEditCallback(keyIndex, 'close');
        this.updater = !this.updater;
    }
    /**
     * addTab
     * @description Public API method to add a new Tab with preconfigured content.
     * @param tabData struct from where the tab content is read
     * @async
     */
    async addTab(tabData) {
        this.datajson.items.push(tabData);
        this.onEditCallback &&
            this.onEditCallback(this.datajson.items.length, "add");
        this.updater = !this.updater;
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
        //Properties assignments from configure data
        this.tabType = this.confjson.tabType;
        if (this.tabType === "card") {
            this.tabPosition = "horizontal";
        }
        else {
            this.tabPosition = this.confjson.tabPosition;
        }
    }
    render() {
        //HTML shadow DOM render
        return [
            //Button for adding new tabs. If property addTab is false the button is not displayed.
            h("button", { style: this.confjson && this.confjson.addTab ? { display: "block" } : { display: "none" }, class: "addTab addTab_circulo", onClick: () => this.addTab(this.newTabData) }, "new tab"),
            //Tab buttons container
            h("div", { class: "tab_container" }, this.datajson &&
                this.datajson.items.map((tabButton, index) => (
                //Tab creation from json data
                [h("div", { id: "bt_" + String(index), class: `tab_button ${this.activeKey === index ? " active" : ""} ${this.tabPosition === "horizontal" ? " horizontal" : " vertical"} `, onClick: event => this.openTab(index, event) },
                        h("span", null,
                            h("nova-icon", { name: tabButton.icon }),
                            tabButton.title,
                            h("span", { onClick: () => this.closeTab(index), class: "closeTab", style: tabButton.closable ? { display: "in-line block" } : { display: "none" } }, "X"))),
                    h("div", { id: "pn_" + String(index), class: `tab_pane ${this.activeKey === index ? " active" : ""}`, innerHTML: tabButton.content })]))),
            h("div", { class: "deadspace" })
        ];
    }
    ;
    static get is() { return "nova-tabs"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "default": ["nova-tabstemp.scss"],
        "dark": ["nova-tabs.dark.scss"]
    }; }
    static get styleUrls() { return {
        "default": ["nova-tabstemp.css"],
        "dark": ["nova-tabs.dark.css"]
    }; }
    static get properties() { return {
        "datajson": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "{\r\n    items: any[];\r\n  }",
                "resolved": "{ items: any[]; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        },
        "confjson": {
            "type": "any",
            "mutable": true,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "confjson",
            "reflect": false
        },
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
        "newTabData": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "{ title: string; icon: string; enable: boolean; closable: boolean; content: string; }",
                "resolved": "{ title: string; icon: string; enable: boolean; closable: boolean; content: string; }",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "{\r\n    title: \"New tab\",\r\n    icon: \"plus-square\",\r\n    enable: true,\r\n    closable: false,\r\n    content: \"<p>Content of NewTab Pane</p><p>This is an added tab.</p>\"\r\n  }"
        }
    }; }
    static get states() { return {
        "event": {},
        "activeKey": {},
        "tabType": {},
        "tabPosition": {},
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
                "signature": "(tabData: any) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "tabData struct from where the tab content is read",
                                "name": "param"
                            }],
                        "text": "struct from where the tab content is read"
                    }],
                "references": {
                    "Promise": {
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
                "signature": "(callback: Function) => Promise<void>",
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
                    "Function": {
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
                "signature": "(callback: Function) => Promise<void>",
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
                    "Function": {
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
