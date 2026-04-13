# BugLive 官网 — 部署说明（新手详细版）

> 本项目使用 **Next.js 14 + Tailwind CSS** 构建，部署在 **Vercel** 免费额度上。
> 域名：https://buglive.icu

---

## 目录

1. [项目结构说明](#1-项目结构说明)
2. [环境准备（首次使用）](#2-环境准备首次使用)
3. [本地开发](#3-本地开发)
4. [修改网站内容](#4-修改网站内容)
5. [添加或更换图片](#5-添加或更换图片)
6. [推送代码到 GitHub](#6-推送代码到-github)
7. [Vercel 自动部署](#7-vercel-自动部署)
8. [绑定自定义域名](#8-绑定自定义域名)
9. [常见问题](#9-常见问题)

---

## 1. 项目结构说明

```
e:\wangye\
├── public/                  # 静态资源（图片等，直接通过 URL 访问）
│   └── hero.jpg             # 首页开屏大图
├── src/
│   ├── app/
│   │   ├── globals.css      # 全局样式（莫奈睡莲配色）
│   │   ├── layout.tsx       # 网站布局（标题、SEO 信息）
│   │   └── page.tsx         # 首页入口（组装各个区块）
│   └── components/
│       └── sections.tsx     # 所有页面区块组件（导航栏、Hero、关于、业务、联系、Footer）
├── tailwind.config.ts       # Tailwind CSS 配置（颜色、动画）
├── next.config.mjs          # Next.js 配置
├── postcss.config.mjs       # PostCSS 配置
├── tsconfig.json            # TypeScript 配置
├── vercel.json              # Vercel 部署配置（告诉 Vercel 这是 Next.js 项目）
├── package.json             # 项目依赖和脚本
├── package-lock.json        # 依赖版本锁定
└── .gitignore               # Git 忽略文件列表
```

---

## 2. 环境准备（首次使用）

### 2.1 安装 Node.js

1. 打开 https://nodejs.org/
2. 下载 **LTS 版本**（推荐 18.x 或 20.x）
3. 双击安装，一路 "Next" 即可
4. 安装完成后，打开终端（PowerShell），验证：

```powershell
node -v    # 应显示 v18.x.x 或 v20.x.x
npm -v     # 应显示 10.x.x 或更高
```

### 2.2 安装 Git

1. 打开 https://git-scm.com/download/win
2. 下载安装，一路默认选项即可
3. 验证：

```powershell
git --version    # 应显示 git version 2.x.x
```

### 2.3 配置 Git 用户信息（首次使用 Git 必须做）

```powershell
git config --global user.name "你的名字"
git config --global user.email "你的邮箱"
```

### 2.4 安装项目依赖

打开终端，进入项目目录，运行：

```powershell
cd e:\wangye
npm install
```

这会根据 `package.json` 自动下载所有依赖到 `node_modules/` 文件夹。

> **注意**：`node_modules/` 文件夹很大，不要手动修改，也不用上传到 GitHub（已被 `.gitignore` 排除）。

---

## 3. 本地开发

### 3.1 启动开发服务器

```powershell
cd e:\wangye
npm run dev
```

看到以下输出表示成功：

```
  ▲ Next.js 14.2.5
  - Local: http://localhost:3000
  ✓ Ready in 2.2s
```

### 3.2 预览网站

打开浏览器访问 **http://localhost:3000**

### 3.3 停止开发服务器

在终端按 **Ctrl + C**

### 3.4 本地构建测试（可选，模拟正式部署）

```powershell
npm run build
```

如果显示 `✓ Generating static pages` 且没有 Error，说明构建成功。

> **重要**：每次修改代码前，确保开发服务器没有在运行，否则构建可能会报错（文件被锁定）。

---

## 4. 修改网站内容

### 4.1 修改联系人信息（姓名、邮箱）

编辑文件：`src/components/sections.tsx`

找到 `ContactSection` 函数中的 `members` 数组（大约第 235 行）：

```tsx
const members = [
  { name: "Qixin", email: "fanfan@buglive.icu" },
  { name: "Yanan", email: "ee@buglive.icu" },
  { name: "Bug", email: "" },
];
```

- 要**添加成员**：在数组末尾加一行 `{ name: "新名字", email: "新邮箱" },`
- 要**删除成员**：删掉对应的那一行
- 要**修改邮箱**：直接改 `email:` 后面的内容
- `email` 留空 `""` 则不显示邮箱链接

### 4.2 修改公司业务介绍

编辑文件：`src/components/sections.tsx`

找到 `BusinessSection` 函数中的 `items` 数组（大约第 168 行），修改 `title` 和 `desc`。

### 4.3 修改网站标题和 SEO 信息

编辑文件：`src/app/layout.tsx`

```tsx
export const metadata: Metadata = {
  title: "BugLive - 直播技术与数字人技术研发",        // ← 浏览器标签页标题
  description: "专注直播技术和数字人技术的研发...",     // ← 搜索引擎描述
};
```

### 4.4 修改颜色主题

编辑文件：`tailwind.config.ts`

`monet` 对象下是所有颜色定义：

```tsx
monet: {
  cream: "#F5F0E8",    // 背景奶白色
  petal: "#E8D5D0",    // 花瓣粉
  rose: "#C9A2AC",     // 玫瑰色
  lilac: "#9B8EC2",    // 紫丁香
  water: "#6B8FA8",    // 水面蓝
  pond: "#4A7A6F",     // 池塘深绿
  leaf: "#7BA17D",     // 叶子绿
  moss: "#A8C6A0",     // 苔藓绿
  mist: "#D6E4E8",     // 薄雾蓝
  sky: "#B8D0DC",      // 天空蓝
},
```

修改对应的十六进制颜色值即可改变全站配色。

---

## 5. 添加或更换图片

### 5.1 更换首页大图

1. 准备好新图片
2. 将图片复制到 `e:\wangye\public\` 文件夹
3. 重命名为 `hero.jpg`（覆盖旧文件）
4. 支持 `.jpg`、`.png`、`.webp` 格式。如果用了非 `.jpg` 格式，需要同步修改 `src/components/sections.tsx` 中的：

```tsx
src="/hero.jpg"   // ← 改成你的文件名，如 "/hero.png"
```

### 5.2 添加其他图片

1. 将图片放入 `e:\wangye\public\` 文件夹
2. 在代码中通过 `/文件名.jpg` 路径引用

---

## 6. 推送代码到 GitHub

每次修改完代码/图片后，需要推送到 GitHub 才能触发 Vercel 自动部署。

### 6.1 完整推送流程（在终端中操作）

```powershell
# 第 1 步：进入项目目录
cd e:\wangye

# 第 2 步：查看哪些文件被修改了（可选，看看改了什么）
git status

# 第 3 步：添加所有修改到暂存区
git add -A

# 第 4 步：提交，-m 后面写本次修改的说明
git commit -m "更新了联系人信息"

# 第 5 步：推送到 GitHub
git push
```

> **重要提示**：
> - 每条命令要**单独输入并回车**，不要一次性粘贴多条
> - `git commit -m "..."` 引号里写你这次改了什么，方便以后查看历史
> - 如果 `git push` 要求输入用户名密码，参考下方 [常见问题 9.2](#92-git-push-要求输入密码)

### 6.2 快速记忆口诀

```
改完代码 → git add -A → git commit -m "说明" → git push
```

---

## 7. Vercel 自动部署

### 7.1 工作原理

- 你的 GitHub 仓库 `xiaotuzizuibang/OfficialWebsite` 已经关联了 Vercel
- 每次 `git push` 到 GitHub 后，Vercel 会**自动检测到变更**并重新构建部署
- 通常 **1-3 分钟**内部署完成

### 7.2 查看部署状态

1. 打开 https://vercel.com/dashboard
2. 登录你的账号
3. 点击项目名称
4. 在 "Deployments" 标签页可以看到所有部署记录
5. 绿色 ✓ = 部署成功，红色 ✗ = 部署失败

### 7.3 部署失败怎么办

1. 点击失败的部署记录
2. 查看 **Build Logs**（构建日志）
3. 通常在日志最底部会有 `Error:` 开头的错误信息
4. 常见原因：
   - 代码语法错误（漏了逗号、括号不匹配等）
   - 图片文件不存在（引用了 `public/` 下没有的文件）

### 7.4 手动触发重新部署

在 Vercel Dashboard → 你的项目 → Deployments → 点击最新一条 → 右上角 "..." → "Redeploy"

---

## 8. 绑定自定义域名

### 8.1 在 Vercel 添加域名

1. 打开 https://vercel.com/dashboard
2. 点击你的项目
3. 点击 **Settings** → **Domains**
4. 输入 `buglive.icu`，点击 **Add**
5. Vercel 会显示需要配置的 DNS 记录

### 8.2 在域名服务商配置 DNS

去你购买 `buglive.icu` 的地方（如阿里云、Cloudflare、Namecheap 等），添加 DNS 记录：

**方式一：CNAME 记录（推荐）**

| 类型 | 名称 | 值 |
|------|------|-----|
| CNAME | @ | cname.vercel-dns.com |

**方式二：A 记录**

| 类型 | 名称 | 值 |
|------|------|-----|
| A | @ | 76.76.21.21 |

> DNS 生效通常需要 **几分钟到 24 小时**不等。

### 8.3 验证域名绑定

配置完 DNS 后，回到 Vercel Dashboard 的 Domains 页面，等待状态变为绿色 ✓。

然后在浏览器访问 https://buglive.icu 即可看到你的网站。Vercel 会自动配置 HTTPS 证书。

---

## 9. 常见问题

### 9.1 npm install 报错

```powershell
# 清除缓存后重试
npm cache clean --force
Remove-Item -Recurse -Force node_modules
npm install
```

### 9.2 git push 要求输入密码

GitHub 已不支持密码登录，需要使用 Personal Access Token：

1. 打开 https://github.com/settings/tokens
2. 点击 **Generate new token (classic)**
3. 勾选 `repo` 权限
4. 生成后**复制 token**（只显示一次！）
5. `git push` 时，密码处粘贴这个 token

或者使用 SSH 方式（更方便，一次配置永久使用）：

1. 在终端运行 `ssh-keygen -t ed25519 -C "你的邮箱"`，一路回车
2. 运行 `cat ~/.ssh/id_ed25519.pub`，复制输出内容
3. 打开 https://github.com/settings/keys → **New SSH key** → 粘贴
4. 将仓库远程地址改为 SSH：
```powershell
cd e:\wangye
git remote set-url origin git@github.com:xiaotuzizuibang/OfficialWebsite.git
```

### 9.3 本地 npm run build 报 EPERM 错误

```
Error: EPERM: operation not permitted, open '.next\trace'
```

这是因为开发服务器还在运行。先按 Ctrl+C 停止 dev server，或者：

```powershell
# 强制关闭所有 node 进程
Get-Process -Name "node" -ErrorAction SilentlyContinue | Stop-Process -Force
```

然后重新运行 `npm run build`。

### 9.4 Vercel 部署显示 404

检查 `vercel.json` 文件是否存在且内容正确：

```json
{
  "framework": "nextjs"
}
```

### 9.5 图片不显示

- 确认图片放在 `public/` 文件夹下
- 确认文件名大小写完全一致（`hero.jpg` ≠ `Hero.jpg`）
- 确认已 `git add` 并 `git push` 了图片文件

### 9.6 如何回滚到之前的版本

```powershell
# 查看提交历史
git log --oneline -10

# 回滚到某个版本（替换 abc1234 为实际的 commit hash）
git revert abc1234
git push
```

---

## 快速操作速查表

| 我想... | 命令 |
|---------|------|
| 本地预览 | `cd e:\wangye` 然后 `npm run dev` |
| 停止预览 | 终端按 `Ctrl + C` |
| 推送上线 | `git add -A` → `git commit -m "说明"` → `git push` |
| 安装依赖 | `npm install` |
| 构建测试 | `npm run build` |
| 查看改了什么 | `git status` |
| 查看历史 | `git log --oneline -10` |
