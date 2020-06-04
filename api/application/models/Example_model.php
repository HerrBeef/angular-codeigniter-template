<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Example_model extends CI_Model
{
    public function __construct()
    {
        $this->load->database();
    }

    public function getexamples($id = false, $name = false)
    {
        $this->db->select('*');
        $this->db->from('examples');

        if($id != false) 
        {
            $this->db->where('id', $featureId);
        }
        if($name != false)
        {
            $this->db->where('name', $featurename);
        }

        $query=$this->db->get();
        $result = $query->result();
        $this->db->reset_query();

        if(!isset($result))
        {
            log_message('error', "Database error for getting examples");
        }
        return $result;
    }

    public function createexample($name, $description)
    {
		if(empty($name)) {
            return false;
		}
		
        $example = array(
            'name' => $name,
            'description' => $description
        );

        if(!$this->db->insert('examples', $example)) {
            log_message('error', 'Insert Error');
            return false;
        }
        return true;
    }
}
