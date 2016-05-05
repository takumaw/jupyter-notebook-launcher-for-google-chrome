// Copyright (c) WATANABE Takuma <takumaw@sfo.kuramae.ne.jp>

'use strict';

/*
 * app
 */

window.onload = function() {
  'use strict';

	var JUPYTER_NOTEBOOK_DEFAULT_URL = "http://localhost:8888/tree"

	var default_params = {
		jupyterNotebookUrl: JUPYTER_NOTEBOOK_DEFAULT_URL,
	};

	chrome.storage.sync.get(default_params, function(items) {
		window.location = items.jupyterNotebookUrl;
	});
};
