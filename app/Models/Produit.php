<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Produit extends Model
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
    protected $table = 'produit';

    protected $primaryKey = 'codePro';


    protected $fillable = [
            'codePro',
            'idCategorie',
            'nomPro',
            'prixAchat',
            'qte',
            'description',
            'dateInsertion',
            'prix' ,
            'codeArrivage',
            'actif',
            'pourcentage',
            'promo',
    ];
}
