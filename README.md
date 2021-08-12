# React Snackbar

Use very elegant fully customisable, with automatically disappearable, React Snackbar in your React application.

- Customisable CSS (inline or by custom classname)
- Manage disappear time
- Multiple Modes
- Show in any place
- Action Handling

### install

       npm i reuse-react-snackbar


![React-Snackbar](https://raw.githubusercontent.com/bhar4t/reuse-react-component/main/snackbar.png "React-Snackbar")


|   Props       |       Detail (Default/Options)        |     Requirement   |
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


### import

        import SnackBar from 'reuse-react-snackbar'
    

### Usage

```js
    <SnackBar message="You've added file Successfully" mode="SUCCESS" open={true} />
```

### Inline CSS

```js
    <SnackBar
        message="You've added file Successfully"
        mode="SUCCESS"
        open={true}
        style={{
            textStyle: {
                color: 'white',
            },
            buttonStyle: {
                backgroundColor: 'white',
                color: 'black',
            },
            containerStyle: {
                background: 'grey',
                boxShadow: 'black 6px 7px 12px -4px'
            }
        }}
        />
```
### Output

![React-Snackbar-Styled](https://raw.githubusercontent.com/bhar4t/reuse-react-component/main/styled.png "React-Snackbar-Styled")

    