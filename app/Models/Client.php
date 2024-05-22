<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'clientcarte';



    protected static function boot()
    {
        parent::boot();
        static::saving(function ($client) {
            if (empty($client->matr)) {
                $latestMatr = static::max('matr');
                $client->matr = $latestMatr + 1;
            }
        });
    }
    protected $primaryKey = 'matr';

    protected $fillable = [
        'nom' ,
        'sexe' ,
        'dateNaiss' ,
        'idVille' ,
        'mobile' ,
        'creation' ,
        'matr' ,
        'point' ,
        'montantTontine' ,
        'user' ,
        'typeChat' ,
        'pwd' ,
    ];
        
}
