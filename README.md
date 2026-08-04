# Know Your Rights - WA

A mobile-friendly web app that helps people understand their rights and police
powers during interactions with police in **Western Australia** — the WA
counterpart to Know Your Rights - QLD.

## Features

- **Check Your Situation** — pick what's happening (pulled over, being searched,
  police at your door, etc.) and jump straight to the relevant rights.
- **Can Police...?** — quick Yes / No / It depends answers to common questions
  about police powers.
- **Essential Rights & Scenarios** — right to silence, searches, arrest,
  interviews, move-on orders, filming police, young people, protests, and more.
- **Search** — full-text search across all topics and quick answers.
- **Favourites** — star topics to save them locally on your device.
- **Legislation links** — every topic links to the referenced WA legislation on
  [legislation.wa.gov.au](https://www.legislation.wa.gov.au).
- **Legal Help contacts** — Legal Aid WA, ALSWA, community legal centres, and
  police complaint bodies.
- **Works offline** — a service worker caches the whole app on first visit, so
  it opens instantly with no signal. Content updates are fetched in the
  background on the next online visit.

## WA-specific notes

Western Australia has **no Human Rights Act** (unlike Queensland's Human Rights
Act 2019), so the app includes a "Your Rights in WA" explainer covering where
rights actually come from in WA: specific statutes such as the *Criminal
Investigation Act 2006* and *Criminal Investigation (Identifying People) Act
2002*, the common law, and limited federal protections.

## Running it

It's a fully static site with no build step or dependencies — open
`index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
# then visit http://localhost:8000
```

It also works well installed to a phone home screen (PWA manifest included).

## Disclaimer

This app provides **general legal information only — it is not legal advice**.
Laws change and every situation is different. For advice about specific
circumstances contact Legal Aid WA (1300 650 579), the Aboriginal Legal Service
of WA (1800 019 900), or a lawyer.
