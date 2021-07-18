package org.Foo.Bar.Controllers;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.Foo.Bar.SpringContextAccessor;
import org.Foo.Bar.RestObjects.GoogleAccessToken;
import org.Foo.Bar.Services.HTTPUtils;
import org.Foo.Bar.Services.URIParser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import okhttp3.OkHttpClient;

@Controller
public class ViewController {
  final static String CLIENT_URL = "http://localhost:4200";
  private URIParser parser;
  private HTTPUtils http;

  @Autowired
  public ViewController(URIParser parser, HTTPUtils http) {
    this.parser = parser;
    this.http = http;
  }

  @GetMapping("/auth/google_redirect")
  public String GoogleAuth(HttpServletRequest req, OkHttpClient client, Model model) throws IOException {
    Map<String, String> qsMap = parser.parse(req.getQueryString());
    String res = "";
    // TODO: use restTemplate insteat of okhttp3
    if (qsMap.containsKey("code")) {
      res = http.post("https://oauth2.googleapis.com/token", http.encodeQueryString(new HashMap<String, String>() {
        {
          put("code", qsMap.get("code"));
          put("client_id", SpringContextAccessor.googleClientID);
          put("client_secret", SpringContextAccessor.googleClientSecret);
          put("redirect_uri", CLIENT_URL + "/auth/google_redirect");
          put("grant_type", "authorization_code");
        }
      }), HTTPUtils.FORM_ENCODED);
    }
    ObjectMapper objectMapper = new ObjectMapper();
    try {
      GoogleAccessToken googleAccessToken = objectMapper.readValue(res, GoogleAccessToken.class);
      model.addAttribute("accessToken", googleAccessToken.getAccess_token());
      model.addAttribute("idToken", googleAccessToken.getId_token());
    } catch (Exception e) {
    }
    return "access_token_helper";
  }
}
