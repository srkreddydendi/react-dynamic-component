### SelectInterestRate

###### Description:
a `<select/>` tag with self populated options for selecting interest rate percentage

###### Examples of Usage

Basic Usage:
```javascript
<SelectInterestRate id="interestRate" value={interestRate} onChange={inputChangeHandler}/>
```
----

Inside the module you'll find helper function `buildRateArray` that generates an array filled with a range of numbers, defined by min and max, to render the select options:
```
export const MIN_RATE = 0;
export const MAX_RATE = 20;
```
exported also to use for the field validation in the main component.


###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes|''|The select html id
value|string|yes|0|The interest rate percentage
onChange|func|yes|() => null|Event listener for updating the value
label|string|no|''|The select's label text
placeholder|string|no|''|The select placeholder text