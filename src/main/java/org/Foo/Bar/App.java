package org.Foo.Bar;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class App {
  final public static String googleClientID;
  final public static String googleClientSecret;

  static {
    googleClientID = System.getenv("proj02_google_client_id");
    googleClientSecret = System.getenv("proj02_google_client_secret");
  }

  public static void main(String[] args) {
    SpringApplication.run(App.class, args);
  }
}
