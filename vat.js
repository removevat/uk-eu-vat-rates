// RemoveVAT — tiny add/remove VAT helpers (MIT). https://removevat.com/
function addVat(net, ratePercent) {
  return round2(net * (1 + ratePercent / 100));
}
function removeVat(gross, ratePercent) {
  const net = gross / (1 + ratePercent / 100);
  return { net: round2(net), vat: round2(gross - net) };
}
function flatRateVat(grossTurnover, sectorRatePercent) {
  return round2(grossTurnover * (sectorRatePercent / 100));
}
function round2(n) { return Math.round(n * 100) / 100; }
module.exports = { addVat, removeVat, flatRateVat };
