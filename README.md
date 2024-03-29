# About

A simple blogging app to get the hang of AngularJS a bit. Although I'm thinking about actually using it :)

Configure Nginx to pick up `vhost.dev.conf`. That will serve assets and for all unrecognised routes just serve index.html. And run the API server:

```
# Run the API server.
./server/app.js
```

## Deployment

### Bare Bones

- Run `start blog.server`.
- Configure Nginx to use `vhost.conf`.
- Go to [blog.101ideas.cz](http://blog.101ideas.cz) and it should just work. Well ... if you own that domain ;) #idomotherfuckers

### Using The Deployment Scripts

- Run `./deployment/bootstrap-server.sh`. It assumes SSH configuration named `server`.
- It assumes the Nginx conf is picked up automatically. I do it using `include /webs/**/vhost.conf;` in `/etc/nginx/sites-enabled/default`.
- Optionally run `git config alias.deploy 'push server master:deployment'` so you can just run `git deploy`.


## TODO

- Auth.
- Create/edit posts (including drafts & scheduling using if publishedAt > Time.now ... ).
- Post list: show drafts & unpublished if authenticated.
- Server-side support for filtering by tags /posts.json?tag=ruby.
- Sort by updatedAt.
- Show when updated (if the post was updated).

- GA.
- Disquis.
