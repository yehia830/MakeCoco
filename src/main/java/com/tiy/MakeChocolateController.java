package com.tiy;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpSession;


@Controller
public class MakeChocolateController {
    @RequestMapping(path = "/", method = RequestMethod.GET)
    public String login(HttpSession session, Model model) {
        return "home";
    }
}