# JavaScript
* JavaScript is light weight Interpreted and Just-in-Time Compiled programming language.
* Light weight refers to memory occupied and how heavy the application is.
* Interpreted refers to line by line translation.

## JavaScript as Scripting language (Control flow)

<img src="./Images/js_scripting.png" height="400" width="800">

## JavaScript as Programming language (Control flow)

<img src="./Images/js_programming.png " height="400" width="1000">

## JavaScript History   
<img src="./Images/jsHistory.png" height="400" width="1000">

## Characteristics

- **Lightweight**: Refers to the memory usage and the overall "heaviness" of the application.
- **Interpreted**: Code is executed line-by-line.
- **Compiled**: The entire program is translated simultaneously.

## Types of Compilation

1. **JIT (Just-in-Time Compilation)**  
   - JavaScript is loaded into the browser and compiled by the browser.  
   - Happens when the user sends a request.

2. **AOT (Ahead-of-Time Compilation)**  
   - JavaScript is compiled and processed at the application level.  
   - Occurs even before a user request is made.



## Engines and Compilers

JavaScript can be processed using various engines and compilers:

- **Ivy**
- **Babel**
- **Node**
- **V8**


## Programming Paradigms Supported

JavaScript supports a variety of programming techniques:

1. Structural Programming  
2. Functional Programming  
3. Imperative Programming  
4. Object-Oriented Programming (OOP)

> **🔔Note:** JavaScript is **not** a fully object-oriented programming language. It supports only some OOP features.


## 🧩Usage of JavaScript in Project Layers

JavaScript can be used at various levels of a software project:

1. **Client Side**: With HTML
2. **Server Side**: With Node.js
3. **Database**: With MongoDB
4. **Animation Tools**: Flash, 3DS Max, etc.


## Typical Full Stack Setup

```plaintext
Frontend          =>      Backend         =>      Database
 React.js         =>       Node.js        =>       MongoDB          
                           express.js
```

## FAQ

### 1. What are the issues with JavaScript?

JavaScript has several notable limitations:

- **Not strongly typed**: Variables can hold any data type without explicit declaration
  ```javascript
  a = 10;        // number
  a = "sachin";  // string
  a = false;     // boolean
  a = 13.5;      // float
  ```

- **Not strictly typed by default**: Variables can be used without declaration
  ```javascript
  // This works in non-strict mode
  a = 10;
  
  // To enforce stricter behavior:
  "use strict";
  a = 10;  // This would throw an error in strict mode if 'a' is not declared
  ```

- **Inconsistent data structures**: Doesn't enforce uniform object structures
  ```javascript
  [
    {
      Name: "Samsung", 
      price: 45000
    },
    {
      Product: "LG", 
      cost: 55000  // Different property names for similar concepts
    }
  ]
  ```

- **Security concerns**: JavaScript can be blocked by browsers due to security risks
  - Example: Malicious scripts like Trojans that can control devices (bad approach)
  - Legitimate tools like TeamViewer that control devices for installation help (good approach)


# JavaScript – Client Side

The main purpose of JavaScript on the **client side** is to reduce the burden on the server.  
It improves the performance of the application by handling various interactions on the client side.


## Client-Side Interactions

### 1. DOM Manipulation
JavaScript allows dynamic interaction with the Document Object Model (DOM), including:

- Adding elements to the page
- Removing elements from the page
- Updating data within elements
- Dynamically applying styles to elements
- Dynamically configuring events for elements

### 2. Form Validation
JavaScript is commonly used to validate user input before sending data to the server.

### 3. Client Management

- **Memory Management**: For example, storing the username and password in cache memory.
- **Device Interaction**: Managing device-specific tasks, such as printing a ticket without needing an internet connection.
- **Location Management**: Websites can request the user's location using client-side JavaScript.
- **Data Sharing**: Enables sharing of data with other applications on the client device.


> ## How the JavaScript would take control over HTML elements (or) In how many ways we can write the javascript code in HTML page

* **HTML Elements**
  1. Static – Elements that do not change after the page loads.
  2. Dynamic – Elements that change based on user interaction or scripting (JavaScript).

* **Styling**
  * a. Inline – Style written directly inside the element.
    ```html
    <p style="color: blue;">This is an inline styled paragraph.</p>
    ```
  * b. Embedded – CSS written inside `<style>` tags, placed within `<head>` or `<body>` (not outside `<body>`).
    ```html
    <head>
      <style>
        h1 {
          color: green;
        }
      </style>
    </head>
    ```
  * c. External – CSS written in an external file and linked to the HTML using:
    ```html
    <head>
      <link rel="stylesheet" href="styles.css">
    </head>
    ```

