import { h } from "@stencil/core";
export class NovaIcon {
    constructor() {
        /**
         * Props
         */
        this.name = "";
        this.size = "";
        this.pre = "fas";
        this.options = "";
        this.color = "inherit";
    }
    render() {
        return h("i", { style: { color: this.color }, class: `${this.pre} fa-${this.name} ${this.options}` });
    }
    static get is() { return "nova-icon"; }
    static get originalStyleUrls() { return {
        "$": ["../../assets/all.css", "nova-icon.scss"]
    }; }
    static get styleUrls() { return {
        "$": ["../../assets/all.css", "nova-icon.css"]
    }; }
    static get properties() { return {
        "name": {
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
                "text": "Props"
            },
            "attribute": "name",
            "reflect": false,
            "defaultValue": "\"\""
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
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "size",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "pre": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "pre",
            "reflect": false,
            "defaultValue": "\"fas\""
        },
        "options": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "options",
            "reflect": false,
            "defaultValue": "\"\""
        },
        "color": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "color",
            "reflect": false,
            "defaultValue": "\"inherit\""
        }
    }; }
}
