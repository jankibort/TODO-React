##### This is some type of TO:DO list. Got anything to do ? - go ahead and use this service. 

How to run / build project?:
- download https://nodejs.org/en/download/
- go to project dir
- npm install 
- npm start
- service should be available on localhost:3000

If you want to use this on own firebase -> edit firebase.initializeApp() located in index.js.

My though process when creating the solution was to make it simple. Sidepanel with big buttons, seperate edit and remove buttons for each task make the layout intuitive. I had to tradeoff while making API fetch. There might be several alternative ways to do it on backend.

Features that would make service more comfy in future:
- order / group data in table by chosen column
- task deadline parameter
- search tool that allows to filter more flexible way - for example: by fragment of description
- responsiveness of service is very basic

Due to basic knowledge and time limit left some warnings in console and didn't keep code cleanest way (seperated components). This might be fixed in future.

Service is available on github pages : https://jankibort.github.io/ToDoApp/