<!-- patterns configuration start-->
<!-- Leave the start & end comments to automatically receive updates. -->

# Shared patterns

For TypeScript, Effect, RPC, Next.js, Cloudflare, runtime architecture,
testing, naming, and code-shape work—and whenever a change proposes a new
capability, guarantee, abstraction, compatibility path, or cross-owner
coordination mechanism—invoke `$patterns` before editing or reviewing code.
Start at `references/patterns/index.md`, read only the patterns relevant
to the task, and treat this repository's `AGENTS.md` and any repository-local
pattern index as higher-precedence guidance.

<!-- patterns configuration end-->

## Start from first principles

In design discussions and implementation, name the required behavior and sketch
the simplest end-to-end flow you’d build today before using existing code as a
starting point. Show the underlying calls. Keep a wrapper, state, or handoff only
if you can name the problem it solves. Remove machinery the design no longer needs.
