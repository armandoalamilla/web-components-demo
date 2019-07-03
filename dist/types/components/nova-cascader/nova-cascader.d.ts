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
export declare class NovaCascader {
    content: cascader;
    size: string;
    private isActive;
    private result;
    private data;
    private path;
    customTrigger: any;
    private onPopupVisibleChange;
    private onSelect;
    host: HTMLElement;
    /**
     * @description
     */
    componentDidLoad(): void;
    /**
     * setComponentData
     *
     * @description Set component's initial data and configuration
     * @listens prop:content
     */
    setComponentData(): void;
    /**
     * Update cascader
     * @description Updated the path of the item and the data. If it's a final item, sets the searchbar's text.
     * @param list { cascaderItem[] } list of items where the event was fired
     * @param level { number } level of the list of items that fired the event
     * @param item  { cascaderItem } item that fired the event
     */
    updateCascader(list: cascaderItem[], level: number, item: cascaderItem, event: "click" | "hover"): void;
    /**
     * focusCascader
     * @description Public API method to focus the cascader's input
     * @async
     */
    focusCascader(): Promise<void>;
    /**
     * blurCascader
     * @description Public API method to blur the cascader's input
     * @async
     */
    blurCascader(): Promise<void>;
    /**
     * onPopupChange
     * @description Sets the callback that is fired when the cascader appears or disappears
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onPopupChange(callback: cascaderCallback): Promise<void>;
    /**
     * onCascaderSelect
     * @description Sets the callback that is fired when an item is selected
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onCascaderSelect(callback: cascaderCallback): Promise<void>;
    addCustomTrigger(el: HTMLElement): Promise<void>;
    /**
     * onCascaderSelect
     * @description Clears the data and fires onPopupVisibleChange when clicking outside the component.
     * @event
     * @requires stencil-click-outside module
     * @requires ClickOutside
     */
    ClickOutsideHandler(): void;
    /**
     * Cascader
     * @description Toggle cascader visibility on click
     */
    Cascader(): void;
    /**
     * clearSearch
     * @description clears the search result
     */
    clearSearch(): void;
    /**
     * setSearch
     * @description combine the search path with the separator and fires onSelect callback
     * @todo add prop to just use last item and verify search
     */
    setSearch(): void;
    /**
     * disable Event
     * @param event
     * @event
     */
    disableEvent(event: UIEvent): void;
    render(): any[];
}
