import { B as BUILD, c as getElement, r as registerInstance, h } from './chunk-13e257f1.js';

const ClickOutsideOptionsDefaults = {
    triggerEvents: "click",
    exclude: ""
};
/**
 * Call this function as soon as the click outside of annotated method's host is done.
 * @example
```
@ClickOutside()
callback() {
  // this will run when click outside of element (host component) is done.
}
```
 */
function ClickOutside(opt = ClickOutsideOptionsDefaults) {
    return (proto, methodName) => {
        // this is to resolve the 'compiler optimization issue':
        // lifecycle events not being called when not explicitly declared in at least one of components from bundle
        BUILD.cmpDidLoad = true;
        BUILD.cmpDidUnload = true;
        const { componentDidLoad, componentDidUnload } = proto;
        proto.componentDidLoad = function () {
            const host = getElement(this);
            const method = this[methodName];
            registerClickOutside(this, host, method, opt);
            return componentDidLoad && componentDidLoad.call(this);
        };
        proto.componentDidUnload = function () {
            const host = getElement(this);
            const method = this[methodName];
            removeClickOutside(this, host, method, opt);
            return componentDidUnload && componentDidUnload.call(this);
        };
    };
}
/**
 * Register callback function for HTMLElement to be executed when user clicks outside of element.
 * @example
```
<span
    ref={spanEl => registerClickOutside(this, spanEl, () => this.test())}>
      Hello, World!
</span>;
```
 */
function registerClickOutside(component, element, callback, opt = ClickOutsideOptionsDefaults) {
    const excludedNodes = getExcludedNodes(opt);
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.addEventListener(triggerEvent, (e) => {
            initClickOutside(e, component, element, callback, excludedNodes);
        }, false);
    });
}
/**
 * Remove click outside callback function for HTMLElement.
 */
