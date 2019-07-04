/**
 * JSdocs
 * @author Arturo & Armando & Tarin
 */
export declare class NovaTabs {
    updater: boolean;
    defaultText: string;
    defaultTag: string;
    default: string;
    type: string;
    position: string;
    limit: string;
    addButton: boolean;
    jsprefix: string;
    el: HTMLElement;
    _tabSlot: any[];
    _panelSlot: any[];
    activeKey: number;
    onEditCallback: (_index: number, _event: any) => void;
    onClickCallback: (_index: number, _event: any) => {};
    /**
     * openTab
     * @description Public API method to open a Tab and display its content.
     * @param keyIndex index to identify which tab was clicked
     * @param event event that triggered the call
     * @async
     */
    openTab(keyIndex: any, event?: UIEvent): Promise<void>;
    /**
     * closeTab
     * @description Public API method to close a selected tab
     * @param keyIndex index to identify which tab was clicked
     * @async
     */
    closeTab(keyIndex: number): Promise<void>;
    /**
     * addTab
     * @description Public API method to add a new Tab with preconfigured content.
     * @param tabData struct from where the tab content is read
     * @async
     */
    addTab(tabNode?: Node, panelNode?: Node): Promise<void>;
    /**
     * onEdit
     * @description Set fired callback when an edit is performed on the component
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onEdit(callback: any): Promise<void>;
    /**
     * onTabClick
     * @description Set fired callback when a click is performed on the tab
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onTabClick(callback: any): Promise<void>;
    componentDidUpdate(): void;
    componentDidLoad(): void;
    getSlottedContent(): void;
    selectDefault(): void;
    handleKeyPress(index: any, event: any): void;
    createNewTab(): HTMLElement[];
    render(): any[];
}
