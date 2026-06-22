# Moving this project into Cursor + Claude Code — step by step

Beginner-friendly. You'll run **Claude Code inside Cursor's built-in terminal.**
Do **Part A** once; after that you live in Parts B–D.

Project folder (your single source of truth): **`lhs-homepage-LATEST`**
```
/Volumes/WORK DRIVE/Downloads/Line Haul Station/LineHaul Station Brand System/lhs-homepage-LATEST
```

---

## Part A — One-time setup

### 1. Open the project in Cursor
In Cursor: **File → Open Folder…** → select **`lhs-homepage-LATEST`** → Open.
You'll see all the files on the left (Cursor shows the `.claude` folder too — no
hidden-file trick needed here).

### 2. Open Cursor's terminal
**Terminal → New Terminal** (or press **Ctrl + `** — the backtick key).
It opens already inside the project folder, so you don't need to `cd` anywhere.

### 3. Check Node, then install Claude Code
In that terminal:
```bash
node -v
```
If it shows v18+ you're set. (No version? Install "LTS" from https://nodejs.org,
then reopen Cursor.) Now install Claude Code with the official **native installer**
(installs into your home folder, no admin/sudo, auto-updates):
```bash
curl -fsSL https://claude.ai/install.sh | bash
```
Then verify: `claude --version`  (if "command not found," open a NEW terminal tab
and try again — it just needs to pick up the updated PATH).

> Do NOT use `sudo npm install -g @anthropic-ai/claude-code` — it causes the
> permission error (EACCES, writing to /usr/local) and Anthropic advises against
> sudo. The curl installer above avoids all of that. Homebrew also works:
> `brew install --cask claude-code`. Claude Code needs a paid plan (Pro/Max/Team).

### 4. Add the design/dev skills
1. Unzip **`lhs-all-skills.zip`** (double-click it).
2. Drag the skill folders from the unzipped `.claude/skills/` **into Cursor's file
   explorer**, dropping them inside the project's `.claude/skills/` folder.
   (Or in Finder: press **Cmd + Shift + .** to show hidden folders, then copy them in.)
3. Optional, to stay lean: delete `skill-finder` and the HyperFrames video skills.

### 5. Install the project's dependencies
In Cursor's terminal:
```bash
rm -rf node_modules .next
npm install
```
(`rm -rf` clears any leftover install so you get the correct Mac versions.)

---

## Part B — Use Claude Code inside Cursor

### 6. Launch Claude Code
In Cursor's terminal, run:
```bash
claude
```
- First time: it walks you through signing in with your Claude account.
- It will notice you're inside Cursor and offer to add a small **IDE extension** —
  say yes. That lets Claude Code show its edits as **diffs in the editor** and use
  your selected code / open file as context. (You can also launch it from Cursor's
  Command Palette: **Cmd+Shift+P → "Claude Code".**)

### 7. It already understands the project
Claude Code auto-reads **`CLAUDE.md`** at the root — project map, brand rules, and
your "don't touch other computers" instruction. The skills in `.claude/skills/`
load automatically. Type `/` to see skill commands (e.g. `/impeccable`).

### 8. Preview the live site while you work
Open a **second terminal tab** in Cursor (the **+** in the terminal panel, or
**Cmd+T**) and run:
```bash
npm run dev
```
Cursor shows a clickable **http://localhost:3000** link. Keep this running in one
tab and Claude Code in the other. Edits refresh live in the browser.

> Note: Cursor also has its own built-in AI (Cmd+K / Cmd+L). You can use either,
> but for this project use **Claude Code** in the terminal — it's what knows the
> CLAUDE.md and the skills.

---

## Part C — Connect to GitHub so your changes go live

Your live Vercel site is still built from an **older copy** in a different repo.
Point deployment at THIS folder. Two ways:

### Easiest: let Claude Code do it
In Claude Code, paste:
> "Set this folder up as a git repository, commit everything, connect it to my
> GitHub repo at https://github.com/jv-linehaulstation/LHS_Brand.git, and push, replacing what's there."

Find `https://github.com/jv-linehaulstation/LHS_Brand.git` on github.com: open your repo → green **Code** button → copy
the HTTPS URL (looks like `https://github.com/you/lhs-brand.git`).

### Or use Cursor's terminal
```bash
git init
git add .
git commit -m "Full current site: calculators, map, photos, loader, leadership"
git branch -M main
git remote add origin https://github.com/jv-linehaulstation/LHS_Brand.git
git push -u origin main --force
```
`--force` replaces the old contents with this version. **Vercel auto-redeploys**
within ~1 minute of the push.

> After this, Cursor's **Source Control** panel (the branch icon on the left
> sidebar) shows your changes. You can stage, commit, and push with buttons there
> instead of typing git commands.

---

## Part D — Your everyday workflow

1. Open the folder in Cursor → open the terminal → run `claude`.
2. Ask for changes in plain English, or use a skill: *"do an Impeccable pass on
   the drivers page."*
3. Preview with `npm run dev` (http://localhost:3000) in a second terminal tab.
4. Deploy: in Claude Code say *"commit and push,"* or use Cursor's Source Control
   panel (stage → commit → push). Vercel rebuilds your live site automatically.

### Good habits
- One folder only (`lhs-homepage-LATEST`). Don't unzip new copies to edit.
- Before deploying, have Claude Code run `npx tsc --noEmit` and `npm run build`.
- The brand rules in `CLAUDE.md` are non-negotiable (CTAs, exact casing, no "nodes").
- Secrets/`.env` stay out of git (the `.gitignore` already handles this).

---

## Quick reference

| Want to… | In Cursor |
|---|---|
| Open the project | File → Open Folder → `lhs-homepage-LATEST` |
| Open a terminal | Terminal → New Terminal (Ctrl + `) |
| Start Claude Code | type `claude` in the terminal |
| Preview the site | `npm run dev` → click http://localhost:3000 |
| Production build check | `npm run build` |
| See design skills | type `/` inside Claude Code |
| Commit & deploy | Source Control panel, or `git add . && git commit -m "…" && git push` |
