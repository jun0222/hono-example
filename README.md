## prisma 導入

```
yarn add prisma --dev
yarn prisma init
yarn add @prisma/client
yarn prisma generate
```

## ディレクトリ構成

```
./
├── src/
│   ├── routes/
│   │   └── ...
│   ├── middleware/
│   │   └── ...
│   └── utils/
│       └── ...
├── tests/
│   ├── routes/
│   │   └── ...
│   └── utils/
│       └── ...
├── prisma/
│   ├── schema.prisma
│   └── migrations/
│       └── ...
├── package.json
├── tsconfig.json
└── jest.config.js
```

## リポジトリ作成

```zsh
yarn create hono

? Target directory hono-example
? Which template do you want to use? nodejs
? Do you want to install project dependencies? yes
? Which package manager do you want to use? yarn
```
