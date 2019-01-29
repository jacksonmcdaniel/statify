<?php
  class DatabaseAccessor {

    private static $instance = null;
    private $conn;
    
    private $host = 'localhost:8000';
    private $user = 'statify';
    private $pass = 'password';
    private $name = 'statifyDB';
     

    private function __construct()
    {
      $this->conn = new PDO("mysql:host={$this->host};
      dbname={$this->name}", $this->user,$this->pass,
      array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
    }
    
    public static function getInstance()
    {
      if(!self::$instance)
      {
        self::$instance = new ConnectDb();
      }
     
      return self::$instance;
    }
    
    public function getConnection()
    {
      return $this->conn;
    }
  }