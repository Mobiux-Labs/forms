"use strict";(self.webpackChunkform_docs=self.webpackChunkform_docs||[]).push([[244],{9947:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"form-renderer/fields/core/input","title":"input","description":"This field is available as type input","source":"@site/docs/form-renderer/fields/core/input.md","sourceDirName":"form-renderer/fields/core","slug":"/form-renderer/fields/core/input","permalink":"/forms/docs/form-renderer/fields/core/input","draft":false,"unlisted":false,"editUrl":"https://github.com/Mobiux-Labs/forms/tree/main/docs/docs/form-renderer/fields/core/input.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_label":"Input","sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Core","permalink":"/forms/docs/category/core"},"next":{"title":"Textarea","permalink":"/forms/docs/form-renderer/fields/core/text-area"}}');var r=i(4848),s=i(8453);const l={sidebar_label:"Input",sidebar_position:1},o="Input Field",d={},a=[{value:"Supported Input Types",id:"supported-input-types",level:2},{value:"Features",id:"features",level:2},{value:"Usage",id:"usage",level:2},{value:"Text Input",id:"text-input",level:3}];function c(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,r.jsxs)(n.p,{children:["This field is available as type ",(0,r.jsx)(n.code,{children:"input"})]})}),"\n",(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"input-field",children:"Input Field"})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"InputField"})," component provides a versatile way to capture various types of single-line data input from users. It supports a wide range of input types, allowing developers to customize the input experience to meet specific application needs."]}),"\n",(0,r.jsx)(n.h2,{id:"supported-input-types",children:"Supported Input Types"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"text"}),": A standard input field for entering single-line text data."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"password"}),": An input field for entering passwords, obscuring the text for privacy."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"email"}),": An input field for entering email addresses, with built-in validation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"number"}),": An input field for entering numeric values, with optional min and max attributes."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"tel"}),": An input field for entering telephone numbers."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"url"}),": An input field for entering URLs, with built-in validation."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"search"}),": An input field designed for search queries."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"date"}),": An input field for selecting dates."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"time"}),": An input field for selecting times."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"datetime-local"}),": An input field for selecting both date and time, without a time zone."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"month"}),": An input field for selecting a month and year."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"week"}),": An input field for selecting a week and year."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"color"}),": An input field for selecting a color, providing a color picker interface."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"range"}),": An input field for selecting a value from a specified range, displayed as a slider."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"hidden"}),": An input field that is not displayed to the user, used for storing data."]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{title:"Warning",type:"danger",children:(0,r.jsxs)(n.p,{children:["Input types like ",(0,r.jsx)(n.strong,{children:"checkbox"}),", ",(0,r.jsx)(n.strong,{children:"radio"}),", and ",(0,r.jsx)(n.strong,{children:"file"})," are not supported as they do not provide values directly to ",(0,r.jsx)(n.code,{children:"e.target.value"}),"."]})}),"\n",(0,r.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Diverse Input Types"}),": Supports multiple input types for different data entry needs."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Customizable Styles"}),": Allows for custom styling to match the application's design."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Validation Support"}),": Integrates with validation rules to ensure data integrity."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Event Handling"}),": Provides onChange event handling for dynamic interactions."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:["To use the ",(0,r.jsx)(n.code,{children:"Input Field"}),", define its properties in the field definition JSON. Below is an example of how to configure a text input field:"]}),"\n",(0,r.jsx)(n.h3,{id:"text-input",children:"Text Input"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'{\n  "formKey": "username",\n  "type": "input",\n  "style": {\n    "input": "input-text-class",\n    "label": "input-label-class",\n    "error": "input-error-class"\n  },\n  "fieldProps": {\n    "type": "text",\n    "placeholder": "Enter your username"\n  },\n  "onChange": (value: string) => console.log(value),\n  "label": "Username",\n  "disabled": false,\n  "visibility": "visible",\n  "className": "custom-input-class",\n  "rules": {\n    "required": "Username is required"\n  }\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"If you have any further questions or need additional examples, feel free to ask!"})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>o});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);