

Router.configure({
  layoutTemplate: 'interface'
});


/**
Router.route('/settings', {

	/name: 'settings',

});
*/

Router.route('/dashboard', {

	yieldTemplates: {
		'dashboard': {to: 'body'}
	},

});



Router.route("/settings", function() {

	this.redirect("/settings/profile");

});


/** Dynamic Routes */

['profile', 'billing', 'account'].forEach(function(path) {


	Router.route('/settings/' + path, {

		yieldTemplates: {
			'settings': {to: 'body'}
		},

		template: path,

	});

});


Router.route('/', function() {
	this.redirect("/dashboard");
});


