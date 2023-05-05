"use strict";(self.webpackChunk_odonto_clean_docs=self.webpackChunk_odonto_clean_docs||[]).push([[463],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"../../node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>P});var react=__webpack_require__("../../node_modules/react/index.js");const context_es_o=(0,react.createContext)({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var R=Object.defineProperty,l=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,d=(t,r,e)=>r in t?R(t,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[r]=e,s=(t,r)=>{for(var e in r||(r={}))f.call(r,e)&&d(t,e,r[e]);if(l)for(var e of l(r))g.call(r,e)&&d(t,e,r[e]);return t},a=(t,r)=>{var e={};for(var o in t)f.call(t,o)&&r.indexOf(o)<0&&(e[o]=t[o]);if(null!=t&&l)for(var o of l(t))r.indexOf(o)<0&&g.call(t,o)&&(e[o]=t[o]);return e};const P=(0,react.forwardRef)(((t,r)=>{const m=t,{alt:e,color:o,size:n,weight:c,mirrored:h,children:p,weights:u}=m,C=a(m,["alt","color","size","weight","mirrored","children","weights"]),x=(0,react.useContext)(context_es_o),{color:v="currentColor",size:i,weight:B="regular",mirrored:I=!1}=x,E=a(x,["color","size","weight","mirrored"]);return react.createElement("svg",s(s({ref:r,xmlns:"http://www.w3.org/2000/svg",width:null!=n?n:i,height:null!=n?n:i,fill:null!=o?o:v,viewBox:"0 0 256 256",transform:h||I?"scale(-1, 1)":void 0},E),C),!!e&&react.createElement("title",null,e),p,u.get(null!=c?c:B))}));P.displayName="IconBase"},"./src/stories/Button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Contained:()=>Contained,Danger:()=>Danger,IconButton:()=>IconButton,Large:()=>Large,Medium:()=>Medium,Outlined:()=>Outlined,Primary:()=>Primary,Secondary:()=>Secondary,Small:()=>Small,Success:()=>Success,Text:()=>Text,WithIconLeft:()=>WithIconLeft,WithIconRight:()=>WithIconRight,WithIcons:()=>WithIcons,default:()=>Button_stories});var defineProperty=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),react=__webpack_require__("../../node_modules/react/index.js"),dist=__webpack_require__("../../packages/react/dist/index.mjs"),IconBase_es=__webpack_require__("../../node_modules/@phosphor-icons/react/dist/lib/IconBase.es.js"),c=Object.defineProperty,H=Object.defineProperties,V=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,r=(t,a,l)=>a in t?c(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l;const v=new Map([["bold",react.createElement(react.Fragment,null,react.createElement("path",{d:"M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"}))],["duotone",react.createElement(react.Fragment,null,react.createElement("path",{d:"M216,48V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208A8,8,0,0,1,216,48Z",opacity:"0.2"}),react.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["fill",react.createElement(react.Fragment,null,react.createElement("path",{d:"M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,136H136v48a8,8,0,0,1-16,0V136H72a8,8,0,0,1,0-16h48V72a8,8,0,0,1,16,0v48h48a8,8,0,0,1,0,16Z"}))],["light",react.createElement(react.Fragment,null,react.createElement("path",{d:"M222,128a6,6,0,0,1-6,6H134v82a6,6,0,0,1-12,0V134H40a6,6,0,0,1,0-12h82V40a6,6,0,0,1,12,0v82h82A6,6,0,0,1,222,128Z"}))],["regular",react.createElement(react.Fragment,null,react.createElement("path",{d:"M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"}))],["thin",react.createElement(react.Fragment,null,react.createElement("path",{d:"M220,128a4,4,0,0,1-4,4H132v84a4,4,0,0,1-8,0V132H40a4,4,0,0,1,0-8h84V40a4,4,0,0,1,8,0v84h84A4,4,0,0,1,220,128Z"}))]]),u=(0,react.forwardRef)(((t,a)=>react.createElement(IconBase_es.Z,((t,a)=>H(t,V(a)))(((t,a)=>{for(var l in a||(a={}))o.call(a,l)&&r(t,l,a[l]);if(n)for(var l of n(a))p.call(a,l)&&r(t,l,a[l]);return t})({ref:a},t),{weights:v}))));u.displayName="Plus";var SignIn_es_H=Object.defineProperty,SignIn_es_c=Object.defineProperties,SignIn_es_V=Object.getOwnPropertyDescriptors,SignIn_es_n=Object.getOwnPropertySymbols,M=Object.prototype.hasOwnProperty,SignIn_es_o=Object.prototype.propertyIsEnumerable,SignIn_es_r=(t,e,l)=>e in t?SignIn_es_H(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l;const E=new Map([["bold",react.createElement(react.Fragment,null,react.createElement("path",{d:"M144.49,136.49l-40,40a12,12,0,0,1-17-17L107,140H24a12,12,0,0,1,0-24h83L87.51,96.49a12,12,0,0,1,17-17l40,40A12,12,0,0,1,144.49,136.49ZM192,28H136a12,12,0,0,0,0,24h52V204H136a12,12,0,0,0,0,24h56a20,20,0,0,0,20-20V48A20,20,0,0,0,192,28Z"}))],["duotone",react.createElement(react.Fragment,null,react.createElement("path",{d:"M136,128,96,168V88Z",opacity:"0.2"}),react.createElement("path",{d:"M141.66,122.34l-40-40A8,8,0,0,0,88,88v32H24a8,8,0,0,0,0,16H88v32a8,8,0,0,0,13.66,5.66l40-40A8,8,0,0,0,141.66,122.34ZM104,148.69V107.31L124.69,128ZM208,48V208a16,16,0,0,1-16,16H136a8,8,0,0,1,0-16h56V48H136a8,8,0,0,1,0-16h56A16,16,0,0,1,208,48Z"}))],["fill",react.createElement(react.Fragment,null,react.createElement("path",{d:"M141.66,133.66l-40,40A8,8,0,0,1,88,168V136H24a8,8,0,0,1,0-16H88V88a8,8,0,0,1,13.66-5.66l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))],["light",react.createElement(react.Fragment,null,react.createElement("path",{d:"M140.24,132.24l-40,40a6,6,0,0,1-8.48-8.48L121.51,134H24a6,6,0,0,1,0-12h97.51L91.76,92.24a6,6,0,0,1,8.48-8.48l40,40A6,6,0,0,1,140.24,132.24ZM192,34H136a6,6,0,0,0,0,12h56a2,2,0,0,1,2,2V208a2,2,0,0,1-2,2H136a6,6,0,0,0,0,12h56a14,14,0,0,0,14-14V48A14,14,0,0,0,192,34Z"}))],["regular",react.createElement(react.Fragment,null,react.createElement("path",{d:"M141.66,133.66l-40,40a8,8,0,0,1-11.32-11.32L116.69,136H24a8,8,0,0,1,0-16h92.69L90.34,93.66a8,8,0,0,1,11.32-11.32l40,40A8,8,0,0,1,141.66,133.66ZM192,32H136a8,8,0,0,0,0,16h56V208H136a8,8,0,0,0,0,16h56a16,16,0,0,0,16-16V48A16,16,0,0,0,192,32Z"}))],["thin",react.createElement(react.Fragment,null,react.createElement("path",{d:"M138.83,130.83l-40,40a4,4,0,0,1-5.66-5.66L126.34,132H24a4,4,0,0,1,0-8H126.34L93.17,90.83a4,4,0,0,1,5.66-5.66l40,40A4,4,0,0,1,138.83,130.83ZM192,36H136a4,4,0,0,0,0,8h56a4,4,0,0,1,4,4V208a4,4,0,0,1-4,4H136a4,4,0,0,0,0,8h56a12,12,0,0,0,12-12V48A12,12,0,0,0,192,36Z"}))]]),Z=(0,react.forwardRef)(((t,e)=>react.createElement(IconBase_es.Z,((t,e)=>SignIn_es_c(t,SignIn_es_V(e)))(((t,e)=>{for(var l in e||(e={}))M.call(e,l)&&SignIn_es_r(t,l,e[l]);if(SignIn_es_n)for(var l of SignIn_es_n(e))SignIn_es_o.call(e,l)&&SignIn_es_r(t,l,e[l]);return t})({ref:e},t),{weights:E}))));var _Contained$parameters,_Contained$parameters2,_Contained$parameters3,_Outlined$parameters,_Outlined$parameters2,_Outlined$parameters3,_Text$parameters,_Text$parameters2,_Text$parameters2$doc,_Small$parameters,_Small$parameters2,_Small$parameters2$do,_Medium$parameters,_Medium$parameters2,_Medium$parameters2$d,_Large$parameters,_Large$parameters2,_Large$parameters2$do,_WithIconLeft$paramet,_WithIconLeft$paramet2,_WithIconLeft$paramet3,_WithIconRight$parame,_WithIconRight$parame2,_WithIconRight$parame3,_WithIcons$parameters,_WithIcons$parameters2,_WithIcons$parameters3,_IconButton$parameter,_IconButton$parameter2,_IconButton$parameter3,_Danger$parameters,_Danger$parameters2,_Danger$parameters2$d,_Success$parameters,_Success$parameters2,_Success$parameters2$,_Primary$parameters,_Primary$parameters2,_Primary$parameters2$,_Secondary$parameters,_Secondary$parameters2,_Secondary$parameters3;Z.displayName="SignIn";var __jsx=react.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,defineProperty.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const Button_stories={title:"Buttons/Button",component:dist.zx,args:{children:"Enviar",size:"medium",variant:"contained",color:"primary",as:void 0,onMouseDown:void 0,onClick:void 0,onMouseEnter:void 0,onMouseLeave:void 0,onMouseUp:void 0,isLoading:void 0},argTypes:{size:{options:["small","medium","large"],control:{type:"inline-radio"},defaultValue:"medium",description:"Defina o tamanho do botão"},color:{options:["primary","secondary","danger","success","tertiary"],control:{type:"inline-radio"},defaultValue:"primary",description:"Defina o a cor de fundo e a cor do texto do botão"},variant:{options:["contained","text","outlined"],control:{type:"inline-radio"},defaultValue:"contained",description:"Defina o estilo do botão, sendo contained, com fundo preenchido, outlined somente borda e texto, text somente texto"},fullWidth:{control:{type:"boolean"},description:"Defina se o botão vai ocupar todo o espaço possível",defaultValue:!1},onClick:{type:"function",defaultValue:void 0,description:"Função de evento quando o botão e clicado"},onMouseDown:{type:"function",defaultValue:void 0,description:"Função de evento quando o mouse esta pressionado"},onMouseEnter:{type:"function",defaultValue:void 0,description:"Função de evento quando o mouse e entra no botão"},onMouseLeave:{type:"function",defaultValue:void 0,description:"Função de evento quando o mouse e sai de cima do botão"},onMouseUp:{type:"function",defaultValue:void 0,description:"Função de evento quando o mouse e liberado"},form:{type:"string",defaultValue:void 0,description:"Vincule o botão a um formulário"},ariaLabel:{type:"string",defaultValue:void 0,description:"Defina um nome de acessibilidade"},title:{type:"string",defaultValue:void 0,description:"Defina um nome para o botão em casos aonde não tenha conteúdo escrito"},type:{options:["reset","submit","button"],control:{type:"inline-radio"},defaultValue:"button",description:"Defina qual tipo de ação o botão vai executar"},as:{type:"string",defaultValue:"button",description:"Defina o elemento html que será revernizado"},disabled:{type:"boolean",defaultValue:!1,description:"Defina se o botão está ativo para ação ou não"},autoCapitalize:{options:["on","off","words","characters"],control:{type:"inline-radio"},defaultValue:"off",description:"Defina se o botão vai ter capitalização"},children:{type:"symbol",defaultValue:void 0,description:"Conteúdo interno do botão"},iconButton:{defaultValue:void 0,description:"Apenas ícone no botão",type:"symbol"},iconLeft:{defaultValue:void 0,description:"Ícone a esquerda",type:"symbol"},iconRight:{defaultValue:void 0,description:"Ícone a direita",type:"symbol"},isLoading:{defaultValue:!1,description:"Defina se o botão esta em estado de carregamento",type:"boolean"}}};var Contained={},Outlined={args:{variant:"outlined"}},Text={args:{variant:"text"}},Small={args:{size:"small"}},Medium={args:{size:"medium"}},Large={args:{size:"large"}},WithIconLeft={args:{iconLeft:__jsx(u,{size:20})}},WithIconRight={args:{iconRight:__jsx(Z,{size:20})}},WithIcons={args:{iconLeft:__jsx(u,{size:20}),iconRight:__jsx(u,{size:20})}},IconButton={args:{iconButton:__jsx(u,{size:20})}},Danger={args:{color:"danger"}},Success={args:{color:"success"}},Primary={args:{color:"primary"}},Secondary={args:{color:"secondary"}};Contained.parameters=_objectSpread(_objectSpread({},Contained.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Contained$parameters=Contained.parameters)||void 0===_Contained$parameters?void 0:_Contained$parameters.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_Contained$parameters2=Contained.parameters)||void 0===_Contained$parameters2||null===(_Contained$parameters3=_Contained$parameters2.docs)||void 0===_Contained$parameters3?void 0:_Contained$parameters3.source)})}),Outlined.parameters=_objectSpread(_objectSpread({},Outlined.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Outlined$parameters=Outlined.parameters)||void 0===_Outlined$parameters?void 0:_Outlined$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    variant: 'outlined'\n  }\n}"},null===(_Outlined$parameters2=Outlined.parameters)||void 0===_Outlined$parameters2||null===(_Outlined$parameters3=_Outlined$parameters2.docs)||void 0===_Outlined$parameters3?void 0:_Outlined$parameters3.source)})}),Text.parameters=_objectSpread(_objectSpread({},Text.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Text$parameters=Text.parameters)||void 0===_Text$parameters?void 0:_Text$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    variant: 'text'\n  }\n}"},null===(_Text$parameters2=Text.parameters)||void 0===_Text$parameters2||null===(_Text$parameters2$doc=_Text$parameters2.docs)||void 0===_Text$parameters2$doc?void 0:_Text$parameters2$doc.source)})}),Small.parameters=_objectSpread(_objectSpread({},Small.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Small$parameters=Small.parameters)||void 0===_Small$parameters?void 0:_Small$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'small'\n  }\n}"},null===(_Small$parameters2=Small.parameters)||void 0===_Small$parameters2||null===(_Small$parameters2$do=_Small$parameters2.docs)||void 0===_Small$parameters2$do?void 0:_Small$parameters2$do.source)})}),Medium.parameters=_objectSpread(_objectSpread({},Medium.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Medium$parameters=Medium.parameters)||void 0===_Medium$parameters?void 0:_Medium$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'medium'\n  }\n}"},null===(_Medium$parameters2=Medium.parameters)||void 0===_Medium$parameters2||null===(_Medium$parameters2$d=_Medium$parameters2.docs)||void 0===_Medium$parameters2$d?void 0:_Medium$parameters2$d.source)})}),Large.parameters=_objectSpread(_objectSpread({},Large.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Large$parameters=Large.parameters)||void 0===_Large$parameters?void 0:_Large$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    size: 'large'\n  }\n}"},null===(_Large$parameters2=Large.parameters)||void 0===_Large$parameters2||null===(_Large$parameters2$do=_Large$parameters2.docs)||void 0===_Large$parameters2$do?void 0:_Large$parameters2$do.source)})}),WithIconLeft.parameters=_objectSpread(_objectSpread({},WithIconLeft.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIconLeft$paramet=WithIconLeft.parameters)||void 0===_WithIconLeft$paramet?void 0:_WithIconLeft$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    iconLeft: <Plus size={20} />\n  }\n}"},null===(_WithIconLeft$paramet2=WithIconLeft.parameters)||void 0===_WithIconLeft$paramet2||null===(_WithIconLeft$paramet3=_WithIconLeft$paramet2.docs)||void 0===_WithIconLeft$paramet3?void 0:_WithIconLeft$paramet3.source)})}),WithIconRight.parameters=_objectSpread(_objectSpread({},WithIconRight.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIconRight$parame=WithIconRight.parameters)||void 0===_WithIconRight$parame?void 0:_WithIconRight$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    iconRight: <SignIn size={20} />\n  }\n}"},null===(_WithIconRight$parame2=WithIconRight.parameters)||void 0===_WithIconRight$parame2||null===(_WithIconRight$parame3=_WithIconRight$parame2.docs)||void 0===_WithIconRight$parame3?void 0:_WithIconRight$parame3.source)})}),WithIcons.parameters=_objectSpread(_objectSpread({},WithIcons.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithIcons$parameters=WithIcons.parameters)||void 0===_WithIcons$parameters?void 0:_WithIcons$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    iconLeft: <Plus size={20} />,\n    iconRight: <Plus size={20} />\n  }\n}"},null===(_WithIcons$parameters2=WithIcons.parameters)||void 0===_WithIcons$parameters2||null===(_WithIcons$parameters3=_WithIcons$parameters2.docs)||void 0===_WithIcons$parameters3?void 0:_WithIcons$parameters3.source)})}),IconButton.parameters=_objectSpread(_objectSpread({},IconButton.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_IconButton$parameter=IconButton.parameters)||void 0===_IconButton$parameter?void 0:_IconButton$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    iconButton: <Plus size={20} />\n  }\n}"},null===(_IconButton$parameter2=IconButton.parameters)||void 0===_IconButton$parameter2||null===(_IconButton$parameter3=_IconButton$parameter2.docs)||void 0===_IconButton$parameter3?void 0:_IconButton$parameter3.source)})}),Danger.parameters=_objectSpread(_objectSpread({},Danger.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Danger$parameters=Danger.parameters)||void 0===_Danger$parameters?void 0:_Danger$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    color: 'danger'\n  }\n}"},null===(_Danger$parameters2=Danger.parameters)||void 0===_Danger$parameters2||null===(_Danger$parameters2$d=_Danger$parameters2.docs)||void 0===_Danger$parameters2$d?void 0:_Danger$parameters2$d.source)})}),Success.parameters=_objectSpread(_objectSpread({},Success.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    color: 'success'\n  }\n}"},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2$=_Success$parameters2.docs)||void 0===_Success$parameters2$?void 0:_Success$parameters2$.source)})}),Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    color: 'primary'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2$=_Primary$parameters2.docs)||void 0===_Primary$parameters2$?void 0:_Primary$parameters2$.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    color: 'secondary'\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters3=_Secondary$parameters2.docs)||void 0===_Secondary$parameters3?void 0:_Secondary$parameters3.source)})})}}]);