<template>
  <div class="container">
    <div class="dropdown">
      <a
        class="text-decoration-none text-light dropdown-toggle"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        خدمات ما
      </a>

      <div class="row dropdown-menu p-3" aria-labelledby="dropdownMenuButton">
        <ul
          class="list-group list-group-flush flex-fill list-group-horizontal"
          style="display: inline"
        >
          <li style="font-size: 1.5em">
            <a class="list-group-item" href="#">Action</a>
            <a class="list-group-item" href="#">Another action</a>
            <a class="list-group-item" href="#">hi else here</a>
          </li>
        </ul>
        <ul
          class="list-group flex-fill list-group-horizontal"
          style="display: inline"
        >
          <li style="font-size: 3.5em">
            <a class="list-group-item" href="#">Action</a>
            <a class="list-group-item" href="#">Another action</a>
            <a class="list-group-item" href="#">hi else here</a>
          </li>
        </ul>
        <ul
          class="list-group flex-fill list-group-horizontal"
          style="display: inline"
        >
          <li style="font-size: 1.5em">
            <a class="list-group-item" href="#">Action</a>
            <a class="list-group-item" href="#">Another action</a>
            <a class="list-group-item" href="#">hi else here</a>
          </li>
        </ul>
        <ul
          class="list-group flex-fill list-group-horizontal"
          style="display: inline"
        >
          <li style="font-size: 0.5em">
            <a class="list-group-item" href="#">Action</a>
            <a class="list-group-item" href="#">Another action</a>
            <a class="list-group-item" href="#">hi else here</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Main_menu",
};
</script>

<style>
.dropdown-menu {
  position: absolute;
  top: 100%;
  display: none;
  float: left;
  min-width: 300px;
  text-align: right;
}
.dropdown:hover > .dropdown-menu {
  display: block;
}

.dropdown > .dropdown-toggle:active {
  /*Without this, clicking will make it sticky*/
  /* بدون این تیکه کد کلیک روی منو باعث ماندگاریش میشود */
  pointer-events: none;
}

li {
  list-style: none;
}
li a:hover {
  color: #f44e55;
}
#dropdownMenuButton:hover {
  background-color: #f44e55;
  color: white;
}
</style>