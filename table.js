
function Table() {

    var id;
    var tab = new Array();


  this.get = function( key ) {

    var ret = undefined;

    for( var i = 0; i < tab.length; i++ )
    {
        if( tab[i][0] == key )
        {
          ret = tab[i][1];
          break;
        }
    }
    return ret;
  }

  this.set = function( key, value ) {
    var can = true;

    for( var i = 0; i < tab.length; i++ )
    {
      if( tab[i][0] == key )
      {
        tab[i][1] = value;
        can = false;
        break;
      }
    }
    if( can == true )
      tab.push ( [key, value] );
  }

  this.drop = function( key ) {
    for( var i = 0; i < tab.length; i++ )
    {
      if( tab[i][0] == key )
      {
        tab.splice( i, 1 );
      }
    }
  }

  this.length = function(){
    return tab.length;
  };

  this.body = tab;

  this.last = function() {
    return tab.slice(-1).pop();
  };

  this.replace = function( what, replace ) {
    for( var y = 0; y < tab.length; y++ ) {
      if( tab[y][0] == what )
          tab[y][1] = replace;

      if( isObject( tab[y][1] )  )
          tab[y][1].replace( what, replace );
    }
  }

  this.multi = function( what, multi ) {

    for( var y = 0; y < tab.length; y++ ) {
      // if( isObject(tab[y][1] ) )
      //   console.log( tab[y][1].body[0] );

      var can = true;
      var text = "";
      for( var k = 0; k < what.length; k++ ) {
        if( tab[y][0] == what[k] ) {
          can = false;
        }
      }

        if( can == true ){

          if( !isObject( tab[y][1] ) ) {
            tab[y][1] += "";
            var spl = tab[y][1].split(" ");
          }
           else spl = [ tab[y][1] ];

          if( spl.length != 1 )
          {
            for( var i = 0; i < spl.length; i++ ) {
              var v = spl[i] * multi;
              if( !isNaN( v ) )
                text += " " + v;
              }
              tab[y][1] = text;
            }
           else {
            var v = tab[y][1] * multi;
            if( !isNaN( parseInt( tab[y][1] ) ) ) {
              tab[y][1] = v;
            }
            }

        if( isObject( tab[y][1] )  )
            tab[y][1].multi( what, multi );
      }
    }
  }

  this.multi_reverse = function( what, multi ) {
    for( var y = 0; y < tab.length; y++ ) {
      for( var k = 0; k < what.length; k++ ) {
        // if( tab[y][0] == what[k] ) {
            var v = tab[y][1] * multi;
            if( !Number.isNaN( v ) )
              tab[y][1] = v;
          // }
      }
      if( isObject( tab[y][1] )  )
      tab[y][1].multi( what, multi );
    }
  }
}

function isObject(val) {
    return val instanceof Object;
}
