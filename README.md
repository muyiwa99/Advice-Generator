# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://main--advicegenmuyiwa.netlify.app/). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Generate a new piece of advice by clicking the dice icon

### Screenshot

![](./dist/images/Advice-gen%20screen.png)
![](./dist/images/Advice-gen%20screen%202.png)
![](./dist/images/Advice-gen%20screen%203.png)

### Links

- Solution URL: [https://github.com/muyiwa99/Advice-Generator]()
- Live Site URL: [https://advicegenmuyiwa.netlify.app/]()

## My process

- Looking at the design images to best understand the best way to execute the challenge
- Breaking the Project down into steps, writing up the HTML, then styling the page with SCSS, then implementing the functionality with JS
- Conducting further research on ASYNC/AWAIT, API fetch requests and CSS Animations
- Finishing off by making the app fully responsive.

### Built with

- Semantic HTML5 markup
- SCSS custom properties
- Flex box
- Mobile-first workflow
- JS- App functionality

### What I learned

This project helped to gain a more improved understanding of how ASNYC/AWAIT works, how to fetch data from an API, convert that data from JSON, then destructuring the data to then render them onto the page. I was able to implement multiple functions which all had different task compared to on previous projects when my functions handled multiple tasks which the lead to bugs and making the code difficult to read and understand, this helped me understand the importance of using callbacks and how to implement them going forward.

some code i'm proud of, the simplicity of the this project allowed me to add some extra bits to make the app stand out a little more. The block of code below (generated from animista) allowed me to add a cool animation effect to the 'advice' each time the button is 'clicked' by the user.

```css
.scale-in-center {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035)
    forwards;
  animation: scale-in-center 0.5s cubic-bezier(0.95, 0.05, 0.795, 0.035) forwards;
}

@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
```

### Continued development

Going forward i want to develop more web app's that that utilize API requests as theres a lot that can be learnt from these types of challenges e.g. handling the request, handling the data, rendering the data, how the user input affects the data, error handling, event delegation and so much more.

### Useful resources

- Animista (https://animista.net/): Used for the Animation effect of the 'Advice' quote.
- (https://html-css-js.com/): Used for the box shadow effect on the hover of the dice button
- MDN (https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous)- For general Qs (ASYNC/Await, JSON, Try/Catch etc )

## Author

- Frontend Mentor - [@Muyiwa00](https://www.frontendmentor.io/profile/muyiwa99)

## Acknowledgments

I want to thank the Web development community for the endless amount of resources shared online which helps and gives Developers like myself countless ways of implementing challenges like this which then helps with learning new web dev concepts.
