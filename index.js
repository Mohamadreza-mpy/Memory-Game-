var counterElement = document.getElementById("counter");
    var counter = 5;
    var timeoutId;
    let score = 0;    
    function getRandomItem(arr) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      const item = arr[randomIndex];
      return item;
  }

    function changeIcon()
    {
      listClassIcons = ['glyphicon-cloud', 'glyphicon-remove', 'glyphicon-user', 'glyphicon-envelope']
      randomIcon = getRandomItem(listClassIcons);

      let isIcon = document.getElementById('iconChang')
      // Remove icon
      isIcon.classList.remove(isIcon.classList[1]);
      // Add icon
      isIcon.classList.add(randomIcon);
    }
    
    
    function startCounter() {
      let but = document.getElementById('but-start').setAttribute("disabled", "")
      let cards = document.getElementById('conta').style.display="inline";
      counterElement.textContent = counter;
      timeoutId = setTimeout(function() {
        counter--;
        counterElement.textContent = counter;
        if (counter > 0) {
          startCounter();
        }else
        {
            counterElement.textContent = 'finish'
            let but = document.getElementById('but-start').removeAttribute('disabled')
            let cards = document.getElementById('conta').style.display="none";
            counter = 5
        }
      }, 1000);

      if(counter == 5)
      {
        changeIcon()
      }
      
      
    }

    function cheakValue()
    {
      var el = document.querySelector('input[name="group1"]:checked').value
      
      if(el == randomIcon)
      {
        score++
        let elScore = document.getElementById('score').innerHTML = score
        
        swal("Good job!", "OK", "success");
        
        radios = document.querySelectorAll('#radio')
        for (const radio of radios) {
          radio.checked = false
        }
      }else
      {
        
        if(score > 0)
        {
          score--
        }
        let elScore = document.getElementById('score').innerHTML = score
        swal("Try again :(", "OK", "error");
        // un Checked
        
        radios = document.querySelectorAll('#radio')
        for (const radio of radios) {
          radio.checked = false
        }
      }
    }

    function stopCounter() {
      clearTimeout(timeoutId);
    }