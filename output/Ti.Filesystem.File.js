Ext.data.JsonP.Ti_Filesystem_File({"tagname":"class","name":"Ti.Filesystem.File","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ti.Filesystem.File","members":{"cfg":[],"property":[],"method":[{"name":"copy","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-copy"},{"name":"createDirectory","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-createDirectory"},{"name":"createShortcut","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-createShortcut"},{"name":"createTimestamp","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-createTimestamp"},{"name":"deleteDirectory","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-deleteDirectory"},{"name":"deleteFile","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-deleteFile"},{"name":"exists","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-exists"},{"name":"extension","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-extension"},{"name":"getDirectoryListing","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-getDirectoryListing"},{"name":"isDirectory","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isDirectory"},{"name":"isExecutable","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isExecutable"},{"name":"isFile","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isFile"},{"name":"isHidden","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isHidden"},{"name":"isReadonly","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isReadonly"},{"name":"isSymbolicLink","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isSymbolicLink"},{"name":"isWritable","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-isWritable"},{"name":"modificationTimestamp","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-modificationTimestamp"},{"name":"move","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-move"},{"name":"nativePath","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-nativePath"},{"name":"open","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-open"},{"name":"parent","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-parent"},{"name":"read","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-read"},{"name":"readLine","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-readLine"},{"name":"rename","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-rename"},{"name":"resolve","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-resolve"},{"name":"setExecutable","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-setExecutable"},{"name":"setReadonly","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-setReadonly"},{"name":"setWritable","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-setWritable"},{"name":"size","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-size"},{"name":"spaceAvailable","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-spaceAvailable"},{"name":"touch","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-touch"},{"name":"unzip","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-unzip"},{"name":"write","tagname":"method","owner":"Ti.Filesystem.File","meta":{},"id":"method-write"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Ti.Filesystem.File.js","href":null},{"filename":"Ti.Filesystem.File.js","href":null}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><div class='doc-contents'><p>An object which represents a path to a file or directory. A Filesystem.File is not guaranteed to be a valid path.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-copy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-copy' class='name expandable'>copy</a>( <span class='pre'>target</span> ) : void</div><div class='description'><div class='short'>Copies a file to the specified location. ...</div><div class='long'><p>Copies a file to the specified location. If the target is a directory\nthe file will be written to that directory. If the target is a file,\nthe file will be written to that file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : String|Filesystem.File<div class='sub-desc'><p>The target of this move operation.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>void</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-createDirectory' class='name expandable'>createDirectory</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Create a new directory at this File object's path. ...</div><div class='long'><p>Create a new directory at this File object's path. If the\ndirectory already exists, this method will do nothing. This\nmethod will return true if the directory was created or false\nif it was not.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createShortcut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-createShortcut' class='name expandable'>createShortcut</a>( <span class='pre'>target</span> ) : Boolean</div><div class='description'><div class='short'>Creates a shortcut to a file or directory at this Filesystem.File's\npath. ...</div><div class='long'><p>Creates a shortcut to a file or directory at this Filesystem.File's\npath. On Windows this will create a Win32 style shortcut. On Linux\nand OS X this will create a symlink. If the operation is successful\nthis method will return true and false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : String|Filesystem.File<div class='sub-desc'><p>The target of this shortcut.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-createTimestamp' class='name expandable'>createTimestamp</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the timestamp for when this file or directory was created. ...</div><div class='long'><p>Return the timestamp for when this file or directory was created.\nThe return value of this function will be microseconds since the\nepoch at the time this file was created.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-deleteDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-deleteDirectory' class='name expandable'>deleteDirectory</a>( <span class='pre'>recursive</span> ) : Boolean</div><div class='description'><div class='short'>Remove the file or directory specified by this Filesystem.File. ...</div><div class='long'><p>Remove the file or directory specified by this Filesystem.File.\nReturn true if removal succeeded and false otherwise.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recursive</span> : Boolean<div class='sub-desc'><p>If this Filesystem.File is a directory, remove it recursively.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-deleteFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-deleteFile' class='name expandable'>deleteFile</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Remove the file or directory specified by this Filesystem.File,\nthis method never removes directories recursively. ...</div><div class='long'><p>Remove the file or directory specified by this Filesystem.File,\nthis method never removes directories recursively.\nReturn true if removal succeeded and false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-exists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-exists' class='name expandable'>exists</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if a file or directory exists at the path\nspecified by this Filesystem.File. ...</div><div class='long'><p>Return true if a file or directory exists at the path\nspecified by this Filesystem.File.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extension' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-extension' class='name expandable'>extension</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return the extension of this Filesystem.File. ...</div><div class='long'><p>Return the extension of this Filesystem.File.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDirectoryListing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-getDirectoryListing' class='name expandable'>getDirectoryListing</a>( <span class='pre'></span> ) : Ti.Array<Filesystem.File></div><div class='description'><div class='short'>If this Filesystem.File specifies the path to a directory,\nreturn an Array of items inside this directory. ...</div><div class='long'><p>If this Filesystem.File specifies the path to a directory,\nreturn an Array of items inside this directory. If this path\ndoes not exist or is not a directory, return null.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ti.Array<Filesystem.File></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isDirectory' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isDirectory' class='name expandable'>isDirectory</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a directory or false otherwise. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a directory or false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isExecutable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isExecutable' class='name expandable'>isExecutable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the directory or file at the path specified by\nthis Filesystem.File object has the executable bit set. ...</div><div class='long'><p>Return true if the directory or file at the path specified by\nthis Filesystem.File object has the executable bit set. If the\nfile does not exists, this method will return false.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isFile' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isFile' class='name expandable'>isFile</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a file or false otherwise. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a file or false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isHidden' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isHidden' class='name expandable'>isHidden</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a hidden file. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a hidden file. On Windows this means that the file has the hidden\nattribute and on Linux and OS X this means that the basename of\nthis path begins with a period.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isReadonly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isReadonly' class='name expandable'>isReadonly</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a read-only file. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a read-only file.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isSymbolicLink' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isSymbolicLink' class='name expandable'>isSymbolicLink</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a symbolic link. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a symbolic link.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isWritable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-isWritable' class='name expandable'>isWritable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Return true if the path specified by this Filesystem.File refers\nto a writable file and false otherwise. ...</div><div class='long'><p>Return true if the path specified by this Filesystem.File refers\nto a writable file and false otherwise.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-modificationTimestamp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-modificationTimestamp' class='name expandable'>modificationTimestamp</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the timestamp for when this file or directory was modified. ...</div><div class='long'><p>Return the timestamp for when this file or directory was modified.\nThe return value of this function will be microseconds since the\nepoch at the last time this file was modified.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-move' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-move' class='name expandable'>move</a>( <span class='pre'>target</span> ) : String</div><div class='description'><div class='short'>Moves to the specified location. ...</div><div class='long'><p>Moves to the specified location. If the target is a directory\nthe file will be written to that directory. If the target is a file,\nthe file will be written to that file.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : String|Filesystem.File<div class='sub-desc'><p>The target of this move operation.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-nativePath' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-nativePath' class='name expandable'>nativePath</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return the full path of this File.Filesystem object. ...</div><div class='long'><p>Return the full path of this File.Filesystem object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-open' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-open' class='name expandable'>open</a>( <span class='pre'>[binary], [append]</span> ) : <a href=\"#!/api/Ti.Filesystem.Filestream\" rel=\"Ti.Filesystem.Filestream\" class=\"docClass\">Ti.Filesystem.Filestream</a></div><div class='description'><div class='short'>Create and open a Filestream for this File object. ...</div><div class='long'><p>Create and open a Filestream for this File object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>binary</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to open this stream in binary mode. If not supplied this will be false.</p>\n</div></li><li><span class='pre'>append</span> : Boolean (optional)<div class='sub-desc'><p>Whether or not to open this stream in append mode. If not supplied this will be false.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Filesystem.Filestream\" rel=\"Ti.Filesystem.Filestream\" class=\"docClass\">Ti.Filesystem.Filestream</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-parent' class='name expandable'>parent</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ti.Filesystem.File\" rel=\"Ti.Filesystem.File\" class=\"docClass\">Ti.Filesystem.File</a></div><div class='description'><div class='short'>Return the parent directory of this File.Filesystem object. ...</div><div class='long'><p>Return the parent directory of this File.Filesystem object.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Filesystem.File\" rel=\"Ti.Filesystem.File\" class=\"docClass\">Ti.Filesystem.File</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-read' class='name expandable'>read</a>( <span class='pre'></span> ) : Bytes</div><div class='description'><div class='short'>Return the entire contents of a file as a Bytes object. ...</div><div class='long'><p>Return the entire contents of a file as a Bytes object.\ndeprecated:\nreason: The method has been superseded by Filestream.read()\nversion: 1.1.0</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Bytes</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-readLine' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-readLine' class='name expandable'>readLine</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Return one line from the file specified by this Filesystem.File object. ...</div><div class='long'><p>Return one line from the file specified by this Filesystem.File object.\nThis method will return null when it finishes reading the file or if\nit encounters and error. The file object will remain in an open state until\nthe entire file has been read via Filestream.File.readLine. It is recommended\nthat new applications use Filesystem.Filestream to read files instead, which\nallow for explicit control over the native file handles.\ndeprecated:\nreason: The method has been superseded by Filestream.readLine()\nversion: 1.1.0</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-rename' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-rename' class='name expandable'>rename</a>( <span class='pre'>newPath</span> ) : String</div><div class='description'><div class='short'>Renames a file to the given path. ...</div><div class='long'><p>Renames a file to the given path.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newPath</span> : String<div class='sub-desc'><p>The new path of the file</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-resolve' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-resolve' class='name expandable'>resolve</a>( <span class='pre'>subPath</span> ) : <a href=\"#!/api/Ti.Filesystem.File\" rel=\"Ti.Filesystem.File\" class=\"docClass\">Ti.Filesystem.File</a></div><div class='description'><div class='short'>Resolves a given relative path against the path specified by this\nFilesystem.File object. ...</div><div class='long'><p>Resolves a given relative path against the path specified by this\nFilesystem.File object. If the given path is absolute, the absolute\npath is returned.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>subPath</span> : String<div class='sub-desc'><p>The subPath to resolve against this Filesystem.File object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ti.Filesystem.File\" rel=\"Ti.Filesystem.File\" class=\"docClass\">Ti.Filesystem.File</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setExecutable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-setExecutable' class='name expandable'>setExecutable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Set the execute bit on the file or directory at the path specified\nby this Filesystem.File object. ...</div><div class='long'><p>Set the execute bit on the file or directory at the path specified\nby this Filesystem.File object. Return true if the file or directory\nat this path is executable after the operation completes.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setReadonly' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-setReadonly' class='name expandable'>setReadonly</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Remove the wrtiable bit and ensure there is a readable bit on the file\nor directory at the path specified by this Fil...</div><div class='long'><p>Remove the wrtiable bit and ensure there is a readable bit on the file\nor directory at the path specified by this Filesystem.File object. Return\ntrue if the file or directory at this path is read-only after the operation\ncompletes.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setWritable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-setWritable' class='name expandable'>setWritable</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Set the write bit on the file or directory at the path specified\nby this Filesystem.File object. ...</div><div class='long'><p>Set the write bit on the file or directory at the path specified\nby this Filesystem.File object. Return true if the file or directory\nat this path is writable after the operation completes.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-size' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-size' class='name expandable'>size</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the size of the file in number of bytes. ...</div><div class='long'><p>Return the size of the file in number of bytes.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-spaceAvailable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-spaceAvailable' class='name expandable'>spaceAvailable</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Return the space available on the filesystem containing the\npath specified by this Filesystem.File object in number o...</div><div class='long'><p>Return the space available on the filesystem containing the\npath specified by this Filesystem.File object in number of\nbytes..</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-touch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-touch' class='name expandable'>touch</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Creates a new, empty file in an atomic operation. ...</div><div class='long'><p>Creates a new, empty file in an atomic operation.\nReturns true if the file was created or false if it already exists.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-unzip' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-unzip' class='name expandable'>unzip</a>( <span class='pre'>destination</span> ) : Boolean</div><div class='description'><div class='short'>If this file is a zip file, unzip it into the given destination directory. ...</div><div class='long'><p>If this file is a zip file, unzip it into the given destination directory.\nReturn true if the operation was successful or false otherwise. This operation\nwill block the main thread.\ndeprecated:\nreason: The method has been superseded by Codec.extractZip()\nversion: 1.1.0</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>destination</span> : Filesystem.File|String<div class='sub-desc'><p>Directory to unzip the file to.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-write' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ti.Filesystem.File'>Ti.Filesystem.File</span><br/></div><a href='#!/api/Ti.Filesystem.File-method-write' class='name expandable'>write</a>( <span class='pre'>data</span> ) : String</div><div class='description'><div class='short'>Write data to the file at the path specified by this Filesystem.File\nobject. ...</div><div class='long'><p>Write data to the file at the path specified by this Filesystem.File\nobject. Returns true if any data was written to the file or false\notherwise.\ndeprecated:\nreason: The method has been superseded by Filestream.write()\nversion: 1.1.0</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : String|Bytes|Number<div class='sub-desc'><p>The data to write to this Filesystem.File.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});