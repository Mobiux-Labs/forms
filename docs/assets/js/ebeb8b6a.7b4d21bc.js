"use strict";(self.webpackChunkform_docs=self.webpackChunkform_docs||[]).push([[374],{367:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"form-renderer/features/visibility","title":"Visibility","description":"This documentation explains how to manage the visibility of form fields using the @mobiux-labs/form-core package. The visibility property in the FieldDefinition type allows you to control whether a field is displayed or hidden.","source":"@site/docs/form-renderer/features/visibility.md","sourceDirName":"form-renderer/features","slug":"/form-renderer/features/visibility","permalink":"/forms/docs/form-renderer/features/visibility","draft":false,"unlisted":false,"editUrl":"https://github.com/Mobiux-Labs/forms/tree/main/docs/docs/form-renderer/features/visibility.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_label":"Visibility","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Validation","permalink":"/forms/docs/form-renderer/features/validation"},"next":{"title":"Disabled","permalink":"/forms/docs/form-renderer/features/disabled"}}');var s=n(4848),o=n(8453);const r={sidebar_label:"Visibility",sidebar_position:3},l="Visibility",d={},a=[{value:"How it works",id:"how-it-works",level:2},{value:"Sample",id:"sample",level:2},{value:"Explanation",id:"explanation",level:3}];function c(e){const i={blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.header,{children:(0,s.jsx)(i.h1,{id:"visibility",children:"Visibility"})}),"\n",(0,s.jsxs)(i.p,{children:["This documentation explains how to manage the visibility of form fields using the ",(0,s.jsx)(i.code,{children:"@mobiux-labs/form-core"})," package. The ",(0,s.jsx)(i.code,{children:"visibility"})," property in the ",(0,s.jsx)(i.code,{children:"FieldDefinition"})," type allows you to control whether a field is displayed or hidden."]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsxs)(i.p,{children:["A string that determines the field's visibility. It can be set to ",(0,s.jsx)(i.code,{children:"'visible'"})," or ",(0,s.jsx)(i.code,{children:"'hidden'"}),"."]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,s.jsx)(i.p,{children:"To control the visibility of a field, the following style is added to the top-level container of each fields:"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"<div\n  style={{ display: visibility === 'hidden' ? 'none' : 'block' }}\n  className={className}\n>\n  {/* Field content goes here */}\n</div>\n"})}),"\n",(0,s.jsx)(i.h2,{id:"sample",children:"Sample"}),"\n",(0,s.jsxs)(i.p,{children:["Here's an example of how to define a field with the ",(0,s.jsx)(i.code,{children:"visibility"})," property:"]}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-tsx",children:"const fieldDefinitions: FieldDefinition[] = [\n  {\n    formKey: 'username',\n    label: 'Username',\n    type: 'input',\n    visibility: 'visible', // Set to 'hidden' to hide the field\n    // You can pass the visibility value dynamically based on conditions\n    style: { input: 'input-md', label: 'label-sm', error: 'error-text' },\n  },\n];\n"})}),"\n",(0,s.jsx)(i.h3,{id:"explanation",children:"Explanation"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Visibility Control"}),": The ",(0,s.jsx)(i.code,{children:"visibility"})," property is used to toggle the display of the field. If set to ",(0,s.jsx)(i.code,{children:"'hidden'"}),", the field is not rendered in the DOM."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Dynamic Behavior"}),": The visibility can be dynamically controlled based on form state or other conditions, allowing for flexible form interactions."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["By utilizing the ",(0,s.jsx)(i.code,{children:"visibility"})," property, you can create forms that adapt to user interactions and application logic, enhancing the user experience."]})]})}function h(e={}){const{wrapper:i}={...(0,o.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,i,n)=>{n.d(i,{R:()=>r,x:()=>l});var t=n(6540);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);