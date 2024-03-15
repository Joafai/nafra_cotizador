<header>
  <a href="../index.php" target="_blanc"><img src="../assets/img/logo_nafra.png" height="50px" alt=""></a>
  <nav class="navbar navbar-expand navbar-light bg-light">
    <div class="collapse navbar-collapse text-uppercase" id="navbarTogglerDemo02">
      <ul class="nav navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="/index.php">Inicio <span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="novedades.php">Novedades <span class="sr-only"></span></a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="novedad_nueva.php">Agregar nueva <span class="sr-only"></span></a>
        </li>

       

        <li><?php echo $_SESSION['name'];
            $_SERVER['start']; ?><a class="btn mt-1" href="logout.php"><i class=" text-secondary fas fa-sign-out-alt"></i></a>
        </li>
      </ul>
  </nav>

</header>