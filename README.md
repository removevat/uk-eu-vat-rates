# UK & EU VAT Rates 2026 — Open Data + Tiny VAT Calculator

Free, maintained data for anyone building invoicing, bookkeeping or checkout tools: the current UK and EU VAT rates and the UK thresholds, in CSV and JSON, plus a dependency-free JavaScript snippet that adds or removes VAT correctly.

## The data
`vat-rates-2026.csv` — country, standard rate, reduced rates, notes. Rates checked against official sources (GOV.UK and the European Commission) in November 2026.

## The code
`vat.js` exports three functions:
- `addVat(net, ratePercent)` — net → gross
- `removeVat(gross, ratePercent)` — gross → { net, vat } (divides by 1 + rate — never subtract the percentage from a gross figure; that is the most common VAT mistake)
- `flatRateVat(gross, sectorRatePercent)` — UK Flat Rate Scheme VAT due on VAT-inclusive turnover

## Prefer a ready-made tool?
The same calculations run free in the browser at [RemoveVAT](https://removevat.com/) — add or remove VAT at any rate, compare the Flat Rate Scheme against standard VAT accounting, handle reverse charge, generate VAT invoices, check UK VAT numbers, or run many figures at once with [the RemoveVAT bulk calculator](https://removevat.com/bulk-vat-calculator/). No sign-up.

## Licence
Data and code: MIT. Corrections welcome via issues.
