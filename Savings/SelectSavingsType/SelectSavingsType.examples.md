### SelectSavingsType

###### Description:
a `<select/>` tag with self populated options:

'Cash ISA',
'Stocks and shares ISA',
'Savings account',
'Current account',
'other'

###### Examples of Usage

Basic Usage:
```javascript
<SelectSavingsType id="savingsType" value={savingsType} onChange={inputChangeHandler}/>
```
----

###### Props

Property | Type | Required | Default value | Description
:--- | :--- | :--- | :--- | :---
id|string|yes|''|The select html id
value|string|yes|0|The savings type
onChange|func|yes|() => null|Event listener for updating the value
label|string|no|''|The select's label text
placeholder|string|no|''|The select placeholder text