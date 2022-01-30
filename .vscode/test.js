let test1 = [evtid,addrid,st,lola]

for (key in test1) {
    if (person.hasOwnProperty(key)) {
      //ключ = key
      //значение = person[key]
      console.log("Ключ = " + key);
      console.log("Значение = " + person[key]);
    } // если объект person имеет key (если у person есть свойство key)
  } // перерабрать все ключи (свойства) в объекте

  let msg = {
      payload:{
          evt: "SomeEvent",
          st: "Ok",
          addrid: "222"
      },
    //   url: cb
    }

    for (evt in msg) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[evt];
            console.log("Ключ = " + evt);
            console.log("Значение = " + person[evt]);
            
        }
    }

    let msg = {
        payload:{
            evt: "SomeEvent",
            st: "Ok",

        },
      //   url: cb
      }

      if (msg.payload.evt && msg.payload.st && msg.payload.addrid) {
          console.log(true);
      }
      else {
        throw new Error('EROR: Not full response ');
    }
  

    if (msg.payload.evt && msg.payload.st && msg.payload.addrid) {
        console.log(true);
    }
    else {
        throw new Error('EROR: Not full response ');
    }
    
    return msg;