<script>
  export let foo = "bar";
  function someFunc(a) {
    console.log(a);
  }

  function hello(a, b) {
    if (a == "a") {
      someFunc();
    } else {
      return b;
    }
  }
</script>

<div>{foo}</div>
