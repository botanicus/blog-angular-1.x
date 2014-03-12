# About

A simple blogging app to get the hang of AngularJS a bit. Although I'm thinking about actually using it :)

```bash
# Run the API server.
./server/app.js

# Server assets.
# On all unrecognised routes just serve index.html.
cd client
./config.ru
```

## Deployment

- Run `./server/app.js` (this should have a start-up script in the future).
- Configure Nginx to use `vhost.conf`.
- Go to [blog.101ideas.cz](http://blog.101ideas.cz) and it should just work. Well ... if you own that domain ;) #idomotherfuckers

## TODO

- Start-up script.
- Create/edit posts.
- Markdown.
- Tags.

- GA.
- Disquis.
