// Function to create thank you messages
function writeCards(names) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful gift!`);
    }
    return messages;
  }
  

  function countDown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  

  let names = ["Alice", "Bob", "Charlie"];
  let messages = writeCards(names);
  console.log(messages);

  countDown(5);
  
  