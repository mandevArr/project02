package org.Foo.Bar.Controllers;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {
  @ResponseBody
  @GetMapping("/api/foo")
  public Map<Object, Object> hello() {
    Map<Object, Object> a = new HashMap<>();
    a.put("a", "b");
    return a;
  }
}
