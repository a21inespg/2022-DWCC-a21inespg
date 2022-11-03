"use strict";

verify(/ca(t|r)/, ["my car", "bad cats"], ["camper", "high art"]);
verify(/pr?op/, ["pop culture", "mad props"], ["plop", "prrrop"]);
verify(
  /^ferr(et|y|ari)$/,
  ["ferret", "ferry", "ferrari"],
  ["ferrum", "transfer A"]
);
verify(
  /\Bious$/,
  ["how delicious", "spacious room"],
  ["ruinous", "consciousness"]
);

// e. Un espazo seguido de punto, como, dous puntos ou punto e coma.
verify(/\b(.|;|:)/, ["bad punctuation ."], ["escape the period"]);

// f. Unha palabra con máis de 6 letras.
// g. Unha palabra sen a letra e (ou E).
// verify(/.../, ["how delicious", "spacious room"], ["ruinous", "consciousness"]);

// verify(
//   /.../,
//   ["Siebentausenddreihundertzweiundzwanzig"],
//   ["no", "three small words"]
// );
// verify(
//   /.../,
//   ["red platypus", "wobbling nest"],
//   ["earth bed", "learning ape", "BEET"]
// );

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
