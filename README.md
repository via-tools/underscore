# tools.\_
Get scriptors out of your way.

## Usage
### Example Chat Script
```js
function (ctx, args) { // msg:"Hello", color:"S", channel:"0000"

  let
    _ = #s.tools._(),                 // tools library
    m = _.add_color(args.color, args.msg) // custom tools function
  ;

  return _.send(args.channel, m);     // #s.chats.send shorthand

}
```
### Example Output Logger
```js
function (ctx, a) {

  let
    _ = #s.tools._(),  // initialize 'underscore'
    $ = _.$()          // #s.scripts.lib() shorthand
  ;

  $.log(_.sec_name(_.get_level(ctx.this_script)));   // Directly call scripts.lib functions

  return $.get_log();

}
```

## How It Works

"tools.underscore" hosts fullsec scriptors and common useful functions
used throughout other tools scripts. It is meant to help you reduce character 
count and stay focused on your idea.

You can view \_.js to see every available method and their implementations.

## Feature Addition

Got a fullsec scriptor or a handy function you use frequently?
chats.tell { to:"tools", msg:"tools.lib request" }
