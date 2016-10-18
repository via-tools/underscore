# underscore
Get scriptors out of your way.

## Usage
### Example Chat Script
```js
function (ctx, args) { // msg:"Hello", color:"S", channel:"0000"

  let
    _ = #s.tools._(),                 // tools library
    m = _.color(args.color, args.msg) // custom tools function
  ;

  return _.send(args.channel, m);     // #s.chats.send shorthand

}
```
### Example Output Logger
```js
function (ctx, a) {

  let
    _ = #s. tools._(), // tools library
    $ = _.$()          // #s.scripts.lib() shorthand
  ;

  $.log($.get_security_level_name(_.level(ctx.this_script)));   \/\/ Directly call scripts.lib functions

  return $.get_log();

}
```

## How It Works

"tools.underscore" hosts fullsec scriptors and common useful functions
used throughout other tools scripts. It is meant to be used
in addition to #s.scripts.lib to help minify your code and focus
on your idea.

Here is a list of all currently supported scriptors and functions.

let _ = {
  $ () {
    return #s.scripts.lib();
  },
  color (color_code, str) {
    return \`\\\`\${color_code}\${str}\\\`\`;
  },
  send (channel, msg) {
    return #s. chats.send({channel:channel, msg:msg})
  },
  tell (to, msg) {
    return #s. chats.tell({to:to, msg:msg})
  },
  trust () {
    return #s. scripts.trust()
  },
  fullsec () {
    return #s. scripts.fullsec()
  },
  highsec (){
    return #s. scripts.highsec()
  },
  midsec (){
    return #s. scripts.midsec()
  },
  lowsec (){
    return #s. scripts.lowsec()
  },
  nullsec (){
    return #s. scripts.nullsec()
  },
  access_level (name) {
    return #s. scripts.get_access_level({name:name})
  },
  level (name) {
    return #s. scripts.get_level({name:name})
  }
}

## Feature Addition

Got a fullsec scriptor you use frequently? chats.tell { to:"tools", "tools.lib request" }
