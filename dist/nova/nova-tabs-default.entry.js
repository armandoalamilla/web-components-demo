import { r as registerInstance, h, c as getElement } from './chunk-13e257f1.js';
import { K as KEYCODES } from './chunk-e69cb89f.js';

/**
 * JSdocs
 * @author Arturo & Armando & Tarin
 */
class NovaTabs {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("section", { class: `tabs__container ${this.position === "horizontal" ? " horizontal" : " vertical"} ${this.type || ""}` }, h("ul", { class: "tabs__list", role: "tablist" }, this._tabSlot.map((tab, index) => {
                const isDisabled = tab.getAttribute('disabled') === "true" ? true : false;
                const isSelected = this.activeKey === index;
                const isClosable = tab.getAttribute('closable') === "true" ? true : false;
                return (h("li", { role: "tab", id: `${this.jsprefix}-tab-${index}`, class: `tab__button ${isSelected ? " active" : ""} ${isDisabled ? "disabled" : ''}`, "aria-selected": isSelected ? "true" : "false", "aria-disabled": isDisabled ? "true" : "false", "aria-controls": `${this.jsprefix}-panel-${index}`, tabIndex: isDisabled ? -1 : 0, innerHTML: tab.outerHTML, onKeyDown: e => !isDisabled && this.handleKeyPress(index, e), onClick: event => !isDisabled && this.openTab(index, event) }, !isDisabled && isClosable &&
                    h("span", { class: "tab__button__close", "aria-label": "close", onClick: _ => this.closeTab(index) }, "x")));
            }), ","), this._panelSlot.map((panel, index) => h("section", { class: `tab__panel ${this.activeKey === index ? "active" : ""}`, id: `${this.jsprefix}-panel-${index}`, innerHTML: panel.outerHTML }))),
            h("div", { hidden: true }, h("slot", { name: "tab" }), h("slot", { name: "panel" }))
        ];
    }
    ;
    get el() { return getElement(this); }
    static get style() { return ":host {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  background-color: white;\n  color: #5a5a5a;\n}\n\nnova-icon {\n  margin-right: 4px;\n}\n\n.addTab {\n  padding: 10px 15px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  border: 1px solid #d4d4d4;\n  border-radius: 5px;\n  background: white;\n  font-size: 16px;\n  color: #5a5a5a;\n}\n\n.tabs__container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n  flex-wrap: wrap;\n  background-color: white;\n  color: #5a5a5a;\n}\n.tabs__container.horizontal .tabs__list {\n  overflow-x: auto;\n  overflow-y: hidden;\n  -ms-flex-preferred-size: 100%;\n  flex-basis: 100%;\n  border-bottom: 1px solid #d4d4d4;\n}\n.tabs__container.horizontal .tabs__list .tab__button {\n  margin-right: 1em;\n}\n.tabs__container.horizontal .tabs__list .tab__button:not(.disabled).active {\n  color: #1890ff;\n  border-bottom: 3px solid #1890ff;\n}\n.tabs__container.card.horizontal .tabs__list .tab__button {\n  border: 1px solid #d4d4d4;\n  border-radius: 5% 5% 0 0;\n  background: rgba(212, 212, 212, 0.5);\n}\n.tabs__container.card.horizontal .tabs__list .tab__button:not(.disabled).active {\n  color: #1890ff;\n  background: white;\n  border-bottom: white solid 5px;\n}\n.tabs__container.vertical .tabs__list {\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -ms-flex-direction: column;\n  flex-direction: column;\n  border-right: 1px solid #d4d4d4;\n}\n.tabs__container.vertical .tabs__list .tab__button {\n  margin-bottom: 2em;\n}\n.tabs__container.vertical .tabs__list .tab__button:not(.disabled).active {\n  border-right: 3px solid #1890ff;\n}\n\n.tabs__list {\n  display: -ms-flexbox;\n  display: flex;\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.tab__button {\n  padding: 0em 1.5em;\n  margin: 0;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-wrap: nowrap;\n  flex-wrap: nowrap;\n  -ms-flex-pack: center;\n  justify-content: center;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.tab__button:not(.disabled) {\n  cursor: pointer;\n}\n.tab__button:not(.disabled):hover {\n  color: #1890ff;\n}\n\n.tab__button .tab__button__close {\n  font-size: 1.5em;\n  margin-left: 1em;\n}\n\n.tab__panel {\n  display: none;\n  min-height: 100px;\n}\n.tab__panel.active {\n  padding-left: 1em;\n  display: block;\n}\n\n.tab__panel {\n  -webkit-animation-duration: 0.3s;\n  -webkit-animation-name: slidein;\n  -moz-animation-duration: 0.3s;\n  -moz-animation-name: slidein;\n  -o-animation-duration: 0.3s;\n  -o-animation-name: slidein;\n  animation-duration: 0.3s;\n  animation-name: slidein;\n}\n\n.closeTab {\n  float: middle;\n  cursor: pointer;\n  color: #dddbdb;\n  padding: 5px;\n}\n\n\@-webkit-keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n\@-moz-keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n\@-o-keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}\n\@keyframes slidein {\n  from {\n    margin-left: 100%;\n    width: 300%;\n  }\n  to {\n    margin-left: 0%;\n    width: 100%;\n  }\n}"; }
}

export { NovaTabs as nova_tabs };
