// Функція з явною типізацією: повертає Promise<string>
function getMessage(): Promise<string> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello from TS");
      }, 1000);
    });
  }
  
  // Виклик функції з then
  getMessage().then(result => console.log(result));
  