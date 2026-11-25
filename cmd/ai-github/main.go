package main

import (
	"fmt"
	"os"

	"github.com/panzhenzhong-cyber/ai_github/internal/app"
)

var version = "dev"

func main() {
	if err := app.Run(os.Args[1:], os.Stdout, version); err != nil {
		fmt.Fprintln(os.Stderr, err)
		os.Exit(1)
	}
}
