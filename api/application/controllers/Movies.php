<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Movies extends CI_Controller {
	public function __construct() {
        parent::__construct();
		$this->load->library(array('Aauth','session','form_validation'));
		$this->load->model(array('movie_model'));
		$this->load->helper(array('form', 'url', 'date'));
	}

	public function get($movieid = false, $moviename = false)
	{
		if(($movieid != false || $moviename != false) && $this->aauth->is_allowed('getmovie')) {
			if(isset($this->movie_model->getmovies($movieid, $moviename)[0])){
				echo json_encode(array('success' => true, 'movie' => $this->movie_model->getmovies($movieid, $moviename)[0]));
			}
			else {
				echo json_encode(array('success' => false, 'error' => "Kein Film gefunden der den Kriterien entspricht"));
			}
		}
		else if($this->aauth->is_allowed('getmovielist')) {
			$movies = $this->movie_model->getmovies();

			echo json_encode(array('success' => true, 'movies' => $movies));
		}
		else {
			echo json_encode(array('success' => false, 'error' => "Keine Berechtigung"));
		}
	}
}
