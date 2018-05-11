# AdOn Candle

A simple Vue wrapper on socket.io-client, providing an easy way to use sockets

## Installing

Using npm :

```
npm install vue-simple-socket
```

Using yarn :

```
yarn add vue-simple-socket
```

## Setup

Import ES6 module style :

```
import Vue from 'vue'
import SimpleSocket from 'vue-simple-socket'
```

Or CommonJS style :

```
const Vue = require('vue')
  , SimpleSocket = require('vue-simple-socket')
```

Or AMD style :

```
define(['vue', 'vue-simple-socket'], function(Vue, SimpleSocket) {})
```

Or even `<script>` style :

```
<script src="http://path/to/vue.js"></script>
<script src="http://path/to/vue-simple-socket/index.js"></script>
```

Then provide `SimpleSocket` to the `use()` function of `Vue` (not needed for `<script>` style) :

```
Vue.use(SimpleSocket)
```

## Useage

You can now use `$socket` in your `Vue` instances and components

```
new Vue({
  created() {
    this.$socket.on('myEvent', (data) => { // Do something with data })
  }
  , destroyed() {
    this.$socket.off('myEvent') // Unsubscribe if you load your components dynamically
  }
})
```

## Dependencies

* [socket.io-client](https://github.com/socketio/socket.io-client) - Realtime application framework (client)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details
