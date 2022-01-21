<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Apartment_House extends Model
{
        protected $table="apartment_house";

        protected $fillable=['id','property_id','built_year','no_floors','furnish_status','kitchen',
            'bedroom','bathroom','living_room','parking','amenities'];

        public function property(){
       return $this->belongsTo('App\Property');
        }
}
