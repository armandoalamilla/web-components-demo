/**
 * JSdocs
 * @author Arturo & Armando
 */
export declare class NovaTabs {
    datajson: {
        items: any[];
    };
    confjson: any;
    updater: boolean;
    newTabData: {
        title: string;
        icon: string;
        enable: boolean;
        closable: boolean;
        content: string;
    };
    el: HTMLElement;
    event: any;
    activeKey: number;
    tabType: string;
    tabPosition: string;
    onEditCallback: any;
    onClickCallback: any;
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
    addTab(tabData: any): Promise<void>;
    /**
     * onEdit
     * @description Set fired callback when an edit is performed on the component
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onEdit(callback: Function): Promise<void>;
    /**
     * onTabClick
     * @description Set fired callback when a click is performed on the tab
     * @param callback callback sended with the Public API
     * @async
     * @callback
     */
    onTabClick(callback: Function): Promise<void>;
    componentDidUpdate(): void;
    render(): any[];
}
