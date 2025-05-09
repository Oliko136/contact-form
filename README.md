# Frontend Mentor - Contact form solution

This is a solution to the [Contact form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/contact-form--G-hYlqKJj). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Complete the form and see a success toast message upon successful submission
- Receive form validation messages if:
  - A required field has been missed
  - The email address is not formatted correctly
- Complete the form only using their keyboard
- Have inputs, error messages, and the success message announced on their screen reader
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./assets/images/form-empty.webp)
![](./assets/images/form-error.webp)
![](./assets/images/form-filled.webp)
![](./assets/images/form-success.webp)

### Links

- Solution URL: [View solution here](https://github.com/Oliko136/contact-form)
- Live Site URL: [View live page here](https://oliko136.github.io/contact-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

The main purpose of this challenge was to learn how to create accessible forms and accessible validation patterns, such as handling error messages and a success notification.

First of all, I learned that although the FormData object is extremely useful, it omits checkboxes and radio buttons with empty values, posing a huge inconvenience for validation. So, if a form includes required checkboxes and radio buttons, it is better to make a data object manually, the old school way.

Secondly, getting screen readers to announce live regions such as error messages or success notifications was not as easy as it seemed initially. The best option I found was to dynamically insert text as a response to certain condition, rather than showing / hiding the parent element. Also, live regions are not compatible with "display: none", so in order to avoid extra space caused by an empty element (reserved for an error / success message) it is best to assign "position: absolute" to it.

### Useful resources

- [Inclusive Inputs. How to make inputs more accessible.](https://www.ovl.design/text/inclusive-inputs/) - An incredibly useful article containing advice on how to properly mark required fields, add descriptions and error messages to corresponding inputs.
- [Indicating form controls as required using asterisks (\*)](https://www.accessibility-developer-guide.com/examples/forms/required/#first-approach-using-aria) - Another super helpful article on how to properly mark required fields to make them accessible.
- [Usable and Accessible Form Validation and Error Recovery](https://webaim.org/techniques/formvalidation/) - A WebAIM article full of practical instructions on how to build accessible forms and validate them.
- [Accessibility and Forms](https://web.dev/learn/accessibility/forms) - A great concise article on all the essentials of form accessibility - semantics, labels, fieldsets, autocompletion, descriptions and errors.

## Author

- LinkedIn - [@olha-sliusarenko](https://www.linkedin.com/in/olha-sliusarenko/)
- X - [@committedto_git](https://x.com/committedto_git)
- Instagram - [@committedto_git](https://www.instagram.com/committedto_git/)
- Frontend Mentor - [@Oliko136](https://www.frontendmentor.io/profile/Oliko136)
