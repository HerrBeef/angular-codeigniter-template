<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function __construct() {
        parent::__construct();
		$this->load->library(array('Aauth','session','form_validation'));
		$this->load->helper(array('form', 'url', 'date'));
	}

	public function login()
	{
		$parameters = json_decode($this->input->raw_input_stream);

		$username = isset($parameters->username)? $parameters->username : '';
        $password = isset($parameters->password)? $parameters->password : '';
		
		if ($this->aauth->login($username, $password))
		{
			echo json_encode(array('success' => true, 'permissions' => 'TODO'));
		}
		else {
			echo json_encode(array('success' => false, 'error' => $this->aauth->print_errors($divider = '<br />')));
		}
	}
	
	public function checkloggedin()
    {
        if($this->aauth->is_loggedin()){
			echo json_encode(array('success' => true));
		}
		else {
			echo json_encode(array('success' => false));
		}
    }
}
