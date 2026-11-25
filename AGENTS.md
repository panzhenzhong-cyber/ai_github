# Repository instructions

## Project

- This repository contains a small Go command-line application.
- The executable entry point is `cmd/ai-github`.
- Keep application logic in testable packages under `internal/`.

## Required verification

Before reporting an implementation complete, run:

```bash
make check
```

Do not report a command as successful unless it was actually executed.

## Development rules

- Format Go sources with `gofmt`.
- Add or update tests for behavior changes.
- Keep the binary free of platform-specific dependencies unless explicitly required.
- Do not commit generated binaries, coverage files, credentials, or secrets.
- Keep GitHub Actions permissions at least privilege.

## Git identity

When Codex is explicitly asked to create a commit, use a one-command identity override:

```bash
git -c user.name="Codex" -c user.email="codex-bot@localhost" commit ...
```

Do not change the repository-wide or global Git identity.
Do not commit, push, tag, or publish a release unless the user explicitly requests it.
