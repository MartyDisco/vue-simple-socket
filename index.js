(() => {
	const VueSimpleSocket = {}
		, io = require('socket.io-client')
	VueSimpleSocket.install = (Vue) => { Vue.prototype.$socket = io() }
	if (typeof exports === 'object') module.exports = VueSimpleSocket
	else if (typeof define === 'function' && define.amd) {
		define([], () => VueSimpleSocket)
	} else if (window.Vue) {
		window.VueSimpleSocket = VueSimpleSocket
		Vue.use(VueSimpleSocket)
	}
})()
