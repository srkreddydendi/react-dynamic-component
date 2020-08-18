### Savings

###### Description:
a component that captures svaings with 4 inputs and 2 buttons.

###### Examples of Usage

Basic Usage:
```javascript
<Savings onAddEvent={addEventHandler} onCancel={cancelHandler}/>
```
----

###### Component's State

Property | Type | Default value | Description
:--- | :--- | :--- | :---
isFormValid|bool|false|status of the 3 inputs validation
savingsType|string|''|the saving type
interestRate|number|0|the interest rate percentage
receiveAge|number|0|the Age of receving
interestRate|number|0|the total value


###### Component's Methods

Method name | Description
:--- | :---
inputChangeHandler|generic method to capture any of the 4 inputs, and set their value in the state by their type (string / number), then calls `setIsFormValid` method.
validateForm|return `true`/`false` based of set of validations for the 3 inputs.
setIsFormValid|set the state of: `isFormValid` and `isEventNameInvalid` based on the previous methods.

###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
onAddEvent|func|yes|() => null|Event listener for submitting the form
onCancel|func|yes|() => null|Event listener for canceling the form