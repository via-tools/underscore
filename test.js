function (ctx, a) {

  const _ = #s.tools._(), $ = _.$();

  $.log($);
  $.log(_.sec_name(4));
  $.log(_.sec_names());
  $.log(_.author(ctx.this_script));

  $.log(_.add_color("W", "Hello"));
  $.log(_.add_color(4, "FULLSEC"));
  $.log(_.primes());
  // $.log(_.allsec());
  $.log(_.verify(ctx.this_script));
  $.log(_.success("It worked"));
  $.log(_.failure("It failed"));

  $.log(_.send("tools", "Hello"));
  $.log(_.tell("tools", "Hello"));

  let f = _.fullsec();
  for (let i = 0; i < _.l(f); i++) {
    $.log(f[i])
  }

  return $.get_log();

}
