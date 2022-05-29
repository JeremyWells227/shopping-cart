#!/bin/sh
toplevel=$(git rev-parse --show-toplevel) 
cd $toplevel
cd src/assets
test -f index.js && rm index.js 
declare -a exports;
for file in $(ls *.jpg); do 
	basename=$(basename $file .jpg) 
	echo "import $basename from \"./$file\";" >> index.js
	exports+=($basename)
done
echo "" >> index.js
echo "" >> index.js
echo "export const images = {" >> index.js
expsize=${#exports[@]}
for i in ${!exports[@]}; do
	xp=${exports[$i]}
	if [[ $i -eq $(($expsize-1)) ]] ; then
		echo "\"${xp}\": ${xp}"  >> index.js
	else
		echo "\"${xp}\": ${xp},"  >> index.js
	fi
done
echo "}" >> index.js


