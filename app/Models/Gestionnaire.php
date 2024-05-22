<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Gestionnaire extends Model
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
    protected $table = 'gestionnaire';
    protected static function boot()
    {
        parent::boot();
        static::saving(function ($gestionnaire) {
            if (empty($gestionnaire->idGest)) {
                $latestMatr = static::max('idGest');
                $gestionnaire->idGest = $latestMatr + 1;
            }
        });
    }
    protected $primaryKey = 'idGest';

    protected $fillable = [
        'idGest',
        'nomGest',
        'typeGest' ,
        'login' ,
        'pwd' ,
        'actif' ,
        'mobile' ,
    ];
}