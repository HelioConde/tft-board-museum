# Visual snapshots

These files are generated automatically by GitHub Actions so the current UI can be reviewed without manually opening every page.

Generated snapshots:

- `desktop-full.png` — full desktop page.
- `mobile-full.png` — full mobile page.
- `alchemyflames-desktop-full.png` — full desktop page with `AlchemyFlames#br1`.
- `alchemyflames-mobile-full.png` — full mobile page with `AlchemyFlames#br1`.
- `capture-report.json` — viewport and page dimensions from the capture.

The workflow runs on pushes to `main` and can also be triggered manually from **Actions → Capture site screenshots → Run workflow**.

The workflow ignores commits that only change `screenshots/**`, preventing an infinite commit loop.
