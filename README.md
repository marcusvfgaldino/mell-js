![Bee](bee.png)

[CC BY-NC-SA](http://creativecommons.org/licenses/by-nc-sa/2.0/)

# Mell JS

Mell is a Javascript framework that facilitates the development of web applications, allowing the manipulation of the DOM and creation of more robust and complex elements in a simplified way.

## Browser Support

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) |
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Installation

Insert in your end body.

```html
<body>
...
</body>
<script src="/dist/mell-min.js"></script>
```

## Summary

- [Class](#user-content-class) 
- [Events](#user-content-events)
- [Html](#user-content-html)

## Methods

Just below we see the documentation and examples of use of framework.

### Class

Methods of manipulate of DOM class.

#### mell.class.add(parameter, element)

Add a class in element.

```js
 mell.class.add("h1", "green"); // <h1 class="green">Title</h1>
 mell.class.add("#desc", "red"); // <p id="desc" class="red">Desc</p>
```

#### mell.class.remove(parameter, element)

Remove a class in a element.

```js
 mell.class.remove("h1", "green"); // <h1>Title</h1>
 mell.class.remove("#desc", "red"); // <p id="desc">Desc</p>
```

### Events

Methods of manager JS events.

#### mell.click(parameter, event)

Triggers an event when you click on a particular element.

```js
 mell.click("h1", function(){alert("Done!")}); 
```

#### mell.docready(event)

Trigger an event when the DOM is fully loaded

```js
 mell.docready(function(){alert("Done!")}); 
```

### Html

Methods of manager HTML code of DOM.

#### mell.html.insert(code, element, location)

Insert HTML code in DOM

The **location** parameter can be one of the options:

**'beforebegin'** 
Insert html code before parameter

**'beforeend'**
Inside the element, before your first child.

**'afterbegin'**
Inside the element, after your last child

**'afterend'**
After the element

```js
 mell.html.insert("<p class='mell'>Testing Mell<p>", "span", "beforebegin"); //<span><p class='mell'>Testing Mell</p><p>This is Mell JS</p><span>
```
#### mell.html.delete(element)

Remove HTML code of DOM

```js
 mell.html.remove(".green"); //All the elements in DOM with 'green' class will be removed
```

#### mell.html.get(element)

Get HTML code of DOM

```js
 var code = mell.html.get("#green"); //Stores the element's html code with id 'green' in the variable
```

#### mell.load(url)

It brings a specific file content or url. Can be used to consume api

```js
 var reponse = mell.load("https://api.com/consume"); //Stores response of url in the variable 'response'
```



