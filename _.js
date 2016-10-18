function (ctx, a) {

  let

    lib = #s.scripts.lib(),

    _ = {

      // LIBRARY
      $ () {
        return lib
      },

      // CUSTOM
      l (o) { // length of object
        return o.length;
      },
      sec_name (l) {
        return ["NULLSEC", "LOWSEC", "MIDSEC", "HIGHSEC", "FULLSEC"][l]

      },
      sec_names () {
        return ["NULLSEC", "LOWSEC", "MIDSEC", "HIGHSEC", "FULLSEC"]
      },
      author (n) { // name of script
        return n.split(".")[0];
      },
      add_color (c, s) { // color_code/sec_level, str
        if (typeof c == 'number') c = "dDFJL".split("")[c]
        return `\`${c}${s}\``
      },
      primes () {
        return "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97".split(" ")
      },
      allsec () {
        return [ #s.scripts.nullsec(),
                 #s.scripts.lowsec(),
                 #s.scripts.midsec(),
                 #s.scripts.highsec(),
                 #s.scripts.fullsec() ]
      },
      verify (n) { // name_of_script
        let l = #s.scripts.get_level({name:n}),
            a = #s.scripts.get_access_level({name:n})
        return {l:l, a:a}
      },
      success (m) {
        return {ok:true, msg:m}
      },
      failure (m) {
        return {ok:false, msg:m}
      },

      // CHATS.___
      send (c, m) { // channel, msg
        return #s.chats.send({channel:c, msg:m})
      },
      tell (t, m) { // to, msg
        return #s.chats.tell({to:t, msg:m})
      },

      // SCRIPTS.___
      trust () {
        return #s.scripts.trust()
      },
      fullsec () {
        return #s.scripts.fullsec()
      },
      highsec () {
        return #s.scripts.highsec()
      },
      midsec () {
        return #s.scripts.midsec()
      },
      lowsec () {
        return #s.scripts.lowsec()
      },
      nullsec () {
        return #s.scripts.nullsec()
      },
      get_access (n) {
        return #s.scripts.get_access_level({name:n})
      },
      get_level (n) {
        return #s.scripts.get_level({name:n})
      }

    }

  return _
}
