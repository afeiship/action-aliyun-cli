# 定义项目名称和初始版本号
PROJECT_NAME := action-aliyun-cli
VERSION := 1.0.0

# 定义发布相关变量
RELEASE_BRANCH := master
RELEASE_TAG := v$(shell echo $(VERSION) | awk -F. '{print $$1"."$$2"."$$3+1}')
RELEASE_COMMIT_MSG := Release $(RELEASE_TAG)
RELEASE_TAG_MSG := Release $(RELEASE_TAG)

.PHONY: release publish check

# 创建新的 git tag 并将其推送到 GitHub
release:
	git checkout $(RELEASE_BRANCH)
	git tag -a $(RELEASE_TAG) -m "$(RELEASE_TAG_MSG)"
	git commit -m "$(RELEASE_COMMIT_MSG)" --allow-empty
	git push origin $(RELEASE_TAG)

# 递增版本号并发布新版本
publish:
	$(eval VERSION=$(shell echo $(VERSION) | awk -F. '{print $$1"."$$2"."$$3+1}'))
	$(MAKE) release

# 打印版本信息以进行 check
check:
	@echo "PROJECT_NAME=$(PROJECT_NAME)"
	@echo "VERSION=$(VERSION)"
	@echo "RELEASE_BRANCH=$(RELEASE_BRANCH)"
	@echo "RELEASE_TAG=$(RELEASE_TAG)"
	@echo "RELEASE_COMMIT_MSG=$(RELEASE_COMMIT_MSG)"
	@echo "RELEASE_TAG_MSG=$(RELEASE_TAG_MSG)"

# 设置默认目标
default: publish