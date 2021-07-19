package org.Foo.Bar.EntitiesDao;

import org.Foo.Bar.Entities.User;

public interface UserDao {
  void insertUser(User user);
  User findUserByEmail(String email);
}
