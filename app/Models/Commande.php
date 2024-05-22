<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Commande extends Model
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
    protected $table = 'commande';

    protected $primaryKey = 'idCommande';
    protected $fillable = [
        'idCommande',
        'dateCom',
        'montant' ,
        'nomClient',
        'mobile' ,
        'adresse',
        'livrer' ,
        'avance',
        'remise' ,
        'type' ,
        'idVille' ,
        'commentaire',
        'codePro' ,
        'quantite' ,
        'taille',
        'couleur' ,
        'disponible' ,
    ];
}
