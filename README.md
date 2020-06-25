## Дипломный проект Яндекс Практикума
### автор: Узких Ирина, группа 9
Version 1.0.0
### Описание проекта:
API для аутентификации пользователей и сохранениия статей для сервиса поиска новостей по запросу и сохранения в личном кабинете                    
Домен: `api.newsnine.ga`                       
#### Реализованы запросы:
- `POST /signup` - создает пользователя с переданными в теле email, password и name                        
- `POST /signin` - логин пользователя, проверяются почта и пароль, возвращается токен   
- `GET /users/me` - возвращает информацию о пользователе (email и имя)
- `GET /articles` - возвращает все сохранённые пользователем статьи                    
- `POST /articles` - создает статью с переданными в теле keyword, title, text, date, source, link и image             
- `DELETE /articles/articlesId` - удаляет сохранённую статью  по _id
#### Метод авторизации, который используется:
Передать JWT токен из ответа на запрос `POST /signin` в заголовок Authorization
#### Как развернуть проект локально:
- Клонировать проект на локальный компьютер командой в терминале:                              
  `git clone https://github.com/IrinaUzkikh/news-backend.git`
- Инициировать npm: `npm install`
- В режиме develop проект запускается командой `npm run dev`
- В режиме production проект запускается командой `npm run start`
#### Примеры запросов и ответов:
##### `POST /signup`                                                                    
запрос:                                                                                                                                              
{                                            
"email": "test@yandex.ru",                                                             
"password": "xxx",                              
"name": "YourName"                                                                                                                                
}                                                                                     
ответ:                                                                                
{                                  
    "name": "YourName",                                                                              
    "email": "test@yandex.ru"                                                                                                       
}                                                                                                                                     
##### `POST /signin`                                          
запрос:                                                                
{                                                                                                           
"email": "test@yandex.ru",                                                            
"password": "xxx"                                                                          
}                                                                
ответ:                                                               
{                                                                                    
    "token": "xxx"                                                             
}                                                                               
##### `POST /articles`                                                                        
запрос:                                                                                                 
{                    
    "keyword": "лето",               
    "title": "лето",              
    "text": "лето",                
    "date": "2020-06-15",             
    "source": "yandex.ru",               
    "link": "https://yandex.ru",                 
    "image": "https://i.postimg.cc/HsFsxHq2/david-marcu-78-A265w-Pi-O4-unsplash.jpg"                   
}                                                                                                                                         
ответ:                                                                                                                                              
{                              
    "keyword": "лето",                             
    "title": "лето",                            
    "text": "лето",                         
    "date": "2020-06-15T00:00:00.000Z",                          
    "source": "yandex.ru",                     
    "link": "https://yandex.ru",                          
    "image": "https://i.postimg.cc/HsFsxHq2/david-marcu-78-A265w-Pi-O4-unsplash.jpg"                            
}                                                                           
                               
