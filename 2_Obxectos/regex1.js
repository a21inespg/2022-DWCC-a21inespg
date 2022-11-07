"use strict";

verify(/ca[tr]/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(
  /ferr(et|y|ari)/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);
verify(
  /\b\w*ious\b/,
  // /.*ious\b/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// e. Un espazo seguido de punto, como, dous puntos ou punto e coma.
verify(/\s[.,;:]/, ["bad punctuation ."], ["escape the period"]);

// f. Unha palabra con máis de 6 letras.
verify(
  /[a-z]{6,}/i,
  ["Siebentausenddreihundertzweiundzwanzig"],
  ["no", "three small words"]
);

// g. Unha palabra sen a letra e (ou E).
verify(
  /\b[a-df-z]+\b/i,
  // /\b([^e ]+)\b/i,
  [("red platypus", "wobbling nest")],
  ["earth bed", "learning ape", "BEET"]
);

function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes)
    if (!regexp.test(str)) {
      console.log(`Failure to match '${str}'`);
    }
  for (let str of no)
    if (regexp.test(str)) {
      console.log(`Unexpected match for '${str}'`);
    }
}
