const fs = require("fs")
const path = require("path")

// Путь к файлу project.pbxproj в CordovaLib
const pbxprojPath = path.join(
  __dirname,
  "..",
  "..",
  "platforms",
  "ios",
  "CordovaLib",
  "CordovaLib.xcodeproj",
  "project.pbxproj"
)

// Читаем файл project.pbxproj
let pbxprojContent = fs.readFileSync(pbxprojPath, "utf8")

pbxprojContent = pbxprojContent.replace(/IPHONEOS_DEPLOYMENT_TARGET = [\d.]+;/g, "IPHONEOS_DEPLOYMENT_TARGET = 13.0;")

// Записываем изменения обратно в файл
fs.writeFileSync(pbxprojPath, pbxprojContent)

console.log("IPHONEOS_DEPLOYMENT_TARGET успешно обновлён до 13.0 в CordovaLib")
