<!DOCTYPE html>
    <meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<html>

<head>
    @yield('title')

    <title>hi</title>
</head>

<body>
    <div id="navBar"> </div>
    <script src="js/app.js"></script>

    @yield('content')
    
    <ul>
        <li><a href='/'>Welcome</a></li>
        <li><a href='/contact'>Contact</a></li>
    </ul>
</body>
</html>