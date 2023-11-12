window.onload = function () {
  const getCountryByCapital = async (capital) => {
    const resp = await fetch(
      `https://restcountries.com/v3.1/capital/${capital}`
    );
    const data = await resp.json();
    console.log(data);
  };

  // ¿ por qué script al final ?
  const h2Main = document.getElementById("title");
  console.log("h2: ", h2Main);
  h2Main.style.color = "red";

  // accediendo a elementos del DOM
  // const pTags = document.querySelectorAll("p"); // nodeList
  // console.log(pTags);

  /*
      nodeList vs arr 
          nodeList: limitado en operaciones asociados a las operaciones del arr ( filter, map , reduce, etc...)
              - coonvertir nodeList => arr => const arrayFromNodeList = [...nodeList]
          arr: 
  
  */ 
};
