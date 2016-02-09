<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.6/css/bootstrap.min.css">

    <style>
      html, body {
        width: 100%;
        height: 100%;
        margin: 0;
        background-color: black;
      }
      body {
        overflow: auto;
      }
      .root {
        width: 100%;
        height: 100%;
      }
    </style>
    <title><%= htmlWebpackPlugin.options.title || 'Flask React Boilerplate' %></title>
  </head>
  <body>
    <div class="container">  
      <div class="root" id="root"></div>
    </div>
  </body>
</html>
