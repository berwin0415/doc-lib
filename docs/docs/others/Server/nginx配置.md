# nginx

## nginx代理，请求转发

```config
server{
    listen       80;

    server_name ~^(.+)?\.example\.com;

    location ^~ /api/v0/ {
        proxy_pass http://localhost:4000/;
    }

}
```

通过该配置，访问nginx地址`http://example.com/api/v0/`的请求会被转发到服务地址`http://localhost:4000/`

**服务地址最后一定要加`/`**，否则服务接收的地址会带有`/api/v0`的前缀

## location 指令

- ^~ 类似于无修饰符的行为，也是以指定模式开始，不同的是，如果模式匹配，那么就停止搜索其他模式了。
