/**
 * @license
 * Copyright (c) 2014, 2019, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";define(["ojs/ojcore","jquery","ojs/ojcomponentcore","ojs/ojtime-base","ojs/internal-deps/dvt/DvtGantt","ojs/ojkeyset","ojs/ojvalidation-base"],function(e,t,o,r,n,a,i){var s={properties:{animationOnDataChange:{type:"string",enumValues:["auto","none"],value:"none"},animationOnDisplay:{type:"string",enumValues:["auto","none"],value:"none"},as:{type:"string",value:""},axisPosition:{type:"string",enumValues:["bottom","top"],value:"top"},dependencies:{type:"Array<Object>|Promise"},dependencyData:{type:"oj.DataProvider"},dnd:{type:"object",properties:{move:{type:"object",properties:{tasks:{type:"string",enumValues:["disabled","enabled"],value:"disabled"}}}}},end:{type:"string",value:""},gridlines:{type:"object",properties:{horizontal:{type:"string",enumValues:["auto","hidden","visible"],value:"auto"},vertical:{type:"string",enumValues:["auto","hidden","visible"],value:"auto"}}},majorAxis:{type:"object",properties:{converter:{type:"object",value:"{\"default\": null, \"seconds\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit'}), \"minutes\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit'}), \"hours\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric'}), \"days\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"weeks\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"months\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"quarters\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"years\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'year': 'numeric'})}",properties:{default:{type:"oj.Converter<string>"},seconds:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit, second: 2-digit})"},minutes:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit})"},hours:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric})"},days:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},weeks:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},months:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},quarters:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},years:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year: numeric})"}}},height:{type:"number"},scale:{type:"string",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},zoomOrder:{type:"Array<string>"}}},minorAxis:{type:"object",properties:{converter:{type:"object",value:"{\"default\": null, \"seconds\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit', 'second': '2-digit'}), \"minutes\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric', 'minute': '2-digit'}), \"hours\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'hour': 'numeric'}), \"days\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"weeks\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'numeric', 'day': '2-digit'}), \"months\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"quarters\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'month': 'long'}), \"years\": oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({'year': 'numeric'})}",properties:{default:{type:"oj.Converter<string>"},seconds:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit, second: 2-digit})"},minutes:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric, minute: 2-digit})"},hours:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour: numeric})"},days:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},weeks:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: numeric, day: 2-digit})"},months:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},quarters:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month: long})"},years:{type:"oj.Converter<string>",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year: numeric})"}}},height:{type:"number"},scale:{type:"string",enumValues:["days","hours","minutes","months","quarters","seconds","weeks","years"]},zoomOrder:{type:"Array<string>"}}},referenceObjects:{type:"Array<Object>",value:[]},rowAxis:{type:"object",properties:{label:{type:"object",properties:{renderer:{type:"function",properties:{parentElement:{type:"Element"},rowData:{type:"oj.ojGantt.Row"},itemData:{type:"Array<Object>"},componentElement:{type:"Element"},maxWidth:{type:"number"},maxHeight:{type:"number"}}}}},maxWidth:{type:"string",value:"none"},rendered:{type:"string",enumValues:["off","on"],value:"off"},width:{type:"string",value:"max-content"}}},rowDefaults:{type:"object",properties:{height:{type:"number"}}},rows:{type:"Array<Object>|Promise"},scrollPosition:{type:"object",writeback:!0,value:{y:0},properties:{offsetY:{type:"number"},rowIndex:{type:"number"},y:{type:"number",value:0}}},selection:{type:"Array<any>",writeback:!0,value:[]},selectionMode:{type:"string",enumValues:["multiple","none","single"],value:"none"},start:{type:"string",value:""},taskData:{type:"oj.DataProvider"},taskDefaults:{type:"object",properties:{baseline:{type:"object",properties:{borderRadius:{type:"string",value:"0"},height:{type:"number"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},borderRadius:{type:"string",value:"0"},height:{type:"number"},labelPosition:{type:"string|Array<string>",enumValues:["end","innerCenter","innerEnd","innerStart","none","start"],value:["end","innerCenter","start","max"]},progress:{type:"object",properties:{borderRadius:{type:"string",value:"0"},height:{type:"string",value:"100%"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}}}},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},type:{type:"string",enumValues:["auto","milestone","normal","summary"],value:"auto"}}},tooltip:{type:"object",properties:{renderer:{type:"function",properties:{parentElement:{type:"Element"},data:{type:"oj.ojGantt.RowTask"},rowData:{type:"oj.ojGantt.Row"},itemData:{type:"object"},componentElement:{type:"Element"},color:{type:"string"}}}}},trackResize:{type:"string",enumValues:["off","on"],value:"on"},translations:{type:"object",value:{},properties:{accessibleDependencyInfo:{type:"string"},accessiblePredecessorInfo:{type:"string"},accessibleSuccessorInfo:{type:"string"},accessibleTaskTypeMilestone:{type:"string"},accessibleTaskTypeSummary:{type:"string"},componentName:{type:"string"},finishFinishDependencyAriaDesc:{type:"string"},finishStartDependencyAriaDesc:{type:"string"},labelAndValue:{type:"string"},labelBaselineDate:{type:"string"},labelBaselineEnd:{type:"string"},labelBaselineStart:{type:"string"},labelClearSelection:{type:"string"},labelCountWithTotal:{type:"string"},labelDataVisualization:{type:"string"},labelDate:{type:"string"},labelEnd:{type:"string"},labelInvalidData:{type:"string"},labelLabel:{type:"string"},labelMoveBy:{type:"string"},labelNoData:{type:"string"},labelProgress:{type:"string"},labelRow:{type:"string"},labelStart:{type:"string"},startFinishDependencyAriaDesc:{type:"string"},startStartDependencyAriaDesc:{type:"string"},stateCollapsed:{type:"string"},stateDrillable:{type:"string"},stateExpanded:{type:"string"},stateHidden:{type:"string"},stateIsolated:{type:"string"},stateMaximized:{type:"string"},stateMinimized:{type:"string"},stateSelected:{type:"string"},stateUnselected:{type:"string"},stateVisible:{type:"string"},taskMoveCancelled:{type:"string"},taskMoveFinalized:{type:"string"},taskMoveInitiated:{type:"string"},taskMoveInitiatedInstruction:{type:"string"},taskMoveSelectionInfo:{type:"string"},tooltipZoomIn:{type:"string"},tooltipZoomOut:{type:"string"}}},valueFormats:{type:"object",properties:{baselineDate:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},baselineEnd:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},baselineStart:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},date:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},end:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},label:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},progress:{type:"object",properties:{converter:{type:"object",value:"oj.Validation.converterFactory(oj.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter({style: 'percent'})"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},row:{type:"object",properties:{tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}},start:{type:"object",properties:{converter:{type:"object"},tooltipDisplay:{type:"string",enumValues:["auto","off"],value:"auto"},tooltipLabel:{type:"string"}}}}},viewportEnd:{type:"string",value:""},viewportStart:{type:"string",value:""}},methods:{getContextByNode:{},refresh:{},setProperty:{},getProperty:{},setProperties:{},getNodeBySubId:{},getSubIdByNode:{}},events:{ojViewportChange:{},ojMove:{}},extension:{}},l={properties:{predecessorTaskId:{type:"any"},shortDesc:{type:"string"},successorTaskId:{type:"any"},svgClassName:{type:"string",value:""},svgStyle:{type:"object",value:{}},type:{type:"string",enumValues:["finishFinish","finishStart","startFinish","startStart"],value:"finishStart"}},extension:{}},c={properties:{label:{type:"string",value:""},labelStyle:{type:"object",value:{}}},extension:{}},p={properties:{baseline:{type:"object",properties:{borderRadius:{type:"string"},end:{type:"string",value:""},height:{type:"number"},start:{type:"string",value:""},svgClassName:{type:"string"},svgStyle:{type:"object"}}},borderRadius:{type:"string"},end:{type:"string",value:""},height:{type:"number"},label:{type:"string",value:""},labelPosition:{type:"string|Array<string>",enumValues:["end","innerCenter","innerEnd","innerStart","none","start"]},labelStyle:{type:"object",value:{}},progress:{type:"object",properties:{borderRadius:{type:"string"},height:{type:"string"},svgClassName:{type:"string"},svgStyle:{type:"object"},value:{type:"number"}}},rowId:{type:"any"},shortDesc:{type:"string"},start:{type:"string",value:""},svgClassName:{type:"string"},svgStyle:{type:"object"},type:{type:"string",enumValues:["auto","milestone","normal","summary"]}},extension:{}};e.__registerWidget("oj.ojGantt",t.oj.dvtTimeComponent,{widgetEventPrefix:"oj",options:{axisPosition:"top",animationOnDataChange:"none",animationOnDisplay:"none",as:"",dependencies:null,dependencyData:null,dnd:{move:{tasks:"disabled"}},end:"",gridlines:{horizontal:"auto",vertical:"auto"},minorAxis:{converter:{default:null,seconds:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit"}),hours:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric"}),days:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),weeks:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),months:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),quarters:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),years:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"})},height:null,scale:null,zoomOrder:null},majorAxis:{converter:{default:null,seconds:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit",second:"2-digit"}),minutes:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric",minute:"2-digit"}),hours:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({hour:"numeric"}),days:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),weeks:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"numeric",day:"2-digit"}),months:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),quarters:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({month:"long"}),years:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_DATETIME).createConverter({year:"numeric"})},height:null,scale:null,zoomOrder:null},referenceObjects:[],rowAxis:{rendered:"off",maxWidth:"none",width:"max-content",label:{renderer:null}},rowDefaults:{height:null},rows:null,scrollPosition:{y:0,rowIndex:null,offsetY:null},selection:[],selectionMode:"none",start:"",taskData:null,taskDefaults:{borderRadius:"0",labelPosition:["end","innerCenter","start","max"],height:null,svgClassName:"",svgStyle:{},type:"auto",progress:{borderRadius:"0",height:"100%",svgClassName:"",svgStyle:{}},baseline:{borderRadius:"0",height:null,svgClassName:"",svgStyle:{}}},tooltip:{renderer:null},valueFormats:{row:{tooltipLabel:void 0,tooltipDisplay:"auto"},start:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},end:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},date:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},label:{tooltipLabel:void 0,tooltipDisplay:"auto"},progress:{converter:i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_NUMBER).createConverter({style:"percent"}),tooltipLabel:void 0,tooltipDisplay:"auto"},baselineStart:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},baselineEnd:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"},baselineDate:{converter:null,tooltipLabel:void 0,tooltipDisplay:"auto"}},viewportEnd:"",viewportStart:"",viewportChange:null,move:null},_CreateDvtComponent:function(e,t,o){return e.styleClasses=this._getComponentStyleMap(),n.Gantt.newInstance(e,t,o)},_GetComponentStyleClasses:function(){var e=this._super();return e.push("oj-gantt"),e},_getComponentStyleMap:function(){var e={databody:"oj-gantt-container",dependencyLine:"oj-gantt-dependency-line",dependencyLineConnector:"oj-gantt-dependency-line-connector",nodata:"oj-gantt-no-data-message",hgridline:"oj-gantt-horizontal-gridline",vgridline:"oj-gantt-vertical-gridline",majorAxis:"oj-gantt-major-axis",majorAxisTicks:"oj-gantt-major-axis-separator",majorAxisLabels:"oj-gantt-major-axis-label",minorAxis:"oj-gantt-minor-axis",minorAxisTicks:"oj-gantt-minor-axis-separator",minorAxisLabels:"oj-gantt-minor-axis-label",row:"oj-gantt-row",rowLabel:"oj-gantt-row-label",task:"oj-gantt-task",taskBar:"oj-gantt-task-bar",taskMilestone:"oj-gantt-task-milestone",taskSummary:"oj-gantt-task-summary",taskDragImage:"oj-gantt-task-drag-image",baseline:"oj-gantt-baseline",baselineBar:"oj-gantt-baseline-bar",baselineMilestone:"oj-gantt-baseline-milestone",taskLabel:"oj-gantt-task-label",taskProgress:"oj-gantt-task-progress",tooltipLabel:"oj-gantt-tooltip-label",tooltipValue:"oj-gantt-tooltip-value",tooltipTable:"oj-gantt-tooltip-content",referenceObject:"oj-gantt-reference-object",selected:"oj-selected",hover:"oj-hover",focus:"oj-focus",draggable:"oj-draggable",activeDrop:"oj-active-drop",invalidDrop:"oj-invalid-drop"};return e},_IsDraggable:function(){return this.options.dnd&&this.options.dnd.move&&"enabled"===this.options.dnd.move.tasks},_ConvertLocatorToSubId:function(e){var t=e.subId;return"oj-gantt-taskbar"===t?t="taskbar["+e.rowIndex+"]["+e.index+"]":"oj-gantt-row-label"===t?t="rowLabel["+e.index+"]":"oj-gantt-dependency"===t?t="dependency["+e.index+"]":"oj-gantt-tooltip"===t&&(t="tooltip"),t},_ConvertSubIdToLocator:function(e){var t,o={};return 0===e.indexOf("taskbar")?(t=this._GetIndexPath(e),o.subId="oj-gantt-taskbar",o.rowIndex=t[0],o.index=t[1]):0===e.indexOf("rowLabel")?(t=this._GetIndexPath(e),o.subId="oj-gantt-row-label",o.index=t[0]):0===e.indexOf("dependency")?(t=this._GetIndexPath(e),o.subId="oj-gantt-dependency",o.index=t[0]):"tooltip"===e&&(o.subId="oj-gantt-tooltip"),o},_GetChildStyleClasses:function(){var e=this._super();return e["oj-gantt"]={path:"_resources/animationDuration",property:"ANIM_DUR"},e["oj-gantt-zoomin-icon"]=[{path:"_resources/zoomIn_bgc",property:"background-color"},{path:"_resources/zoomIn_bc",property:"border-color"}],e["oj-gantt-zoomin-icon oj-hover"]=[{path:"_resources/zoomIn_h_bgc",property:"background-color"},{path:"_resources/zoomIn_h_bc",property:"border-color"}],e["oj-gantt-zoomin-icon oj-active"]=[{path:"_resources/zoomIn_a_bgc",property:"background-color"},{path:"_resources/zoomIn_a_bc",property:"border-color"}],e["oj-gantt-zoomin-icon oj-disabled"]=[{path:"_resources/zoomIn_d_bgc",property:"background-color"},{path:"_resources/zoomIn_d_bc",property:"border-color"}],e["oj-gantt-zoomout-icon"]=[{path:"_resources/zoomOut_bgc",property:"background-color"},{path:"_resources/zoomOut_bc",property:"border-color"}],e["oj-gantt-zoomout-icon oj-hover"]=[{path:"_resources/zoomOut_h_bgc",property:"background-color"},{path:"_resources/zoomOut_h_bc",property:"border-color"}],e["oj-gantt-zoomout-icon oj-active"]=[{path:"_resources/zoomOut_a_bgc",property:"background-color"},{path:"_resources/zoomOut_a_bc",property:"border-color"}],e["oj-gantt-zoomout-icon oj-disabled"]=[{path:"_resources/zoomOut_d_bgc",property:"background-color"},{path:"_resources/zoomOut_d_bc",property:"border-color"}],e["oj-gantt-major-axis-label"]={path:"_resources/majorAxisLabelFontProp",property:"TEXT"},e["oj-gantt-minor-axis-label"]={path:"_resources/minorAxisLabelFontProp",property:"TEXT"},e["oj-gantt-container"]={path:"_resources/chartArea/strokeWidth",property:"stroke-width"},e["oj-gantt-horizontal-gridline"]={path:"_resources/horizontalGridlineWidth",property:"stroke-width"},e["oj-gantt-task-label"]={path:"_resources/taskLabelFontProp",property:"TEXT"},e["oj-gantt-row-label"]={path:"_resources/rowLabelFontProp",property:"TEXT"},e},_GetTranslationMap:function(){var e=this.options.translations,t=this._super();return t["DvtUtilBundle.GANTT"]=e.componentName,t["DvtUtilBundle.ZOOM_IN"]=e.tooltipZoomIn,t["DvtUtilBundle.ZOOM_OUT"]=e.tooltipZoomOut,t},_LoadResources:function(){this._super();var t=this.options._resources;t.zoomIn="oj-gantt-zoomin-icon",t.zoomIn_h="oj-gantt-zoomin-icon oj-hover",t.zoomIn_a="oj-gantt-zoomin-icon oj-active",t.zoomIn_d="oj-gantt-zoomin-icon oj-disabled",t.zoomOut="oj-gantt-zoomout-icon",t.zoomOut_h="oj-gantt-zoomout-icon oj-hover",t.zoomOut_a="oj-gantt-zoomout-icon oj-active",t.zoomOut_d="oj-gantt-zoomout-icon oj-disabled";var o=i.Validation.converterFactory(e.ConverterFactory.CONVERTER_TYPE_NUMBER);t.percentConverter=o.createConverter({style:"percent"})},_HandleEvent:function(e){var t=e.type;if("viewportChange"===t){var o=new Date(e.viewportStart).toISOString(),r=new Date(e.viewportEnd).toISOString(),n=e.majorAxisScale,a=e.minorAxisScale,i={viewportStart:o,viewportEnd:r,majorAxisScale:n,minorAxisScale:a};this._UserOptionChange("viewportStart",o),this._UserOptionChange("viewportEnd",r),this._UserOptionChange("majorAxis.scale",n),this._UserOptionChange("minorAxis.scale",a),this._trigger("viewportChange",null,i)}else if("move"===t){var s={taskContexts:e.taskContexts,value:e.value,start:e.start,end:e.end,baselineStart:e.baselineStart,baselineEnd:e.baselineEnd,rowContext:e.rowContext};this._trigger("move",null,s)}else if("scrollPositionChange"===t){var l={y:e.y,rowIndex:e.rowIndex,offsetY:e.offsetY};this._UserOptionChange("scrollPosition",l),this._trigger("scrollPositionChange",null,l)}else this._super(e)},_GetComponentNoClonePaths:function(){var e=this._super();return e.start=!0,e.end=!0,e.viewportStart=!0,e.viewportEnd=!0,e.referenceObjects={value:!0},e},_GetComponentDeferredDataPaths:function(){return{root:["rows","dependencies","taskData","dependencyData"]}},_GetSimpleDataProviderConfigs:function(){return{dependencyData:{templateName:"dependencyTemplate",templateElementName:"oj-gantt-dependency",resultPath:"dependencies",expandedKeySet:new a.ExpandAllKeySet},taskData:{templateName:"taskTemplate",templateElementName:"oj-gantt-task",resultPath:"rows",expandedKeySet:new a.ExpandAllKeySet}}},_GetDataProviderSeriesConfig:function(){return{dataProperty:"taskData",idAttribute:"rowId",itemsKey:"tasks",templateName:"rowTemplate",templateElementName:"oj-gantt-row"}},getContextByNode:function(e){var t=this.getSubIdByNode(e);return t&&"oj-gantt-tooltip"!==t.subId?t:null}}),s.extension._WIDGET_NAME="ojGantt",e.CustomElementBridge.register("oj-gantt",{metadata:s}),l.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-dependency",{metadata:l}),p.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-task",{metadata:p}),c.extension._CONSTRUCTOR=function(){},e.CustomElementBridge.register("oj-gantt-row",{metadata:c})});