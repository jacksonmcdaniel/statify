
<!DOCTYPE html>
    <meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<html>

<head>

    @yield('title')
    <title>Statify</title>

</head>

<body>
    <script>
        var signInRootViewModel = {
            'value' : parseInt("{{$tabIndex}}", 10),
            'name' : "{{$name}}",
            'user_id' : parseInt("{{$user_id}}", 10)};
    </script>

    <div id="SignInRoot" user_image="{{$user_image}}"></div>

    @yield('content')
    <script src="{{ mix('js/app.js') }}"></script>
    </ul>
</body>
</html>
