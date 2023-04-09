# Img Proxy

图片反向代理服务

如微博/微信/先知图片

## 部署

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fttttmr%2Fimg-proxy)

### Cloudflare Workers

复制[dist/worker.js](./dist/worker.js)文件

## 使用

RSSHUB中配置`HOTLINK_TEMPLATE`变量

```
https://VERCEL/api/proxy?url=${href_ue}
```

```
https://CFWORKER/?url=${href_ue}
```
