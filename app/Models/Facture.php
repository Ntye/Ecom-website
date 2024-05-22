<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Facture extends Model
{
    use HasFactory;
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
    public mixed $dateFac;
    public mixed $montant;
    public mixed $tel;
    public mixed $typeFac;
    public mixed $idCaissiere;
    public mixed $capital;
    public mixed $TVA;
    public mixed $codePromo;


    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'facture';



    protected static function boot(): void
    {
        parent::boot();
        static::saving(function ($facture) {
            if (empty($facture->idFac)) {
                $latestIdFac = static::max('idFac');
                $facture->idFac = $latestIdFac + 1;
            }
        });
    }
    protected $primaryKey = 'idFac';

    protected $fillable = [
        'idFac' ,
        'dateFac' ,
        'reparation' ,
        'montant' ,
        'tel' ,
        'typeFac' ,
        'capital' ,
        'codePromo',
        'TVA'
    ];

}
