Ext.data.JsonP.Ti({"tagname":"class","name":"Ti","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti","members":{"cfg":[],"property":[{"name":"ALL","tagname":"property","owner":"Ti","meta":{},"id":"property-ALL"},{"name":"APP_EXIT","tagname":"property","owner":"Ti","meta":{},"id":"property-APP_EXIT"},{"name":"CLOSE","tagname":"property","owner":"Ti","meta":{},"id":"property-CLOSE"},{"name":"CLOSED","tagname":"property","owner":"Ti","meta":{},"id":"property-CLOSED"},{"name":"CREATE","tagname":"property","owner":"Ti","meta":{},"id":"property-CREATE"},{"name":"EXIT","tagname":"property","owner":"Ti","meta":{},"id":"property-EXIT"},{"name":"FOCUSED","tagname":"property","owner":"Ti","meta":{},"id":"property-FOCUSED"},{"name":"FULLSCREENED","tagname":"property","owner":"Ti","meta":{},"id":"property-FULLSCREENED"},{"name":"HIDDEN","tagname":"property","owner":"Ti","meta":{},"id":"property-HIDDEN"},{"name":"HTTP_ABORT","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_ABORT"},{"name":"HTTP_DATA_RECEIVED","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_DATA_RECEIVED"},{"name":"HTTP_DATA_SENT","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_DATA_SENT"},{"name":"HTTP_DONE","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_DONE"},{"name":"HTTP_REDIRECT","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_REDIRECT"},{"name":"HTTP_STATE_CHANGED","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_STATE_CHANGED"},{"name":"HTTP_TIMEOUT","tagname":"property","owner":"Ti","meta":{},"id":"property-HTTP_TIMEOUT"},{"name":"MAXIMIZED","tagname":"property","owner":"Ti","meta":{},"id":"property-MAXIMIZED"},{"name":"MINIMIZED","tagname":"property","owner":"Ti","meta":{},"id":"property-MINIMIZED"},{"name":"MOVED","tagname":"property","owner":"Ti","meta":{},"id":"property-MOVED"},{"name":"OPEN","tagname":"property","owner":"Ti","meta":{},"id":"property-OPEN"},{"name":"OPENED","tagname":"property","owner":"Ti","meta":{},"id":"property-OPENED"},{"name":"OPEN_REQUEST","tagname":"property","owner":"Ti","meta":{},"id":"property-OPEN_REQUEST"},{"name":"PAGE_INITIALIZED","tagname":"property","owner":"Ti","meta":{},"id":"property-PAGE_INITIALIZED"},{"name":"PAGE_LOADED","tagname":"property","owner":"Ti","meta":{},"id":"property-PAGE_LOADED"},{"name":"READ","tagname":"property","owner":"Ti","meta":{},"id":"property-READ"},{"name":"RESIZED","tagname":"property","owner":"Ti","meta":{},"id":"property-RESIZED"},{"name":"SHOWN","tagname":"property","owner":"Ti","meta":{},"id":"property-SHOWN"},{"name":"UNFOCUSED","tagname":"property","owner":"Ti","meta":{},"id":"property-UNFOCUSED"},{"name":"UNFULLSCREENED","tagname":"property","owner":"Ti","meta":{},"id":"property-UNFULLSCREENED"}],"method":[{"name":"getPlatform","tagname":"method","owner":"Ti","meta":{},"id":"method-getPlatform"},{"name":"getVersion","tagname":"method","owner":"Ti","meta":{},"id":"method-getVersion"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.js","href":null},{"filename":"Ti.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>This is the top-level TideSDK module, containing all TideSDK APIs.\nTideSDK API objects generally follow the setProperty()/getProperty()\npattern, but you may also use accessors for most operations For example:</p>\n\n<pre><code>var window = Ti.UI.currentWindow;\nwindow.setHeight(300); // Set the window height to 300 pixels.\nwindow.height = 300; // The same.\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-ALL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-ALL' class='name expandable'>ALL</a><span> : String</span></div><div class='description'><div class='short'>The ALL event constant. ...</div><div class='long'><p>The ALL event constant. This can be used for listening for all events.</p>\n</div></div></div><div id='property-APP_EXIT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-APP_EXIT' class='name not-expandable'>APP_EXIT</a><span> : String</span></div><div class='description'><div class='short'><p>The APP_EXIT event constant, fired during host application exit.</p>\n</div><div class='long'><p>The APP_EXIT event constant, fired during host application exit.</p>\n</div></div></div><div id='property-CLOSE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-CLOSE' class='name not-expandable'>CLOSE</a><span> : String</span></div><div class='description'><div class='short'><p>The CLOSE event constant</p>\n</div><div class='long'><p>The CLOSE event constant</p>\n</div></div></div><div id='property-CLOSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-CLOSED' class='name not-expandable'>CLOSED</a><span> : String</span></div><div class='description'><div class='short'><p>The CLOSED event constant</p>\n</div><div class='long'><p>The CLOSED event constant</p>\n</div></div></div><div id='property-CREATE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-CREATE' class='name not-expandable'>CREATE</a><span> : String</span></div><div class='description'><div class='short'><p>The CREATE event constant</p>\n</div><div class='long'><p>The CREATE event constant</p>\n</div></div></div><div id='property-EXIT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-EXIT' class='name not-expandable'>EXIT</a><span> : String</span></div><div class='description'><div class='short'><p>The EXIT event constant</p>\n</div><div class='long'><p>The EXIT event constant</p>\n</div></div></div><div id='property-FOCUSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-FOCUSED' class='name not-expandable'>FOCUSED</a><span> : String</span></div><div class='description'><div class='short'><p>The FOCUSED event constant</p>\n</div><div class='long'><p>The FOCUSED event constant</p>\n</div></div></div><div id='property-FULLSCREENED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-FULLSCREENED' class='name not-expandable'>FULLSCREENED</a><span> : String</span></div><div class='description'><div class='short'><p>The FULLSCREENED event constant</p>\n</div><div class='long'><p>The FULLSCREENED event constant</p>\n</div></div></div><div id='property-HIDDEN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HIDDEN' class='name not-expandable'>HIDDEN</a><span> : String</span></div><div class='description'><div class='short'><p>The HIDDEN event constant</p>\n</div><div class='long'><p>The HIDDEN event constant</p>\n</div></div></div><div id='property-HTTP_ABORT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_ABORT' class='name not-expandable'>HTTP_ABORT</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP request aborted event constant.</p>\n</div><div class='long'><p>The HTTP request aborted event constant.</p>\n</div></div></div><div id='property-HTTP_DATA_RECEIVED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_DATA_RECEIVED' class='name not-expandable'>HTTP_DATA_RECEIVED</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP data received event constant.</p>\n</div><div class='long'><p>The HTTP data received event constant.</p>\n</div></div></div><div id='property-HTTP_DATA_SENT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_DATA_SENT' class='name not-expandable'>HTTP_DATA_SENT</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP data sent event constant.</p>\n</div><div class='long'><p>The HTTP data sent event constant.</p>\n</div></div></div><div id='property-HTTP_DONE' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_DONE' class='name not-expandable'>HTTP_DONE</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP request complete event constant.</p>\n</div><div class='long'><p>The HTTP request complete event constant.</p>\n</div></div></div><div id='property-HTTP_REDIRECT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_REDIRECT' class='name not-expandable'>HTTP_REDIRECT</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP redirect event constant.</p>\n</div><div class='long'><p>The HTTP redirect event constant.</p>\n</div></div></div><div id='property-HTTP_STATE_CHANGED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_STATE_CHANGED' class='name not-expandable'>HTTP_STATE_CHANGED</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP state changed event constant.</p>\n</div><div class='long'><p>The HTTP state changed event constant.</p>\n</div></div></div><div id='property-HTTP_TIMEOUT' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-HTTP_TIMEOUT' class='name not-expandable'>HTTP_TIMEOUT</a><span> : String</span></div><div class='description'><div class='short'><p>The HTTP request timeout event constant.</p>\n</div><div class='long'><p>The HTTP request timeout event constant.</p>\n</div></div></div><div id='property-MAXIMIZED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-MAXIMIZED' class='name not-expandable'>MAXIMIZED</a><span> : String</span></div><div class='description'><div class='short'><p>The MAXIMIZED event constant</p>\n</div><div class='long'><p>The MAXIMIZED event constant</p>\n</div></div></div><div id='property-MINIMIZED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-MINIMIZED' class='name not-expandable'>MINIMIZED</a><span> : String</span></div><div class='description'><div class='short'><p>The MINIMIZED event constant</p>\n</div><div class='long'><p>The MINIMIZED event constant</p>\n</div></div></div><div id='property-MOVED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-MOVED' class='name not-expandable'>MOVED</a><span> : String</span></div><div class='description'><div class='short'><p>The MOVED event constant</p>\n</div><div class='long'><p>The MOVED event constant</p>\n</div></div></div><div id='property-OPEN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-OPEN' class='name not-expandable'>OPEN</a><span> : String</span></div><div class='description'><div class='short'><p>The OPEN event constant</p>\n</div><div class='long'><p>The OPEN event constant</p>\n</div></div></div><div id='property-OPENED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-OPENED' class='name not-expandable'>OPENED</a><span> : String</span></div><div class='description'><div class='short'><p>The OPENED event constant</p>\n</div><div class='long'><p>The OPENED event constant</p>\n</div></div></div><div id='property-OPEN_REQUEST' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-OPEN_REQUEST' class='name not-expandable'>OPEN_REQUEST</a><span> : String</span></div><div class='description'><div class='short'><p>The OPEN request event constant.</p>\n</div><div class='long'><p>The OPEN request event constant.</p>\n</div></div></div><div id='property-PAGE_INITIALIZED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-PAGE_INITIALIZED' class='name not-expandable'>PAGE_INITIALIZED</a><span> : String</span></div><div class='description'><div class='short'><p>The PAGE_INITIALIZED event constant</p>\n</div><div class='long'><p>The PAGE_INITIALIZED event constant</p>\n</div></div></div><div id='property-PAGE_LOADED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-PAGE_LOADED' class='name not-expandable'>PAGE_LOADED</a><span> : String</span></div><div class='description'><div class='short'><p>The PAGE_LOADED event constant</p>\n</div><div class='long'><p>The PAGE_LOADED event constant</p>\n</div></div></div><div id='property-READ' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-READ' class='name not-expandable'>READ</a><span> : String</span></div><div class='description'><div class='short'><p>The READ event constant</p>\n</div><div class='long'><p>The READ event constant</p>\n</div></div></div><div id='property-RESIZED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-RESIZED' class='name not-expandable'>RESIZED</a><span> : String</span></div><div class='description'><div class='short'><p>The RESIZED event constant</p>\n</div><div class='long'><p>The RESIZED event constant</p>\n</div></div></div><div id='property-SHOWN' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-SHOWN' class='name not-expandable'>SHOWN</a><span> : String</span></div><div class='description'><div class='short'><p>The SHOWN event constant</p>\n</div><div class='long'><p>The SHOWN event constant</p>\n</div></div></div><div id='property-UNFOCUSED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-UNFOCUSED' class='name not-expandable'>UNFOCUSED</a><span> : String</span></div><div class='description'><div class='short'><p>The UNFOCUSED event constant</p>\n</div><div class='long'><p>The UNFOCUSED event constant</p>\n</div></div></div><div id='property-UNFULLSCREENED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-property-UNFULLSCREENED' class='name not-expandable'>UNFULLSCREENED</a><span> : String</span></div><div class='description'><div class='short'><p>The UNFULLSCREENED event constant</p>\n</div><div class='long'><p>The UNFULLSCREENED event constant</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getPlatform' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-method-getPlatform' class='name expandable'>getPlatform</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>\"Return the current platform, usually one of 'osx', 'win32', or 'linux'.\" ...</div><div class='long'><p>\"Return the current platform, usually one of 'osx', 'win32', or 'linux'.\"</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getVersion' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti'>Ti</span><br/></div><a href='#!/api/Ti-method-getVersion' class='name expandable'>getVersion</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return the Ti runtime version. ...</div><div class='long'><p>Return the Ti runtime version.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});