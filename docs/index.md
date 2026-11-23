# VAT Calculator Documentation

**To remove VAT from a price, divide by 1 + rate — never subtract the percentage.** At the UK's 20% rate, £120 ÷ 1.2 = £100 net + £20 VAT. Subtracting 20% gives £96, which is wrong by £4 on every £120.

## Formulas

- Remove VAT: net = gross ÷ (1 + rate). VAT = gross − net.
- Add VAT: gross = net × (1 + rate). VAT = net × rate.
- VAT inside a gross price: VAT = gross × rate ÷ (100 + rate). At 20% that is one sixth of the gross.

## UK rates (checked against GOV.UK)

Rate 20% standard — Most goods and services — Divide by 1.2 (to remove). Rate 5% reduced — Home energy, children's car seats — Divide by 1.05. Rate 0% zero-rated — Most food, children's clothes.

UK VAT registration threshold: £90,000 of taxable turnover in any rolling 12 months (since 1 April 2024).

## Worked example — bulk VAT (500 gross at 20%)

A price list totalling £500 gross at 20%: net = £500 ÷ 1.2 = £416.67, VAT = £83.33. Run a whole list at once with the bulk vat calculator at RemoveVAT — free, no sign-up: https://removevat.com/bulk-vat-calculator/

## Rates data

UK and EU standard and reduced rates plus the UK thresholds, as CSV and JSON, live in this repo (uk-eu-vat-rates). Corrections and issues welcome — rates change, and a wrong rate in a copied snippet propagates silently.

General information, not tax advice.
