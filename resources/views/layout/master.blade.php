<!doctype html>
<html lang="{{ app()->getLocale() }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Vue Spa</title>
        <link rel="stylesheet" href="/css/app.css">
    </head>
    <body>
        <div id="app">
            <nav class="navbar navbar-default">
              <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                  <router-link to="/" class="navbar-brand">Home</router-link>
                </div>
                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul class="nav navbar-nav navbar-right">
                    <router-link to="/about" tag="li">
                        <a>About</a>
                    </router-link>
                  </ul>
                </div>
              </div>
            </nav>
            <router-view></router-view>
        </div>
        <script src="/js/app.js"></script>
    </body>
</html>
