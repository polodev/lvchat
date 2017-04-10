@extends('layouts/app')
@section('content')
    <chat-log :users="users" :messages="messages"></chat-log>
    <chat-compose></chat-compose>
@endsection