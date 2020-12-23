<?php
include("conn.php");

$error="";
if(!isset($_COOKIE["lang"])){
    setcookie("lang", "ukr", time() + (86400 * 183), "/");
    header("Location:index.php?lang=1");
}

if($_COOKIE["lang"] == "ukr"&& $_GET["lang"] == null){
    header("Location:index.php?lang=1");
}
if($_COOKIE["lang"] == "rus"&& $_GET["lang"] == null){
    header("Location:index.php?lang=2");
}
if($_COOKIE["lang"] == "eng"&& $_GET["lang"] == null){
    header("Location:index.php?lang=3");
}

if( $_GET["lang"] == 1){
    setcookie("lang", "ukr", time() + (86400 * 183), "/");
}
if($_GET["lang"] == 2){
    setcookie("lang", "rus", time() + (86400 * 183), "/");
}
if($_GET["lang"] == 3){
    setcookie("lang", "eng", time() + (86400 * 183), "/");
}

if($_GET["lang"] == 1){
    $menu_mods = "Моди";
    $menu_indgames = "Інди-Ігри";
    $menu_arts = "Арти";
    $menu_library = "Бібліотека"; 
    $mo_header = "Ласкаво просимо до Memory Omega!";
    $mo_desc = "Memory Omega - це бібліотека фольклору початку XXI століття. Тут зібрані кращі роботи незалежних митців: Моди, інди-ігри, арти... ";
    $md_desc = "Не недооцінюйте модифікації! Деякі з них перетворюють ігри до невпізнання";
    $ig_desc = "Від простеньких, до тих, що змагаються з AAA-проектами";
    $arts_desc = "Від полотна и кисточок - до цифри і планшета!";
    $library_desc = "Фанфіки, оригинальні твори. Мэрі Сью вхід заборонено!";
    $mods_red = "Моди: Вибір редакції";
    $arts_red = "Арти: Вибір редакції";
    $tno_desc = "текст";
    $st_desc = "текст";
    $te_desc = "текст";
    $tr_desc = "текст";

}
if($_GET["lang"] == 2){
    $menu_mods = "Моды";
    $menu_indgames = "Инди-игры";
    $menu_arts = "Арты";
    $menu_library = "Библиотека"; 
    $mo_header = "Добро пожаловать на Memory Omega!";
    $mo_desc = "Memory Omega - это библиотека фольклора начала XXI века. Здесь собраны лучшие работы независимых творцов: Моды, инди-игры, арты... ";
    $md_desc = "Не недооценивайте модификации! Некоторые из них преображают игры до неузнаваемости";
    $ig_desc = "От простеньких, до соревнующихся с AAA-проектами";
    $arts_desc = "От холста и кисточек - к цифре и планшету!";
    $library_desc = "Фанфики, оригинальные произведения. Мэри Сью вход воспрещён!";
    $mods_red = "Моды: Выбор редакции";
    $arts_red = "Арты: Выбор редакции";
    $tno_desc = "The New Order: Last Days of Europe или в просторечии TNO — мод к четвертой части Hearts of Iron, успевший побывать в разработке для Виктории 2. Очередная альтернатива на тему «что, если бы Ось победила во Второй Мировой войне»? Если кратко, то предыстория такова — сперва Оси везло без перерыва...";
    $st_desc = "текст";
    $te_desc = "текст";
    $tr_desc = "текст";
}
if($_GET["lang"] == 3){
    $menu_mods = "Mods";
    $menu_indgames = "Indie-games";
    $menu_arts = "Arts";
    $menu_library = "Library"; 
    $mo_header = "Welcome to Memory Omega!";
    $mo_desc = "Memory Omega - it is a library of folklore of the early 21st century. Here are the best works of independent creators: Mods, indie games, arts ...";
    $md_desc = "Don't underestimate the modifications! Some of them transform games beyond recognition";
    $ig_desc = "From simple ones to competing with AAA projects";
    $arts_desc = "From canvas and brushes to digital and tablet!";
    $library_desc = "Fanfiction, original works. Mary Sue No Entry!";
    $mods_red = "Mods:Editor's Choice";
    $arts_red = "Arts:Editor's Choice";
    $tno_desc = "text";
    $st_desc = "Star Trek New Horizons is a community-driven project aiming to deliver an exceptional Star Trek game experience. This is a total conversion. Prepare to relive your favorite Episodes and movies, this mod will guide you through the entire canon Star Trek timeline, starting in the year 2150 with ENT era up to the year 2400 and beyond. Explore strange new worlds, meet new civilizations, research the unknown, form a new federation and prepare to fight the upcoming threats to the galaxy.";
    $te_desc = "This modification offers an alternative gameplay to Tiberian Wars involving many Tiberian Sun units which many CnC fans (like me) missing in vanilla CNC3 and add even new my made units which you can't find anywhere else. Story is quite the same like Tiberian Wars, but is all about what if GDI and Nod do not abandon technologies they have used in Tiberian Sun era and instead of that further developed them. But it's not only that, there are many visual, sound and balance changes which I want to see and hear in my mod, new sounds, new music, new effects (like blood and gore, new infantry deaths, new more realistic missile trails) and many more.";
    $tr_desc = "The main project for the last 14 years has been Empire at War Expanded: thrawn's Revenge, taking place in the Post-Endor period of the Star Wars galaxy, covering the collapse of the Empire after Endor through to the end of the war between the burgeoning New Republic and their peace treaty with the Imperial Remnant, although this timeline is being expanded into the Yuuzhan Vong War, Swarm War, and Second Galactic Civil War period and events...";
}
session_start();


