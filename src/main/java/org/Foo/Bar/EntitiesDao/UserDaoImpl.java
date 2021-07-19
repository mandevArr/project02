package org.Foo.Bar.EntitiesDao;

import java.util.List;

import org.Foo.Bar.Entities.User;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDaoImpl implements UserDao {
  @Autowired
  private SessionFactory sessionFactory;

  @Override
  public void insertUser(User user) {
    Session sess = sessionFactory.getCurrentSession();
    sess.save(user);
  }

  @Override
  public User findUserByEmail(String email) {
    Session sess = sessionFactory.getCurrentSession();
    int idx = 0;
    List<User> res = sess.createQuery("select u from User u where u.email = ?1").setParameter(++idx, email).list();
    if (res.isEmpty()) {
      return null;
    } else {
      return res.get(0);
    }
  }
}
