package app

import (
	"flag"
	"fmt"
	"io"
)

// Run executes the command-line application.
func Run(args []string, out io.Writer, version string) error {
	flags := flag.NewFlagSet("ai-github", flag.ContinueOnError)
	flags.SetOutput(out)

	name := flags.String("name", "World", "name to greet")
	showVersion := flags.Bool("version", false, "print version and exit")

	if err := flags.Parse(args); err != nil {
		return err
	}
	if flags.NArg() != 0 {
		return fmt.Errorf("unexpected arguments: %v", flags.Args())
	}
	if *showVersion {
		fmt.Fprintln(out, version)
		return nil
	}

	fmt.Fprintf(out, "Hello, %s!\n", *name)
	return nil
}
