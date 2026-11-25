.PHONY: build check clean test

build:
	go build -o dist/ai-github ./cmd/ai-github

test:
	go test -race ./...

check:
	test -z "$$(gofmt -l .)"
	go vet ./...
	go test -race ./...
	go build -o dist/ai-github ./cmd/ai-github

clean:
	rm -rf dist coverage.out
