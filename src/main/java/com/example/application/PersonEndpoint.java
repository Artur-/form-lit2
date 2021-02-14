package com.example.application;

import com.vaadin.flow.server.connect.Endpoint;
import com.vaadin.flow.server.connect.auth.AnonymousAllowed;

@Endpoint
@AnonymousAllowed
public class PersonEndpoint {

    public String sayHello(Person person) {
        return "Hello " + person.getName();
    }
}
