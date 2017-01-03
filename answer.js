Какова разница между вызовами:

npm install foo -g и npm install foo?
npm install foo и npm install foo --save?

Аргумент -g устанавливает пакеты гобально.
Пакет будет доступен всем приложениям

--save устанавливает пакет foo и вносит запись о нем в package.json
в секцию dependencies
