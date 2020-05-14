<script>
  export let segment
  let isopen = false
  function togglenav() {
    isopen = !isopen
  }
</script>

<nav class="navbar is-primary" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a href="/" class="navbar-item">
      <img src="logo.jpg" alt="virus covid " />
    </a>
    <span
      class="navbar-burger"
      class:is-active={isopen}
      on:click={togglenav}
      aria-label="menu"
      aria-expanded="false">
      <span aria-hidden="true" />
      <span aria-hidden="true" />
      <span aria-hidden="true" />
    </span>
  </div>
  <div class="navbar-menu" class:is-active={isopen}>
    <div class="navbar-start">
      <a href="/" class="navbar-item" class:is-active={segment === undefined}>
        Rumah
      </a>
      <a
        href="/about"
        class="navbar-item"
        class:is-active={segment === 'about'}>
        About
      </a>
    </div>
  </div>
</nav>
