## ToolKiti 项目铁律（每次必读）

### 故障排查：永远按这个顺序
1. `git status --short` + `git log --oneline -5` — 确认代码状态
2. **`npm run build`** — 确认能编译通过（最重要！）
3. 用浏览器访问 `https://toolkiti.org` — 确认线上可达
4. 检查 Vercel Dashboard 部署状态
5. 检查 Cloudflare DNS（`https://dash.cloudflare.com` → toolkiti.org → DNS → 记录）
6. 以上全 pass 才去看源码细节

### 历史故障速查
| 日期 | 现象 | 根因 | 修复 |
|:---|:---|:---|:---|
| 8/4 | 流量归零 | 代码没 push | push |
| 8/9 | 流量归零 | layout.tsx 语法错误 + compare/page.tsx client/metadata 冲突，构建失败 | 修语法 + npm run build + push |

### 常见陷阱
- **代码同步 ≠ 构建通过**。Vercel 部署失败时站点直接下线，没有任何中间状态。
- **改 metadata/title/description 后必须本地 build**。引号配对、emoji 编码是最容易出事的。
- **`"use client"` 组件不能导出 `metadata`**。需要单独建 `layout.tsx`。

### 关键配置
- **Cloudflare DNS**：CNAME `toolkiti.org` 和 `www.toolkiti.org` → `0e1a36cee2f66756.vercel-dns-017.com`，DNS-only（灰云）
- **Vercel**：`toolkiti.org` 308 → `www.toolkiti.org`，`www.toolkiti.org` 为 Production
- **GitHub**：`wuhu95wuhu-design/toolkiti`，push 触发 Vercel 自动部署
- **本地路径**：`C:\Users\Admin\Documents\Codex\萝卜丁丁\toolkiti`
- **知识库**：`C:\Users\Admin\Documents\Codex\萝卜丁丁\ToolKiti 故障排查知识库.md`

### PowerShell 注意事项
- `npm` 被 PS 执行策略阻止时用 `cmd /c` 包裹
- 文件编码统一 UTF-8
