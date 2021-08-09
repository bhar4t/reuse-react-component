# Serve your React Component by npm

You can publish your own React component to npm, below you'll see how to publish your own component to npm step by step.

1. Create a React application using

    ```
        npx create-react-app your-component-name
    ```

2. Add dependencies

    npm:

    ```
        npm i --save-dev @babel/cli @babel/preset-react
        
        or

        npm install --save-dev @babel/cli @babel/preset-react
    ```

    yarn:
    
    ```
        yarn add @babel/cli @babel/preset-react -D

        or 

        yarn add @babel/cli @babel/preset-react --dev
    ```

3. Add Babel react presets to your newly created application's package.json

    ```json
        "babel": {
            "presets": [
            "@babel/preset-react"
            ]
        },
    ```

4. Change scope to public

    ```json
        "private": false,
    ```

5. Add instruction to copying your component to `dist` in `react-script` after transpilation

    Windows:

    ```json
        "publish:npm": "rmdir /s /q dist && mkdir dist && babel .\\src\\component -d dist --copy-files"
    ```

    Linux:
    ```json
        "publish:npm": "rm -rf dist && mkdir dist && babel src/component -d dist --copy-files"
    ```

6. Create your component inside dir `component` or you can name it anything you want, but be sure you are changing name in previous 'react-script' instruction. and give any name to your component file name. but be sure you'll change the name in `package.json`'s `main` value.

    ```js
        import React from 'react'

        function ReuseableComponent() {
            return (
                <div>
                    Hello, World!
                </div>
            );
        }

        export default ReuseableComponent;
    ```
    For this example I've created a simple React component that prints 'Hello, World!' whenver you use this component in your React application and gave file name as `index.js`.

7. Include entrypoint in your `package.json`, according your file name.

    ```json
        "main": "./dist/index.js",
    ```

8. And, last you have to add dependencies in your `package.json`, whenever you created React application you've seen some dependencies are already added, but you need to modify `dependencies` field to `peerDependencies` cause if any React including your module in their application they will definitely have basic dependencies so peer dependencies items won't be duplicated there.

    ```json
        "peerDependencies": {
            "react": "^17.0.2",
            "react-dom": "^17.0.2",
            "react-scripts": "4.0.3"
        },
    ```

9. Run `publish:npm` it will generate new files every time inside directory `dist`.

    npm:
        ```
            npm run publish:npm
        ```
    yarn:
        ```
            yarn publish:npm
        ```
10. Publish your React to npm

    ```
        npm login

        npm publish
    ```
    Be sure, you've `npm` account and change version everytime whenever you publish your module to `npm`.

Happy Coding :)