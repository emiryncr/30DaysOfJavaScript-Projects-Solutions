    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
      
        for (let i = 5; i * i <= num; i += 6) {
          if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    
    
    const input = document.querySelector('#inputValue')
    const button = document.querySelector('button')
    const numbersContainer = document.querySelector('.numbers-container');
    const errMsg = document.querySelector('.errMsg')



    button.addEventListener('click', () =>  {
      InputValue = input.value;
      
      if(isNumber(InputValue)){
        numbersContainer.innerHTML = '';
        
        for (let i = 0; i <= InputValue; i++) {
          const numberDiv = document.createElement('div')
          numberDiv.textContent = i;
          numberDiv.classList.add('number')
      
          if (i % 2 === 0) {
              numberDiv.classList.add('even');
            } else {
              numberDiv.classList.add('odd');
            }
            
            if (isPrime(i)) {
              numberDiv.classList.add('prime');
            }
      
          numbersContainer.appendChild(numberDiv);
      }
      }else{
        errMsg.innerHTML = `Bro ${InputValue} is not a number, please enter number`
        setTimeout(() => {
          errMsg.innerHTML = ``
      }, 4000);

      }

      function isNumber(value) {
        return !isNaN(value) && !isNaN(parseFloat(value));
    }
      
    })