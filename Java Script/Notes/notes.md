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
- **VB**


## Programming Paradigms Supported

JavaScript supports a variety of programming techniques:

1. Structural Programming  
2. Functional Programming  
3. Imperative Programming  
4. Object-Oriented Programming (OOP)

> **Note:** JavaScript is **not** a fully object-oriented programming language. It supports only some OOP features.


## Usage of JavaScript in Project Layers

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

## JavaScript Properties

<img src='../Notes/Images/attributes.png' heigth='400' width='400'> 

### Text content

<img src='../Notes/Images/text_content.png' heigth='400' width='400'> 

> #### If we target the element using DOM hieracrchy it might result in code breaks when DOM structure is changed.
**Solution:** use ID and target the element 

### Id selectors

<img src='../Notes/Images/id_selector.png' heigth='400' width='1000'> 


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
callbackfunction = (value,index,arr)=>{
                    //value
                    //index
                    //arr

}
forEach(callbackfunction)
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

## JavaScript Output Techniques

- **alert**
- **confirm**
- **document.write() | document.writeln()**
- **innerHTML | outerHTML**
- **innerText | outerText**
- **textContent**
- **console.XXXXX() [log(), warn(), error(), info(), debug()]**

1) ### alert(msg) : void
    * It as ok button
    * It returns undefined when the user clicks ok button | presses esc keyboard
    * It is used to just to display some messages.
    
    **Limitation**
    * No styling can be added to the message.
    * No cancel button, so to come out of the actions the user should click 'ecs' button.

2) ### confirm : boolean
    * It has ok and cancel button
    * It returns true when user clicks on 'ok' button otherwise it return false.

    **Limitation**
    * No styling can be added to the message.