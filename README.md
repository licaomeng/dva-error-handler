# dva-error-handler

Dva plugin, Injects try-catch into Dva effects, also provides default handling method.

**DvaJS:** https://dvajs.com/

## Installation
```sh
tnpm install dva-error-handler --save
```

## Usage
```
import dva from 'dva'
import dvaErrorHandler from 'dva-error-handler'

const app = dva()
app.use(dvaErrorHandler()) // console.log error msg
app.use(dvaErrorHandler((e) => alert(e.message))) // alert error msg
```