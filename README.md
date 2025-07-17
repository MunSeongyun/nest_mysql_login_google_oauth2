# Google OAuth2 NestJS with MySQL

Google OAuth2を使用してユーザーを認証し、JWTを発行して認証状態を維持するNestJSベースの認証バックエンドです。
MySQLとTypeORMを使用してユーザー情報を保存します。

## 🚀 実行方法

```bash
git clone https://github.com/MunSeongyun/nest_mysql_login_google_oauth2.git
cd nest_mysql_login_google_oauth2
cp .env.example .env
cp server/.env.example server/.env
# .envおよびserver/.env修正
docker-compose up
```

## 📁 ディレクトリ構成

```text
/server
├── auth       # ログインエンドポイントと JWT発行
├── common     # トランザクションユーティリティと抽象クラス
├── user       # ユーザー作成・取得・更新処理
└── shared     # Guardや型定義などの共通リソース
```

## ⚙️ 環境変数について

### /.env（Docker 用）

|変数名|説明|
|---|---|
|DB\_ROOT\_PASSWORD|DBのrootパスワード|
|DB\_TYPE|DBの種類 (例：mysql)|
|DB\_HOST|docker-compose.ymlに定義されたDBサービス名|
|DB\_PORT|NestJSが DBに接続するポート番号|
|DB\_USERNAME|DBに接続するユーザー名|
|DB\_PASSWORD|DBに接続するパスワード|
|DB\_DATABASE|初期作成するデータベース名|
|DB\_TZ|Time Zone|

### /server/.env（NestJS 用）

|変数名|説明|
|---|---|
|FRONTEND\_URL|Google ログイン成功後にリダイレクトするフロントエンドのURL|
|GOOGLE\_CALLBACK\_URL|Google ログイン後に遷移するコールバック URL（`auth.controller.ts`の`googleRedirect`メソッドに接続される必要があります）|
|GOOGLE\_CLIENT\_ID|Google Cloud Consoleで発行されたOAuthクライアントID|
|GOOGLE\_SECRET|Google OAuth クライアントシークレット|
|JWT\_SECRET|JWTの署名に使用する秘密キー|
|JWT\_EXPIRATION\_TIME|JWTトークンの有効期限（例：3600s、1h、7d など）|

## 📡 API ドキュメント

- プロジェクトを起動した後、[http://localhost:3000/api/doc](http://localhost:3000/api/doc)にアクセスすると、SwaggerによるAPIドキュメントを確認できます。

## ⚠️ 注意事項

- 本プロジェクトはHTTPS環境でのみ正常に動作します。