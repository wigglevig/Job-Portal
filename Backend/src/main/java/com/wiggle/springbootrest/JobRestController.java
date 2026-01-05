package com.wiggle.springbootrest;


import com.wiggle.springbootrest.model.JobPost;
import com.wiggle.springbootrest.service.JobService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class JobRestController {

    @Autowired
    private JobService service;


    @GetMapping(path="jobPosts",produces = "application/json")

    public List<JobPost> getJobPost(){

        return service.getAllJobs();
    }
//
//    @GetMapping("jobPost/{postId}")
//    public JobPost getJob(@PathVariable("postId") int postId){
//        return service.getJob(postId);
//    }


    @GetMapping("jobPost/{postId}")
    public JobPost getJob(@PathVariable("postId") int postId){
        return service.getJob(postId);
    }


    @GetMapping("jobPosts/keyword/{keyword}")
    public List<JobPost> getJobByKeyword(@PathVariable("keyword") String keyword){
        return service.search(keyword);
    }



    @PostMapping("jobPost")
    public JobPost addJob(@RequestBody JobPost jobPost){
        service.addJob(jobPost);
        return service.getJob(jobPost.getPostId());
    }


    @PutMapping("jobPost")
    public void updateJob(@RequestBody JobPost jobPost){
        service.updateJob(jobPost);
    }

    @DeleteMapping("jobPost/{postId}")
    public void deleteJob(@PathVariable("postId") int postId){
        service.deleteJob(postId);

    }
    @GetMapping("load")
    public String load(){
        service.load();

        return "Success...Application is up and running.";
    }


}
