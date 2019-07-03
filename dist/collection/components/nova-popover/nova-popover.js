import { h } from "@stencil/core";
export class Popover {
    constructor() {
        this.trigger = "click";
        this.popoverActive = false;
    }
    activateClick() {
        if (this.trigger === "click")
            this.popoverActive = !this.popoverActive;
    }
    render() {
        return (h("div", { class: "popover" },
            h("a", { onClick: () => this.activateClick() },
                h("slot", { name: "trigger" })),
            h("div", { class: `popover__text popover__text__${this.location} popover__text--${this.trigger} ${this.popoverActive ? "popover__text--active" : ""}` },
                h("slot", { name: "title" }),
                h("slot", { name: "content" }),
                h("a", { onClick: () => this.activateClick() },
                    h("slot", { name: "close" })))));
    }
    static get is() { return "nova-popover"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "default": ["nova-popover.default.scss"],
        "dark": ["nova-popover.dark.scss"]
    }; }
    static get styleUrls() { return {
        "default": ["nova-popover.default.css"],
        "dark": ["nova-popover.dark.css"]
    }; }
    static get properties() { return {
        "trigger": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"hover\" | \"focus\" | \"click\"",
                "resolved": "\"click\" | \"focus\" | \"hover\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "trigger",
            "reflect": false,
            "defaultValue": "\"click\""
        },
        "location": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "\"topleft\" | \"top\" | \"topright\" |\r\n                    \"botleft\" | \"bot\" | \"botright\" |\r\n                    \"lefttop\" | \"left\" | \"leftbot\" |\r\n                    \"righttop\" | \"right\" | \"rightbot\"",
                "resolved": "\"bot\" | \"botleft\" | \"botright\" | \"left\" | \"leftbot\" | \"lefttop\" | \"right\" | \"rightbot\" | \"righttop\" | \"top\" | \"topleft\" | \"topright\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "location",
            "reflect": false
        }
    }; }
    static get states() { return {
        "popoverActive": {}
    }; }
}
