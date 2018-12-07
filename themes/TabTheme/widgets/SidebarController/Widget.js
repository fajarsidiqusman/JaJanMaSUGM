// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dojo/NodeList-fx":function(){define(["./query","./_base/lang","./aspect","./_base/fx","./fx"],function(l,e,f,d,n){l=l.NodeList;e.extend(l,{_anim:function(d,c,g){g=g||{};var k=n.combine(this.map(function(k){k={node:k};e.mixin(k,g);return d[c](k)}));return g.auto?k.play()&&this:k},wipeIn:function(d){return this._anim(n,"wipeIn",d)},wipeOut:function(d){return this._anim(n,"wipeOut",d)},slideTo:function(d){return this._anim(n,"slideTo",d)},fadeIn:function(e){return this._anim(d,"fadeIn",
e)},fadeOut:function(e){return this._anim(d,"fadeOut",e)},animateProperty:function(e){return this._anim(d,"animateProperty",e)},anim:function(e,c,g,m,l){var k=n.combine(this.map(function(f){return d.animateProperty({node:f,properties:e,duration:c||350,easing:g})}));m&&f.after(k,"onEnd",m,!0);return k.play(l||0)}});return l})},"themes/TabTheme/widgets/SidebarController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},
"url:themes/TabTheme/widgets/SidebarController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"min-pane" data-dojo-attach-point\x3d"minStateNode"\x3e\r\n    \r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"max-pane" data-dojo-attach-point\x3d"maxStateNode"\x3e\r\n    \x3cdiv class\x3d"title-list" data-dojo-attach-point\x3d"titleListNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"content-list" data-dojo-attach-point\x3d"contentListNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"other-group-pane" data-dojo-attach-point\x3d"otherGroupNode"\x3e\x3c/div\x3e\r\n\t\r\n  \x3cdiv class\x3d"tab-resizer jimu-widget-bg" data-dojo-attach-point\x3d"resizerNode"\x3e\r\n    \x3cdiv class\x3d"action-node jimu-float-trailing" data-dojo-attach-event\x3d"click:_doResize" data-dojo-attach-point\x3d"doResizeNode"\x3e\r\n      \x3cdiv class\x3d"left-arrow"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\t\r\n\x3c/div\x3e\r\n',
"url:themes/TabTheme/widgets/SidebarController/css/style.css":'.jimu-widget-sidebar-controller{overflow: hidden;}.jimu-widget-sidebar-controller .title-list{position: absolute; left: 0; right: 0; top: 0; height: 44px; border-top: 1px solid #3a3a3a; border-top: 1px solid rgba(255,255,255,0.08);}.jimu-widget-sidebar-controller .title-node{height: 44px; cursor: pointer; margin-top: -2px;}.jimu-widget-sidebar-controller .max-pane{position: absolute; top: 0; left: 0; right: 0; bottom: 26px; border: 1px solid #111111;}.jimu-widget-sidebar-controller .max-pane .title-node{}.jimu-widget-sidebar-controller .min-pane .title-node:nth-child(1){margin-top: -2px; border-top: 1px solid rgba(255, 255, 255, 0.08);}.jimu-widget-sidebar-controller .max-pane .title-node:nth-child(1){margin-left: 0;}.jimu-widget-sidebar-controller .title-node img{margin: 11px 29.62962962962963%; width: 40.74074074074074%; height: auto;}.jimu-widget-sidebar-controller .tab-indicator{width: 0px; height: 2px; margin: auto;}.jimu-widget-sidebar-controller .title-node:nth-child(1) .tab-indicator{background-color: #ec7655;}.jimu-widget-sidebar-controller .title-node:nth-child(2) .tab-indicator{background-color: #fac15a;}.jimu-widget-sidebar-controller .title-node:nth-child(3) .tab-indicator{background-color: #a3ca4b;}.jimu-widget-sidebar-controller .title-node:nth-child(4) .tab-indicator{background-color: #5eb4e6;}.jimu-widget-sidebar-controller .title-node:nth-child(5) .tab-indicator{background-color: #b996d5;}.jimu-widget-sidebar-controller .content-list{position: absolute; left: 0; top: 45px; right: 0; bottom: 0;}.jimu-widget-sidebar-controller .content-node{position: absolute; left: 0; right: 0; top: 0; bottom: 0; outline: 1px solid rgba(0,0,0, 0.3); border-top: 1px solid rgba(255,255,255, 0.08);}.jimu-widget-sidebar-controller .content-title-bg{position: absolute; left: 0; right: 0; top: -1px; height: 18px; opacity: 0.2;}.jimu-widget-sidebar-controller .content-title{position: absolute; left: 14px; top: 2px; color: #888; font: 10px Arial;}.jimu-widget-sidebar-controller .content-pane{position: absolute; left: 0; top: 18px; right: 0; bottom: 0; overflow: hidden;}.jimu-widget-sidebar-controller .content-pane .more-group-pane{position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden;}.jimu-widget-sidebar-controller .tab-resizer{left: 0; right: 0; bottom: 0; height: 24px; position: absolute; border: 1px solid #111111; border-top: 1px solid #333333; border-top: 1px solid rgba(255,255,255,0.08);}.jimu-widget-sidebar-controller .tab-resizer .action-node{width: 50px; overflow: hidden; height: 100%; cursor: pointer;}.jimu-widget-sidebar-controller .tab-resizer .action-node div{width: 11px; height: 24px; margin-left: auto; margin-right: auto; background-repeat: no-repeat; background-position: center;}.jimu-widget-sidebar-controller .tab-resizer .left-arrow{background-image: url(images/arrow_left.png);}.jimu-widget-sidebar-controller .tab-resizer .left-arrow:hover{background-image: url(images/arrow_left_hover.png);}.jimu-widget-sidebar-controller .tab-resizer .right-arrow{background-image: url(images/arrow_right.png);}.jimu-widget-sidebar-controller .tab-resizer .right-arrow:hover{background-image: url(images/arrow_right_hover.png);}.jimu-widget-sidebar-controller .min-pane{position: absolute; top: 0; bottom: 26px; left: 0; right: 0; border: 1px solid #111111;}.jimu-widget-sidebar-controller .other-group-pane{border: 1px solid #111111; border-left: none; position: absolute; left: 365px; top: 0; right: 0; bottom: 16px; overflow-y: auto;}.jimu-widget-sidebar-controller .other-group:hover{background-color: #333;}.jimu-widget-sidebar-controller .other-group-pane .jimu-state-active{background-color: #292929;}.jimu-widget-sidebar-controller .other-group-pane-title{width: 100%; height: 18px; position: relative;}.jimu-widget-sidebar-controller .other-group-pane-title .bg{position: absolute; left: 0; right: 0; top: 0; bottom: 0; border-bottom: 1px solid rgba(255,255,255,0.7); opacity: 0.3;}.jimu-widget-sidebar-controller .other-group-pane-title .text{position: absolute; left: 14px; top: 1px; color: white; font: 10px Arial;}.jimu-widget-sidebar-controller .other-group-pane-title .close{position: absolute; right: 5px; top: 3px; height: 11px; width: 35px; cursor: pointer; background: center center no-repeat url(images/close.png);}.jimu-widget-sidebar-controller .other-group{cursor: pointer; width: 100%; height: 45px; overflow: hidden;}.jimu-widget-sidebar-controller .other-group-icon{margin: 11px 24px; width: 22px; height: 22px;}.jimu-widget-sidebar-controller .other-group-title{margin: 15px 0; color: white; font: 12px Arial;}.jimu-widget-sidebar-controller .other-group-choose{margin: 15px 30px;}.jimu-widget-sidebar-controller .wp{border: 1px solid transparent;}.jimu-widget-sidebar-controller .wp-title{overflow: hidden;}.jimu-widget-sidebar-controller .wp-title .title-text{width: 57px; height: 20px; padding: 5px 13px; background-color: white; float: left; border-top-left-radius: 4px; color: #222; font: 12px Arial;}.jimu-widget-sidebar-controller .wp-title .title-angle{width: 21px; height: 20px; background: url(images/tab_triangle.png); float: left;}.jimu-widget-sidebar-controller .wp-pane{background-color: white; overflow: hidden; border-bottom-left-radius: 4px; border-bottom-right-radius: 4px; border-top-right-radius: 4px; position: relative;}.jimu-widget-sidebar-controller .min-pane .title-node:first-child{border-top: 1px solid #3a3a3a;}.jimu-widget-sidebar-controller .max-pane .title-node:first-child{margin-left: 0;}.jimu-widget-sidebar-controller .title-node:first-child .tab-indicator{background-color: #ec7655;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node .tab-indicator{background-color: #fac15a;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node .tab-indicator{background-color: #a3ca4b;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node+.title-node .tab-indicator{background-color: #5eb4e6;}.jimu-widget-sidebar-controller .title-node:first-child+.title-node+.title-node+.title-node+.title-node .tab-indicator{background-color: #b996d5;}.jimu-widget-sidebar-controller .content-title-bg{filter: alpha(opacity\x3d12); -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d12)"; filter: progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d12);}.jimu-widget-sidebar-controller .other-group-pane-title .bg{filter: alpha(opacity\x3d30); -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d30)"; filter: progid:DXImageTransform.Microsoft.Alpha(Opacity\x3d30);}.jimu-rtl .jimu-widget-sidebar-controller .other-group-pane-title .text{right: 14px; left: auto;}.jimu-rtl .jimu-widget-sidebar-controller .other-group-pane-title .close{left: 5px; right: auto;}',
"*now":function(l){l(['dojo/i18n!*preload*themes/TabTheme/widgets/SidebarController/nls/Widget*["ar","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/aspect dojo/query dojo/on dojo/mouse dojo/fx dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/utils dojo/NodeList-manipulate dojo/NodeList-fx".split(" "),function(l,e,f,d,n,k,c,g,m,q,t,r,u,p){return l([r,u],{baseClass:"jimu-widget-sidebar-controller jimu-main-background",moveTopOnActive:!1,maxWidth:365,minWidth:55,animTime:200,stateNode:null,currentTab:null,moreTab:!1,moreTabOpened:!1,currentOtherGroup:null,
lastSelectedIndex:-1,constructor:function(){this.tabs=[]},postMixInProperties:function(){this.inherited(arguments);this.nls.more=this.nls.more||"more";this.nls.otherPanels=this.nls.otherPanels||"Other Panels"},startup:function(){this.inherited(arguments);var a=this.createTabs();""===a?this.widgetManager.minimizeWidget(this):(this.widgetManager.maximizeWidget(this),this.setOpenedIds([a]))},getOpenedIds:function(){this.inherited(arguments);var a=[];this.currentTab&&this.currentTab.config&&this.currentTab.config.id?
a.push(this.currentTab.config.id):this.currentOtherGroup&&this.currentOtherGroup.id&&a.push(this.currentOtherGroup.id);return a},setOpenedIds:function(a){this._openLastTab(a)},onMinimize:function(){this._resizeToMin()},onMaximize:function(){this._resizeToMax()},getWidth:function(){var a=d.getContentBox(window.jimuConfig.layoutId);return.8*a.w>this.maxWidth?this.maxWidth:.8*a.w},resize:function(){"minimized"===this.windowState?this._resizeMinTitleNode():this._resizeToMax()},_resizePanels:function(){f.forEach(this.tabs,
function(a){a.selected&&a.panel&&a.panel.resize()},this)},_resizeTitleNode:function(){var a=(this.getWidth()-2-21-72)/5;f.forEach(c(".title-node",this.maxStateNode),function(b){d.setStyle(b,"width",a+"px")},this)},_resizeMinTitleNode:function(){var a=d.getContentBox(this.minStateNode),b=34;390>a.h&&(b=a.h/5-44);b+=2;f.forEach(c(".title-node",this.minStateNode),function(a){d.setStyle(a,"marginBottom",b+"px")},this)},setPosition:function(a){this.position=a;a=p.getPositionStyle(this.position);a.position=
"absolute";d.place(this.domNode,window.jimuConfig.layoutId);d.setStyle(this.domNode,a);this.started&&this.widgetManager.minimizeWidget(this)},createTabs:function(){var a=this.getAllConfigs(),b=[],h="";5>=a.length?(b=a,this.moreTab=!1):(b=a.splice(0,4),this.moreTab=!0);f.forEach(b,function(a){this.createTab(a);!0===a.openAtStart&&(h=a.id)},this);this.moreTab&&(this.createTab({label:this.nls.more,flag:"more",icon:this.folderUrl+"images/more_tab_icon.png",groups:a}),""===h&&f.forEach(a,function(a){!0===
a.openAtStart&&(h=a.id)}));return h},createTab:function(a){var b=this._createContentNode(a);a={title:this._createTitleNode(a),content:b,contentPane:c(".content-pane",b)[0],config:a,selected:!1,flag:a.flag,moreGroupWidgets:[],panels:[]};this.tabs.push(a);return a},onSelect:function(a){a=parseInt(c(a.currentTarget).attr("i")[0],10);this.selectTab(a)},selectTab:function(a){var b;if(!this.tabs[a].selected||"more"===this.tabs[a].flag){if(void 0===this.tabs[this.getSelectedIndex()]||"more"!==this.tabs[this.getSelectedIndex()].flag)this.lastSelectedIndex=
this.getSelectedIndex();this._showIndicator(a);b=this._getIndicatorNodeByIndex(a).style("backgroundColor");c(".content-title-bg",this.tabs[a].content).style({background:b});f.forEach(this.tabs,function(b,c){a===c?b.selected=!0:b.selected&&(b.selected=!1,b.panel&&this.panelManager.closePanel(b.panel))},this);"more"===this.tabs[a].flag?this.showMoreTabContent(this.tabs[a]):(c(".content-node",this.domNode).style({display:"none"}),c(this.tabs[a].content).style({display:"block"}),0===c(".jimu-wc-tpc",
this.tabs[a].content).length&&this.showTabContent(this.tabs[a]));this._resizePanels()}},onAction:function(a,b){"highLight"===a&&b&&(b=c('div[settingid\x3d"'+b.widgetId+'"]',this.stateNode)[0],this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},_openLastTab:function(a){if(a&&a.length&&0<a.length){var b=this.getAllConfigs(),c=f.map(b,function(a){return a&&a.id?a.id:null});f.forEach(a,e.hitch(this,function(a){a=c.indexOf(a);-1!==a&&(4>a?this.selectTab(a):this._addGroupToMoreTab(b[a]))}))}},
_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=d.getMarginBox(a),c=d.getContentBox(a);a.parentElement.firstElementChild===a||window.isRTL||(b.l=b.l+b.w-c.w);this.hlDiv=d.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},a,"after")}},_removeHighLight:function(){this.hlDiv&&(d.destroy(this.hlDiv),this.hlDiv=null)},_getTitleNodeByIndex:function(a){return c(".title-node:nth-child("+(a+1)+")","maximized"===
this.windowState?this.maxStateNode:this.minStateNode)},_onMouseEnter:function(a){a=parseInt(c(a.currentTarget).attr("i")[0],10);"maximized"===this.windowState&&this.tabs[a].selected&&"more"!==this.tabs[a].flag||this._showIndicator(a)},_onMouseLeave:function(a){a=parseInt(c(a.currentTarget).attr("i")[0],10);"maximized"===this.windowState&&this.tabs[a].selected&&(this.moreTabOpened&&"more"===this.tabs[a].flag||!this.moreTabOpened&&"more"!==this.tabs[a].flag)||this._hideIndicator(a)},_getIndicatorNodeByIndex:function(a){return c(".tab-indicator",
this._getTitleNodeByIndex(a)[0])},_showIndicator:function(a){c(".tab-indicator",this.domNode).style({width:"0"});var b=d.getContentBox(this._getTitleNodeByIndex(a)[0]).w;this._getIndicatorNodeByIndex(a).animateProperty({properties:{width:b},duration:this.animTime,auto:!0})},_hideIndicator:function(a){this._getIndicatorNodeByIndex(a).animateProperty({properties:{width:0},duration:this.animTime,auto:!0})},getSelectedIndex:function(){for(var a=0,a=0;a<this.tabs.length;a++)if(this.tabs[a].selected)return a;
return-1},showTabContent:function(a){var b=a.config;this.showGroupContent(b,a);this.currentTab=!1===b.inPanel?null:a},showGroupContent:function(a,b){var d;a.widgets&&1<a.widgets.length&&c(".content-title",b.content).text(a.label);!1===a.inPanel?this.widgetManager.loadWidget(a).then(e.hitch(this,function(c){var d;d="more"===b.flag?"undefined":a.id;this._resizeToMin();d=this._getOffPanelPosition(d,this.widgetManager.getWidgetMarginBox(c));c.setPosition(d);this.widgetManager.openWidget(c)})):this.panelManager.showPanel(a).then(e.hitch(this,
function(h){c(h.domNode).style(p.getPositionStyle({left:0,right:0,top:0,bottom:0}));"more"===b.flag?(d=c('.more-group-pane[label\x3d"'+a.label+'"]',b.contentPane),d.append(h.domNode)):c(b.contentPane).append(h.domNode);-1===f.indexOf(b.panels,h)&&b.panels.push(h);b.panel=h}))},_getOffPanelPosition:function(a,b){var d={};a=c('div[settingid\x3d"'+a+'"]',this.stateNode)[0];a=t.position(a);d.top=a.y;window.isRTL?d.right=a.x-b.w-10:d.left=a.x+a.w+10;return d},showMoreTabContent:function(a){a=a.config.groups;
var b=null,d=null;c(this.otherGroupNode).empty();this._createOtherGroupPaneTitle();f.forEach(a,function(a){this._createMoreGroupNode(a)},this);window.isRTL?(b={left:this.getWidth()-this.minWidth,right:this.minWidth-this.getWidth()},d={left:0,right:this.minWidth}):(b={left:this.minWidth-this.getWidth(),right:this.getWidth()-this.minWidth},d={left:this.minWidth,right:0});q.combine([c(this.maxStateNode).animateProperty({properties:b,duration:this.animTime}),c(this.otherGroupNode).animateProperty({properties:d,
duration:this.animTime})]).play();this.moreTabOpened=!0},_createOtherGroupPaneTitle:function(){var a=d.create("div",{"class":"other-group-pane-title"},this.otherGroupNode),b;d.create("div",{"class":"bg"},a);d.create("div",{"class":"text",innerHTML:this.nls.otherPanels},a);b=d.create("div",{"class":"close"},a);this.own(g(b,"click",e.hitch(this,function(){this._hideOtherGroupPane();-1!==this.lastSelectedIndex&&this.selectTab(this.lastSelectedIndex)})));return a},_createMoreGroupNode:function(a){var b=
d.create("div",{"class":"other-group","data-widget-id":a.id},this.otherGroupNode),h;d.create("img",{src:a.icon,"class":"other-group-icon jimu-float-leading"},b);d.create("div",{"class":"other-group-title jimu-float-leading",innerHTML:p.stripHTML(a.label)},b);h=d.create("img",{"class":"other-group-choose jimu-float-trailing",style:{opacity:0},src:this.folderUrl+(window.isRTL?"images/arrow_choose_rtl.png":"images/arrow_choose.png")},b);this.own(g(b,"click",e.hitch(this,this._onOtherGroupClick,a)));
this.own(g(b,"mousedown",e.hitch(this,function(){c(b).addClass("jimu-state-active")})));this.own(g(b,"mouseup",e.hitch(this,function(){c(b).removeClass("jimu-state-active")})));this.own(g(b,m.enter,e.hitch(this,function(){c(h).style({opacity:1})})));this.own(g(b,m.leave,e.hitch(this,function(){c(h).style({opacity:0})})));return b},_hideOtherGroupPane:function(){var a=null,a=window.isRTL?{left:0-this.getWidth(),right:this.getWidth()}:{left:this.getWidth(),right:0-this.getWidth()};q.combine([c(this.maxStateNode).animateProperty({properties:{left:0,
right:0}}),c(this.otherGroupNode).animateProperty({properties:a})]).play();this.moreTabOpened=!1;(a=this.tabs[this.getSelectedIndex()])&&"more"===a.flag&&this._hideIndicator(this.getSelectedIndex())},_onOtherGroupClick:function(a){if(null===this.currentOtherGroup||this.currentOtherGroup.label!==a.label){var b=null,b=window.isRTL?{left:this.getWidth(),right:0-this.getWidth()}:{left:0-this.getWidth(),right:this.getWidth()},b=q.combine([c(this.maxStateNode).animateProperty({properties:b,duration:this.animTime}),
c(this.otherGroupNode).animateProperty({properties:{left:0,right:0},duration:this.animTime})]);this.own(k.after(b,"onEnd",e.hitch(this,this._addGroupToMoreTab,a)));b.play()}else this._addGroupToMoreTab(a)},_addGroupToMoreTab:function(a){var b=this.tabs[4];b.panel&&this.panelManager.closePanel(b.panel);c(".content-node",this.domNode).style({display:"none"});c(b.content).style({display:"block"});if(null===this._getGroupFromMoreTab(b,a)){var h=d.create("div",{"class":"more-group-pane",label:a.label},
b.contentPane);c(b.contentPane).append(h);b.moreGroupWidgets.push({glabel:a.label,widgets:[]})}this.currentTab=null;this.currentOtherGroup=a;this.showGroupContent(a,b);c(".more-group-pane",b.contentPane).style({display:"none"});c('.more-group-pane[label\x3d"'+a.label+'"]',b.contentPane).style({display:"block"});this._hideOtherGroupPane();this._resizePanels()},_getGroupFromMoreTab:function(a,b){for(var d=0;d<a.moreGroupWidgets.length;d++)if(a.moreGroupWidgets[d].glabel===b.label)return a.moreGroupWidgets[d];
return null},_createTitleNode:function(a){var b=(this.getWidth()-2-21-72)/5,c=a.label,f=a.icon,b=d.create("div",{title:c,"class":"title-node jimu-float-leading jimu-leading-margin15",settingid:a.id,i:this.tabs.length,style:{width:b+"px"}},this.titleListNode);d.create("div",{"class":"tab-indicator"},b);var k=d.create("img",{src:f},b),c=d.create("div",{title:c,"class":"title-node",settingid:a.id,i:this.tabs.length},this.minStateNode);d.create("div",{"class":"tab-indicator"},c);f=d.create("img",{src:f},
c);window.isRTL&&a.mirrorIconForRTL&&d.addClass(k,"jimu-flipx");window.isRTL&&a.mirrorIconForRTL&&d.addClass(f,"jimu-flipx");this.own(g(b,"click",e.hitch(this,this.onSelect)));this.own(g(b,m.enter,e.hitch(this,this._onMouseEnter)));this.own(g(b,m.leave,e.hitch(this,this._onMouseLeave)));this.own(g(c,"click",e.hitch(this,this._onMinIconClick,c)));this.own(g(c,m.enter,e.hitch(this,this._onMouseEnter)));this.own(g(c,m.leave,e.hitch(this,this._onMouseLeave)));return b},_onMinIconClick:function(a){a=c(a).attr("i")[0];
var b=this.tabs[a],d=b.config;!1===d.inPanel?b.selected?(b.selected=!1,this.widgetManager.closeWidget(d.id)):(this._hideOffPanelWidgets(),this.selectTab(parseInt(a,10))):(this._hideOffPanelWidgets(),this.widgetManager.maximizeWidget(this),this.selectTab(parseInt(a,10)))},_hideOffPanelWidgets:function(){f.forEach(this.tabs,function(a){"more"!==a.flag?a.config.inPanel||(a.selected=!1,this.widgetManager.closeWidget(a.config.id)):f.forEach(a.config.groups,function(b){b.inPanel||(a.selected=!1,this.widgetManager.closeWidget(b.id))},
this)},this)},_createContentNode:function(a){var b=d.create("div",{"class":"content-node"},this.contentListNode);d.create("div",{"class":"content-title-bg"},b);d.create("div",{"class":"content-title",innerHTML:p.stripHTML(a.widgets&&1<a.widgets.length?a.label:"")},b);d.create("div",{"class":"content-pane"},b);this.own(g(b,"click",e.hitch(this,function(){this.moreTabOpened&&(this._hideOtherGroupPane(),-1!==this.lastSelectedIndex&&this.selectTab(this.lastSelectedIndex))})));return b},_doResize:function(){"maximized"===
this.windowState?this.widgetManager.minimizeWidget(this.id):(this._hideOffPanelWidgets(),this.widgetManager.maximizeWidget(this.id))},_resizeToMin:function(){c(this.domNode).style("width",this.minWidth+"px");c(this.minStateNode).style("display","block");c(this.maxStateNode).style("display","none");this.currentTab&&this.currentTab.panel&&this.panelManager.closePanel(this.currentTab.panel);window.isRTL?c("div",this.doResizeNode).removeClass("right-arrow").addClass("left-arrow"):c("div",this.doResizeNode).removeClass("left-arrow").addClass("right-arrow");
this._resizeMinTitleNode();n.publish("changeMapPosition",{left:this.minWidth});this.stateNode=this.minStateNode},_resizeToMax:function(){c(this.domNode).style("width",this.getWidth()+"px");this._resizeTitleNode();c(this.minStateNode).style("display","none");c(this.maxStateNode).style("display","block");window.isRTL?c("div",this.doResizeNode).removeClass("left-arrow").addClass("right-arrow"):c("div",this.doResizeNode).removeClass("right-arrow").addClass("left-arrow");this._resizePanels();n.publish("changeMapPosition",
{left:this.getWidth()});this.currentTab&&this.showGroupContent(this.currentTab.config,this.currentTab);this.stateNode=this.maxStateNode}})});