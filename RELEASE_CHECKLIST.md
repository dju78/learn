# Jomovate Learning Hub — GitHub release checklist

## Completed

- [x] GitHub repository initialised as `dju78/learn`.
- [x] Homepage and /power-bi-book/ page committed.
- [x] Responsive CSS, search/filter JavaScript, favicon, SEO files and Netlify configuration committed.
- [x] Resource filenames and SHA-256 checksums added in `resources.json`.
- [x] Source archives tested in the prepared offline deployment package.
- [x] No confidential book manuscripts or real client records intentionally included.

## Required before linking Netlify or launching the domain

- [ ] **Upload all nine original ZIP files to `downloads/` in this repository.**
- [ ] Run `node scripts/verify-downloads.mjs` on a local clone and get all PASS results.
- [ ] Review and compare the GitHub website against the supplied complete offline deployment package.
- [ ] Create a **new** Netlify site connected to this repo; leave `jomovate.com` unchanged.
- [ ] Verify production HTTPS and every ZIP download.
- [ ] Complete manuscript-to-Brightway answer reconciliation.
- [ ] Confirm final publisher wording, ISBN, book URL and QR code before printing.

**Important:** This repository's website pages are not a complete deployable site until the binary ZIP downloads are committed.
