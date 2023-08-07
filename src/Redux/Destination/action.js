export const setParty = (with_who) => ({
  type: "SET_PARTY",
  payload: with_who,
});

export const setAge = (age) => ({
  type: "SET_AGE",
  payload: age,
});

export const setThemes = (themes) => ({
  type: "SET_THEMES",
  payload: themes,
});

export const setBeginPeriod = (beginPeriod) => ({
  type: "SET_BEGIN_PERIOD",
  payload: beginPeriod,
});

export const setEndPeriod = (EndPeriod) => ({
  type: "SET_END_PERIOD",
  payload: EndPeriod,
});
