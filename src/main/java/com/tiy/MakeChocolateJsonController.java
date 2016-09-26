package com.tiy;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

/**
 * Created by bearden-tellez on 9/22/16.
 */
@RestController
public class MakeChocolateJsonController {

@RequestMapping (path= "/makeChocolate.json", method = RequestMethod.GET)
    public ChocolateSolution chocInput(Integer smalls, Integer bigs, Integer goal) throws Exception {
    ChocolateSolver myChocSolver = new ChocolateSolver();
    ChocolateSolution myChocoSolution =  myChocSolver.makeChocolate(smalls, bigs, goal);

    System.out.println("Returning Results");
    return myChocoSolution;
}
}
