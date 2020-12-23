<?php 
session_start();
if (!isset($_SESSION['sname'])) {
    header("Location:mods.php");
   
}
if(!isset($_COOKIE["lang"])){
    setcookie("lang", "ukr", time() + (86400 * 183), "/");
    header("Location:mods.php?lang=1");
}

if($_COOKIE["lang"] == "ukr"&& $_GET["lang"] == null){
    header("Location:mods.php?lang=1");
}
if($_COOKIE["lang"] == "rus"&& $_GET["lang"] == null){
    header("Location:mods.php?lang=2");
}
if($_COOKIE["lang"] == "eng"&& $_GET["lang"] == null){
    header("Location:mods.php?lang=3");
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
    $mods_title = "Список модів";
    $name = "Назва";
    $desc = "Опис";
    $game = "Гра";
    $file = "Файл";
    $loaded = "Завантажено";
    $send = "Відправити";
    $menu_mods = "Моди";
    $menu_indgames = "Інди-Ігри";
    $menu_arts = "Арти";
    $menu_library = "Бібліотека"; 
}
if($_GET["lang"] == 2){
    $mods_title = "Список модов";
    $name = "Название";
    $desc = "Описание";
    $game = "Игра";
    $file = "Файл";
    $loaded = "Загружено";
    $send = "Отправить";
    $menu_mods = "Моды";
    $menu_indgames = "Инди-игры";
    $menu_arts = "Арты";
    $menu_library = "Библиотека";
}
if($_GET["lang"] == 3){
    $mods_title = "List of mods";
    $name = "Name";
    $desc = "Desc";
    $game = "Game";
    $file = "File";
    $loaded = "Loaded by";
    $send = "Send";
    $menu_mods = "Mods";
    $menu_indgames = "Indie-games";
    $menu_arts = "Arts";
    $menu_library = "Library"; 
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
        <script
			  src="https://code.jquery.com/jquery-3.5.1.js"
			  integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
              crossorigin="anonymous"></script>
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
                    <span class="flag-icon flag-icon-ua" onclick = "window.location.href = 'mods.php?lang=1'"></span>
                    <span class="flag-icon flag-icon-ru" onclick = "window.location.href = 'mods.php?lang=2'"></span>
                    <span class="flag-icon flag-icon-gb" onclick = "window.location.href = 'mods.php?lang=3'"></span>
                </div>
                
            </header>

                <div class="menu menu-width">
                    <a href="mods.php"><?= $menu_mods ?></a>
                    <a href="games.php"><?= $menu_indgames ?></a>
                    <a href="arts.php"><?= $menu_arts ?></a>
                    <a href="library.php"><?= $menu_library ?></a>
                </div>
                
                <main class="main-container">
                    
                   
                    <div class= "parallaxed-bg"></div>
                    <div class= "content" id="Omega">
                        <h3><?= $mods_title ?></h3>
                        <div id = "modlist">
                        
                        
                        </div>
                        <form id = "form" action = "" method = "POST">
                        <?= $name ?>: <input name = "name"><br>
                        <?= $desc ?>: <textarea name = "description"></textarea><br>
                        <?= $game ?>: <input name = "game"><br>
                        <?= $file ?>: <input name="file"><br>
                            <input type = "submit" name = "submit" value = "<?= $send?>">
                        </form>

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
            
            
                <script type="text/javascript">
                                       
    $(document).ready( function() { 
        $('#modlist').load('load_mods.php'); 

        $("form").submit(function(event) {
            var data = $('form').serialize();
            event.preventDefault();
            $.ajax({
                type: "POST",
                url: "insert.php",
                data:data

            }).done(function( msg ) {
                $('#modlist').load('load_mods.php');
            });
        });
    }); 
     
</script> 
    </body>
</html>
