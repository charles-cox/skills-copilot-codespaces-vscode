// Create web server
// Create a new web server
const express = require('express');
const app = express();
// Set up the view engine
app.set('view engine', 'ejs');
// Set up the body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
// Set up the comments
const comments = [];
// Create a new comment
app.post('/comments', (req, res) => {
    const comment = req.body.comment;
    comments.push(comment);
    res.redirect('/comments');
});
// Get the comments
app.get('/comments', (req, res) => {
    res.render('comments', {comments: comments});
});
// Start the web server
app.listen(3000, () => {
    console.log('Web server is running on http://localhost:3000');
});
// Path: comments.ejs
<!DOCTYPE html>
<html>
<head>
    <title>Comments</title>
</head>
<body>
    <h1>Comments</h1>
    <form action="/comments" method="post">
        <input type="text" name="comment" placeholder="Comment">
        <button type="submit">Add Comment</button>
    </form>
    <ul>
        <% for (let comment of comments) { %>
            <li><%= comment %></li>
        <% } %>
    </ul>
</body>
</html>