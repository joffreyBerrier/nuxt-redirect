<template>
  <div>
    Hello World!

    <h2>Client side mode using "router-link"</h2>
    <p>-
      <router-link to="redirect-in">redirect to in async</router-link>
    </p>
    <p>-
      <router-link to="redirect-outside">redirect to outside async</router-link>
    </p>
    <p>-
      <router-link to="redirect-middleware">redirect with middleware</router-link>
    </p>
    <p>-
      <router-link to="redirect-server">redirect on server-side</router-link>
    </p>


    <h2>Server side mode using "a"</h2>
    <p>
      - <a href="/redirect-in">redirect to in async</a>
    </p>
    <p>
      - <a href="/redirect-outside">redirect to outside async</a>
    </p>
    <p>
      - <a href="/redirect-middleware">redirect with middleware</a>
    </p>
    <p>
      - <a href="/redirect-server">redirect on server-side</a>
    </p>

    <p class="bold">You show this error :</p>
    <pre>"Cannot read properties of null (reading 'title')""</pre>
  </div>
</template>

<style>
body {
  padding: 12px;
}
h2 {
  font-size: 20px;
  font-weight: bold;
}
p {
  margin: 8px 0;
  font-weight: 500;
}
.bold {
  font-weight: bold;
}
</style>
