<?php

namespace App\Backend\Query\APIQuery;

class APIQuery {

    public function __construct() {}

    public function requestData($input) {
        return strrev($input);   
    }
}
