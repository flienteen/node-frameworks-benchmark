#!/bin/sh

#begin port
PORT=8000

echo -ne "mongroup.conf\t"
find ./frameworks/ -maxdepth 2 -name 'index.js' | awk -v port=$PORT -F '/' 'BEGIN {print "nodejs = node nodejs.js "port} {port++;} {print $3" = node ./"$2"/"$3"/index.js  "port}' > mongroup.conf
echo "done"

echo -ne "services.js\t"
find ./frameworks/ -maxdepth 2 -name 'index.js' | awk -v port=$PORT -v q="'"  -F '/' 'BEGIN {print "exports.s={\n"q"nodejs"q":"q"http://127.0.0.0:"port""q} {port++;} {print ","q$3q":"q"http://127.0.0.1:"port""q}END {print "};"}' > services.js
echo "done"


rm -rfv .mongroup/{logs,pids}
mkdir -pv .mongroup/{logs,pids}


#npm install
curDir=`pwd`
for file in `find ./frameworks/ -maxdepth 2 -name 'package.json' -print 2>/dev/null`
do
	cd  $curDir
    frameworkDir=`dirname $file`
    echo -e "\n\npnm install on: $frameworkDir"
    cd  "$frameworkDir"
    npm install
done
