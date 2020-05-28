<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Movie_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    public function getmovies($movieId = false, $movieName = false)
    {
        $this->db->select('*');
        $this->db->from('movies');

        if($movieId != false) 
        {
            $this->db->where('id', $featureId);
        }
        if($movieName != false)
        {
            $this->db->where('name', $featurename);
        }

        $query=$this->db->get();
        $result = $query->result();
        $this->db->reset_query();

        if(!isset($result))
        {
            log_message('error', "Database error for getting movies");
        }
        return $result;
    }

    public function savesetting($datakey, $value = false, $configureable = null)
    {
        if($datakey == "") {
            return false;
        }
        
        
        $this->db->select('*');
        $this->db->from('settings');
        $this->db->where('datakey', $datakey);

        $query=$this->db->get();
        $result = $query->result();
        $this->db->reset_query();

        if(isset($result)) {
            $data = array(
                'value' => $value
            );

            if($configureable != null) {
                $data = array(
                    'value' => $value,
                    'configurable' => $configureable
                );
            }
            
            $this->db->where('datakey', $datakey);
            if(!$this->db->update('settings', $data)){
                log_message('error', "Database error for updating existing setting");
                return false;
            }
        }
        else {
            return false;
        }

        return true;
    }
}
