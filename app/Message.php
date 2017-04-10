<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Message extends Model
{
  protected $guarded = [];
  protected $with = ['user'];
  public function user(){
    return $this->belongsTo(User::class);
  }
}
