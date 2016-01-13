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

var qd = ['V','X','S']

var charSet = ['0','1','2','3','4','5','6','7',
               '8','9','A','B','C','D','E','F',
               'G','H','I','J','K','L','M','N',
               'O','P','Q','R','S','T','U','V',
               'W','X','Y','Z','a','b','c','d',
               'e','f','g','h','i','j','k','l',
               'm','n','o','p','q','r','s','t',
               'u','v','w','x','y','z','#','-']



function generateTable(){
    /*
    var crId = 0;
    
    var table = document.createElement("table");
    
    //первую строку создаем отдельно
    //т.к. она отличается от остальных
    var row=document.createElement("tr");
    //это ячейка 0:0(пустая)
    var col=document.createElement("td");
    row.appendChild(col);

    //названия столбцов
    for(var j=0; j<HN.length; j++){
        var col=document.createElement("td");
        //делаем текст читабельным
        var s=HN[j];
        for( var l=s.length; 0<=l; l--){
            s=s.substring(0,l)+"\n"+s.slice(l);
        }
        s.toUpperCase();    
        col.innerHTML = s;
        
        col.style.verticalAlign="bottom";
        col.style.maxWidth="10px";
        col.style.minWidth="10px";
        col.style.paddingLeft="10px";
        col.style.paddingRight="10px";
        row.appendChild(col);
    }
    table.appendChild(row);
    
    for(var i=0; i<HN.length; i++){
        var row=document.createElement("tr");
        
        //это 0й столбец с названием героя
        //название строки таблицы
        var col=document.createElement("td");
        col.innerHTML = HN[i];
        col.innerHTML.toUpperCase();
        col.style.textAlign="left";
        col.style.maxHeight="10px";
        col.style.minHeight="10px";
        col.style.paddingTop="7px";
        col.style.paddingBottom="7px";
        row.appendChild(col);
 
        var  Patern = (document.getElementById("sid")).value;
        //console.log(Patern);
        //а это строки для остальных персонажей(пустые)
        for(var j=0; j<HN.length; j++){
            var col=document.createElement("td");
            
            
            //смотрим в шаблон
            if (Patern[crId]==1){
                col.innerHTML = "X";
            }
            
            //задание стиля и обработчика, если следует
            if (i==j) {
                col.style.backgroundColor="RGB(200,0,00)";
                col.innerHTML = "X";
            }else{
                col.onclick = Function("onRelClick("+(crId)+")");
                col.title = HN[i]+"\\"+HN[j];
                col.style.backgroundColor="RGB(150,150,150)";
                col.style.textAlign="center";
            }
            col.style.color = "black";
            col.id = crId++;
            row.appendChild(col);
        }
        
        table.appendChild(row);
        
    }
    var papa = document.getElementById("table-body");
    papa.appendChild(table);*/
    var crId = 0;
    
    var table = document.createElement("table");
    
    //первую строку создаем отдельно
    //т.к. она отличается от остальных
    var row=document.createElement("tr");
    //это ячейка 0:0(пустая)
    var col=document.createElement("td");
    row.appendChild(col);

    //названия столбцов
    for(var j=0; j<HN.length; j++){
        var col=document.createElement("td");
        //делаем текст читабельным
        var s=HN[j];
        for( var l=s.length; 0<=l; l--){
            s=s.substring(0,l)+"\n"+s.slice(l);
        }
        s.toUpperCase();    
        col.innerHTML = s;
        
        col.style.verticalAlign="bottom";
        col.style.maxWidth="10px";
        col.style.minWidth="10px";
        col.style.paddingLeft="10px";
        col.style.paddingRight="10px";
        row.appendChild(col);
    }
    table.appendChild(row);
    
    for(var i=0; i<HN.length; i++){
        var row=document.createElement("tr");
        
        //это 0й столбец с названием героя
        //название строки таблицы
        var col=document.createElement("td");
        col.innerHTML = HN[i];
        col.innerHTML.toUpperCase();
        col.style.textAlign="left";
        col.style.maxHeight="10px";
        col.style.minHeight="10px";
        col.style.paddingTop="7px";
        col.style.paddingBottom="7px";
        row.appendChild(col);
 
        var  Patern = (document.getElementById("sid")).value;
        //console.log(Patern);
        //а это строки для остальных персонажей(пустые)
        for(var j=0; j<HN.length; j++){
            var col=document.createElement("td");
            
            
            //смотрим в шаблон
            col.innerHTML = Patern[crId];
            
            //задание стиля и обработчика, если следует
            if (i==j) {
                col.style.backgroundColor="RGB(200,0,00)";
                col.innerHTML = "X";
            }else{
                col.onclick = Function("onRelClick("+(crId)+")");
                col.title = HN[i]+"\\"+HN[j];
                col.style.backgroundColor="RGB(150,150,150)";
                col.style.textAlign="center";
            }
            col.style.color = "black";
            col.id = crId++;
            row.appendChild(col);
        }
        
        table.appendChild(row);
        
    }
    var papa = document.getElementById("table-body");
    papa.appendChild(table);
}

function onRelClick(id){
    
    var dis = document.getElementById(id);
    
    var c = id%HN.length;
    var r = id/HN.length;
    r = r.toFixed();
    c = c.toFixed();
    //console.log(r);
    //var underDiagonal = (c>r);
    
    var nid = (c*HN.length)*1+r*1;
    console.log(nid);
    
    if (dis.innerHTML=="" || dis.innerHTML=='S' || dis.innerHTML=='o'){
        dis.innerHTML='V';
        document.getElementById(nid).innerHTML='X';
    }else if (dis.innerHTML=='V'){
        dis.innerHTML='X';
        document.getElementById(nid).innerHTML='V';
    }else if (dis.innerHTML=='X'){
        dis.innerHTML='S';
        document.getElementById(nid).innerHTML='S';
    }
    
}

function generateCode(){
    /*var papa = document.getElementById("table-body");
    var code2b = "";
    
    //формирование двухбитного числа
    for(var i=0; i<(HN.length*HN.length); i++){
        if ((document.getElementById(i)).innerHTML=="X") {
            code2b+="1";
        }else{
            code2b+="0";
        }
    }
    
    var result = document.getElementById("result");
    result.innerHTML = code2b;*/
    
    //var papa = document.getElementById("table-body");
    var code = "";
    
    //формирование строки
    for(var i=0; i<(HN.length*HN.length); i++){
        if (document.getElementById(i).innerHTML==''){
            code+='o';
        }else{
            code+= document.getElementById(i).innerHTML;
        }
    }
    
    var result = document.getElementById("result");
    result.innerHTML = code;
}

function viravnivanie(){
    var papa = document.getElementById("table-body");
    
     //формирование строки
    for(var i=0; i<(HN.length*HN.length); i++){
        var dis = document.getElementById(i);
        var c = i%HN.length;
        var r = i/HN.length;
        r = r.toFixed();
        c = c.toFixed();
        var nid = (c*HN.length)*1+r*1;
        if (dis.innerHTML=='X' && document.getElementById(nid).innerHTML!='V'   ){
            dis.innerHTML='V';
            document.getElementById(nid).innerHTML='X';
        }
    }
}