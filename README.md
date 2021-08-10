# React Snackbar

Use very elegant, automatically dissapear after given timeout, React Snackbar as your component in React Application.

install:

    
       npm i reuse-react-snackbar


![React-Snackbar](https://raw.githubusercontent.com/bhar4t/reuse-react-component/main/snackbar.png "React-Snackbar")


|   Props       |       Value (Default/Options)         |     Requirement   |
|---------------|---------------------------------------|-------------------|
|   message     |   String (No message)                 |     Mandatory     |
|   mode        |   String - WARNING/ERROR/SUCCESS      |     Mandatory     |
|   open        |   Boolean (false)                     |     Mandatory     |
|   timeout     |   1000-10000 (3000)                   |     Optional      |
|   position    |   COMING SOON                                             |


import:

    
        import SnackBar from 'reuse-react-snackbar'
    

How to use:

    
        
        <SnackBar message="You've added file Successfully" mode="SUCCESS" open={true} />

    