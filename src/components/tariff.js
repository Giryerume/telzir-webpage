var values = [
  { 'origin': 11, 'destiny': 16, 'cost': 1.90 },
  { 'origin': 16, 'destiny': 11, 'cost': 2.90 },
  { 'origin': 11, 'destiny': 17, 'cost': 1.70 },
  { 'origin': 17, 'destiny': 11, 'cost': 2.70 },
  { 'origin': 11, 'destiny': 18, 'cost': 0.90 },
  { 'origin': 18, 'destiny': 11, 'cost': 1.90 }
];

function TariffPerMinute(origin, destiny) {
  var cost = 0;

  for (var i = 0; i < values.length; i++) {
    if (values[i]['origin'] === origin) {
      if (values[i]['destiny'] === destiny) {
        return values[i]['cost'];
      }
      cost += values[i]['cost'];
    } else {
      if (values[i]['destiny'] === destiny) {
        cost += values[i]['cost'];
      }
    }
  }
  return cost;
}

export function WithFaleMais(origin, destiny, minutes, plan) {
  if (minutes <= plan) {
    return 0;
  }
  var tax = TariffPerMinute(origin, destiny) * (minutes - plan);
  return tax + (tax * 10) / 100;
}

export function WithoutFaleMais(origin, destiny, minutes) {
  return TariffPerMinute(origin, destiny) * (minutes);
}

console.log(WithFaleMais(11, 16, 20, 30))