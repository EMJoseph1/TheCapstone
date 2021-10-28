package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Pics2;
import com.example.demo.repository.Pics2Repository;
import com.example.demo.exception.ResourceNotFoundException;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class Pics2Controller {

@Autowired
	private Pics2Repository pics2Repo;
    


	//get all slideshows
	
	@GetMapping("/allpics2")
	public List<Pics2> getAllPics2()
	{
		
		return pics2Repo.findAll();
	}
	

	@PostMapping("/addpics2")
    public Pics2 newPics2(@RequestBody Pics2 s)
    {
		
		return pics2Repo.save(s);
    }
	
	
	@GetMapping("/pics2/{id}")
	public ResponseEntity<Pics2> getPicsById(@PathVariable int id)
	{
		Pics2 s= pics2Repo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Picture not found"));
		return ResponseEntity.ok(s);                 
	}
	
	@GetMapping("/pics2/{name}")
	public List<Pics2> getPictureByName(@PathVariable String name)
	{
		return pics2Repo.findByName(name);
		
//		List <Slideshow> slideshow=slideshowRepo.findByName(name);
//		if(slideshow.isEmpty())
//		{
//			System.out.println(new ResourceNotFoundException("Picture(s) with the name "+ name +" not found"));
//		}
		
//		return slideshowRepo.findByName(name);
	}
	
	
	
	@PutMapping("/pics2/{id}")
	public ResponseEntity<Pics2> UpdatePics2(@PathVariable int id, @RequestBody Pics2 pics2)
	{
		Pics2 s= pics2Repo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("pics not found"));
	    s.setName(pics2.getName());
	    Pics2 UpdatedPics2=pics2Repo.save(s);
	    return ResponseEntity.ok(UpdatedPics2);
	}
	

	
	@DeleteMapping("/pics2/{id}")
	public String DeletesPics2(@PathVariable int id)
	{
		pics2Repo.findById(id).orElseThrow(() ->  new ResourceNotFoundException("Picture not found"));
	    pics2Repo.deleteById(id);
	    return "The picture with id: "+ id +" is removed from the database.";
	}
	
}
