//heroes names
//0 -str, 1 - agi, 2 -int
//
var Blya = [ 0,0,2,1,0,2,2,0,1,1,0,0,1,0,0,2,1,0,2,2,2,2,2,0,0,1,0,0,0,1,2,2,1,1,0,2,0,2,1,2,0,0,2,2,0,2,2,1,1,0,0,1,1,1,1,1,2,2,0,1,2,0,2,2,1,1,0,2,0,2,2,1,1,2,0,2,1,2,2,2,0,1,1,1,0,2,0,2,1,1,0,0,2,0,0,1,0,0,1,1,1,1,2,2,1,2,2,2,0,2];


var HN = [ "abaddon","alchemist","ancient_apparition",'antimage','axe','bane',
'batrider','beastmaster','bloodseeker','bounty_hunter','brewmaster',
'bristleback','broodmother','centaur_warruner','chaos_knight',
'chen','clinkz','clockwerk','crystal_maiden',
'dark_seer','dazzle','death_prophet','disruptor',
'doom','dragon_knight','drow_ranger','earthshaker',
'earth_spirit','elder_titan','ember_spirit','enchantress',
'enigma','faceless_void','gyrocopter','huskar',
'invoker','io','jakiro','juggernaut',
'keeper_of_the_light','kunkka','legion_commander','leshrac',
'lich','lifestealer','lina','lion',
'lone_druid','luna','lycan','magnus',
'medusa','meepo','mirana','morphling',
'naga_siren','furion','necrolyte','night_stalker',
'nyx_assassin','ogre_magi','omniknight','oracle',
'obsidian_destroyer','phantom_assassin',
'phantom_lancer','phoenix','puck','pudge',
'pugna','queen_of_pain','razor','riki',
'rubick','sand_king','shadow_demon','shadow_fiend',
'shadow_shaman','silencer','skywrath_mage','slardar',
'slark','sniper','spectre','spirit_breaker',
'storm_spirit','sven','techies','templar_assassin',
'terrorblade','tidehunter','timbersaw','tinker',
'tiny','treant','troll','tusk',
'undying','ursa','vengeful_spirit','venomancer',
'viper','visage','warlock','weaver',
'windranger','winter_wyvern','witch_doctor','wraith_king',
'zeus'];

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
        zoomHeroImage.title = HN[i];
        
        
        switch (Blya[i]){
                case 0:
                    document.getElementById("heroes-str").appendChild(hero);
                    break;
                case 1:
                    document.getElementById("heroes-agi").appendChild(hero);
                    break;
                case 2:
                    document.getElementById("heroes-int").appendChild(hero);
                    break;
        }
        //heroes.appendChild(hero);
        hero.appendChild(heroImage);
        hero.appendChild(zoomHeroImage);
       
    }
    
    refreshHeroRel();
}

function addToBan(id){
    //создаем большую иконку и добавляем персонажа в бан
    var bansTeg = document.getElementById("bansId");
    var n = 0;
    for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){
        n++;
        if (n>4) return;
        
        if (id==((i.id).slice(1))) {
            return;
        }
    
    }
    var img = document.createElement('img');
    
    img.src="heroes/"+HN[id]+"_hphover.png";
    img.className="banned-hero";
    img.id="b"+id;
    img.onclick = Function("delFromBan("+img.id+")");
    bansTeg.appendChild(img);
    
    // накладываем эффект недоступности на персонажа
    var bE = document.getElementById(id);
    bE.className = "hero-img-deleted";
    var bZE = bE.nextElementSibling;
    bZE.style.opacity = 0;
    
    refreshHeroRel();
}

function delFromBan(t){
    //удаляем персонажа с бана
    var el = document.getElementById(t.id);
    var par = el.parentNode;
    par.removeChild(el);
    
    // убираем эффект недоступности с героя
    var bE = document.getElementById((t.id).slice(1));
    bE.className = "hero-img";
    var bZE = bE.nextElementSibling;
    bZE.style.opacity = 1;
    
    refreshHeroRel();
}

