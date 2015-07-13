Ext.data.JsonP.Ti_UI_Menu({"tagname":"class","name":"Ti.UI.Menu","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.UI.Menu","members":{"cfg":[],"property":[],"method":[{"name":"addCheckItem","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-addCheckItem"},{"name":"addItem","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-addItem"},{"name":"addSeparatorItem","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-addSeparatorItem"},{"name":"appendItem","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-appendItem"},{"name":"clear","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-clear"},{"name":"getItemAt","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-getItemAt"},{"name":"getLength","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-getLength"},{"name":"insertItemAt","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-insertItemAt"},{"name":"removeItemAt","tagname":"method","owner":"Ti.UI.Menu","meta":{},"id":"method-removeItemAt"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.UI.Menu.js","href":null},{"filename":"Ti.UI.Menu.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object representing a menu.</p>\n\n<p>A Menu object can be added to the current window of a TideSDK application. Menu objects can\nbe made up of a number of MenuItems(see <a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a>). These menu items can be added to the\nmenu object at anytime and TideSDK will ensure that all menu instances update immediately.</p>\n\n<p>Please take a look at the code example below:</p>\n\n<pre><code>    //Create the menu object\n        var menu = <a href=\"#!/api/Ti.UI-method-createMenu\" rel=\"Ti.UI-method-createMenu\" class=\"docClass\">Ti.UI.createMenu</a>();\n\n    //Create menu items\n    var subMenu1 = menu.addItem('Menu1');\n    var subMenu2 = menu.addItem('Menu2');\n    var subMenu3 = menu.addItem('Menu3');\n\n    //Add menu to the current window\n    <a href=\"#!/api/Ti.UI-method-getCurrentWindow\" rel=\"Ti.UI-method-getCurrentWindow\" class=\"docClass\">Ti.UI.getCurrentWindow</a>().setMenu(menu);\n\n    //Or alternatively you can use the snippet below\n    //to add the menu to the current window\n    //Ti.UI.currentWindow.menu = menu;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-addCheckItem' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-addCheckItem' class='name expandable'>addCheckItem</a>( <span class='pre'>label, [listener]</span> ) : <a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></div><div class='description'><div class='short'>Add a check item to this menu with the given attributes. ...</div><div class='long'><p>Add a check item to this menu with the given attributes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : String<div class='sub-desc'><p>The label for the new item</p>\n</div></li><li><span class='pre'>listener</span> : Function (optional)<div class='sub-desc'><p>An event listener callback for the item</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>label, [listener], iconURL</span> ) : <a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></div><div class='description'><div class='short'>Add an item to this menu with the given attributes. ...</div><div class='long'><p>Add an item to this menu with the given attributes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>label</span> : String<div class='sub-desc'><p>The label for the new item</p>\n</div></li><li><span class='pre'>listener</span> : Function (optional)<div class='sub-desc'><p>An event listener callback for the item</p>\n</div></li><li><span class='pre'>iconURL</span> : String<div class='sub-desc'><p>\"The URL for this item's icon\"</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addSeparatorItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-addSeparatorItem' class='name expandable'>addSeparatorItem</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></div><div class='description'><div class='short'>Add a separator item to this menu. ...</div><div class='long'><p>Add a separator item to this menu.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-appendItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-appendItem' class='name expandable'>appendItem</a>( <span class='pre'>item</span> ) : String</div><div class='description'><div class='short'>Append a MenuItem object to a menu. ...</div><div class='long'><p>Append a MenuItem object to a menu.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : UI.MenuItem<div class='sub-desc'><p>Append an item to this menu</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Remove all items from this menu. ...</div><div class='long'><p>Remove all items from this menu.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-getItemAt' class='name expandable'>getItemAt</a>( <span class='pre'>index</span> ) : <a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></div><div class='description'><div class='short'>Get an item from this menu at the given index. ...</div><div class='long'><p>Get an item from this menu at the given index. This method will throw an exception if the index is out of range.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of the item to get</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.UI.MenuItem\" rel=\"Ti.UI.MenuItem\" class=\"docClass\">Ti.UI.MenuItem</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLength' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-getLength' class='name expandable'>getLength</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Get the length of this menu. ...</div><div class='long'><p>Get the length of this menu.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-insertItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-insertItemAt' class='name expandable'>insertItemAt</a>( <span class='pre'>item, index</span> ) : String</div><div class='description'><div class='short'>Insert a menu item before the given index. ...</div><div class='long'><p>Insert a menu item before the given index. This method will throw an exception if the index of out of range.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : UI.MenuItem<div class='sub-desc'><p>The menu item to insert</p>\n</div></li><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index for this menu item</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeItemAt' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.UI.Menu'>Ti.UI.Menu</span><br/></div><a href='#!/api/Ti.UI.Menu-method-removeItemAt' class='name expandable'>removeItemAt</a>( <span class='pre'>index</span> ) : String</div><div class='description'><div class='short'>Remove the item in this menu at the given index. ...</div><div class='long'><p>Remove the item in this menu at the given index. This method will throw an exception if the index is out of range.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Number<div class='sub-desc'><p>The index of the item to remove</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});