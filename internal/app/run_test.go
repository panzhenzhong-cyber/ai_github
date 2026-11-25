package app

import (
	"bytes"
	"strings"
	"testing"
)

func TestRun(t *testing.T) {
	tests := []struct {
		name    string
		args    []string
		want    string
		wantErr string
	}{
		{name: "default greeting", want: "Hello, World!\n"},
		{name: "custom greeting", args: []string{"--name", "Codex"}, want: "Hello, Codex!\n"},
		{name: "version", args: []string{"--version"}, want: "v0.1.0\n"},
		{name: "unexpected argument", args: []string{"extra"}, wantErr: "unexpected arguments"},
	}

	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			var output bytes.Buffer
			err := Run(tt.args, &output, "v0.1.0")
			if tt.wantErr != "" {
				if err == nil || !strings.Contains(err.Error(), tt.wantErr) {
					t.Fatalf("Run() error = %v, want containing %q", err, tt.wantErr)
				}
				return
			}
			if err != nil {
				t.Fatalf("Run() error = %v", err)
			}
			if output.String() != tt.want {
				t.Fatalf("Run() output = %q, want %q", output.String(), tt.want)
			}
		})
	}
}
