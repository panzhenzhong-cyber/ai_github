# ai_github

A small Go command-line application with automated CI and release delivery on GitHub Actions.

## Website

The project includes a responsive static frontend under `web/`. Pushes that change the frontend automatically deploy it with GitHub Pages.

```bash
python3 -m http.server 8000 --directory web
```

Then open `http://localhost:8000`.

## Run locally

```bash
go run ./cmd/ai-github
go run ./cmd/ai-github --name Codex
go run ./cmd/ai-github --version
```

## Verify

```bash
make check
```

## Build

```bash
make build
./dist/ai-github --name Codex
```

Every pull request and push to `main` runs formatting, vetting, tests, and a Linux build. Tags matching `v*` trigger cross-platform builds and publish the resulting binaries and SHA-256 checksum files to a GitHub Release.
