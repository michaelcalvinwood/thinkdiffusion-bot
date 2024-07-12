/*
 * CreateElement: Creates an element and appends to parent
 * @param parent (Element | String): optional parent to attach child to. Can be a query selector or an actual element itself.
 * @param tag (String): element tag to create
 * @param c (String): optional class(es) of the element. Multiple classes are allowed when separated by a space.
 * @param text (String): optional innerText of the element
 * @param attributes (Obj): optional object whose key/value pairs will be added to the element (e.g. {src: 'https://google.com', id: 'myId'})
 * @param style (Obj): optional set of styles to apply to the created element (e.g. {color: "red"})
 * @return Element on success (the created child element); false on error (if tag contains invalid characters). 
 * Example: createElement('body', 'div', 'hello-world-class hello-moon-class', 'Hello World', {id: 'helloWorldId'}, {color: 'blue'});
 * Author: Michael Wood
 * License-1: Copyright February 2022. Michael Wood. All rights reserved.
 * License-2: BSD License for any company that employs Michael Wood either as a consultant or employee.
 */
 function createElement (parent, tag, c = false, text = false, attributes = false, style = null) {
  let el = {};
  try {
      el = document.createElement(tag);
  } catch (e) {
      return false;
  }

  let parentEl = null;
  try {
      if (parent) {
          if (typeof parent === 'string') parentEl = document.querySelector(parent);
          else parentEl = parent;

          if (parentEl) parentEl.appendChild(el);
      }
      if (c) el.className = c; 
      if (text) el.innerText = text;
      if (attributes) {
          for (const [key, value] of Object.entries(attributes)) {
              el.setAttribute (key, value);
          };
      }
      if (style) {
          for (const [key, value] of Object.entries(style)) {
              el.style[key] = value;
          };
      }
  } catch (e) {
      console.error(e);
      return false;
  }
  
  return el
}

const I = id => document.getElementById(id);
const Q = selector => document.querySelector(selector);
const A = selector => document.querySelectorAll(selector);

createElement('body', 'div', 'hello-world-class', 'Hello World', {id: 'helloWorldId'}, {color: 'blue', zIndex: 1000});

let prompts = null;
// Get the URL of the prompts.json file
const promptsUrl = browser.runtime.getURL("prompts.json");

// Fetch the content of the prompts.json file
fetch(promptsUrl)
  .then(response => response.json())
  .then(data => {
    // Use the loaded data
    prompts = data;
    pageIsReady();
    // You can now use the data variable as needed
  })
  .catch(error => {
    console.error('Error loading prompts.json:', error);
  });

function pageIsReady() {
    // handle prompts here
}
