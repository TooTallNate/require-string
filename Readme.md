
# require-string

  Turns an arbitrary String into a CommonJS compatible module.

  So this:

``` css
.wat {
  color: red;
}

div i {
  color: blue;
}
```

  Turns into this:

``` js
module.exports = function(){
  return ".wat {\n  color: red;\n}\n\ndiv i {\n  color: blue;\n}\n";
};
```

## Installation

  Install with [component(1)](http://component.io):

    $ component install TooTallNate/require-string

## API

### requireString(String str) → String


## License

  MIT