* **Dynamic (JavaScript)**
  * a. Inline – Script written directly inside the element using event attributes.
    ```html
    <button onclick="alert('Hello!')">Click Me</button>
    ```
  * b. Embedded – Script written inside `<script>` tags placed within `<head>` or `<body>` (not outside `<body>`).
    ```html
    <head>
      <script>
        function greet() {
          alert("Welcome!");
        }
      </script>
    </head>
    ```
  * c. External – JavaScript written in an external file and linked to the HTML using:
    ```html
    <script src="script.js" type="text/javascript"></script>
    ```

### Window hieracrchy

<img src="./Images/window_tree.png" height="400" width="600">

### Bulk loading

<img src="./Images/bulkLoading.png" height="300" width="500">


### Specific Function Loading

<img src="./Images/specificFunction.png" height="300" width="500">


## JavaScript FAQ

### 1) What is the MIME type for script?
The MIME type for JavaScript is `text/javascript`.

### 2) What is difference between script in head and body?
- **head →** Script would be loaded into browser memory and later used in the page.
- **body →** Script would be loaded directly into the page and it is not a part of browser memory.

### 3) How JavaScript converts Static DOM into Dynamic DOM?
- **HTML →** HTML parser → Static DOM
- **CSS →** CSS parser → Uses static DOM and changes the style of an element using CSSOM.
- **JS →** JavaScript engine → Uses STATIC DOM and converts it into Dynamic DOM using 'events and functions'.

### 4) What is strict mode for JavaScript?
Without declaring a variable, if we don't want JavaScript to permit the usage of variables, then we need to use "strict mode".

### 5) How to target JavaScript for Legacy browsers? [Old Version Browsers]
Developer can target new JavaScript code to the legacy browser by enclosing the code in HTML comments.

Syntax:
```html
<script type="text/javascript">
    <!--
        "use strict";
        ...... 
        ......
    -->
</script>
```

### 6) How to link external javascript file to html?
```html
<script src="path-to-file.js">
</script>
```

## JavaScript Properties vs testContent

<img src='../Notes/Images/attributes.png' heigth='400' width='400'> 

### Text content

<img src='../Notes/Images/text_content.png' heigth='400' width='400'> 




> #### If we target the element using DOM hieracrchy it might result in code breaks when DOM structure is changed.
**Solution:** use ID and target the element 

> 💻 Related Code : 
<a href="../JavaScript examples/dom-hierarchy-code.html">Click on this</a>

### ⚠️ Disadvantage of Using DOM Hierarchy for Targeting Elements

- If we target elements using **DOM hierarchy**, the code might **break** when the DOM structure is altered or changed.


- ✅ Solution : Use **ID** to target the element directly and reliably:
  ```javascript
  document.getElementById("myElement");
  ```


### 🆔 Targeting Elements Using ID Selector

<img src='../Notes/Images/id_selector.png' heigth='400' width='1000'> 


- We use the method:
  ```javascript
  const oneElement = document.getElementById('idname');
  ```
- If there are multiple elements with the **same ID**, the method will return only the first matching element.
  ```javascript
  document.getElementById("idname");
  ```

### 🎨 Style Binding to HTML Elements

- To bind a single CSS property to an element:
  ```javascript
  element.style.property = "value";
  ```
- ✅ To set multiple CSS properties in one line:
  ```javascript
  element.style.cssText = "cssKey1: value1; cssKey2: value2;";

  element.style.cssText = "color: blue; background-color: yellow;";
  ```

> 💻 Related Code : 
<a href="../JavaScript examples/using-multiple-id.html">Click on this</a>





## Accessing the Elements in JS

### <u>By ID Name</u>

**document.getElementByTagName() : Element**

 For Code <a href="../JavaScript examples/using-id-code.html">Click on this</a>

### <u>By Class Name</u>

**document.getElementByClassName() : HTMLCollection[]**

* For Code <a href="../JavaScript examples/using-class-code.html">Click on this</a>

* How to convert HTMLCollection to Array?
ans. arrayElements=Array.from(HTMLCollection)

### Working with iterator called "forEach"

* It can be used only on Array object.
```js 
const callbackFunction = (value, index, arr) => {
  // value -> current element
  // index -> index of the current element
  // arr   -> the entire array
};

// Usage
array.forEach(callbackFunction);
```

### <u>By Tag Name</u>

**document.getElementByTagName() : HTMLCollection[]**

 For Code <a href="../JavaScript examples/using-tag-name.html">Click on this</a>

 Another approach to convert HTMLCollection to Array "[...HTMLCollection]"

### <u>By Name</u>

