package org.Foo.Bar.UtilityServices;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

@Service
public class QueryStringParser {
  public Map<String, String> parse(String qs) {
    Map<String, String> res = new HashMap<>();
    if (qs == null) {
      return res;
    }
    String[] toks = qs.split("&");
    for (int i = 0; i < toks.length; i++) {
      String[] kvPairs = toks[i].split("=");
      res.put(kvPairs[0], kvPairs[1]);
    }
    return res;
  }
}
