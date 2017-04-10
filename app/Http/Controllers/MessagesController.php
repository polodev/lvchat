<?php

namespace App\Http\Controllers;

use App\Events\MessagePosted;
use App\Message;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
  public function index(){
    return Message::all();
  }
  public function store(Request $r){
    $text = $r->get('text');
     $message = auth()->user()->messages()->create([
        'text' => $text
    ]);
     broadcast ( new MessagePosted($message, auth()->user()) )->toOthers();
     return ['status' => 'ok'];
  }
}