**document.getElementByName() : NodeList**

 For Code <a href="../JavaScript examples/using-name-code.html">Click on this</a>

 While working with NodeList,directly we an use forEach() without any conversion

### <u>By QuerySelector</u>

 

**document.querySelector(cssSelector) : Element**

**document.querySelectorAll(cssSelector) : NodeList**

 querySelector(cssSelector) | querySelectorAll(cssSelector) to target the element in a HTML page.

 For Code <a href="../JavaScript examples/querySelector-code.html">Click on this</a>

 ### Working with different techniques to access DOM
<img src="./Images/different_DOM.png" height="400" width="1000">


## FAQ

### 1) Why do we need do many methods to target HTML page using javascript , when we can target directly with single method called 'querySelectorXXX()'?
**Ans.**
Older version of javascript added methods like getElementById( ), getElementByClassName( ), getElementByTagName( ) ,. . . . . . <br>
As css become popular, to give the direct support of accessing the elements using CSS methods like querySelector( ) and querySelectorAll( ) were added.

### 2) Difference between querySelector and getElementBy

> querySelector( ) | querySelectorAll( ) | getElementById( ) ===> works only for static DOM
<br>

>  getElementsByClassName( ) | getElementsByTagName( ) | getElementsByName( ) ===> Dynamic DOM

* For Code <a href="../JavaScript examples/static-dynamic-dom.html">Click on this</a>


**NOTE:**
HTMLCollection is a object first we need to convert to array and we should use it 
```js
elements = document.getElementsByClassName("box");
console.log(typeof elements); // Output: object

Array.from(elements).forEach((value) =>{
        value.style.cssText = "color: red; font-size: 25px; font-weight: bold;";
    })
  
elements.forEach((value) =>{
        value.style.cssText = "color: red; font-size: 25px; font-weight: bold;";
    })

```
## Static vs. Dynamic DOM Access — What's the difference?

### Static DOM Access
* Happens once, at the time of accessing.
* If DOM elements change later, the reference does not update.
* Example: querySelectorAll() returns a NodeList, which is static.


### Dynamic (Live) DOM Access
* Reflects changes automatically.
* If new elements are added or removed, the collection updates itself.
* Example: getElementsByClassName() returns an HTMLCollection, which is live.

### Static vs. Dynamic DOM
<img src="./Images/staticVSdynamic.png" height="400" width="1000">

### Example:
```html
<div id="container">
  <p class="item">Item 1</p>
  <p class="item">Item 2</p>
</div>

<button onclick="addItem()">Add Item</button>

<script>
  const liveList = document.getElementsByClassName("item"); // Dynamic (live)
  const staticList = document.querySelectorAll(".item");    // Static (snapshot)

  function addItem() {
    const p = document.createElement("p");
    p.className = "item";
    p.textContent = "New Item";
    document.getElementById("container").appendChild(p);

    console.log("Live (HTMLCollection):", liveList.length);   // Updates
    console.log("Static (NodeList):", staticList.length);     // Does not update
  }
</script>
```

# JavaScript Output Techniques

- **alert**
- **confirm**
- **document.write() | document.writeln()**
- **innerHTML | outerHTML**
- **innerText | outerText**
- **textContent**
- **console.XXXXX() [log(), warn(), error(), info(), debug()]**

---

| Method                  | Description |
|--------------------------|-------------|
| `alert()`                | Shows a simple alert message with an OK button. |
| `confirm()`              | Displays a message box with OK and Cancel buttons. Returns a boolean. |
| `document.write()`, `document.writeln()` | Writes directly to the HTML output stream. |
| `innerHTML`, `outerHTML` | Used to get/set HTML content of elements. |
| `innerText`, `outerText` | Used to get/set the visible text of elements. |
| `textContent`            | Retrieves or sets the text content of a node and its descendants. |
| `console.log()`, `console.warn()`, `console.error()`, `console.info()`, `console.debug()` | Used for debugging outputs to the console. |

---

## JavaScript Output Operations 💬

- 1️⃣ **`alert()`** 🚨  
- 2️⃣ **`confirm()`** ✅❌  
- 3️⃣ **`document.write()` | `document.writeln()`** 📝  
- 4️⃣ **`innerHTML` | `outerHTML`** 🔄  
- 5️⃣ **`innerText` | `outerText`** 📝  
- 6️⃣ **`textContent`** 🖋️  
- 7️⃣ **`console.XXXXX()`** [log(), warn(), error(), info(), debug()] 🖥️


---

### 1️⃣ `alert(msg)` 🚨: `void`
- Displays a message with an "OK" button.
- Returns `undefined` when the user clicks "OK" or presses the "ESC" key.
- Primarily used to display messages.

