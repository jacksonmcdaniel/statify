
<!DOCTYPE html>
    <meta name="csrf-token" content="{{ csrf_token() }}">

<link rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
<link rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons" />
<html>

<head>
    <title>Statify</title>

    @yield('title')

</head>

<body>

    <div id="SignInRoot" value={{$tabIndex}} name="{{$name}}" user_id={{$user_id}}></div>

    @yield('content')
    <script src="{{ mix('js/app.js') }}"></script>
    </ul>
</body>
</html>
