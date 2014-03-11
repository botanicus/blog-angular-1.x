
/*
 * GET post listing.
 */

var post1 = {id: 1, title: "Hello World!", slug: "hello-world", publishedAt: new Date(2013, 9, 21).getTime(), excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, corrupti, debitis, unde quia tempora eum sit repudiandae natus deserunt quae eos voluptate quaerat id aliquam incidunt blanditiis expedita esse sunt."};
var post2 = {id: 2, title: "My Life Story", slug: "my-life-story", publishedAt: new Date(2013, 11, 26).getTime(), excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, corrupti, debitis, unde quia tempora eum sit repudiandae natus deserunt quae eos voluptate quaerat id aliquam incidunt blanditiis expedita esse sunt."};
var post3 = {id: 3, title: "Stop Sucking at Networking", publishedAt: new Date(2014, 0, 1).getTime(), slug: "stop-sucking-at-networking", excerpt: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, corrupti, debitis, unde quia tempora eum sit repudiandae natus deserunt quae eos voluptate quaerat id aliquam incidunt blanditiis expedita esse sunt."};

var posts = [post1, post2, post3];

var db = {"hello-world": post1, "my-life-story": post2, "stop-sucking-at-networking": post3};

exports.list = function (req, res) {
  req.accepts('json');
  res.json(posts);
};

exports.get = function (req, res) {
  req.accepts('json');
  res.json(db[req.params.slug]);
};
