<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Example extends CI_Controller {
	public function __construct() {
        parent::__construct();
		$this->load->library(array('Aauth','session','form_validation'));
		$this->load->model(array('example_model'));
		$this->load->helper(array('form', 'url', 'date'));
	}

	public function get($id = false, $name = false)
	{
		if(($id != false || $name != false) && $this->aauth->is_allowed('getexample')) {
			if(isset($this->movie_model->getexamples($id, $name)[0])){
				echo json_encode(array('success' => true, 'example' => $this->example_model->getexample($id, $name)[0]));
			}
			else {
				echo json_encode(array('success' => false, 'error' => "Kein Film gefunden der den Kriterien entspricht"));
			}
		}
		else if($this->aauth->is_allowed('getexamplelist')) {
			$examples = $this->example_model->getexamples();

			echo json_encode(array('success' => true, 'examples' => $examples));
		}
		else {
			echo json_encode(array('success' => false, 'error' => "Keine Berechtigung"));
		}
	}

	public function create()
	{
		$parameters = json_decode($this->input->raw_input_stream);
		
		$name = isset($parameters->name) && !empty($parameters->name)? $parameters->name : '';
		$description = isset($parameters->description)? $parameters->description : '';

		if($this->aauth->is_allowed('createexample')) {
			if($this->example_model->createexample($name, $description)) {
				echo json_encode(array('success' => true, 'message' => "Example successfully created"));
			}
			else {
				echo json_encode(array('success' => false, 'error' => "Fehler beim Anlegen"));
			}
		}
		else {
			echo json_encode(array('success' => false, 'error' => "Keine Berechtigung"));
		}
	}
}
