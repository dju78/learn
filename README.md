# Jomovate Learning Hub

Official companion resources for *Power BI for Business Intelligence and Data Analytics* by Daramola Joseph Omoyele.

- Planned learning subdomain: **https://learn.jomovate.com/**
- Book resources: **https://learn.jomovate.com/power-bi-book/**
- Hosting: **Netlify**, as a **separate site** from `jomovate.com`.
- Source: the prepared Jomovate Learning Hub deployment package.

## Deployment status

This GitHub repository is being populated with the learning portal source. **Do not connect it to a public Netlify build until the ZIP resources in `downloads/` have been added.** HTML download links will not function without those binary files.

## Restore the companion ZIP files

The author has the original `Jomovate_Learning_Hub_Complete_Deploy_Package.zip` archive. Extract `Jomovate_Learning_Hub_FINAL_SITE/downloads/` and add **all nine original ZIP files, unchanged**, under `downloads/` here. GitHub's web upload or GitHub Desktop can upload these files.

The exact original resource names, lengths and SHA-256 values are documented in `DOWNLOAD_INTEGRITY.md`; verify them after uploading.

## Netlify

Create a **new** Netlify site linked to `dju78/learn`, publishing the repository root with no build command. Set `learn.jomovate.com` as its custom domain after testing. Do not change the existing `dju78/jomovate` website or its DNS configuration.

The exercises use synthetic educational data; no private client data should be added.

## Verification

Check `/`, `/power-bi-book/`, the chapter search/filter UI, all nine resource ZIP downloads, `/resources.json` and the HTTPS certificate before adding the URL to the printed book.
