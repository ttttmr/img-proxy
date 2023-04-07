function errorResp(msg) {
  return new Response(msg, {
    status: 403,
  });
}

function checkUrl(url) {
  if (
    url.endsWith(".jpg") ||
    url.endsWith(".png") ||
    url.endsWith(".gif") ||
    url.endsWith(".jpeg")
  ) {
    return true;
  }
  return false;
}

function getHeader(url) {
  const u = new URL(url);
  if (u.hostname.endsWith("sinaimg.cn")) {
    return {
      Referer: "https://weibo.com/",
    };
  }
  if (u.hostname !== "mmbiz.qpic.cn") {
    return {
      Referer: "https://mp.weixin.qq.com/",
    };
  }
  if (u.hostname === "xzfile.aliyuncs.com") {
    return {
      Referer: "https://xz.aliyun.com/",
    };
  }
  return {};
}

export async function handler(req) {
  try {
    if (req.method !== "GET") {
      return errorResp("Method not allowed");
    }
    const { searchParams } = new URL(req.url);
    const url = searchParams.get("url");
    if (!checkUrl(url)) {
      return errorResp("Url is invalid");
    }
    return await fetch(url, {
      headers: getHeader(url),
    });
  } catch (e) {
    return errorResp(e.message);
  }
}