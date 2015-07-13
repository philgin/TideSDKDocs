Ext.data.JsonP.using_python({"guide":"<h1>Using Python in TideSDK</h1>\n<div class='toc'>\n<p><strong>Contents</strong></p>\n<ol>\n<li><a href='#!/guide/using_python-section-1'>Preface</a></li>\n<li><a href='#!/guide/using_python-section-2'>Overview</a></li>\n<li><a href='#!/guide/using_python-section-3'>Using the Python module</a></li>\n<li><a href='#!/guide/using_python-section-4'>A quick demonstration</a></li>\n<li><a href='#!/guide/using_python-section-5'>Including Python in your application</a></li>\n<li><a href='#!/guide/using_python-section-6'>TideSDK's Object Bridge</a></li>\n</ol>\n</div>\n\n<p><strong>Author:</strong> David Pratt</p>\n\n<h2 id='using_python-section-1'>Preface</h2>\n\n<p>This documentation applies to TideSDK 1.3.1. If you have not yet upgraded to TideSDK 1.3.1, please review the <a href=\"https://github.com/TideSDK/TideSDK/blob/1.3.1-beta/CHANGES\">CHANGES</a></p>\n\n<h2 id='using_python-section-2'>Overview</h2>\n\n<p>Python is a remarkably powerful dynamic programming language that is used in a wide variety of application domains. Python is often compared to Tcl, Perl, Ruby, Scheme or Java. Some of its key distinguishing features include:</p>\n\n<ul>\n<li>very clear, readable syntax</li>\n<li>strong introspection capabilities</li>\n<li>intuitive object orientation</li>\n<li>natural expression of procedural code</li>\n<li>full modularity, supporting hierarchical packages</li>\n<li>exception-based error handling</li>\n<li>very high level dynamic data types</li>\n<li>extensive standard libraries and third party modules for virtually every task</li>\n<li>extensions and modules easily written in C, C++ (or Java for Jython, or .NET languages for IronPython)</li>\n<li>embeddable within applications as a scripting interface</li>\n</ul>\n\n\n<p>This guide demonstrates how to use the python module in TideSDK. The python module in TideSDK allows you run python in your app in two ways:</p>\n\n<ul>\n<li>Embedding python code within the DOM (Document Object Model)</li>\n<li>Call to scripts included in your application</li>\n</ul>\n\n\n<h2 id='using_python-section-3'>Using the Python module</h2>\n\n<p>To use python in your app, you must include the python module in your app's manifest. The manifest is located in the root of your project. The following is structure of our HelloWorld app to illustrate the location:</p>\n\n<pre><code>├── CHANGELOG.txt\n├── LICENSE.txt\n├── README.md\n├── Resources\n│   ├── app.js\n│   ├── default_app_logo.png\n│   └── index.html\n├── manifest\n└── tiapp.xml\n</code></pre>\n\n<h3>App Manifest</h3>\n\n<p>The manifest contains information about the runtime modules used by the project.</p>\n\n<p>  #appname:HelloWorld\n  #appid:com.example.helloworld\n  #publisher:prattd\n  #image:default_app_logo.png\n  #url:http://example\n  #guid:845e9c3c-c9ff-4ad4-afdf-9638092f044f\n  #desc:No description provided\n  #type:desktop\n  runtime:1.3.1\n  app:1.3.1\n  filesystem:1.3.1\n  platform:1.3.1\n  ui:1.3.1\n  codec:1.3.1\n  database:1.3.1\n  media:1.3.1\n  monkey:1.3.1\n  network:1.3.1\n  process:1.3.1\n  worker:1.3.1</p>\n\n<p>Once the module is added as illustrated below, python can be used now in the application with the addition of the language module:</p>\n\n<p>  #appname:HelloWorld\n  #appid:com.example.helloworld\n  #publisher:prattd\n  #image:default_app_logo.png\n  #url:http://example\n  #guid:845e9c3c-c9ff-4ad4-afdf-9638092f044f\n  #desc:No description provided\n  #type:desktop\n  runtime:1.3.1\n  app:1.3.1\n  filesystem:1.3.1\n  platform:1.3.1\n  ui:1.3.1\n  codec:1.3.1\n  database:1.3.1\n  media:1.3.1\n  monkey:1.3.1\n  network:1.3.1\n  process:1.3.1\n  worker:1.3.1\n  python:1.3.1</p>\n\n<h2 id='using_python-section-4'>A quick demonstration</h2>\n\n<h3>Embedding python in the DOM</h3>\n\n<p>  <script type=\"text/python\"></p>\n\n<pre><code>def my_python_function(l):\n    return [x+2 for x in l]\n</code></pre>\n\n<p>  </script></p>\n\n<p>  <script></p>\n\n<pre><code>  alert(my_python_function([1, 2, 3, 4]));\n</code></pre>\n\n<p>  </script></p>\n\n<p>Calling out to python:</p>\n\n<p>  <html>\n  <head>\n  </head>\n  <body style=\"background-color:#1c1c1c;margin:0\"></p>\n\n<pre><code>  &lt;script&gt;\n  function use_my_python_data(val) {\n     window.alert(val)\n  }\n  Titanium.include(\"test.py\");\n  &lt;/script&gt;\n  &lt;/div&gt;\n</code></pre>\n\n<p>  </body>\n  </html></p>\n\n<p>test.py for the above example:</p>\n\n<pre><code>#!/usr/bin/env python\n\nimport os\nimport sys\nimport fnmatch\nimport glob\n\nfile_mask = window.prompt(\"Please enter the file mask to search on\", \"*.js\");\n\nsource_dir = \"/Users/aland/apps/tweetanium-appstore/Resources\"\nsdk_dir = \"~/Library/Application\\ Support/Titanium/sdk/osx/1.1.0/\"\nfilepaths = [] \ncontents = \"/tmp/Contents\"\n\nfor dirpath, dirnames, filenames in os.walk (source_dir): \n    filepaths.extend (os.path.join (dirpath, f) for f in fnmatch.filter (filenames, file_mask))\n\nfor file_name in filepaths:\n    if os.path.isfile(file_name):\n        head, tail = file_name.split(\"Resources/\")\n        compiler_jar = os.path.join(sdk_dir, \"compiler.jar\")\n        output_file = os.path.join(contents, \"Resources\", tail)\n        # print output_file\n        source_file = os.path.join(source_dir, file_name)\n        exec_cmd = \"java -jar \" + compiler_jar + \" --js \" + source_file +\n                \" --compilation_level ADVANCED_OPTIMIZATION --js_output_file \" + output_file\n        my_data = file_name + \"\\n\\n\" + exec_cmd;\n        use_my_python_data(file_name + \"\\n\\n\" + exec_cmd);\n        # print (file_name + \"\\n\\n\" + exec_cmd);\n\nwindow.alert(\"Done!\");\n</code></pre>\n\n<p>The Python module currently uses the following version of Python depending on your platform:\n* Windows: Python 2.7\n* OS X (Lion): Python 2.7\n* OS X (Mountain Lion): Python 2.7\n* Linux (all distributions): Python 2.7</p>\n\n<h2 id='using_python-section-5'>Including Python in your application</h2>\n\n<p>There are a few ways to include Python scripts on your Titanium pages. As demonstrated above, you can include a script tag with type=\"text/python.\" If you have a Python source file that you want to include you can also do this:</p>\n\n<p>  <script type=\"text/python\" src=\"myfile.py\"/></p>\n\n<p>As well as using <tt>script</tt> tags to include Python, you can use Python <tt>import</tt>. By default your application's Resources directory is on the Python import path, so this is the recommended place to include Python source files in your application.</p>\n\n<p>  <script type=\"text/python\">\n  import myfile\n  </script></p>\n\n<h2 id='using_python-section-6'>TideSDK's Object Bridge</h2>\n\n<p>libtide is the underlying object bridge in TideSDK. It has its own object system, including its own types. Whenever you call Python from JavaScript or JavaScript from Python, your data will flow through libtide.</p>\n\n<h4>Numbers</h4>\n\n<p>Since all JavaScript Numeric variables are floating-point, when they are passed into Python, they will be converted into Python floats. JavaScript Numerics are converted by value rather than converted by reference.</p>\n\n<p>  <script></p>\n\n<pre><code>  var globalNumber = 23;\n</code></pre>\n\n<p>  </script>\n  <script type=\"text/python\"></p>\n\n<pre><code>  globalNumber = 13; # globalNumber will change\n\n  def changeNumber(number):\n      number = 10; # globalNumber will not change\n      changeNumber(globalNumber)\n</code></pre>\n\n<p>  </script></p>\n\n<p>One important result of libtide using floating point numbers is that if you send a Python integer into JavaScript and then back into Python, that number will always be a Python float.</p>\n\n<h4>Booleans</h4>\n\n<p>JavaScript Booleans are also converted by value directly to a Python bool and vice-versa.</p>\n\n<h4>Objects</h4>\n\n<p>Passing a JavaScript object to Python involves wrapping the JavaScript object in a Python object. This means that if you change a JavaScript object in Python, that change will be reflected in the original object. When dealing with objects that flow from one language context to another, it suffices to think of them as the same object.</p>\n\n<p>  <script></p>\n\n<pre><code>  var globalObject = new Object();\n  globalObject.foo = \"string\";\n</code></pre>\n\n<p>  </script>\n  <script type=\"text/python\"></p>\n\n<pre><code> globalObject.foo = \"string2\"; # globalObject will change\n\n def changeNumber(obj):\n     # obj is passed by reference so globalObject will change\n     obj.foo = \"string3\";\n changeNumber(globalObject)\n</code></pre>\n\n<p>  </script></p>\n\n<p>Python objects work the same way when moving to JavaScript. Here's an example:</p>\n\n<p>  <script type=\"text/python\">\n  class MyObject:</p>\n\n<pre><code>  def __init__(self):\n      self.property = \"prop\"\n\n  def foo(self):\n      return \"foo!\"\n</code></pre>\n\n<p>  globalObject = MyObject()\n  </script>\n  <script></p>\n\n<pre><code>  alert(globalObject.property);\n  alert(globalObject.foo());\n\n  globalObject.property = \"propagain\"\n  alert(globalObject.property);\n</code></pre>\n\n<p>  </script></p>\n\n<p><em>Note: If you attempt to modify a read-only libtide object, an exception will be thrown.</em></p>\n\n<h4>Dicts</h4>\n\n<p>Python dicts can be passed to JavaScript. They will be Objects whose properties are just dict accesses. For instance:</p>\n\n<p>  <script type=\"text/python\">\n  globalObject = {}\n  globalObject['foo'] = \"string\"\n  </script>\n  <script></p>\n\n<pre><code>  alert(globalObject.foo);\n  globalObject.property = \"propagain\"\n</code></pre>\n\n<p>  </script></p>\n\n<h4>Arrays / Lists</h4>\n\n<p>JavaScript arrays in are wrapped in a list-like object in Python. Be aware that this object just operates much like a Python list, but is not a true Python list. You should be able to use it just like a list in most situations though.</p>\n\n<p>  <script></p>\n\n<pre><code>   var globalArray = [1, 2, 3, 4];\n</code></pre>\n\n<p>  </script>\n  <script type=\"text/python\">\n  for item in globalArray:</p>\n\n<pre><code>  Titanium.API.debug(item)\n</code></pre>\n\n<p>  </script></p>\n\n<p>Passing Python lists to JavaScript will result in a true JavaScript array. That means that the JavaScript object wraps the Python object will have an Array prototype and the full complement of JavaScript array methods.</p>\n\n<p>  <script type=\"text/python\">\n  globalArray = [1, 2, 3, 4];\n  </script>\n  <script></p>\n\n<pre><code>  globalArray.push(5);\n  globalArray.push(6);\n  var elem = gloalArray.pop(); // should be 6\n</code></pre>\n\n<p>  </script></p>\n\n<h4>Exceptions</h4>\n\n<p>Exceptions that are thrown in either Python or JavaScript will be converted using the same rules as normal variables when bubbling up into different languages. This means that if an exception is thrown in Python, you should be able to catch it in JavaScript and vice-versa.</p>\n\n<h4>DOM Manipulation</h4>\n\n<p>TideSDK lets you share and access objects and variables independent of the language. This allows you to access the Javascript objects <em>document</em> and <em>window</em> in Python, hence we can manipulate the DOM from within Python.</p>\n\n<h4>Quickstart</h4>\n\n<p>Lets set up a very basic demonstration.</p>\n\n<ul>\n<li>Create a new project. Be sure to tick the \"Python\" select box. I'm going to be using jQuery later on in this tutorial. Include your favorite javascript library.\n<p><img src=\"guides/using_python/python-switch.png\" alt=\"Python select box\"></p></li>\n<li><p>Navigate to your project and open up the <em>Resources/index.html</em> file. I've created a simple style sheet which just makes everything easier to see, it's not necessary but will come with the tutorial files.</p>\n\n<p>  <b>index.html</b>\n  <link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\"/>\n  <input type=\"submit\" id=\"button\" value=\"Click Me\" onclick=\"change()\" />\n  <div id=\"output\"></p>\n\n<pre><code>  This will get replaced when the button is clicked.\n</code></pre>\n\n<p>  </div></p></li>\n</ul>\n\n\n<p>For our basic example we will have a button which, when clicked, will change the contents of a <em>div</em>. As mentioned at the start of this tutorial the <em>document</em> object and all associated methods are available for us to use in Python. Any class, function or variable that you want to pass from Python back to Javascript must be declared in the window object.\nAdd the following code to <em>index.html</em></p>\n\n<pre><code>&lt;script type=\"text/python\"&gt;\n    def change():\n        document.getElementById('output').innerHTML='Manipulation via Python'\n\n    window.change = change \n&lt;/script&gt;\n</code></pre>\n\n<p>And as you can expect, we get something like...</p>\n\n<pre><code>&lt;object width=\"400\" height=\"300\"&gt;&lt;param name=\"allowfullscreen\" value=\"true\" /&gt;\n    &lt;param name=\"allowscriptaccess\" value=\"always\" /&gt;\n    &lt;param name=\"movie\" value=\"http://vimeo.com/moogaloop.swf?clip_id=6441734&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1\" /&gt;\n    &lt;embed src=\"http://vimeo.com/moogaloop.swf?clip_id=6441734&amp;server=vimeo.com&amp;show_title=1&amp;show_byline=1&amp;show_portrait=0&amp;color=&amp;fullscreen=1\" type=\"application/x-shockwave-flash\" allowfullscreen=\"true\" allowscriptaccess=\"always\" width=\"400\" height=\"300\"&gt;&lt;/embed&gt;\n&lt;/object&gt;\n</code></pre>\n\n<h4>jQuery in Python</h4>\n\n<p>Javascript frameworks (such as jQuery) make JavasScript coding a great deal easier. We can use jQuery (and potentially any other Javascript framework) in our Python code. As you can probably guess we can't use jQuery's <em>$</em> alias. It errors out. Instead you need to use the full <em>jQuery</em> function. Everything works out of the box - animations (which are very smooth on Titanium) and method chaining.</p>\n\n<pre><code>&lt;script type=\"text/javascript\" src=\"jquery-1.8.2.js\"&gt;&lt;/script&gt;\n&lt;link type=\"text/css\" rel=\"stylesheet\" href=\"style.css\"/&gt;\n\n&lt;script type=\"text/python\"&gt;\ndef jqchange():\n    jQuery(\"#output\").hide().text(\"Manipulation in jQuery via Python\").fadeIn(\"slow\").animate({\"font-size\" : \"20px\"})\n\nwindow.jqchange = jqchange\n&lt;/script&gt;\n\n&lt;input type=\"submit\" id=\"jqbutton\" value=\"jqchange()\" onclick=\"jqchange()\" /&gt;\n\n&lt;div id=\"output\"&gt;\n    This will get replaced when the button is clicked.\n&lt;/div&gt;\n</code></pre>\n","title":"Using Python in TideSDK"});