function refreshHeroRel(){
    
    var bansTeg = document.getElementById("bansId");
    var code = (document.getElementById("code64")).innerHTML;
    
    //создаем список на 110 ячеек
    var arr = new Array(HN.length);
    //заполняем нулями
    for( var i=0; i<HN.length;i++){
        arr[i]=0;
    }
    
    //проходим по всем плохим(-5) и хорошим(+1) чарам
    //подходящие персонажи
    for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){
        
        var bId = ""+i.id;
        bId = bId.slice(1);
        
        // вычисляем степень рекомендованности на основе персонажа
        for(var j=(bId % HN.length); j<(HN.length*HN.length); j+=HN.length){
            
            switch (code[j]) {
                case 'V':
                    arr[(j-bId*1)/HN.length]++;
                    break;
                case 'S':
                    arr[(j-bId*1)/HN.length]--;
                    break;
                case 'X':
                    arr[(j-bId*1)/HN.length]-=2;
                    //console.log(arr[(j-bId*1)/HN.length]);

                    break;
                    
            }
        
        }
        
    }
    
    //удаляем лишнее
    for( var i=0; i<HN.length;i++){
        var hero = document.getElementById("r"+i);
        if (hero) {
            var par = hero.parentElement;
            par.removeChild(hero);
        }
    }
    
    //теперь распределяем персонажей по полкам
    var f = [0,0,0,0,0,0];
    
    for( var i=0; i<HN.length;i++){
        //
        var inBan = document.getElementById("b"+i);
        //console.log(inBan);
        if (inBan==null){
            if (arr[i]>0)
            {
                f[arr[i]-1]=1;
            }
            if (arr[i]<0)
            {
                f[5]=1;

                var hero = document.createElement("div");
                hero.className = "hero";
                hero.id = "r"+i;
                hero.onclick = Function("showRel(r"+i+")");
                var heroImage = document.createElement("img");
                heroImage.src = "heroes/"+HN[i]+"_sb.png";
                heroImage.title = HN[i];
                heroImage.className = "hero-img";
                hero.appendChild(heroImage);

                var par = document.getElementById("lvl6");
                par.appendChild(hero);
            }

            if (arr[i]>0){
                var hero = document.createElement("div");
                hero.className = "hero";
                hero.onclick = Function("showRel(r"+i+")");
                hero.id = "r"+i;
                var heroImage = document.createElement("img");
                heroImage.src = "heroes/"+HN[i]+"_sb.png";
                heroImage.title = HN[i];

                heroImage.className = "hero-img";
                hero.appendChild(heroImage);

                var par = document.getElementById("lvl"+arr[i]);
                par.appendChild(hero);
                //вставляем в нужный уровень
            }
        }
        
    }
    
    //прячем ненужные слои в рекомендациях
    for (var i=0; i<6; i++){
        var sloy = document.getElementById("lvl"+(i+1));
        //console.log((i+1)+"="+f[i]);
        if (f[i]==1) sloy.style.display = "block"
        else sloy.style.display = "none";
    }
    
    
    
    
}

var currRecRel = -1;

function showRel(t){
    // id тега без 1го знака "r"
    var id = (t.id).slice(1);
    var bansTeg = document.getElementById("bansId");
    var code = (document.getElementById("code64")).innerHTML;
    
    if (id == currRecRel ) {
        currRecRel=-1;
        t.firstElementChild.className = "hero-img";
        
        // возвращаем прозрачность банов в норму
        for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling)
        {
            i.className = "banned-hero";
        }
        
        console.log("t");
    }else{
        if (document.getElementById('r'+currRecRel) != null) {
            console.log(currRecRel);
            var chistim = (document.getElementById('r'+currRecRel)).firstElementChild;
            chistim.className = "hero-img";
        }
        
        currRecRel = id;
        
        t.firstElementChild.className="hero-img-selected";
        
        
        
        for( var i=bansTeg.firstElementChild; i!=null; i = i.nextSibling){

            var bId = ""+i.id;
            bId = bId.slice(1);
            //console.log("bid="+bId);
            //console.log("id="+id);
            var j = HN.length*(id*1)+parseInt(bId);

            //console.log("j="+j);
            //console.log("code[j]="+code[j]);
            switch (code[j]) {
                    case 'V':
                        i.className = "banned-hero-recomend";
                        
                    break;
                    case 'S':
                        i.className = "banned-hero-situational";
                        break;
                    case 'X':
                        i.className = "banned-hero-unwanted";
                        break;
                    case 'o':
                        i.className = "banned-hero-neutral";
                        break;

                }
        }

    }

}
