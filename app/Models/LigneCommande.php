<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class LigneCommande extends Model
{
    use HasFactory;
    /**
     * Indicates if the model should be timestamped.
     *
     * @var bool
     */
    public $timestamps = false;
    public mixed $taille;
    public mixed $quantité;
    public mixed $disponible;
    public mixed $couleur;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'lignecommande';

    protected static function boot()
    {
        parent::boot();
        static::saving(function ($ligneCom) {
            if (empty($ligneCom->idLignCom)) {
                $latestId = static::max('idLignCom');
                $ligneCom->idLignCom = $latestId + 1;
            }
        });
    }

    protected $primaryKey = 'idLignCom';

    protected $fillable = [
        'idLignCom',
        'idCommande',
        'codePro',
        'quantité',
        'taille',
        'couleur',
        'disponible',
    ];
}
