# @nitonodev/aeromd-react

The [@nitonodev/aeromd](https://www.npmjs.com/package/@nitonodev/aeromd) plugin for parse markdown to react

---

See changes at [CHANGELOG.md](./CHANGELOG.md)

---

-   [Installation](#installation)
-   [Usage](#usage)
    -   [Connecting](#connecting)
    -   [`parse` function](#parse-function)
    -   [Create react component](#react-component)
-   [Feedback](#feedback)

---

<h1 id="installation">Installation</h1>
This package contains a built-in declaration for TypeScript, therefore you do not need to install types for this package separately.

```bash
npm i @nitonodev/aeromd-react
```

<h1 id="usage">Usage</h1>
<h3 id="connecting">
    Connecting
</h3>
To connect this library to you code you may to write next lines of code

```ts
// if you use a commonjs
const { ReactMarkdownParser } = require('@nitonodev/aeromd-html');
// if you use a esm
import { ReactMarkdownParser } from '@nitonodev/aeromd-html';
```

---

<h3 id="quick">Quick Start</h3>

To create a class you may to write next lines of code

```ts
// Instead of rmp your variable name
// Instead of '# Hello' your markdown code
const rmp = new ReactMarkdownParser('# Hello');
```

---

<h3 id="parse-function">Parse markdown data</h3>
If you want to parse markdown data to react code you may to use a parse function

| name of function | return value        | params                                                                  |
| ---------------- | ------------------- | ----------------------------------------------------------------------- |
| parse            | string (react code) | optional m by default is markdown code who declared in class definition |

Example:

```ts
const rmp = new ReactMarkdownParser('# Hello');
// if you want to use default value from class definition
rmp.parse(); // => <h1>Hello</h1>

// if you want to use custom parsing value
rmp.parse('## Hello, World !'); // => <h2>Hello, World !</h2>
```

---

<h3 id="react-component">Create React component</h3>
This helps you to create react component with parsed markdown

Install [`highlight.js`](https://www.npmjs.com/package/highlight.js) to highlight code blocks

```bash
npm i highlight.js
```

Add this lines to you code in react

```diff
+ import React, {useEffect} from 'react'
+ import { ReactMarkdownParser } from '@nitonodev/aeromd-react'
+ import '@nitonodev/aeromd-react/lib/styles/md-theme.css'
+ import 'highlight.js/styles/base16/solarized-dark.css'
+ import hljs from 'highlight.js'


... // Your code

function App() {
+   useEffect(() => hljs.highlightAll())

+    const data = new ReactMarkdownParser("# Hello")

+    const MarkdownComponenet = () =>
+    React.createElement("div", {
+      dangerouslySetInnerHTML: { __html: data },
+      id: "body",
+    });

    return (
        ... // Your code
+       <MarkdownComponent/>
    )
}



```

---

<h1 id='feedback'>
Feedback
</h1>

You can write me to pyto015@ya.ru or open issue at [Github repo](https://github.com/nitono/aeromd-react)

Links

-   Github: https://github.com/nitono/aeromd-react
-   npm: https://www.npmjs.com/package/@nitonodev/aeromd-react
