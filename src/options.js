// Copyright (c) WATANABE Takuma <takumaw@sfo.kuramae.ne.jp>

'use strict';

var app = app || {};
app.options = app.options || {};

/*
 * constants
 */

app.options.JUPYTER_NOTEBOOK_DEFAULT_URL = "http://localhost:8888/tree"

/*
 * initialize
 */

app.options.initialize = function () {
	// localization
  app.options.localize();

	// load options
	app.options.load_options();

  // init interfaces
  app.options.render_init();
};

app.options.localize = function () {
    // TODO: Implement this
}

/*
 * initialize elements
 */

app.options.render_init = function () {
  $("#options_button_save").on("click", function(){
    app.options.save_options(function(){
      window.close();
    });
  });

  $("#options_button_reset").on("click", function(){
    app.options.load_options();
  });
}

/*
 * load and save options
 */

app.options.load_options = function () {
	var default_params = {
		jupyterNotebookUrl: app.options.JUPYTER_NOTEBOOK_DEFAULT_URL,
	};

	chrome.storage.sync.get(default_params, function(items) {
		$("#options_field_jupyter_url")[0].value = items.jupyterNotebookUrl;
	});
}

app.options.save_options = function (callback) {
	var params = {
		jupyterNotebookUrl: $("#options_field_jupyter_url")[0].value,
	};

	chrome.storage.sync.set(params, function() {
    if (callback !== undefined) {
      callback();
    }
	});
}

/*
 * on load triggering
 */

$(document).ready(function(){
	app.options.initialize();
})
