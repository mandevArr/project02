package org.Foo.Bar.Controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Random;

import javax.swing.JSpinner.ListEditor;

import org.Foo.Bar.Entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
  @Autowired
  private SessionFactory sessionFactory;
  @ResponseBody
  @GetMapping("/api/foo")
  public Map<Object, Object> hello() {
    Session sess = sessionFactory.openSession();
    Transaction tx = sess.beginTransaction();
    User user = new User();

    user.setEmail("foo" + new Random().nextInt(1000));
    user.setName("hello");
    sess.save(user);

    tx.commit();
    Map<Object, Object> a = new HashMap<>();

    sess = sessionFactory.openSession();
    tx = sess.beginTransaction();

    List<User> list = sess.createQuery("select u from User u").list();
    for (int i = 0; i < list.size(); i++) {
      User u = list.get(i);
      a.put(u.getEmail(), u.getName());
    }
    return a;
  }
}
