# 微服務專案架構

這是一個使用 Turborepo 建立的 monorepo 專案，用於管理 Hope Church 的各種應用程式和共享套件。

## 專案結構

### 應用程式 (apps)

- `website`: 教會官方網站
- `location`: 教會位置資訊應用
- `web`: 主要網站應用
- `docs`: 文件網站

### 共享套件 (packages)

- `@repo/ui`: 共享的 React 元件庫
- `@repo/eslint-config`: ESLint 配置
- `@repo/typescript-config`: TypeScript 配置

## 技術棧

- [TypeScript](https://www.typescriptlang.org/) - 靜態型別檢查
- [Next.js](https://nextjs.org/) - React 框架
- [ESLint](https://eslint.org/) - 程式碼檢查
- [Prettier](https://prettier.io) - 程式碼格式化
- [Turborepo](https://turborepo.org/) - Monorepo 工具

## 開始使用

### 前置需求

- Node.js 18 或更高版本
- pnpm 8 或更高版本

### 安裝

```bash
# 安裝所有依賴
pnpm install
```

### 開發

```bash
# 啟動所有應用程式的開發伺服器
pnpm dev

# 啟動特定應用程式的開發伺服器
pnpm dev --filter=website

# 如果要兩個以上一專案一同開發
pnpm turbo run dev --filter=api --filter=location
```

### 建置

```bash
# 建置所有應用程式
pnpm build

# 建置特定應用程式
pnpm build --filter=website
```

## 遠端快取

本專案使用 Vercel 的遠端快取功能來加速建置過程。要啟用遠端快取，請執行：

```bash
# 登入 Vercel
npx turbo login

# 連結專案到遠端快取
npx turbo link
```

## 開發指南

1. 所有新的功能開發應該在 feature 分支上進行
2. 提交前請確保通過所有測試和 lint 檢查
3. 使用 Conventional Commits 規範來撰寫提交訊息

## 授權

本專案為 Hope Church 所有，保留所有權利。
