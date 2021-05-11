<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">e-Care</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="/loginuser">Login </a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="jumbotron">
      <div class="container ">
        <br /><br /><br /><br /><br />
        <h1 class="display-3">Get Started!</h1>
        <br /><br />
        <p>Know what has changed.</p>
        <br /><br />
        <router-link
          to="/newuser"
          class="btn btn-primary btn-lg"
          href="#"
          role="button"
          >New here! Please sign up &raquo;</router-link
        ><br />
      </div>
    </div>
  </div>
</template>
