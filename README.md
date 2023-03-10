# action-aliyun-cli
> Github actions for aliyun-cli.

## usgae
```yml
- name: Use aliyun-cli v3.0.121
  uses: afeiship/action-aliyun-cli@v1.0.0
  with:
    version: '3.0.121'
```

## full
```yml
name: gh-action-docker-notes workflow
on: [push]
jobs:
  hello:
    name: hello-docker
    runs-on: ubuntu-latest
    env:
      ALIBABACLOUD_ACCESS_KEY_ID: ${{ secrets.ALIBABACLOUD_ACCESS_KEY_ID }}
      ALIBABACLOUD_ACCESS_KEY_SECRET: ${{ secrets.ALIBABACLOUD_ACCESS_KEY_SECRET }}
      ALIBABACLOUD_REGION_ID: ${{ secrets.ALIBABACLOUD_REGION_ID }}
      ALIBABACLOUD_DEBUG: true
    steps:
      - name: Checkout
        uses: actions/checkout@v2

      - name: Use aliyun-cli v3.0.121
        uses: afeiship/action-aliyun-cli@master
        with:
          version: '3.0.121'

      - name: Debug
        run: |
          printenv
          aliyun --version
          aliyun oss sync app oss://your-oss-bucket/ --force --delete
```

## resources
- https://help.aliyun.com/document_detail/121541.html
- https://github.com/aliyun/aliyun-cli/releases?spm=a2c4g.11186623.0.0.1e528be9HPDISf