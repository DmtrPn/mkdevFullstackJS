1. Можете ли вы сопоставить Таблицы (SQL) и Массива (JS) с точки зрения
заложенных идей? Что между ними общего и каковы различия?
С точки зрения заложенных идей они схожу тем, что каждый содержит
список значений. В SQL значение - строка таблицы, если массив состоит из
объектов, то его можно будет сопоставить с SQL.
Общее: с каждым можно работать как с БД (в случае JS придется написать
соответсвующий интерфейс или использовать Tcomb)
Различие: массив имитирует работу таблицы, поэтому требуются дополнительные
механизмы, которые позволят работать с массивом объектов как с таблицей.
Проблемы, которые необходимо разрешить:
- связи между массивами
- типизация значений
- права доступа
- синхронные изменения

2. Какие БД вам знакомы? Какие критерии выбора БД вы можете предложить?
Oracle
SQL Database
MS Access
Критерий зависит от задач, которые будут ставиться перед БД и целей
использования например: личное, программное или большая организация.
Под программным имею ввиду использование в рамках приложения.
БД изучал в институте, после не доводилось с ними сталкиваться, поэтому
по мере возникновения необходимости буду восстанавливать и дополнять
знания из прошлого.

3. Какую БД вы выбрали бы для (бизнес-версии) вашего проекта? Почему?
SQL Database.
Можно былобы использовать и Tcomb, но в случае дальнейшего развития
проекта, проще будет использовать SQL Database, поскольку этот вариант
имеет более широкое распространение.
Но если есть цель популиризации JS и привязки клиента к себе, то тогда
я бы конечно же использовал Tcomb.