#### Limitation 🚫
- ❌ No styling can be added to the message.
- ❌ No "Cancel" button, so the user must click "ESC" to exit.

---

### 2️⃣ `confirm(msg)` ✅❌: `boolean`
- Displays a message with "OK" and "Cancel" buttons.
- Returns `true` when the user clicks "OK" and `false` when the user clicks "Cancel".

#### Limitation 🚫
- ❌ No styling can be added to the message.

> 💻 Related Code : 
<a href="../javascript-output-techniques/confirm-code.html">confirm-code.html</a>
---
### 3️⃣ `document.write(msg)` 📝

- Accepts `msg` as a **string** or **HTML elements**.
- Directly writes content into the HTML document.

---

#### Limitation 🚫
- `document.write()` can behave **unexpectedly** if used **after** the page has finished loading — it can overwrite the entire document.


#### ⚙️ Output Behavior of `document.write()`

##### 🔍 What Happens When You Click the Button?

- 🧨 The entire existing page (including the button, heading, etc.) gets **wiped out**.
- Only the content inside `document.write(...)` is displayed.

##### ❓ Why Does This Happen?

- After the page finishes loading, `document.write()` acts like:
  > "Let me 🧹 rebuild the entire document from scratch now!"

> 💻 Related Code : 
<a href="../javascript-output-techniques/document-write-code.html">javascript-output-techniques</a>

### 4️⃣ `innerHTML` vs `outerHTML` 🧱

- **`innerHTML`**: Adds the element as a **child** to the targeted container or element. 👶  
- **`outerHTML`**: **Replaces** the entire targeted element with the newly provided one. 🔁

> 💻 Related Code : 

<a href="../javascript-output-techniques/innerHTML-outerHTML.html">javascript-output-techniques</a>

---
### 5️⃣  `innerText` vs `outerText` ✍️

- Works like `innerHTML` and `outerHTML` ✅  
- But only for **text content** — no HTML or styles allowed 🛑
> 💻 Related Code : 
<a href="../javascript-output-techniques/innerText-outerText.html">innerText-outerText.html</a>

---

### 6️⃣ `textContent` 🖋️

- Used to get or set the **text content** of an element.
- Returns all the text within an element, **including text from hidden elements**.
- Does **not parse HTML**—purely works with plain text.
- Ideal when you're working with content programmatically and **don't need styling awareness**.



---

#### 📌 Difference: `innerText` vs `textContent`

- **`textContent`**  
  ✔️ Returns **all text**, including from **hidden elements**  
  ✔️ **Faster** and better for **raw text**  
  ✔️ Ignores CSS layout and visibility  

- **`innerText`**  
  ✔️ Returns only **visible text**  
  ✔️ Respects **CSS visibility** and **layout**  
  ✔️ Includes **line breaks and spacing** as shown on screen  

> ⚠️ Use `textContent` for performance.  
> 🎯 Use `innerText` for accurate, visible representation.

> 💻 Related Code : 
<a href="../javascript-output-techniques/textContent-innerText.html">textContent-innerText.html</a>

---
### 7️⃣🧾 Logs

- Logs refer to the **actions performed by the end user**.  
To **track user behavior or activity**, we use logs in JavaScript (commonly via `console.log()` or other logging tools).

<img src = "../Notes/Images/logPath.png">

> 💻 Related Code : 
  <a href="../javascript-output-techniques/ConsoleLog-info.html">ConsoleLog-info.html</a>
---


# Javascript input mechanism

a. prompt()  
b. queryString  
c. formelements


## 📥 JavaScript `prompt` Behavior
Returns: `string` | `null`

### 🖋️ Description
The `prompt` function shows a dialog box asking the user for input.  
Depending on how the user responds, it returns different values:

---

### 🧠 Behavior Table

| User Action                                   | Result                      |
|-----------------------------------------------|------------------------------|
| ✅ User enters data and clicks **OK**         | `'data'` (string with value) |
| ⚪ User leaves input **empty** and clicks **OK** | `''` (empty string)          |
| ❌ User clicks **Cancel** or presses **ESC**  | `null`                      |

---

✅ **Tip**: Always check if the result is `null` before using the value to avoid errors! 🚀

* prompt("MSG",[default msg]);

<img src = "../Notes/Images/multiPromt.png" width="500">

## 🌐 2. queryString

It is a combination of **URL + queryParameters (Key, Value)**.

To collect the queryString we use **BOM** (Browser Object Model):  
```javascript
queryString = location.search;
```

QueryString data is received as a **string**.  
String has various methods to process our input:

- a. `slice(start)`
- b. `indexOf('')`

> 💻 Related Code : 
  <a href="../javascript-output-techniques/queryString.html">ConsoleLog-info.html</a>