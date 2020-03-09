(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{25:function(e,t,a){e.exports=a(63)},30:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),o=a.n(r),c=(a(30),a(4)),l=a(5),i=a(7),u=a(6),d=a(8),m=a(9),p=a(13),h=a.n(p),E=a(10),b=a(17),k=a(3);function y(e){return function(t){t({type:"LOADING",payload:e})}}function v(e){return function(t){t({type:"SET_DATA",payload:e})}}function f(e){return function(t){t([{type:"SET_DATA_KEY",payload:e||""},{type:"TOGGLE_MODAL",payload:!!e}])}}var O=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"modal-container"+(this.props.isModalOpen?"":" hidden")},this.props.stockData&&this.props.itemKey?s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"modal-header"},s.a.createElement("div",{className:"header"},s.a.createElement("h3",null,"Stock Data")),s.a.createElement("div",{className:"close-icon"},s.a.createElement("span",{onClick:function(){return e.props.handleModal(!1)}},"x"))),s.a.createElement("div",{className:"modal-content"},s.a.createElement("div",{className:"details-container"},s.a.createElement("h3",null,this.props.itemKey),s.a.createElement("div",{className:"gradient-container"}),s.a.createElement("div",{className:"value"},s.a.createElement("span",{className:"caret "+this.props.stockData[this.props.itemKey].cellClass}),"Current Value: ",s.a.createElement("span",null,this.props.stockData[this.props.itemKey].currentValue," ",s.a.createElement("i",null,"(current stock stamp)"))),s.a.createElement("div",{className:"disparity-container"},s.a.createElement("div",null,s.a.createElement("b",null,"Max Stock Value:")," ",s.a.createElement("span",null,Math.max.apply(Math,Object(b.a)(this.props.stockData[this.props.itemKey].history)))),s.a.createElement("div",null,s.a.createElement("b",null,"Min Stock Value:")," ",s.a.createElement("span",null,Math.min.apply(Math,Object(b.a)(this.props.stockData[this.props.itemKey].history)))))),s.a.createElement("div",{className:"graph-container"},s.a.createElement(E.Sparklines,{data:this.props.stockData[this.props.itemKey].history,height:30},s.a.createElement(E.SparklinesLine,{style:{fill:"none"}}),s.a.createElement(E.SparklinesSpots,null))))):null)}}]),t}(n.Component),j=Object(m.b)((function(e){return{isModalOpen:e.stockDashboard.isModalOpen,stockData:e.stockDashboard.stockData,itemKey:e.stockDashboard.itemKey}}),(function(e){return Object(k.b)({handleModal:f},e)}))(O),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={data:{},isModalOpen:!1,key:""},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.webSocketConnection=new WebSocket("ws://stocks.mnet.website/"),this.webSocketConnection.onopen=function(){console.log("Connection Created")},this.webSocketConnection.onmessage=this.handleStockEvents.bind(this),this.props.handleLoader(!0)}},{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){e.props.handleLoader(!1)}),3e3)}},{key:"getTime",value:function(e){var t=h()().diff(e,"seconds");return t<60?0===t?"a few seconds ago":t+" seconds ago":t>60&&t<3600?t%60+" minutes ago":t%60%60+" hours ago"}},{key:"getDeviationClass",value:function(e,t,a){return e-t>0?"stock-down":e-t<0?"stock-up":a}},{key:"handleStockEvents",value:function(e){var t=this,a=JSON.parse(e.data),n=this.state.data;a.map((function(e){n[e[0]]?(n[e[0]].history.push(Number(e[1]).toFixed(2)),n[e[0]]={lastUpdated:t.getTime(n[e[0]].lastUpdatedTime),lastUpdatedTime:h()(),cellClass:t.getDeviationClass(n[e[0]].currentValue,e[1],n[e[0]].cellClass),currentValue:Number(e[1]).toFixed(4),history:n[e[0]].history}):n[e[0]]={currentValue:Number(e[1]).toFixed(4),lastUpdated:"a few seconds ago",lastUpdatedTime:h()(),history:[Number(e[1]).toFixed(2)],cellClass:""}})),this.setState({data:n}),this.props.setDataInStore(this.state.data)}},{key:"handleModal",value:function(e){this.setState({isModalOpen:!!e,key:e||""})}},{key:"render",value:function(){var e=this;return s.a.createElement(n.Fragment,null,s.a.createElement("div",{className:"dashboard-container"},s.a.createElement("div",{className:"heading-container"},s.a.createElement("h2",null,"Live Stock Rates")),s.a.createElement("table",null,s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("td",{className:"stock-header stock-name"},"Name"),s.a.createElement("td",{className:"stock-header stock-value"},"Value"),s.a.createElement("td",{className:"stock-header stock-updated"},"Last Updated"),s.a.createElement("td",{className:"stock-header stock-plot"},"Plot"))),s.a.createElement("tbody",null,Object.keys(this.state.data).map((function(t,a){return s.a.createElement("tr",{key:a,className:"row-container",onClick:function(){return e.props.handleModal(t)}},s.a.createElement("td",null,t),s.a.createElement("td",null,s.a.createElement("div",{className:"value-container"},s.a.createElement("span",{className:"caret "+e.state.data[t].cellClass}),s.a.createElement("div",null,e.state.data[t].currentValue))),s.a.createElement("td",null,e.state.data[t].lastUpdated),s.a.createElement("td",null,s.a.createElement(E.Sparklines,{data:e.state.data[t].history,height:40},s.a.createElement(E.SparklinesLine,{color:"green"}),s.a.createElement(E.SparklinesReferenceLine,{type:"mean"}))))}))))),s.a.createElement(j,{stockData:this.state.data[this.state.key],dataKey:this.state.key}))}}]),t}(n.Component),D=Object(m.b)((function(e){return{isLoading:e.stockDashboard.isLoading}}),(function(e){return Object(k.b)({handleLoader:y,setDataInStore:v,handleModal:f},e)}))(g),N=a(21),S=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return this.props.isLoading?s.a.createElement("div",{className:"loader-overlay"},s.a.createElement(N.RingLoader,{size:70,color:"#123abc",loading:this.props.isLoading})):null}}]),t}(n.Component),L=Object(m.b)((function(e){return{isLoading:e.stockDashboard.isLoading}}))(S),M=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return s.a.createElement("div",null,"Something went wrong.....")}}]),t}(n.Component),w=(a(62),function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(u.a)(t).call(this))).state={error:null,info:null},e}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({error:e,info:t})}},{key:"render",value:function(){return s.a.createElement("div",{className:"app-container"},this.state.error?s.a.createElement(M,{error:this.state.error,info:this.state.info}):s.a.createElement(n.Fragment,null,s.a.createElement(L,null),s.a.createElement(D,null)))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var C=a(23),T=a.n(C),K=a(11),A={isLoading:!1,stockData:null,isModalOpen:!1,itemKey:""},V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(K.a)({},e,{isLoading:t.payload});case"SET_DATA":return Object(K.a)({},e,{stockData:t.payload});case"TOGGLE_MODAL":return Object(K.a)({},e,{isModalOpen:t.payload});case"SET_DATA_KEY":return Object(K.a)({},e,{itemKey:t.payload});default:return e}},x=Object(k.c)({stockDashboard:V}),_=a(24),U=Object(k.d)(x,Object(k.a)(_.a,T.a));o.a.render(s.a.createElement(m.a,{store:U},s.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.5149804d.chunk.js.map