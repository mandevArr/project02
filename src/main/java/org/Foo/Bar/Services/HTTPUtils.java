package org.Foo.Bar.Services;

import java.io.IOException;
import java.util.Map;
import java.util.Set;
import java.util.Map.Entry;

import org.springframework.stereotype.Service;

import okhttp3.MediaType;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

@Service
public class HTTPUtils {
  public static final MediaType JSON = MediaType.get("application/json; charset=utf-8");
  public static final MediaType FORM_ENCODED = MediaType.get("application/x-www-form-urlencoded; charset=utf-8");

  OkHttpClient client = new OkHttpClient();

  public String post(String url, String json, MediaType mediaType) throws IOException {
    RequestBody body = RequestBody.create(json, mediaType);
    Request request = new Request.Builder().url(url).post(body).build();
    try (Response response = client.newCall(request).execute()) {
      return response.body().string();
    }
  }

  public String encodeQueryString(Map<String, String> in) {
    String res = "";
    for (Map.Entry<String, String> e : in.entrySet()) {
      res += "&" + e.getKey() + "=" + e.getValue();
    }
    res = res.substring(1);
    return res;
  }
}
