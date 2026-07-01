# 微步配置项目

本仓库用于托管《微步》的官网、隐私政策、用户协议、关于页面和远程配置。

## 目录

- `site/`：新版官网与协议页面
- `site/index.html`：官网首页
- `site/privacy.html`：隐私政策
- `site/user_agreement.html`：用户协议
- `site/about_us.html`：关于微步/联系方式
- `config/version_control.json`：协议版本与版本更新配置
- 根目录 `privacy.html` / `terms.html` / `aboutUS.html`：兼容 App 旧链接，会跳转到 `site/` 下的新页面

## 当前 App 内链接

App 当前读取：

- `https://zhongzhenwu.github.io/weibu_privacy/privacy.html`
- `https://zhongzhenwu.github.io/weibu_privacy/terms.html`
- `https://zhongzhenwu.github.io/weibu_privacy/aboutUS.html`

因此根目录兼容入口不要删除，除非 App 侧链接已经同步更新。
