<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="/css/app.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
              integrity="sha384-oS3vJWv+0UjzBfQzYUhtDYW+Pj2yciDJxpsK1OYPAYjqT085Qq/1cq5FLXAZQ7Ay" crossorigin="anonymous">
        <link rel="stylesheet" href="/plugins/owlcarousel/assets/owl.carousel.min.css">
        <link rel="stylesheet" href="/plugins/owlcarousel/assets/owl.theme.default.min.css">
        <title>Suvalaxmi Real state</title>
        <!-- Favicon -->
        <link rel="icon" href="{{ asset('img/global/favicon.png') }}">
        <meta name="csrf-token" content="{{ csrf_token() }}">
    </head>
    <body >
        <div id="app">
            <router-view></router-view>
            <vue-progress-bar></vue-progress-bar>
        </div>
    <script src="{{asset('js/app.js')}}"></script>
    <script src="{{asset('plugins/owlcarousel/owl.carousel.min.js')}}"></script>
    </body>
</html>
