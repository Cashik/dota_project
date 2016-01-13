//heroes names
var HN = [ "abaddon",
"alchemist",
"ancient_apparition",
'antimage',
'axe',
'bane',
'batrider',
'beastmaster',
'bloodseeker',
'bounty_hunter',
'brewmaster',
'bristleback',
'broodmother',
'centaur_warruner',
'chaos_knight',
'chen',
'clinkz',
'clockwerk',
'crystal_maiden',
'dark_seer',
'dazzle',
'death_prophet',
'disruptor',
'doom',
'dragon_knight',
'drow_ranger',
'earthshaker',
'earth_spirit',
'elder_titan',
'ember_spirit',
'enchantress',
'enigma',
'faceless_void',
'gyrocopter',
'huskar',
'invoker',
'io',
'jakiro',
'juggernaut',
'keeper_of_the_light',
'kunkka',
'legion_commander',
'leshrac',
'lich',
'lifestealer',
'lina',
'lion',
'lone_druid',
'luna',
'lycan',
'magnus',
'medusa',
'meepo',
'mirana',
'morphling',
'naga_siren',
'furion',
'necrolyte',
'night_stalker',
'nyx_assassin',
'ogre_magi',
'omniknight',
'oracle',
'obsidian_destroyer',
'phantom_assassin',
'phantom_lancer',
'phoenix',
'puck',
'pudge',
'pugna',
'queen_of_pain',
'razor',
'riki',
'rubick',
'sand_king',
'shadow_demon',
'shadow_fiend',
'shadow_shaman',
'silencer',
'skywrath_mage',
'slardar',
'slark',
'sniper',
'spectre',
'spirit_breaker',
'storm_spirit',
'sven',
'techies',
'templar_assassin',
'terrorblade',
'tidehunter',
'timbersaw',
'tinker',
'tiny',
'treant',
'troll',
'tusk',
'undying',
'ursa',
'vengeful_spirit',
'venomancer',
'viper',
'visage',
'warlock',
'weaver',
'windranger',
'winter_wyvern',
'witch_doctor',
'wraith_king',
'zeus']


var charSet = ['0','1','2','3','4','5','6','7',
               '8','9','A','B','C','D','E','F',
               'G','H','I','J','K','L','M','N',
               'O','P','Q','R','S','T','U','V',
               'W','X','Y','Z','a','b','c','d',
               'e','f','g','h','i','j','k','l',
               'm','n','o','p','q','r','s','t',
               'u','v','w','x','y','z','#','-']

    
window.onload = function createTavern(){
    //заполнение таверны иконкоми персонажей
     

    var heroes = document.getElementById("heroes");
    
    for(var i=0; i<HN.length; i++){
        var hero = document.createElement("div");
        hero.className = "hero";
        hero.onclick = Function("addToBan("+i+")");
        var heroImage = document.createElement("img");
        heroImage.src = "heroes/"+HN[i]+"_sb.png";
        heroImage.id = ""+i;
        heroImage.className = "hero-img";
        var zoomHeroImage = document.createElement("img");
        zoomHeroImage.className = "hero-zoom";
        zoomHeroImage.src = "heroes/"+HN[i]+"_hphover.png";
        
        heroes.appendChild(hero);
        hero.appendChild(heroImage);
        hero.appendChild(zoomHeroImage);
       
    }
    
    refreshHeroRel();
}

function addToBan(id){
    var bansTeg = document.getElementById("bansId");
    for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){
        if (id==((i.id).slice(1))) {
            
            return;
        }
    }
    var img = document.createElement('img');
    
    img.src="heroes/"+HN[id]+"_hphover.png";
    img.className="banned-hero";
    img.id="b"+id;
    img.onclick = Function("delFromBan("+img.id+")");
    bansId.appendChild(img);
    
    refreshHeroRel();
}

function delFromBan(id){
    
    var el = document.getElementById(id.id);
    var par = el.parentNode;
    par.removeChild(el);
    
    refreshHeroRel();
}

function refreshHeroRel(){
    
    var bansTeg = document.getElementById("bansId");
    var code = (document.getElementById("code64")).innerHTML;
    
    console.log(code);
    //console.log(b.nextSibling);
    
    //xистиим
    for( var i=0; i<HN.length;i++){
        var el = document.getElementById(""+i);
        el.style.boxShadow = "0px 0px 0px 0px white";
        el.style.border = "1px solid white";
        el = el.nextElementSibling;
        el.style.boxShadow = "0px 0px 14px 0px white";
        el.style.border = "1px solid white";
    }
    
    //подходящие персонажи
    for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){
        
        var bId = ""+i.id;
        bId = bId.slice(1);
        //console.log(bId);
        
        for(var j=(bId % HN.length); j<(HN.length*HN.length); j+=HN.length){
            
            if (code[j]=="V") {
                var el = document.getElementById(((j-bId*1)/HN.length));
                el.style.boxShadow = "0px 0px 15px 0px green";
                el.style.border = "1px solid green"
                el = el.nextElementSibling;
                el.style.boxShadow = "0px 0px 15px 0px green";
                el.style.border = "1px solid green"
            }
        
        }
    }
    
    // помечаем ненужных персонажей
    for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){
        
        var bId = ""+i.id;
        bId = bId.slice(1);
        //console.log(bId);
        
        
        for(var j=bId*HN.length;j<(1+bId*1)*HN.length; j++){
            
            if (code[j]=="V") {
                //console.log((j-bId*HN.length));
                var el = document.getElementById((j-bId*HN.length));
                el.style.boxShadow = "0px 0px 15px 0px red";
                el.style.border = "1px solid red";
                el = el.nextElementSibling;
                el.style.boxShadow = "0px 0px 20px 0px red";
                el.style.border = "1px solid red"
            }

        }
        
    }
}
