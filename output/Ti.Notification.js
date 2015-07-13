Ext.data.JsonP.Ti_Notification({"tagname":"class","name":"Ti.Notification","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Notification","members":{"cfg":[],"property":[],"method":[{"name":"createNotification","tagname":"method","owner":"Ti.Notification","meta":{},"id":"method-createNotification"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Notification.js","href":null},{"filename":"Ti.Notification.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>A module for displaying desktop notifications.\nTideSDK allows you to display notifications from your desktop apps using Growl on OS X,\nSnarl on Windows and libnotify on Linux. In the event of a notification provider being absent,\nnotifications are shown using HTML/CSS.</p>\n\n<p>Please refer to the code example below</p>\n\n<pre><code>//Create a callback function for the notification\nvar doSomething = function() {\n    //Do something!\n}\n\n//Creating a notification and displaying it.\nvar notification = <a href=\"#!/api/Ti.Notification-method-createNotification\" rel=\"Ti.Notification-method-createNotification\" class=\"docClass\">Ti.Notification.createNotification</a>({\n    'title' : 'Notification from App',\n    'message' : 'Click here for updates!',\n    'timeout' : 10,\n    'callback' : doSomething,\n    'icon' : 'app://images/notificationIcon.png'        \n});\n\nnotification.show();\n</code></pre>\n\n<p>Not all platforms support a callback function or specifying a custom timeout.  <br/>\nThe notification icon should be always be referenced by an absolute app://, ti:// or file:// URL.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-createNotification' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Notification'>Ti.Notification</span><br/></div><a href='#!/api/Ti.Notification-method-createNotification' class='name expandable'>createNotification</a>( <span class='pre'></span> ) : Ti.UI.Notification</div><div class='description'><div class='short'>Create a new Notification object. ...</div><div class='long'><p>Create a new Notification object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.UI.Notification</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});