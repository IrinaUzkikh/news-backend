## Дипломный проект Яндекс Практикума
### автор: Узких Ирина, группа 9
Version 1.0.0
### Описание проекта:
API для аутентификации пользователей и сохранениия статей                   
Cоздан сервер на платформе Яндекс Облако, на нем развернут API.                
Создан домен и прикреплен к серверу.                                  
Публичный IP-адрес сервера: `  `, домен: `   `                       
#### Реализованы запросы:
- `POST /signup` - создает пользователя                          
- `POST /signin` - логин пользователя, проверяется почта и пароль, возвращается токен   
- `GET /users/me` - возвращает всех пользователей / конкретного пользователя по id
- `GET /articles` - возвращает все статьи                    
- `POST /articles` - создает статью               
- `DELETE /articles/articlesId` - удаляет статью по id
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
    "date": "2020.06.15",             
    "source": "yandex.ru",               
    "link": "https://yandex.ru",                 
    "image": "https://i.postimg.cc/HsFsxHq2/david-marcu-78-A265w-Pi-O4-unsplash.jpg"                   
}                                                                                                                                         
ответ:                                                                                                                                              
{                              
    "keyword": "лето1",                             
    "title": "лето",                            
    "text": "лето",                         
    "date": "2020-06-15T00:00:00.000Z",                          
    "source": "yandex.ru",                     
    "link": "https://yandex.ru",                          
    "image": "https://i.postimg.cc/HsFsxHq2/david-marcu-78-A265w-Pi-O4-unsplash.jpg"                            
}                                                                           
                               
