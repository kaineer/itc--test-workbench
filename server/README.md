# Девсервер с заданиями по js

```
data/
  courses/
    01/
      description.md
      tasks/
        01/
          description.md
          template.js
          tests/
            01.js
        02/
    02/
    ...
```

GET /courses.json -- список курсов с заголовками и uuid-ами
GET /courses/:uuid.json -- курс, его заголовок, список заголовков и uuid-ов задач
GET /tasks/:uuid.json -- задача, ее заголовок, исходный код
