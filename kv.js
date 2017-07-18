
function Kv() {

  this.compile = function( table ) {
    var get = "";
    var bd = table;
    var body = [];

    for( var y = 0; y < table.length; y++ ) {
      var key = bd[y][0];
      var val = bd[y][1];

       if ( isObject(val) )
         get += '      "'+key+'"' + "\n      { \n " + this.compile ( val.body )[0] + "      }\n";
        else {
          body += [ key, val ];
          get += '       "' + key + '"' + " " + '"' + val + '"\n'; // BUG: Херли он не хочет нехуя делать и отдает ""
        }
    }
    return [ get, body ];
  }


  this.parse = function( text ) {

    var kv = new Table;
    var tables = new Table;
    var current_table = kv;
    var last_lol = false;
    var last_key = "";

    text = text.split("\n");

    for( var y = 0; y < text.length; y++)
    {
      var type = 0;
      var k = "";
      var v = "";
    for( var i = 0; i < text[y].length; i++ )
    {
      var ch = text [y][i];

      if( ch == "/" && text[y][i+1] == "/")
        break;

      if( ch == '{' && v == "" && k != "" || last_lol == true || ch == '}' )
      {
        switch (ch) {
          case '{':
            var lol;
            if( k == "" )
              lol = last_key;
              else
               lol = k;

            var new_tbl = new Table;

            tables.set( lol, new_tbl );
            current_table.set( lol, new_tbl );
            current_table = new_tbl;

          break;
          case '}':

          var lol = tables.last();

          if( lol == undefined )
              lol = "";
              else
              lol = lol [0]

            tables.drop( lol );
            current_table = tables.last();

            if( current_table == undefined)
                current_table = kv;
              else current_table = current_table[1];
          break;
        }
      } // parse(' "kv" { \n "item_test" "lol" } ');
      else if( ch == '"')
            type += 0.5;
            else
            {
          switch ( type ) {
            case 0.5:
             k+= ch;
            break;

            case 1.5:
             v+= ch;
            break;
        }
      }
    }
    if( k != "" && v != "") {
      current_table.set( k, v );
    }

    if( k != "" && v == "") {
      last_lol = true;
    }
    else
    last_lol = false;

    last_key = k;
  }
  return kv;
 }
}

function print_body( table, body ) {

for( var y = 0; y < body.length; y++ )
{
  var row = table.insertRow(0);

  var key = body[y][0];
  var val = body[y][1];

    var cell2 = row.insertCell(0);
    cell2.innerHTML = body[y][1];

  var cell1 = row.insertCell(0);

  cell1.innerHTML = body[y][0];
  }
}
