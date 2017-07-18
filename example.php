<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>KV.JS Editor</title>
</head>
<body>

  <link rel="stylesheet" href="core.css">
  <script src="table.js" charset="utf-8"></script>
  <script src="kv.js" charset="utf-8"></script>

  <script type="text/javascript">
  function attempt_parse() {
    var keys = new Kv;
    var lol = keys.parse( lolz.value );

    lol.multi( ["AbilityCooldown", "AbilityManaCost", "AbilityBehavior", "AbilityUnitTargetType", "AbilityCastRange", "AbilityDuration", "ID", "MaxLevel", "ItemCost", "AbilityCastPoint"], 25 );

    var kek = keys.compile( lol.body );

    // console.log( lol );

    lolz.value = kek;


  }
  </script>

  <textarea id="lolz" rows="50" cols="160">
	"lina_dragon_slave"
	{
		"ID"					"5040"
		"AbilityBehavior"				"DOTA_ABILITY_BEHAVIOR_UNIT_TARGET | DOTA_ABILITY_BEHAVIOR_POINT"
		"AbilityUnitTargetTeam"			"DOTA_UNIT_TARGET_TEAM_ENEMY"
		"AbilityUnitTargetType"			"DOTA_UNIT_TARGET_HERO | DOTA_UNIT_TARGET_BASIC"
		"AbilityUnitDamageType"			"DAMAGE_TYPE_MAGICAL"
		"SpellImmunityType"				"SPELL_IMMUNITY_ENEMIES_NO"
		"FightRecapLevel"				"1"
		"AbilitySound"					"Hero_Lina.DragonSlave"
		"AbilityCastRange"				"1075"
		"AbilityCastPoint"				"0.45 0.45 0.45 0.45"
		"AbilityCooldown"				"8.0"
		"AbilityDuration"				"0.6875 0.6875 0.6875 0.6875"
		"AbilityDamage"					"85 160 235 310"
		"AbilityManaCost"				"100 115 130 145"
		"AbilitySpecial"
		{
			"01"
			{
				"var_type"					"FIELD_INTEGER"
				"dragon_slave_speed"		"1200"
			}

			"02"
			{
				"var_type"					"FIELD_INTEGER"
				"dragon_slave_width_initial"	"275"
			}
			"03"
			{
				"var_type"					"FIELD_INTEGER"
				"dragon_slave_width_end"		"200"
			}

			"04"
			{
				"var_type"					"FIELD_INTEGER"
				"dragon_slave_distance"			"1075"
			}
		}
	}</textarea>
  <button type="button" onclick="attempt_parse()" name="button">Parse</button>
  <table id="output" border="1">

  </table>

</body>
</html>
