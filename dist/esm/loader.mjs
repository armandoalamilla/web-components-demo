import { a as patchEsm, b as bootstrapLazy } from './chunk-42151d41.js';

const defineCustomElements = (win, options) => {
  return patchEsm().then(() => {
    bootstrapLazy([[{"dark":"nova-calendar_5-dark","default":"nova-calendar_5-default"},[[1,"nova-calendar",{"content":[8],"value":[1040],"type":[1025],"card":[1028],"calendar":[32],"monthCalendar":[32],"now":[32],"activeMonth":[32],"activeYear":[32],"validRange":[32],"eventsByYear":[32],"eventsByMonth":[32],"generalEvents":[32],"months":[32],"years":[32],"days":[32],"_onSelect":[32],"_onChange":[32],"fullscreen":[64],"onChangeValue":[64],"onSelectValue":[64],"changeValue":[64],"toggleType":[64],"changeLocale":[64]}],[1,"nova-cascader",{"content":[16],"size":[1],"isActive":[32],"result":[32],"data":[32],"path":[32],"customTrigger":[32],"onPopupVisibleChange":[32],"onSelect":[32],"focusCascader":[64],"blurCascader":[64],"onPopupChange":[64],"onCascaderSelect":[64],"addCustomTrigger":[64]}],[1,"nova-popover",{"trigger":[1],"location":[1],"popoverActive":[32]}],[1,"nova-tabs",{"updater":[4],"defaultText":[1,"default-text"],"defaultTag":[1,"default-tag"],"default":[2],"type":[1],"position":[1],"limit":[2],"addButton":[4,"add-button"],"jsprefix":[1],"_tabSlot":[32],"_panelSlot":[32],"activeKey":[32],"onEditCallback":[32],"onClickCallback":[32],"openTab":[64],"closeTab":[64],"addTab":[64],"onEdit":[64],"onTabClick":[64]}],[0,"nova-icon",{"name":[1],"size":[1],"pre":[1],"options":[1],"color":[1]}]]]], options);
  });
};

export { defineCustomElements };
