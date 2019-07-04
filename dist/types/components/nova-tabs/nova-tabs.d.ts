/**
 * JSdocs
 * @author Arturo & Armando & Tarin
 */
export declare class NovaTabs {
    /** Used to force update on the render. No value. */
    updater: boolean;
    /** Default pane content of new created tabs */
    defaultText: string;
    /** Default tag string of new created tabs */
    defaultTag: string;
    /** Default initial active Tab index. Index range starts from 0.*/
    default: number;
    /** Basic style of tabs. 'Card' style will default position property to horizontal. */
    type: "line" | "card";
    /** Orientation of tabs. */
    position: "horizontal" | "vertical";
    /** Maximum number of open tabs */
    limit: number;
    /** Enables a button to add a new tabs to the list. Remove property to hide button.*/
    addButton: boolean;
    /** JS prefix */
    jsprefix: string;
    el: HTMLElement;
    /** Array of tab buttons */
    _tabSlot: any[];
    /** Array of tab panels */
    _panelSlot: any[];
    /** Current active tab key */
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
