<?php
 
namespace App\Backend\User;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

use App\Backend\Query\APIQuery\APIQuery;
    
class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     *
    protected $fillable = [
        'name', 'email', 'password',
    ];
     */
    private $name;

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    //Needs to have a reference to the queries?
    private static $apiQuery;
    private static $dbQuery;

    function __construct($name)
    {
        $this->name = $name;
    }

    /*
     *  Invokes the apiQuery to query Spotify for the user's top songs
     */
    public function getTrends($input) 
    {
        //TODO instantiating an APIQuery for the moment since we don't have one being passed yet
        if ($this->apiQuery == null) 
        {
            $this->apiQuery = new APIQuery();
        }
        return $this->apiQuery->requestData($input);
    }
}
