# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Homework Assignment #11: Phone Number Validation Using Regex

### Description
This assignment makes use of a myriad of concepts and tooling (React Form, SyntheticEvent, Regex, Conditional Rendering, etc.) we discussed in lectures. You will build a very simple phone number validation form, allowing the user to enter any US-based Phone Number and validate it. You must use Regex to validate the user entries. Writing conditional statements in JavaScript won't get you any points for logic.

### US-Based Phone Number Format
A Valid US-based phone number assumes the following format (without the Country Code):

<img src="https://cdn2.hubspot.net/hub/4561911/hubfs/Insycle%20-%20Considerations%20for%20Formatting%20Phone%20Numbers%20for%20Consistency%20in%20Your%20CRM.png?quality=high&width=723&name=Insycle%20-%20Considerations%20for%20Formatting%20Phone%20Numbers%20for%20Consistency%20in%20Your%20CRM.png">

### Regex Validation Requirements
For this Assignment, a valid phone number must abide by the following rules:

<ul>
    <li>No Country Code is needed. </li>
    <li>Area Code is a combination of any 3 digits from 0 to 9.</li>
    <li>Area Code may be wrapped in a pair of ( ).</li>
    <li>Area Code, Exchange Code and Line Number can be separated by zero to many dashes (-). </li>
    <li>You may have any number of leading or trailing spaces for your entry, as long as your phone number follows the above rules. </li>
    <li>There are many variations based on the above rules. To simplify code, your Regex will only need to support the following positive, six (6) valid use cases, displaying "Valid Phone number" </li>
    <ul>
        <li>(650)513-0514 // no space between area code and exchange code</li>
        <li>(650) 513-0514 // one space between area code and exchange code</li>
        <li>650-513-0514 // dashes between area code, exchange code, and line number</li>
        <li>6505130514 // 10-digit phone number without dashes </li>
        <li>650513-0514 // 10-digit phone number with one dash between Exchange Code and Line Number</li>
        <li>650-5130514 // 10-digit phone number with one dash between Area Code and Exchange Code</li>
    </ul>
    <li>For any negative use cases that do not support the above six use cases, your solution will display "Invalid Phone Number".</li>
</ul>

### Rubrics 
However you choose to implement your regex, your app has to work; you will be graded on the features, i.e., their functional merit, not how they are implemented in regex. The only exception is if your solution leverages anything outside of regex. Note: writing conditional statements in JavaScript won't get you any points for logic.

### Notes
Keep your code simple; no fancy CSS needed for submission. 
You should always start with bootstrapping your app with create-react-app (CRA), which pulls correct and stable dependencies needed to power the app regardless of which React version the world is on. 
If you don't use CRA, you may end up with mismatching dependencies in package.json requiring additional tweaking to update. 
You are allowed to freely construct your validation form anyway you like it, as long as it looks similar to what is in the Demo Animation. 
