# CI

CI 示範程式

## 試用看看 CI

### 試看看怎麼 CI 怎麼運作

1. <kbd>fork</kbd> 這個計畫
2. 新增一個 `.md` 檔案
3. 這個檔案**只能**包含 emoji 程式，或 `<br>`，測試才會通過。否則都會失敗。
4. 送一個 Pull request 回到這個 repository

### 試試看新增不同的測試

1. 在 `test.js` 裡頭新增一個測試，並送一個 pull request 到這個 repository
2. 你可以看到測試[在這裡](https://travis-ci.org/evilmuan/ci/builds)執行

## 怎麼設定自己的 CI？（使用 TravisCI）

1. 寫你程式所需要的測試或 compile 步驟，像是 [`2c8e4ab`](https://github.com/evilmuan/ci/commit/2c8e4ab4eb678d8ff37d2f2185abd546f4474ac8)
2. 新增一個叫做 `.travis.yml` 的檔案，像是 [`5e662a6`](https://github.com/evilmuan/ci/commit/5e662a661f3a0dc5d28ff3008d7a554f8c86e744)
3. 註冊一個 [TravisCI](https://travis-ci.org) 帳號
4. 在 TravisCI 網站上面開啟該程式庫的測試
5. :tada:

## 背景

我第一次想用 CI 的時候 Google 了兩百年才做成，希望這可以省下你的兩百年。 :grimacing:
