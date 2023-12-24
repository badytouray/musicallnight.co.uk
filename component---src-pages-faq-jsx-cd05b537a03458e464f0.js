"use strict";(self.webpackChunkman_gatsby=self.webpackChunkman_gatsby||[]).push([[534],{7328:function(e,t,n){n.d(t,{A:function(){return i.A}});var i=n(2631)},5712:function(e,t,n){n.r(t),n.d(t,{Head:function(){return k},default:function(){return I}});var i=n(7294),a=n(682),o=n(4184),r=n.n(o),l=n(2081),c=n(6792),s=n(2939);function u(e,t){return Array.isArray(e)?e.includes(t):e===t}const d=i.createContext({});d.displayName="AccordionContext";var m=d,p=n(5893);const v=i.forwardRef((({as:e="div",bsPrefix:t,className:n,children:a,eventKey:o,...l},d)=>{const{activeEventKey:v}=(0,i.useContext)(m);return t=(0,c.vE)(t,"accordion-collapse"),(0,p.jsx)(s.Z,{ref:d,in:u(v,o),...l,className:r()(n,t),children:(0,p.jsx)(e,{children:i.Children.only(a)})})}));v.displayName="AccordionCollapse";var f=v;const y=i.createContext({eventKey:""});y.displayName="AccordionItemContext";var x=y;const E=i.forwardRef((({as:e="div",bsPrefix:t,className:n,onEnter:a,onEntering:o,onEntered:l,onExit:s,onExiting:u,onExited:d,...m},v)=>{t=(0,c.vE)(t,"accordion-body");const{eventKey:y}=(0,i.useContext)(x);return(0,p.jsx)(f,{eventKey:y,onEnter:a,onEntering:o,onEntered:l,onExit:s,onExiting:u,onExited:d,children:(0,p.jsx)(e,{ref:v,...m,className:r()(n,t)})})}));E.displayName="AccordionBody";var b=E;const A=i.forwardRef((({as:e="button",bsPrefix:t,className:n,onClick:a,...o},l)=>{t=(0,c.vE)(t,"accordion-button");const{eventKey:s}=(0,i.useContext)(x),d=function(e,t){const{activeEventKey:n,onSelect:a,alwaysOpen:o}=(0,i.useContext)(m);return i=>{let r=e===n?null:e;o&&(r=Array.isArray(n)?n.includes(e)?n.filter((t=>t!==e)):[...n,e]:[e]),null==a||a(r,i),null==t||t(i)}}(s,a),{activeEventKey:v}=(0,i.useContext)(m);return"button"===e&&(o.type="button"),(0,p.jsx)(e,{ref:l,onClick:d,...o,"aria-expanded":Array.isArray(v)?v.includes(s):s===v,className:r()(n,t,!u(v,s)&&"collapsed")})}));A.displayName="AccordionButton";var h=A;const N=i.forwardRef((({as:e="h2",bsPrefix:t,className:n,children:i,onClick:a,...o},l)=>(t=(0,c.vE)(t,"accordion-header"),(0,p.jsx)(e,{ref:l,...o,className:r()(n,t),children:(0,p.jsx)(h,{onClick:a,children:i})}))));N.displayName="AccordionHeader";var q=N;const g=i.forwardRef((({as:e="div",bsPrefix:t,className:n,eventKey:a,...o},l)=>{t=(0,c.vE)(t,"accordion-item");const s=(0,i.useMemo)((()=>({eventKey:a})),[a]);return(0,p.jsx)(x.Provider,{value:s,children:(0,p.jsx)(e,{ref:l,...o,className:r()(n,t)})})}));g.displayName="AccordionItem";var C=g;const K=i.forwardRef(((e,t)=>{const{as:n="div",activeKey:a,bsPrefix:o,className:s,onSelect:u,flush:d,alwaysOpen:v,...f}=(0,l.Ch)(e,{activeKey:"onSelect"}),y=(0,c.vE)(o,"accordion"),x=(0,i.useMemo)((()=>({activeEventKey:a,onSelect:u,alwaysOpen:v})),[a,u,v]);return(0,p.jsx)(m.Provider,{value:x,children:(0,p.jsx)(n,{ref:t,...f,className:r()(s,y,d&&`${y}-flush`)})})}));K.displayName="Accordion";var j=Object.assign(K,{Button:h,Collapse:f,Item:C,Header:q,Body:b}),w=n(7328);var I=function(){return i.createElement(w.A,null,i.createElement(a.Z,{mt:"3"},i.createElement("h1",{className:"text-center mt-3"},"Frequently Asked Questions"),i.createElement(j,{defaultActiveKey:"0",flush:!0},i.createElement(j.Item,{eventKey:"0"},i.createElement(j.Header,null,"Accordion Item #1"),i.createElement(j.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement(j.Item,{eventKey:"1"},i.createElement(j.Header,null,"Accordion Item #2"),i.createElement(j.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement(j.Item,{eventKey:"2"},i.createElement(j.Header,null,"Accordion Item #3"),i.createElement(j.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),i.createElement(j.Item,{eventKey:"3"},i.createElement(j.Header,null,"Accordion Item #4"),i.createElement(j.Body,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))))};function k(){return i.createElement("title",null,"M.A.N | FAQ")}}}]);
//# sourceMappingURL=component---src-pages-faq-jsx-cd05b537a03458e464f0.js.map