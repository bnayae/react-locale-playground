## Credit
[article](https://medium.com/@yehiasaleh/internationalization-localization-using-react-intl-typescript-1e7cfccd34d7)  

## Steps

### NPM  
create-react-app localization-tutorial-typescript --scripts-version=react-scripts-ts  

npm install --save react-intl react-intl-translations-manager babel-plugin-react-intl  

npm install --save-dev @types/react-intl  

npm install -g babel-cli
npm install --save-dev babel-preset-es2015  
npm install --save-dev babel-preset-stage-2  

### .babelrc  
Babel is going to find all files where react-intl is imported and export all tagged strings to a directory. In order to do that, we need to configure babel and specify that directory by creating a .babelrc file.  
<pre>
{
  "presets": ["react", "es2015"],
  "plugins": [
      [ "react-intl", {
          "messagesDir": "./build/messages"
      }]
  ]
}
</pre>

### Set up react-intl-translations-manager
manageTranslations.js

### Create Language Container 
##### LanguageContainer.tsx
  
Encapsulate the language code  

## package.json scripts
<pre>
"trans:compile": "tsc -p . --target ES6 --module es6 --jsx preserve --outDir src/extracted",  
    
"trans:extract": "babel ./src/extracted",    
  
"trans:manage": "node src/translations/manageTranslations.js",  
   
"trans:clean": "rm -r ./src/extracted",      
"trans": "npm run trans:compile && npm run trans:extract && npm run trans:manage && npm run trans:clean"  

</pre>

### tsconfig.json

"include": ["*.ts"],

### Update the locate when adding texts
npm run trans

### re-azure translate
cd .\src\translations\
node translate.js
cd ..\..\

## Optimization
- Load translated master JSON files on demand to decrease the bundle’s size.
- Optimize the translation script to detect which strings are already translated to eliminate unnecessary API calls.