Installation Instructions

(This is for Windows, it might be different for macOS)

1. Download all the libraries in the script tags near the beginning of the HTML.
JetBrains Webstorm usually highlights them yellow and gives you the option
to download them. I have not used any other IDE for web development, but I'm sure
it's something similar for those.

2. npm install all dependencies in the json. Express, mongodb, and nodejs may
need to be installed seperately. I may have missed a few, but the terminal
will let you know what you need to install.

3. In the server.js file, the "const url" may need to be changed to the proper
localhost for mongodb.

4. The var dbo may need to be changed from "project" to whatever name your 
database is for our data.

5. Similarly, the dbo.collection("deaths") on line 41 may need to be changed from
"deaths" to whatever the collection name is.

4. run "node server" in the terminal assuming you are in the project directory.
