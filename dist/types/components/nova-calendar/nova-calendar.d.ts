import { Moment } from "moment";
/**
 * @author Alejandro Tarin, Armando Aguiar, Arturo Rojas, Javier Saldivar, Alejandro Roiz
 */
export declare class NovaCalendar {
    /** Object that contains all data with the items of each date with events and configuration */
    content: any;
    /** Selected moment value */
    value: Moment;
    /** Type of calendar, view by month or by year */
    type: "month" | "year";
    /** Changes the view to card */
    card: boolean;
    calendar: any[];
    monthCalendar: any[];
    now: Moment;
    activeMonth: number;
    activeYear: number;
    /** Valid range of years to display the calendar */
    validRange: [Moment, Moment];
    eventsByYear: {};
    eventsByMonth: {};
    generalEvents: {};
    months: string[];
    years: number[];
    days: string[];
    _onSelect: Function;
    _onChange: Function;
    host: HTMLElement;
    /**
     * nowChangeMonth
     * @description Recieves an object with the month and day and changes to that date
     * @param {month, day} object with month and day we want to change to
     */
    nowChangeMonth({ month, day }: {
        month: any;
        day: any;
    }): void;
    /**
     * nowSetYear
     * @description recieves the event and fills the calendar (used in year mode)
     * @param event
     */
    nowSetYear(event: any): void;
    /**
     * nowSetMonth
     * @description recieves the event and fills the calendar (used in month mode)
     * @param event
     */
    nowSetMonth(event: any): void;
    /**
     * fillCalendar
     * @description used to fill an array with the valid dates from the month being hovered
     */
    fillCalendar(): void;
    /**
     * setData
     * @description sets the months days and years used to fill the selects in the calendar
     */
    setData(): void;
    /**
     * componentDidLoad
     * @description fill the calendar once the component is loaded to the browser
     */
    componentDidLoad(): void;
    /**
     * componentWillLoad
     * @description when the component will Load select the valid ranges for the years to be displayed in the calendar
     */
    componentWillLoad(): void;
    /**
     * watchContent
     * @description once the content is changed get the events we need
     * @listens prop:content
     */
    watchContent(): void;
    /**
     * getEventsByYear
     * @description fill the events by year with the data from the confJSON, or an empty object
     * @listens prop:activeYear
     */
    getEventsByYear(): void;
    /**
     * getEventsByMonth
     * @description fill the events by month with the data from the confJSON, or an empty object
     * @listens prop:activeMonth
     */
    getEventsByMonth(): void;
    /**
     * getEventsByDay
     * @description return the events in the date selected
     * @param day string with the day to check
     */
    getEventsByDay(day: any): any;
    /**
     * getGeneralEventByMonth
     * @description return the events in the month selected
     * @param month string with the month to check
     */
    getGeneralEventByMonth(month: any): any;
    /**
     * getCellClass
     * @description change class of the cell selected depending on its state
     * @param {month, day} object with month and day we want to check
     */
    getCellClass({ month, day }: {
        month: any;
        day: any;
    }): "inactive" | "" | "selected";
    /**
     * fullScreen
     * @description Public API method to enter fullscreen
     * @async
     */
    fullscreen(): Promise<void>;
    /**
     * onChangeValue
     * @description Sets the callback that is fired when the value of the calendar changes
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onChangeValue(Callback: Function): Promise<void>;
    /**
     * onSelectValue
     * @description Sets the callback that is fired when the item is selected
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onSelectValue(Callback: Function): Promise<void>;
    /**
     * changeValue
     * @description Sets the callback that is fired when any value is changed
     * @param newValue any value to change
     * @async
     */
    changeValue(newValue: any): Promise<void>;
    /**
     * toggleType
     * @description Sets the callback that is fired when the toggle type in the calendar changes
     * @param type the type of calendar we are viewing by month or year
     * @async
     */
    toggleType(type: "month" | "year"): Promise<void>;
    /**
     * changeLocale
     * @description Sets the callback that is fired when the locale is changed
     * @param lang string that represents the language
     * @param localeSpec object that holds the specs of the locale
     * @async
     * @callback
     */
    changeLocale(lang: string, localeSpec: object): Promise<void>;
    render(): any[];
}
