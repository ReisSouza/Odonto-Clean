"use strict";(self.webpackChunk_odonto_clean_docs=self.webpackChunk_odonto_clean_docs||[]).push([[238],{"../../node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./src/stories/Dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Default$parameters,_Default$parameters2,_Default$parameters2$,_home_runner_work_Odonto_Clean_Odonto_Clean_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_Odonto_Clean_Odonto_Clean_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/react/index.js"),_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/react/dist/index.mjs"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){(0,_home_runner_work_Odonto_Clean_Odonto_Clean_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__.Z)(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}const __WEBPACK_DEFAULT_EXPORT__={title:"Display/Dialog",component:_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.Vq,decorators:[function(Story){return __jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.xu,{as:"label",css:{display:"flex",justifyContent:"center"}},Story())}],argTypes:{open:{control:{type:"boolean"}},defaultOpen:{control:{type:"boolean"}},title:{control:{type:"string"}},description:{control:{type:"string"}},trigger:{control:{type:"jsx.element"}}}};var Template=function Template(args){return __jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.Vq,(0,_home_runner_work_Odonto_Clean_Odonto_Clean_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.Z)({},args,{modal:!0,onOpenChange:function onOpenChange(){},title:"Fazer login",description:"Faça login e aproveite o melhor da plataforma",content:__jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"}},__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.nv,{label:"Email"}),__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.nv,{label:"Password"})),footer:[__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.Vn,{asChild:!0,key:1},__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.zx,{variant:"outlined"},"Cancela")),__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.zx,{key:2},"Login")],trigger:__jsx(_odonto_clean_react__WEBPACK_IMPORTED_MODULE_2__.zx,null,"Open Dialog")}))};Template.displayName="Template";var Default=Template.bind({});Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'args => {\n  return <Dialog {...args} modal onOpenChange={() => {}} title="Fazer login" description="Faça login e aproveite o melhor da plataforma" content={<div style={{\n    display: \'flex\',\n    flexDirection: \'column\',\n    gap: \'16px\'\n  }}>\n          <TextField label="Email" />\n          <TextField label="Password" />\n        </div>} footer={[<DialogCLose asChild key={1}>\n          <Button variant="outlined">Cancela</Button>\n        </DialogCLose>, <Button key={2}>Login</Button>]} trigger={<Button>Open Dialog</Button>} />;\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})})}}]);