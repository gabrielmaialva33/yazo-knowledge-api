````ssh

wget -O libsqlite4java-osx.dylib.arm64 'https://search.maven.org/remotecontent?filepath=io/github/ganadist/sqlite4java/libsqlite4java-osx-arm64/1.0.392/libsqlite4java-osx-arm64-1.0.392.dylib'
mv libsqlite4java-osx.dylib libsqlite4java-osx.dylib.x86_64
lipo -create -output libsqlite4java-osx.dylib.fat libsqlite4java-osx.dylib.x86_64 libsqlite4java-osx.dylib.arm64
mv libsqlite4java-osx.dylib.fat libsqlite4java-osx.dylib


````
