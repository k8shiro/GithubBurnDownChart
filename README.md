# GithubBurnDownChart

スクラム開発のバーンダウンチャートをCSVで管理しGithub Pagesでみられるようにするツール。

Github Pages: https://k8shiro.github.io/GithubBurnDownChart/

# 使い方
1. このリポジトリをForkしてください
2. 1で作成した自分のリポジトリでGithub Pagesの公開設定をしてください
    - リポジトリの Settings > Options > GitHub Pages でSourceをmainブランチにしてsaveするだけ
3. リポジトリ内にあるburndownchart.csvを更新してPushしてください

※ Github Pagesの公開設定・更新後、反映まで時間がかかることがあります。

※ リポジトリ名をGithubBurnDownChart以外にした場合、csvの読み込みpathを修正する必要があります。[burndownchart.jsの下部](https://github.com/k8shiro/GithubBurnDownChart/blob/main/src/burndownchart.js#L102)のpathを修正してください。