/*jshint unused:false */

(function (exports) {

	'use strict';

	var STORAGE_KEY = 'todos-vuejs';

	exports.todoStorage = {
		fetch: async function () {
                        const config = await(await fetch('./config.json')).json();
                        return (async() => await (await fetch(config.backendUrl)).json())();
		},
		save: function (todos) {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
		}
	};

})(window);
