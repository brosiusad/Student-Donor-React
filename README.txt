
Install Postgres locally
run dbcreate.js in the student-donor-service project as:
>node dbcreate.js

The webpack setup comes from the tutorial at:
- https://github.com/michaelcheng429/react-tutorial-todos
- https://youtu.be/IR6smI_YJDE

1. start student-donor-service:
> cd /path/to/service/folder
> heroku local -p 5001

service is served on localhost:5001

2. start react app. first, ensure webpack-dev-server is saved globally
> cd /path/to/this/app
> webpack-dev-server --history-api-fallback

app is served on localhost:8080