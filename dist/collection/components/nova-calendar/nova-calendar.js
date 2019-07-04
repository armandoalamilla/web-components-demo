import { h } from "@stencil/core";
import { range } from "../../utils/utils";
import moment from "moment";
/**
 * @author Alejandro Tarin, Armando Aguiar, Arturo Rojas, Javier Saldivar, Alejandro Roiz
 */
export class NovaCalendar {
    constructor() {
        /** Object that contains all data with the items of each date with events and configuration */
        this.content = {
            data: {
                items: {}
            },
            configuration: {
                fullscreen: false
            }
        };
        // Props
        /** Selected moment value */
        this.value = moment();
        /** Type of calendar, view by month or by year */
        this.type = "month";
        /** Changes the view to card */
        this.card = false;
        // States
        this.calendar = [];
        this.monthCalendar = [];
        // https://momentjs.com/docs/#/displaying/format/
        this.now = moment();
        this.activeMonth = Number(moment().format("M"));
        this.activeYear = Number(moment().format("YYYY"));
        // Callbacks
        this._onSelect = function (_date) { };
        this._onChange = function (_date) { };
    }
    /**
     * nowChangeMonth
     * @description Recieves an object with the month and day and changes to that date
     * @param {month, day} object with month and day we want to change to
     */
    nowChangeMonth({ month, day }) {
        // Check special cases
        if (this.activeMonth === 1 && month === 12) {
            this.now = moment(this.now).subtract(1, "months");
        }
        else if (this.activeMonth === 12 && month === 1) {
            this.now = moment(this.now).add(1, "months");
        }
        // Then just check precedence of month
        else if (month < this.activeMonth) {
            this.now = moment(this.now).subtract(1, "months");
        }
        else if (month > this.activeMonth) {
            this.now = moment(this.now).add(1, "months");
        }
        else {
            this._onSelect(moment(new Date(`${this.activeYear}-${month}-${day}`)));
            return;
        }
        this.activeMonth = Number(this.now.format("M"));
        this.activeYear = Number(this.now.format("Y"));
        this.fillCalendar();
    }
    /**
     * nowSetYear
     * @description recieves the event and fills the calendar (used in year mode)
     * @param event
     */
    nowSetYear(event) {
        this.activeYear = event.target.value;
        this.now = moment(this.now).year(this.activeYear);
        this.fillCalendar();
    }
    /**
     * nowSetMonth
     * @description recieves the event and fills the calendar (used in month mode)
     * @param event
     */
    nowSetMonth(event) {
        this.activeMonth = Number(event.target.value);
        this.now = moment(this.now).month(this.activeMonth - 1);
        this.fillCalendar();
    }
    /**
     * fillCalendar
     * @description used to fill an array with the valid dates from the month being hovered
     */
    fillCalendar() {
        this.calendar = [];
        this.monthCalendar = [];
        const startDay = this.now
            .clone()
            .startOf("month")
            .startOf("week");
        const endDay = this.now
            .clone()
            .endOf("month")
            .endOf("week");
        let date = startDay.clone().subtract(1, "day");
        const startMonth = this.now.clone().startOf("year");
        const endMonth = this.now.clone().endOf("year");
        let dateMonth = startMonth.clone().subtract(1, "month");
        while (date.isBefore(endDay, "day")) {
            this.calendar.push(Array(7)
                .fill(0)
                .map(() => {
                const d = date.add(1, "day").clone();
                return { day: d.format("D"), month: Number(d.format("M")) };
            }));
        }
        while (dateMonth.isBefore(endMonth, "month")) {
            this.monthCalendar.push(Array(4)
                .fill(0)
                .map(() => {
                const d = dateMonth.add(1, "month").clone();
                return d;
            }));
        }
    }
    /**
     * setData
     * @description sets the months days and years used to fill the selects in the calendar
     */
    setData() {
        this.months = moment.monthsShort();
        this.days = moment.weekdaysShort();
        this.years = range(Number(this.validRange[0].format("Y")), Number(this.validRange[1].format("Y")));
    }
    // Life cycle methods
    /**
     * componentDidLoad
     * @description fill the calendar once the component is loaded to the browser
     */
    componentDidLoad() {
        this.fillCalendar();
    }
    /**
     * componentWillLoad
     * @description when the component will Load select the valid ranges for the years to be displayed in the calendar
     */
    componentWillLoad() {
        this.validRange = [
            this.value.clone().subtract(10, "years"),
            this.value.clone().add(10, "years")
        ];
        this.setData();
    }
    /**
     * watchContent
     * @description once the content is changed get the events we need
     * @listens prop:content
     */
    watchContent() {
        this.getEventsByYear();
        this.getEventsByMonth();
    }
    /**
     * getEventsByYear
     * @description fill the events by year with the data from the confJSON, or an empty object
     * @listens prop:activeYear
     */
    getEventsByYear() {
        this.eventsByYear = this.content.data.items[this.activeYear] || {};
        this.getEventsByMonth();
    }
    /**
     * getEventsByMonth
     * @description fill the events by month with the data from the confJSON, or an empty object
     * @listens prop:activeMonth
     */
    getEventsByMonth() {
        this.eventsByMonth = this.eventsByYear[this.activeMonth] || {};
    }
    /**
     * getEventsByDay
     * @description return the events in the date selected
     * @param day string with the day to check
     */
    getEventsByDay(day) {
        return (this.eventsByMonth && this.eventsByMonth[day]) || [];
    }
    /**
     * getGeneralEventByMonth
     * @description return the events in the month selected
     * @param month string with the month to check
     */
    getGeneralEventByMonth(month) {
        this.eventsByMonth = this.eventsByYear[month] || {};
        return this.eventsByMonth["event"];
    }
    /**
     * getCellClass
     * @description change class of the cell selected depending on its state
     * @param {month, day} object with month and day we want to check
     */
    getCellClass({ month, day }) {
        if (this.activeMonth != month)
            return "inactive";
        else {
            let date = moment(new Date(`${this.activeYear}-${month}-${day}`)).format("YYYY/MM/DD");
            if (date === this.value.format("YYYY/MM/DD"))
                return "selected";
        }
        return "";
    }
    /**
     * fullScreen
     * @description Public API method to enter fullscreen
     * @async
     */
    async fullscreen() {
        this.host.requestFullscreen();
    }
    /**
     * onChangeValue
     * @description Sets the callback that is fired when the value of the calendar changes
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onChangeValue(Callback) {
        this._onChange = Callback;
    }
    /**
     * onSelectValue
     * @description Sets the callback that is fired when the item is selected
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    async onSelectValue(Callback) {
        this._onSelect = Callback;
    }
    /**
     * changeValue
     * @description Sets the callback that is fired when any value is changed
     * @param newValue any value to change
     * @async
     */
    async changeValue(newValue) {
        this.value = newValue;
        this._onChange(this.value);
    }
    /**
     * toggleType
     * @description Sets the callback that is fired when the toggle type in the calendar changes
     * @param type the type of calendar we are viewing by month or year
     * @async
     */
    async toggleType(type) {
        this.type = type;
    }
    /**
     * changeLocale
     * @description Sets the callback that is fired when the locale is changed
     * @param lang string that represents the language
     * @param localeSpec object that holds the specs of the locale
     * @async
     * @callback
     */
    async changeLocale(lang, localeSpec) {
        moment.defineLocale(lang, localeSpec);
        this.setData();
    }
    render() {
        // https://momentjs.com/docs/#/displaying/format/
        // let now = moment().format('dddd');
        return [
            h("section", { class: this.card ? "calendar__container calendar--card" : "calendar__container" },
                h("slot", null),
                h("div", { class: "calendar__controls" },
                    this.content.configuration.fullscreen
                        ? h("nova-icon", { class: "btn_full", name: "fas fa-expand fa-2x", onClick: () => this.fullscreen() }) : "",
                    h("select", { onChange: this.nowSetYear.bind(this) }, this.years.map(year => (h("option", { selected: this.activeYear == year }, year)))),
                    h("select", { onChange: this.nowSetMonth.bind(this) }, this.months.map((month, index) => (h("option", { selected: this.activeMonth == index + 1, value: index + 1 }, month)))),
                    h("div", { class: "calendar__controls__switch" },
                        h("button", { class: `calendar__controls__months ${this.type === "month" ? "active" : ""}`, onClick: _ => this.toggleType("month") }, "Month"),
                        h("button", { class: `calendar__controls__years ${this.type === "year" ? "active" : ""}`, onClick: _ => this.toggleType("year") }, "Year"))),
                this.type === "month" ?
                    h("div", { class: "calendar" },
                        h("div", { class: "calendar__week calendar__header" }, this.days.map(dayName => (h("div", { class: "calendar__day" }, dayName)))),
                        this.calendar.map(row => (h("div", { class: "calendar__week" }, row.map(cell => (h("div", { class: `calendar__day ${this.getCellClass(cell)}`, tabIndex: 0, onClick: _ => this.nowChangeMonth(cell) },
                            h("div", { class: "calendar__number" }, cell.day),
                            h("ul", { class: "calendar__events" }, this.getEventsByDay(cell.day).map(event => (h("li", null,
                                h("nova-icon", { name: event.type, color: event.color }),
                                event.content)))))))))))
                    :
                        h("div", { class: "calendar" }, this.monthCalendar.map(row => (h("div", { class: "calendar__week" }, row.map(cell => (h("div", { class: `calendar__day ${this.value.format("YYYY/MM") === cell.format("YYYY/MM")
                                ? "selected"
                                : ""}`, tabIndex: 0 },
                            h("div", { class: "calendar__number" }, cell.format("MMM")),
                            h("p", { class: "calendar__events" }, this.getGeneralEventByMonth(cell.format("M")))))))))))
        ];
    }
    static get is() { return "nova-calendar"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "default": ["nova-calendar.default.scss"],
        "dark": ["nova-calendar.dark.scss"]
    }; }
    static get styleUrls() { return {
        "default": ["nova-calendar.default.css"],
        "dark": ["nova-calendar.dark.css"]
    }; }
    static get properties() { return {
        "content": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Object that contains all data with the items of each date with events and configuration"
            },
            "attribute": "content",
            "reflect": false,
            "defaultValue": "{\r\n    data: {\r\n      items: {}\r\n    },\r\n    configuration: {\r\n      fullscreen: false\r\n    }\r\n  }"
        },
        "value": {
            "type": "unknown",
            "mutable": true,
            "complexType": {
                "original": "Moment",
                "resolved": "Moment",
                "references": {
                    "Moment": {
                        "location": "import",
                        "path": "moment"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Selected moment value"
            },
            "defaultValue": "moment()"
        },
        "type": {
            "type": "string",
            "mutable": true,
            "complexType": {
                "original": "\"month\" | \"year\"",
                "resolved": "\"month\" | \"year\"",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Type of calendar, view by month or by year"
            },
            "attribute": "type",
            "reflect": false,
            "defaultValue": "\"month\""
        },
        "card": {
            "type": "boolean",
            "mutable": true,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Changes the view to card"
            },
            "attribute": "card",
            "reflect": false,
            "defaultValue": "false"
        }
    }; }
    static get states() { return {
        "calendar": {},
        "monthCalendar": {},
        "now": {},
        "activeMonth": {},
        "activeYear": {},
        "validRange": {},
        "eventsByYear": {},
        "eventsByMonth": {},
        "generalEvents": {},
        "months": {},
        "years": {},
        "days": {},
        "_onSelect": {},
        "_onChange": {}
    }; }
    static get methods() { return {
        "fullscreen": {
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
                "text": "fullScreen",
                "tags": [{
                        "name": "description",
                        "text": "Public API method to enter fullscreen"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "onChangeValue": {
            "complexType": {
                "signature": "(Callback: Function) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
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
                "text": "onChangeValue",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when the value of the calendar changes"
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
        "onSelectValue": {
            "complexType": {
                "signature": "(Callback: Function) => Promise<void>",
                "parameters": [{
                        "tags": [],
                        "text": ""
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
                "text": "onSelectValue",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when the item is selected"
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
        "changeValue": {
            "complexType": {
                "signature": "(newValue: any) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "newValue any value to change",
                                "name": "param"
                            }],
                        "text": "any value to change"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "changeValue",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when any value is changed"
                    }, {
                        "name": "param",
                        "text": "newValue any value to change"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "toggleType": {
            "complexType": {
                "signature": "(type: \"month\" | \"year\") => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "type the type of calendar we are viewing by month or year",
                                "name": "param"
                            }],
                        "text": "the type of calendar we are viewing by month or year"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "toggleType",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when the toggle type in the calendar changes"
                    }, {
                        "name": "param",
                        "text": "type the type of calendar we are viewing by month or year"
                    }, {
                        "name": "async",
                        "text": undefined
                    }]
            }
        },
        "changeLocale": {
            "complexType": {
                "signature": "(lang: string, localeSpec: object) => Promise<void>",
                "parameters": [{
                        "tags": [{
                                "text": "lang string that represents the language",
                                "name": "param"
                            }],
                        "text": "string that represents the language"
                    }, {
                        "tags": [{
                                "text": "localeSpec object that holds the specs of the locale",
                                "name": "param"
                            }],
                        "text": "object that holds the specs of the locale"
                    }],
                "references": {
                    "Promise": {
                        "location": "global"
                    }
                },
                "return": "Promise<void>"
            },
            "docs": {
                "text": "changeLocale",
                "tags": [{
                        "name": "description",
                        "text": "Sets the callback that is fired when the locale is changed"
                    }, {
                        "name": "param",
                        "text": "lang string that represents the language"
                    }, {
                        "name": "param",
                        "text": "localeSpec object that holds the specs of the locale"
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
    static get elementRef() { return "host"; }
    static get watchers() { return [{
            "propName": "content",
            "methodName": "watchContent"
        }, {
            "propName": "activeYear",
            "methodName": "getEventsByYear"
        }, {
            "propName": "activeMonth",
            "methodName": "getEventsByMonth"
        }]; }
}
