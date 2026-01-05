package com.wiggle.springdatajpaex;

import com.wiggle.springdatajpaex.model.Student;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;

import java.util.Optional;

@SpringBootApplication
public class SpringDataJpaExApplication {

    public static void main(String[] args) {
        ApplicationContext context = SpringApplication.run(SpringDataJpaExApplication.class, args);

        StudentRepo repo = context.getBean(StudentRepo.class);

        Student s1 = context.getBean(Student.class);
        Student s2 = context.getBean(Student.class);
        Student s3 = context.getBean(Student.class);

        s1.setRollno(101);
        s1.setName("Vignesh");
        s1.setMarks(99);

        s2.setRollno(102);
        s2.setName("Ravi");
        s2.setMarks(80);

        s3.setRollno(103);
        s3.setName("Rajesh");
        s3.setMarks(70);

        repo.delete(s1);

//        System.out.println(repo.findByName("Vignesh"));

//        repo.deleteAll();
//        System.out.println(repo.findByMarksGreaterThanEqual(30));
    }

}