if($_SERVER['REQUEST_METHOD'] == "POST" and isset($_POST['submit']))
{  
   $count=0;
   $data=mysqli_query($conn,"select * from users where name='$_POST[login]' && password='$_POST[password]'");
   $count=mysqli_num_rows($data);
   $row = mysqli_fetch_array($data);
   
   if($count==0)
   {
      $error= "Invalid username or password";
   }
   
else 
    
    
{
        
           $_SESSION["sname"]=$row["name"];
           header("Location:index.php");
           
}
   
}

 
?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Laba 3</title>
        <meta charset="utf-8">
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.1/css/all.css"
integrity="sha384-gfdkjb5BdAXd+lj+gudLWI+BXq4IuLW5IT+brZEZsLFm++aCMlF1V92rMkPaX4PP" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/css/flag-icon.min.css" integrity="sha512-Cv93isQdFwaKBV+Z4X8kaVBYWHST58Xb/jVOcV9aRsGSArZsgAnFIhMpDoMDcFNoUtday1hdjn0nGp3+KZyyFw==" crossorigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
            
            <header class="header">
                <div class="container">
                    <img src="images/Memory_Omega.png" class="logo" alt = "uwu">
                    <?php
                    if (!isset($_SESSION['sname'])) {
                    echo "<form  method='post' action='' style = 'text-align: right; font-family: Arial '><input name = 'login'><br><input name = 'password'><br><input type='submit' name='submit' value='LOGIN'><br><a href='registration.php' style = 'color:black; text-decoration: none; font-family: Arial'>Register</a></form>";
                   
                    }
                    else {
                        echo "<p style = 'text-align: right; font-family: Arial'>".$_SESSION['sname']."</p>";
                    }
                    ?>
                    <span class="flag-icon flag-icon-ua" onclick = "window.location.href = 'index.php?lang=1'"></span>
                    <span class="flag-icon flag-icon-ru" onclick = "window.location.href = 'index.php?lang=2'"></span>
                    <span class="flag-icon flag-icon-gb" onclick = "window.location.href = 'index.php?lang=3'"></span>
                </div>
                
            </header>

                <div class="menu menu-width">
                    <a href="mods.php"><?= $menu_mods ?></a>
                    <a href="1"><?= $menu_indgames ?></a>
                    <a href="1"><?= $menu_arts ?></a>
                    <a href="1"><?= $menu_library ?></a>
                </div>
                
                <main class="main-container">
                    
                    <div class="sidemenu">
                        <a href="#Omega"><i class="fas fa-info"></i></a>
                        <a href="#ChosenMods"><i class="lel fas fa-cogs"></i></a>
                        <a href="#ChosenArts"><i class="lel fas fa-palette"></i></a>
                    </div>
                    <div class= "parallaxed-bg"></div>
                    <div class= "content" id="Omega">
                        
                        <h3><?= $mo_header ?></h3>
                        <?= $mo_desc ?>
                        <br><br>
                        <div class="tab">
                            <button id = "mods_b" class="tablinks" onclick="openTab(event, 'Mods')"><?= $menu_mods ?></button>
                            <button class="tablinks" onclick="openTab(event, 'Indie-games')"><?= $menu_indgames ?></button>
                            <button class="tablinks" onclick="openTab(event, 'Arts')"><?= $menu_arts ?></button>
                            <button class="tablinks" onclick="openTab(event, 'Library')"><?= $menu_library ?></button>
                           
                            
                          </div>
                          <div id="Mods" class="tabcontent">
                            <h3><?= $menu_mods ?></h3>
                            <p><?= $md_desc ?></p>
                          </div>
                          
                          <div id="Indie-games" class="tabcontent">
                            <h3><?= $menu_indgames ?></h3>
                            <p><?= $ig_desc ?></p>
                          </div>
                          
                          <div id="Arts" class="tabcontent">
                            <h3><?= $menu_arts ?></h3>
                            <p><?= $arts_desc ?></p>
                          </div>

                          <div id="Library" class="tabcontent">
                            <h3><?= $menu_library ?></h3>
                            <p><?= $library_desc ?></p>
                          </div>
                          <script>
                            document.getElementById("mods_b").click();
                            
                            function openTab(evt, tabName) {

                                var i, tabcontent, tablinks;

                                tabcontent = document.getElementsByClassName("tabcontent");
                                for (i = 0; i < tabcontent.length; i++) {
                                    tabcontent[i].style.display = "none";
                                }

                                tablinks = document.getElementsByClassName("tablinks");
                                for (i = 0; i < tablinks.length; i++) {
                                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                                }

                                document.getElementById(tabName).style.display = "block";
                                evt.currentTarget.className += " active";
                            } 
                        </script>
                    </div>
                    <div class= "library_background"></div>
                    <div class= "content" id="ChosenMods">
                        
                        <h3><?= $mods_red ?></h3>
                        <div class="mods-grid">
                            <div class="mod-block" onclick="location.replace('tno.html')">
                                
                                <img src = "images/tno.jpg" class="mod-thumb" alt = "uwu">
                                <p class="mod-head">The New Order: The Last Days of Europe</p>
                                <p>
                                <?= $tno_desc ?>
                                </p>
                                <p>
                                <img class = "gameicon" src="images/hoiiv.png" alt="Hearts of Iron IV">
                                    <small>Hearts of Iron IV</small>
                                </p>
                                <div class="overlay">
                                    <div class="text">More...</div>
                                </div>
                            </div>
                                
                            <div class="mod-block" onclick="location.replace('stnh.html')">
                                <img src = "images/stnh.png" class="mod-thumb" alt = "uwu">
                                <p class="mod-head">Star Trek: New Horizons</p>
                                <p>
                                <?= $st_desc ?>
                                </p>
                                
                                <p>
                                    <img class = "gameicon" src="images/stellaris.png" alt="Stellaris">
                                        <small>Stellaris</small>
                                </p>
                                <div class="overlay">
                                    <div class="text">More...</div>
                                </div>
                            </div>
                                                    
                            <div class="mod-block" onclick="location.replace('te.html')">
                                <img src = "images/TE_Preview_Cabal_Announced.jpg" class="mod-thumb" alt = "uwu">
                                <p class="mod-head">Tiberium Essence</p>
                                <p>
                                <?= $te_desc ?>
                                </p>
                                <p>
                                    <img class = "gameicon" src="images/cc3.png" alt="C&C3:Tiberium Wars">
                                        <small>C&C3: Tiberium Wars</small>
                                </p>
                                <div class="overlay">
                                    <div class="text">More...</div>
                                </div>
                            </div>
    
                            <div class="mod-block" onclick="location.replace('tr.html')">
                                <img src = "images/tr.png" class="mod-thumb" alt = "uwu">
                                <p class="mod-head">Empire at War Expanded: Thrawn's Revenge: Imperial Civil War</p>
                                <p>
                                <?= $tr_desc ?>
                                </p>
                                <p>
                                    <img class = "gameicon" src="images/steaw.png" alt="C&C3:Tiberium Wars">
                                        <small>Star Wars: Empire at War: Forces of Corruption</small>
                                </p>
                                <div class="overlay">
                                    <div class="text">More...</div>
                                </div>
                            </div>
                            
                            
                        </div>
                        
                    </div>
                    <div class= "art_background"></div>
                    <div class= "content" id="ChosenArts">
                        
                        <h3><?= $arts_red ?></h3>
                        <div class="image-row"> 
                            <div class="image-column">
                              <img src="images/Map.png" style="width:100%" alt = "uwu">
                              <img src="images/death_star.png" style="width:100%" alt = "uwu">
                              
                            </div>
                            <div class="image-column">
                              <img src="images/StellBattle.png" style="width:100%" alt = "uwu">
                              <img src="images/coh.jpg" style="width:100%" alt = "uwu">
                              <img src="images/civa.png" style="width:100%" alt = "uwu">
                              
                            </div>  
                            <div class="image-column">
                              <img src="images/StarfleetShip.png" style="width:100%" alt = "uwu">
                              <img src="images/Cities_skylines.jpg" style="width:100%" alt = "uwu">
                              <img src="images/xcom.png" style="width:100%" alt = "uwu">
                              
                            </div>
                            
                          </div>
                            
                        
                    </div>
                    
                    <div class= "parallaxed-bg"></div>
                    
                    
                </main>
                <footer>
                    <link rel="stylesheet" href="style_buttons.css">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
            
            <div class="buwrapper">
                <ul>
                    <li><a href="https://uk-ua.facebook.com/" class="fa fa-facebook" aria-hidden="true"></a></li>
                    <li><a href="https://twitter.com/?lang=ru" class="fa fa-twitter" aria-hidden="true"></a></li>
                    <li><a href="https://www.instagram.com/?hl=ru" class="fa fa-instagram" aria-hidden="true"></a></li>
                    <li><a href="https://www.reddit.com/" class="fa fa-reddit" aria-hidden="true"></a></li>
                    <li><a href="pinterest.com" class="fa fa-pinterest" aria-hidden="true"></a></li>
                </ul>
            </div>
                </footer>
            
            
        
    </body>
</html>