function removeClickOutside(component, element, callback, opt = ClickOutsideOptionsDefaults) {
    getTriggerEvents(opt).forEach(triggerEvent => {
        window.removeEventListener(triggerEvent, (e) => {
            initClickOutside(e, component, element, callback);
        }, false);
    });
}
function initClickOutside(event, component, element, callback, excludedNodes) {
    const target = event.target;
    if (!element.contains(target) && !isExcluded(target, excludedNodes)) {
        callback.call(component);
    }
}
function getTriggerEvents(opt) {
    if (opt.triggerEvents) {
        return opt.triggerEvents.split(",").map(e => e.trim());
    }
    return ["click"];
}
function getExcludedNodes(opt) {
    if (opt.exclude) {
        try {
            return Array.from(document.querySelectorAll(opt.exclude));
        }
        catch (err) {
            console.warn(`@ClickOutside: Exclude: '${opt.exclude}' will not be evaluated. Check your exclude selector syntax.`, err);
        }
    }
    return;
}
function isExcluded(target, excudedNodes) {
    if (target && excudedNodes) {
        for (let excludedNode of excudedNodes) {
            if (excludedNode.contains(target)) {
                return true;
            }
        }
    }
    return false;
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
        r = Reflect.decorate(decorators, target, key, desc);
    else
        for (var i = decorators.length - 1; i >= 0; i--)
            if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
class NovaCascader {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            h("section", { class: "cascader" }, h("span", { class: "cascader__search" }, h("input", { onKeyDown: e => readonly ? this.disableEvent(e) : e.key === 'Enter' && this.Cascader(), autoFocus: autofocus, name: name, value: this.result, onClick: _ => this.Cascader(), placeholder: placeholder, role: "combobox", "aria-readonly": readonly, "aria-controls": "Enter", "aria-haspopup": "true", "aria-expanded": this.isActive, "aria-label": this.result ? this.result : this.content.configuration.ariaParagraph }), h("nova-icon", { name: "times-circle", onClick: _ => this.clearSearch() }), h("nova-icon", { name: `${this.isActive ? "chevron-up" : "chevron-down"}` })), h("div", { class: `cascader__menu ${this.isActive ? "cascader__menu--active" : ""}` }, this.data.map((list, level) => (h("ul", { role: "listbox", class: "cascader__menu__list", id: `js-cascader-list-${level}` }, list.map((item) => (h("li", { id: `js-cascader-list-${level}-${item.value}`, role: "option", "aria-haspopup": item.children ? "true" : "false", "aria-label": item.value, "aria-selected": this.path[this.path.length - 1] === item.value ? "true" : "false", tabIndex: item.disabled ? -1 : 0, class: `cascader__menu__item ${item.disabled ? "cascader__menu__item--disabled" : ""}`, onMouseEnter: _ => this.updateCascader(list, level, item, "hover"), onClick: _ => this.updateCascader(list, level, item, "click"), onKeyDown: _event => _event.key === 'Enter' && this.updateCascader(list, level, item, "click") }, item.label, item.children && h("nova-icon", { name: "chevron-right" })))))))), h("p", { class: "accessibility-paragraph" }))
        ];
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "content": ["setComponentData"]
    }; }
    static get style() { return ".cascader {\n  display: inline-block;\n  position: relative;\n}\n\n.cascader__search {\n  position: relative;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -ms-flex-align: center;\n  align-items: center;\n}\n.cascader__search input {\n  font-weight: lighter;\n  border-radius: 4px;\n  -webkit-box-sizing: border-box;\n  box-sizing: border-box;\n  padding: 0.3em 0.6em;\n  font-size: 1.1em;\n  width: 300px;\n  cursor: pointer;\n}\n.cascader__search nova-icon {\n  position: absolute;\n  right: 10px;\n  z-index: 1060;\n  cursor: pointer;\n  -webkit-transition: all 1s;\n  transition: all 1s;\n}\n.cascader__search nova-icon .fa-times-circle {\n  display: none;\n}\n.cascader__search nova-icon .fa-chevron-down,\n.cascader__search nova-icon .fa-chevron-up {\n  display: inline-block;\n}\n.cascader__search:hover .fa-times-circle {\n  display: inline-block;\n}\n.cascader__search:hover .fa-chevron-down,\n.cascader__search:hover .fa-chevron-up {\n  display: none;\n}\n\n.cascader__menu {\n  display: none;\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", \"Helvetica Neue\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-variant: tabular-nums;\n  position: absolute;\n  z-index: 1050;\n  white-space: nowrap;\n  border-radius: 4px;\n  font-size: 14px;\n}\n\n.cascader__menu--top {\n  bottom: 40px;\n}\n\n.cascader__menu--active {\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.cascader__menu__list {\n  border-radius: 4px;\n  list-style: none;\n  display: inline-block;\n  margin: 0;\n  padding: 0;\n  min-width: 111px;\n  height: 180px;\n  overflow: auto;\n  vertical-align: top;\n}\n\n.cascader__menu__item {\n  font-weight: 600;\n  position: relative;\n  padding: 5px 12px;\n  line-height: 22px;\n  white-space: nowrap;\n  cursor: pointer;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n}\n.cascader__menu__item nova-icon {\n  position: absolute;\n  right: 1em;\n}\n\n.cascader__menu__item--disabled {\n  pointer-events: auto;\n  cursor: not-allowed;\n}\n.cascader__menu__item--disabled:hover {\n  cursor: not-allowed;\n}\n\n.accessibility-paragraph {\n  display: none;\n}\n\n.cascader__search input {\n  border: 1px solid #dcdcdc;\n}\n.cascader__search nova-icon {\n  color: rgba(0, 0, 0, 0.25);\n}\n\n.cascader__menu {\n  -webkit-box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  color: #314659;\n  background: #fff;\n}\n\n.cascader__menu__list {\n  border-right: 1px solid #e8e8e8;\n}\n\n.cascader__menu__item:active, .cascader__menu__item:hover, .cascader__menu__item:focus {\n  background-color: #fafafa;\n}\n.cascader__menu__item nova-icon {\n  color: rgba(0, 0, 0, 0.25);\n}\n\n.cascader__menu__item--disabled {\n  color: rgba(0, 0, 0, 0.25);\n}"; }
}
__decorate([
    ClickOutside()
], NovaCascader.prototype, "ClickOutsideHandler", null);

export { NovaCascader as nova_cascader };
