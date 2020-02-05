(this["webpackJsonppoke-macros-joycondroid"]=this["webpackJsonppoke-macros-joycondroid"]||[]).push([[0],{10:function(e,t,a){e.exports=a(18)},16:function(e,t,a){},17:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),o=a.n(r),i=a(7),c=a.n(i),u=a(2),h=a(3),l=a(5),d=a(4),p=a(1),m=a(6),v=(a(16),0),b=1,f=2,k=3;function g(e){return e.toISOString().slice(0,10)}function y(e){var t={width:"".concat(e.percentage,"%")};return s.a.createElement("div",{className:"progress-bar"},s.a.createElement("div",{className:"filler",style:t}))}var S=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){this.props.onChange(e.target.checked)}},{key:"render",value:function(){return s.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.handleChange})}}]),t}(s.a.Component),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={},a.handleChange=a.handleChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleChange",value:function(e){""!==e.target.value?this.props.onChange(e.target.value):this.props.onChange(g(new Date))}},{key:"render",value:function(){return s.a.createElement("input",{type:"date",className:"date-input",readOnly:this.props.readonly,value:this.props.date,onChange:this.handleChange})}}]),t}(s.a.Component),w=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={active:!1,locked:!1},a.handleSDChange=a.handleSDChange.bind(Object(p.a)(a)),a.handleEDChange=a.handleEDChange.bind(Object(p.a)(a)),a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"handleSDChange",value:function(e){this.props.onStartDateChange(e)}},{key:"handleEDChange",value:function(e){this.props.onEndDateChange(e)}},{key:"render",value:function(){var e="",t=!this.props.active||this.props.locked;switch(this.props.macro){default:break;case 0:e=s.a.createElement("div",{className:"MacroParameters",id:"TimeSkipParams"},s.a.createElement("label",{className:"Parameter"},"Start Date",s.a.createElement(D,{id:"startDate",name:"start-date",date:this.props.startDate,onChange:this.handleSDChange,readonly:t})),s.a.createElement("label",{className:"Parameter"},"End Date",s.a.createElement(D,{id:"endDate",name:"end-date",date:this.props.endDate,onChange:this.handleEDChange,readonly:t})));break;case 1:case 2:return s.a.createElement("input",{type:"checkbox",checked:this.props.checked,onChange:this.handleChange})}return e}}]),t}(s.a.Component);var E=function(){function e(t,a,n){var s,r=this;for(Object(u.a)(this,e),this.name=t,this.state=v,this.onWait=!1,this.waitTimeout=null,this.runner=null,this.segments=[],this.totalSteps=0,this.currentOverallStep=0,s=0;s<a.length;s++){var o=a[s],i=1;void 0!==n&&(i=n[s]),fetch(o).then((function(e){return e.json()})).then((function(e){return r.initSegmentInfo(e,i)}))}console.log(this.totalSteps)}return Object(h.a)(e,[{key:"initSegmentInfo",value:function(e,t){this.segments.push({steps:e,reps:t});var a=e.map((function(e){return e.count})).reduce((function(e,t){return e+t}),0);this.totalSteps=this.totalSteps+a*t}},{key:"progress",value:function(){return 0===this.totalSteps?0:this.currentOverallStep/this.totalSteps}},{key:"startRunner",value:function(){var e=c.a.mark((function e(){var t,a,n,s,r,o,i,u,h,l;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.currentOverallStep=0,t={state:this.state,abort:!1},a=0;case 3:if(!(a<this.segments.length)){e.next=60;break}n=this.segments[a],s=n.steps,r=n.reps,o=0;case 8:if(!(o<r)){e.next=57;break}i=0;case 10:if(!(i<s.length)){e.next=54;break}case 11:if(this.state===b){e.next=20;break}return void(e.next=14);case 14:if(!(t=e.sent).abort){e.next=17;break}return e.abrupt("return");case 17:this.state=t.state,e.next=11;break;case 20:u=s[i],h={button:u.button,pressed:!0},l=0,l=0;case 24:if(!(l<u.count)){e.next=51;break}h.pressed=!0,this.wait(Math.max(u.onTime,20));case 27:if(!this.onWait){e.next=36;break}return e.next=30,h;case 30:if(!(t=e.sent).abort){e.next=33;break}return e.abrupt("return");case 33:this.state=t.state,e.next=27;break;case 36:h.pressed=!1,this.wait(Math.max(u.offTime,20));case 38:if(!this.onWait&&this.state!==f){e.next=47;break}return e.next=41,h;case 41:if(!(t=e.sent).abort){e.next=44;break}return e.abrupt("return");case 44:this.state=t.state,e.next=38;break;case 47:this.currentOverallStep++;case 48:l++,e.next=24;break;case 51:i++,e.next=10;break;case 54:o++,e.next=8;break;case 57:a++,e.next=3;break;case 60:return e.abrupt("return");case 61:case"end":return e.stop()}}),e,this)}));this.runner=function(e,t){var a=e.apply(t);return a.next(),function(e){return a.next(e)}}(e,this)}},{key:"wait",value:function(e){this.waitTimeout=setTimeout(this.resume,e,this),this.onWait=!0}},{key:"resume",value:function(e){e.onWait=!1}},{key:"reset",value:function(){this.state=v,this.onWait&&(this.onWait=!1,clearTimeout(this.waitTimeout),this.waitTimeout=null),this.currentOverallStep=0,null!==this.runner&&(this.runner({state:this.state,abort:!0}),this.runner=null)}}]),e}(),P=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(l.a)(this,Object(d.a)(t).call(this,e))).state={},a.onButtonEvent=a.onButtonEvent.bind(Object(p.a)(a)),a.onUseParams=a.onUseParams.bind(Object(p.a)(a)),a.onStartDateChange=a.onStartDateChange.bind(Object(p.a)(a)),a.onEndDateChange=a.onEndDateChange.bind(Object(p.a)(a)),a.macros=[],a.macros[0]=new E("Skip First Day",["./macros/SkipFirstDay.json"],[1]),a.macros[1]=new E("Skip First Day",["./macros/SkipFirstDay.json"],[1]),a.selectedMacro=0;var n=new Date,s=new Date;return s.setDate(s.getDate()+1),a.state={selectedMacro:a.selectedMacro,macroState:a.macros[a.selectedMacro].state,macroProgress:0,useParams:!1,locked:!1,startDate:g(n),endDate:g(s)},a}return Object(m.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.UpdateTimerId=setInterval((function(){return e.update()}),20)}},{key:"componentWillUnmount",value:function(){clearInterval(this.UpdateTimerId)}},{key:"update",value:function(){var e=this.macros[this.selectedMacro];if(this.setState({selectedMacro:this.selectedMacro}),this.setState({macroState:e.state}),this.setState({macroProgress:100*e.progress()}),e.state!==k){var t=e.runner;if(null!==t){var a=t({state:e.state,abort:!1});void 0!==a&&(void 0!==a.value&&this.handleSwitchKeys(a.value.button,a.value.pressed),a.done&&(e.state=k))}}}},{key:"setMacro",value:function(e){this.selectedMacro=e;var t=this.macros[this.selectedMacro];t.state!==v&&(t.reset(),console.log("reset"))}},{key:"onButtonEvent",value:function(e,t){var a=new Audio("/click.mp3");t&&a.play();var n=this.macros[this.selectedMacro];switch(e){default:return;case"play":switch(n.state){default:case b:case f:break;case v:n.startRunner();break;case k:n.reset(),n.startRunner()}n.state=b,this.setState({playPressed:t});break;case"pause":n.state===b&&(n.state=f),this.setState({pausePressed:t});break;case"reset":n.state!==v&&(n.reset(),console.log("reset")),this.setState({resetPressed:t})}this.setState({macroState:n.state})}},{key:"onUseParams",value:function(){var e=!this.state.useParams;this.setState({useParams:e})}},{key:"onStartDateChange",value:function(e){var t=new Date(e),a=new Date(this.state.endDate);this.setState({startDate:e}),t>=a&&((a=new Date(t.getTime())).setDate(a.getDate()+1),this.setState({endDate:g(a)}))}},{key:"onEndDateChange",value:function(e){var t=new Date(e),a=new Date(this.state.startDate);this.setState({endDate:e}),a>=t&&((a=new Date(t.getTime())).setDate(a.getDate()-1),this.setState({startDate:g(a)}))}},{key:"handleSwitchKeys",value:function(e,t){console.log(e+" : "+t),void 0!==window.joyconJS&&(this.handleArrowKeys(e,t),"home"===e&&(window.joyconJS.onHome(t),this.setState({homePressed:t})),"plus"===e&&(window.joyconJS.onPlus(t),this.setState({plusPressed:t})),"a"===e&&(window.joyconJS.onA(t),this.setState({aPressed:t})),"b"===e&&(window.joyconJS.onB(t),this.setState({bPressed:t})),"x"===e&&(window.joyconJS.onX(t),this.setState({xPressed:t})),"y"===e&&(window.joyconJS.onY(t),this.setState({yPressed:t})),"sl"===e&&(window.joyconJS.onRightSL(t),this.setState({slPressed:t})),"sr"===e&&(window.joyconJS.onRightSR(t),this.setState({srPressed:t})),"stick"===e&&(window.joyconJS.onRightJoystickPressed(t),this.setState({stickPressed:t})))}},{key:"handleArrowKeys",value:function(e,t){"down"!==e&&"up"!==e&&"right"!==e&&"left"!==e||("down"===e?(t?1:0,this.setState({downPressed:t})):this.state.downPressed?1:0,"up"===e?(t?-1:0,this.setState({upPressed:t})):this.state.upPressed?-1:0,"left"===e?(t?-1:0,this.setState({leftPressed:t})):this.state.leftPressed?-1:0,"right"===e?(t?1:0,this.setState({rightPressed:t})):this.state.rightPressed)}},{key:"render",value:function(){var e=this,t=this.macros.map((function(t,a){var n=e.selectedMacro===a,r=n?{background:"black",color:"white"}:{background:"white",color:"black"};return s.a.createElement("div",{className:"Macro"},s.a.createElement("button",{key:a,className:"MacroButton",id:t.name,style:r,onClick:function(t){return e.setMacro(a)}},t.name),s.a.createElement(w,{key:"paramInput",active:n,locked:e.state.locked,macro:a,startDate:e.state.startDate,onStartDateChange:e.onStartDateChange,endDate:e.state.endDate,onEndDateChange:e.onEndDateChange}))}));return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},this.state.selectedMacro+" "+this.state.macroState),s.a.createElement("div",{id:"body"},s.a.createElement("div",{id:"Macros"},t),s.a.createElement("div",{id:"MacroParameters"},s.a.createElement("label",{id:"ParamCheckBox"},"Use Parameters:",s.a.createElement(S,{key:"useParams",checked:this.state.useParams,onChange:this.onUseParams}))),s.a.createElement("div",null,s.a.createElement(y,{key:"progress",percentage:this.state.macroProgress})),s.a.createElement("div",{id:"PlayerButtons",className:"Buttons"},s.a.createElement("button",{key:"reset",className:"MacroButton",id:"Reset",onMouseDown:function(t){return e.onButtonEvent("reset",!0)},onMouseUp:function(t){return e.onButtonEvent("reset",!1)},onTouchStart:function(t){return e.onButtonEvent("reset",!0)},onTouchEnd:function(t){return e.onButtonEvent("reset",!1)}},"Reset"),s.a.createElement("button",{key:"play",className:"MacroButton",id:"Play",onMouseDown:function(t){return e.onButtonEvent("play",!0)},onMouseUp:function(t){return e.onButtonEvent("play",!1)},onTouchStart:function(t){return e.onButtonEvent("play",!0)},onTouchEnd:function(t){return e.onButtonEvent("play",!1)}},"Play"),s.a.createElement("button",{key:"pause",className:"MacroButton",id:"Pause",onMouseDown:function(t){return e.onButtonEvent("pause",!0)},onMouseUp:function(t){return e.onButtonEvent("pause",!1)},onTouchStart:function(t){return e.onButtonEvent("pause",!0)},onTouchEnd:function(t){return e.onButtonEvent("pause",!1)}},"Pause"))))}}]),t}(n.Component);a(17);o.a.render(s.a.createElement(P,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.e8989af7.chunk.js.map