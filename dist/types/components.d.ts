/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';
import {
  Moment,
} from 'moment';

export namespace Components {
  interface NovaCalendar {
    /**
    * Changes the view to card
    */
    'card': boolean;
    /**
    * changeLocale
    */
    'changeLocale': (lang: string, localeSpec: object) => Promise<void>;
    /**
    * changeValue
    */
    'changeValue': (newValue: any) => Promise<void>;
    /**
    * Object that contains all data with the items of each date with events and configuration
    */
    'content': any;
    /**
    * fullScreen
    */
    'fullscreen': () => Promise<void>;
    /**
    * onChangeValue
    */
    'onChangeValue': (Callback: Function) => Promise<void>;
    /**
    * onSelectValue
    */
    'onSelectValue': (Callback: Function) => Promise<void>;
    /**
    * toggleType
    */
    'toggleType': (type: "month" | "year") => Promise<void>;
    /**
    * Type of calendar, view by month or by year
    */
    'type': "month" | "year";
    /**
    * Selected moment value
    */
    'value': Moment;
  }
  interface NovaCascader {
    'addCustomTrigger': (el: HTMLElement) => Promise<void>;
    /**
    * blurCascader
    */
    'blurCascader': () => Promise<void>;
    'content': cascader;
    /**
    * focusCascader
    */
    'focusCascader': () => Promise<void>;
    /**
    * onCascaderSelect
    */
    'onCascaderSelect': (callback: cascaderCallback) => Promise<void>;
    /**
    * onPopupChange
    */
    'onPopupChange': (callback: cascaderCallback) => Promise<void>;
    'size': string;
  }
  interface NovaIcon {
    'color'?: string;
    /**
    * Props
    */
    'name': string;
    'options'?: string;
    'pre'?: string;
    'size'?: string;
  }
  interface NovaPopover {
    'location': "topleft" | "top" | "topright" |
    "botleft" | "bot" | "botright" |
    "lefttop" | "left" | "leftbot" |
    "righttop" | "right" | "rightbot";
    'trigger': "hover" | "focus" | "click";
  }
  interface NovaTabs {
    /**
    * addTab
    */
    'addTab': (tabData: any) => Promise<void>;
    /**
    * closeTab
    */
    'closeTab': (keyIndex: number) => Promise<void>;
    'confjson': any;
    'datajson': {
      items: any[];
    };
    'newTabData': { title: string; icon: string; enable: boolean; closable: boolean; content: string; };
    /**
    * onEdit
    */
    'onEdit': (callback: Function) => Promise<void>;
    /**
    * onTabClick
    */
    'onTabClick': (callback: Function) => Promise<void>;
    /**
    * openTab
    */
    'openTab': (keyIndex: any, event?: UIEvent) => Promise<void>;
    'updater': boolean;
  }
}

declare global {


  interface HTMLNovaCalendarElement extends Components.NovaCalendar, HTMLStencilElement {}
  var HTMLNovaCalendarElement: {
    prototype: HTMLNovaCalendarElement;
    new (): HTMLNovaCalendarElement;
  };

  interface HTMLNovaCascaderElement extends Components.NovaCascader, HTMLStencilElement {}
  var HTMLNovaCascaderElement: {
    prototype: HTMLNovaCascaderElement;
    new (): HTMLNovaCascaderElement;
  };

  interface HTMLNovaIconElement extends Components.NovaIcon, HTMLStencilElement {}
  var HTMLNovaIconElement: {
    prototype: HTMLNovaIconElement;
    new (): HTMLNovaIconElement;
  };

  interface HTMLNovaPopoverElement extends Components.NovaPopover, HTMLStencilElement {}
  var HTMLNovaPopoverElement: {
    prototype: HTMLNovaPopoverElement;
    new (): HTMLNovaPopoverElement;
  };

  interface HTMLNovaTabsElement extends Components.NovaTabs, HTMLStencilElement {}
  var HTMLNovaTabsElement: {
    prototype: HTMLNovaTabsElement;
    new (): HTMLNovaTabsElement;
  };
  interface HTMLElementTagNameMap {
    'nova-calendar': HTMLNovaCalendarElement;
    'nova-cascader': HTMLNovaCascaderElement;
    'nova-icon': HTMLNovaIconElement;
    'nova-popover': HTMLNovaPopoverElement;
    'nova-tabs': HTMLNovaTabsElement;
  }
}

declare namespace LocalJSX {
  interface NovaCalendar extends JSXBase.HTMLAttributes<HTMLNovaCalendarElement> {
    /**
    * Changes the view to card
    */
    'card'?: boolean;
    /**
    * Object that contains all data with the items of each date with events and configuration
    */
    'content'?: any;
    /**
    * Type of calendar, view by month or by year
    */
    'type'?: "month" | "year";
    /**
    * Selected moment value
    */
    'value'?: Moment;
  }
  interface NovaCascader extends JSXBase.HTMLAttributes<HTMLNovaCascaderElement> {
    'content'?: cascader;
    'size'?: string;
  }
  interface NovaIcon extends JSXBase.HTMLAttributes<HTMLNovaIconElement> {
    'color'?: string;
    /**
    * Props
    */
    'name'?: string;
    'options'?: string;
    'pre'?: string;
    'size'?: string;
  }
  interface NovaPopover extends JSXBase.HTMLAttributes<HTMLNovaPopoverElement> {
    'location'?: "topleft" | "top" | "topright" |
    "botleft" | "bot" | "botright" |
    "lefttop" | "left" | "leftbot" |
    "righttop" | "right" | "rightbot";
    'trigger'?: "hover" | "focus" | "click";
  }
  interface NovaTabs extends JSXBase.HTMLAttributes<HTMLNovaTabsElement> {
    'confjson'?: any;
    'datajson'?: {
      items: any[];
    };
    'newTabData'?: { title: string; icon: string; enable: boolean; closable: boolean; content: string; };
    'updater'?: boolean;
  }

  interface IntrinsicElements {
    'nova-calendar': NovaCalendar;
    'nova-cascader': NovaCascader;
    'nova-icon': NovaIcon;
    'nova-popover': NovaPopover;
    'nova-tabs': NovaTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}

