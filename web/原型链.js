   function World() {
      console.log(this);
      this.world = function() {
        console.log("this.world");
      };
    }
    function China() {
      console.log(this);
      this.china = function() {
        console.log("this.chain");
      };
    }
    China.prototype = new World();
    var Me = new China();
    console.log(Me, typeof Me);
    console.log(Me.world, typeof Me.world);
    console.log(China.prototype);
    console.log("Me.__proto__", Me.__proto__, typeof Me.__proto__);
    console.dir(Me.__proto__);