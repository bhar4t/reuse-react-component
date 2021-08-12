# React Snackbar

Use very elegant, automatically dissapear after given timeout, React Snackbar as your component in React Application.

install:

       npm i reuse-react-snackbar


![React-Snackbar](https://raw.githubusercontent.com/bhar4t/reuse-react-component/main/snackbar.png "React-Snackbar")


|   Props       |       Detail (Default/Options)         |     Requirement   |
|---------------|---------------------------------------|-------------------|
|   message     |   String (No message)                 |     Mandatory     |
|   mode        |   String - WARNING/ERROR/SUCCESS      |     Mandatory     |
|   open        |   Boolean (false)                     |     Mandatory     |
|   timeout     |   1000-10000 (3000)                   |     Optional      |
|   bottom      |   Boolean (true)                      |     Optional      |
|   right       |   Boolean (true)                      |     Optional      |
|   action      |   Callback function (clickEvt => {})  |     Optional      |
|   actionLabel |   String (Ok)                         |     Optional      |
|   className   |   String (alert)                      |     Optional      |
|   style       |   Object                              |     Optional      |


import:

        import SnackBar from 'reuse-react-snackbar'
    

How to use:

```js
    <SnackBar message="You've added file Successfully" mode="SUCCESS" open={true} />
```

How to apply inline CSS:

```js
    <SnackBar
    message="You've added file Successfully"
    mode="SUCCESS"
    open={true}
    style={{
        textStyle: {
          color: 'white',
          fontSize: '3vh',
        },
        buttonStyle: {
          backgroundColor: 'white',
          color: 'black',
          border: 'solid black 2px'
        },
        containerStyle: {
          background: 'grey',
          borderRadius: 'none',
          border: 'solid black 0px',
          boxShadow: 'black 6px 7px 12px -4px'
        }
      }}
    />
```
output:
![React-Snackbar-Styled](https://raw.githubusercontent.com/bhar4t/reuse-react-component/main/styled.png "React-Snackbar-Styled")

    