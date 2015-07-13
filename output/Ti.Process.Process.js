Ext.data.JsonP.Ti_Process_Process({"tagname":"class","name":"Ti.Process.Process","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Process.Process","members":{"cfg":[],"property":[],"method":[{"name":"cloneEnvironment","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-cloneEnvironment"},{"name":"getArguments","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getArguments"},{"name":"getEnvironment","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getEnvironment"},{"name":"getExitCode","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getExitCode"},{"name":"getPID","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getPID"},{"name":"getStderr","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getStderr"},{"name":"getStdin","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getStdin"},{"name":"getStdout","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-getStdout"},{"name":"isRunning","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-isRunning"},{"name":"kill","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-kill"},{"name":"launch","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-launch"},{"name":"sendSignal","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-sendSignal"},{"name":"setEnvironment","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-setEnvironment"},{"name":"setOnExit","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-setOnExit"},{"name":"setOnRead","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-setOnRead"},{"name":"setOnReadLine","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-setOnReadLine"},{"name":"terminate","tagname":"method","owner":"Ti.Process.Process","meta":{},"id":"method-terminate"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Process.Process.js","href":null},{"filename":"Ti.Process.Process.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing a process instance.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-cloneEnvironment' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-cloneEnvironment' class='name expandable'>cloneEnvironment</a>( <span class='pre'></span> ) : Object, environment</div><div class='description'><div class='short'>Return a clone of this process' environment. ...</div><div class='long'><p>Return a clone of this process' environment.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object, environment</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getArguments' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getArguments' class='name expandable'>getArguments</a>( <span class='pre'></span> ) : Array<String></div><div class='description'><div class='short'>Return the list of arguments associated with this Process. ...</div><div class='long'><p>Return the list of arguments associated with this Process.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array<String></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEnvironment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getEnvironment' class='name expandable'>getEnvironment</a>( <span class='pre'>key</span> ) : String|Object</div><div class='description'><div class='short'>Return the environment associated with this process. ...</div><div class='long'><p>Return the environment associated with this process.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>an environment key</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String|Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getExitCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getExitCode' class='name expandable'>getExitCode</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the exit code for this process. ...</div><div class='long'><p>Return the exit code for this process. Before the process exits, this value will be null.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPID' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getPID' class='name expandable'>getPID</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the process identifier for this process. ...</div><div class='long'><p>Return the process identifier for this process. Before the process launches, this value will be -1.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStderr' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getStderr' class='name expandable'>getStderr</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></div><div class='description'><div class='short'>Return the stderr pipe for this process. ...</div><div class='long'><p>Return the stderr pipe for this process.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStdin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getStdin' class='name expandable'>getStdin</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></div><div class='description'><div class='short'>Return the stdin pipe for this process. ...</div><div class='long'><p>Return the stdin pipe for this process.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStdout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-getStdout' class='name expandable'>getStdout</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></div><div class='description'><div class='short'>Return the stdout pipe for this process. ...</div><div class='long'><p>Return the stdout pipe for this process.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Process.Pipe\" rel=\"Ti.Process.Pipe\" class=\"docClass\">Ti.Process.Pipe</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isRunning' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-isRunning' class='name expandable'>isRunning</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if this process is running and false otherwise. ...</div><div class='long'><p>Return true if this process is running and false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-kill' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-kill' class='name expandable'>kill</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Kill this process (SIGINT in Unix, TerminateProcess in Windows) ...</div><div class='long'><p>Kill this process (SIGINT in Unix, TerminateProcess in Windows)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-launch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-launch' class='name expandable'>launch</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Launch this process asynchronously (not waiting for it's exit)\" ...</div><div class='long'><p>\"Launch this process asynchronously (not waiting for it's exit)\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sendSignal' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-sendSignal' class='name expandable'>sendSignal</a>( <span class='pre'>signal</span> ) : String</div><div class='description'><div class='short'>\"Send a signal (e.g. ...</div><div class='long'><p>\"Send a signal (e.g. Process.SIGHUP) to this Process NOTE: this method does nothing in Windows\"</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>signal</span> : Number|String<div class='sub-desc'><p>The name of the signal to send.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEnvironment' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-setEnvironment' class='name expandable'>setEnvironment</a>( <span class='pre'>key, value</span> ) : String</div><div class='description'><div class='short'>Set an environment variable for this process ...</div><div class='long'><p>Set an environment variable for this process</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>an environment key</p>\n</div></li><li><span class='pre'>value</span> : String<div class='sub-desc'><p>the value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOnExit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-setOnExit' class='name expandable'>setOnExit</a>( <span class='pre'>onExit</span> ) : String</div><div class='description'><div class='short'>Set an onExit event handler for this process ...</div><div class='long'><p>Set an onExit event handler for this process</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onExit</span> : Function<div class='sub-desc'><p>a function</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOnRead' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-setOnRead' class='name expandable'>setOnRead</a>( <span class='pre'>onRead</span> ) : String</div><div class='description'><div class='short'>Set an onRead event handler for this process stdout and stderr. ...</div><div class='long'><p>Set an onRead event handler for this process stdout and stderr. This handler will take one argument which is the event for this output. To retrieve event data, simply access <tt>event.data</tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onRead</span> : Function<div class='sub-desc'><p>\"a handler that is passed an event, with a \\\"data\\\" Bytes full of data read from the pipe\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOnReadLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-setOnReadLine' class='name expandable'>setOnReadLine</a>( <span class='pre'>fn</span> ) : String</div><div class='description'><div class='short'>Set the callback to invoke every time a line of input is received from the process. ...</div><div class='long'><p>Set the callback to invoke every time a line of input is received from the process. This callback will take one argument, which will be the line of output.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>a callback that is called with every line of output received from this process</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-terminate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Process.Process'>Ti.Process.Process</span><br/></div><a href='#!/api/Ti.Process.Process-method-terminate' class='name expandable'>terminate</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Terminate this process (SIGTERM in Unix, TerminateProcess in Windows) ...</div><div class='long'><p>Terminate this process (SIGTERM in Unix, TerminateProcess in Windows)</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});