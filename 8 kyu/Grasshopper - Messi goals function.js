function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}
//////////or
function goals(laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
  return [...arguments].reduce((acc, el) => acc + el, 0);
}
