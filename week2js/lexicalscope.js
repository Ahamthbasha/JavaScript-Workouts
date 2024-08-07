function levelOne() {
    const levelOneVar = 'Level One';
  
    function levelTwo() {
      const levelTwoVar = 'Level Two';
  
      function levelThree() {
        const levelThreeVar = 'Level Three';
  
        console.log(levelOneVar); // Accessible
        console.log(levelTwoVar); // Accessible
        console.log(levelThreeVar); // Accessible
      }
  
      levelThree();
    }
  
    levelTwo();
  }
  
  levelOne();
  