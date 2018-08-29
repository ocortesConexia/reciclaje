
import { Injectable } from '@angular/core';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { Platform } from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DatabaseProvider {
 // private database: SQLiteObject;
  private dbReady = new BehaviorSubject<boolean>(false);
  constructor(private platform:Platform,
   // private sqlite: SQLite
  ){
  /*  console.log('Hello DatabaseProvider Provider');
    this.platform.ready().then(()=>{
      this.sqlite.create({
        name: 'todos.db',
        location: 'default'
      })
      .then((db:SQLiteObject)=>{
        this.database = db;

        this.createTables().then(()=>{     
          //communicate we are ready!
          this.dbReady.next(true);
        });
      })

    });*/
    
  }
/*
  InsertRegister(enrtryDate,color,secondColor,type,idCard,photos,callback){
    let idPhoto =this.guid();
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO Registers (entryDate,exitDate,color,secondColor,type,idPhoto,state,value,reciept,idCard) 
      VALUES (?,?,?,?,?,?,1,0,0,?);`, [enrtryDate,enrtryDate,color,secondColor,type,idPhoto,idCard]).then((result)=>{
        if(result.insertId){
          this.InsertPhotos(idPhoto,photos,()=>callback())
        }
      }).catch((err)=>console.log("error inserting register", err));
    });   
  }

  private async InsertPhotos(idPhoto,photos,callback){

    for (let i=0;i<photos.length;i++) {
      const result = await this.Insertphoto(idPhoto,photos[i],i);
      console.log(result);
    }
    callback();

  }

  async UpdateRegistes(id,exitDate,value,callback){
    let reciept = await this.GetNextReceipt();
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`Update Registers set  exitDate=? ,state=2 ,value=? ,reciept=?  
      where id=?;`, [exitDate,value,reciept,id]).then((result)=>{
        console.log(result);
        if(result){
         callback();
        }
      }).catch((err)=>console.log("error updating registers ", err));
    });   
  }


  private GetNextReceipt(){

    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT MAX(reciept) AS reciept
      FROM Registers;`, [])
      .then((result)=>{
        if(result.rows.length===0){
          return 1;
        }else{
          return Number(result.rows.item(0).reciept)+1
        }
        
      }).catch((err)=>console.log("error getting next reciept", err));
    });   
  }

  CloseShift(callback,fail){

    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`SELECT id FROM Registers where state = 1;`, [])
      .then((result)=>{
        if(result.rows.length===0){
          this.CloseShifts(()=>callback())
        }else{
         fail();
        }
        
      }).catch((err)=>console.log("error closing shift ", err));
    });   

  }

  private CloseShifts(callback){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`UPDATE Registers SET state = 3 where state = 2;`, [])
      .then((result)=>{
        callback();
        
      }).catch((err)=>console.log("error closing shifts", err));
    });   
  }




  private guid() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
      this.s4() + '-' + this.s4() + this.s4() + this.s4();
  }
  private s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  Insertphoto(idPhoto,photo,index){
    
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(`INSERT INTO Photos (idPhoto,photo,indexPhoto) 
      VALUES (?,?,?);`, [idPhoto,photo,index]).then((result)=>{
        if(result.insertId){
         return result;
        }
      }).catch(e=>
        {
          console.log(e);
        });
    });   
  }

   private createTables(){
    return this.database.executeSql(
      `CREATE TABLE IF NOT EXISTS Registers (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        entryDate TEXT,
        exitDate TEXT,
        color TEXT,
        secondColor TEXT,
        type TEXT,
        idPhoto TEXT,
        state INTEGER,
        value INTEGER,
        reciept INTEGER,
        idCard INTEGER
      );`
    ,{})
    .then(()=>{
      return this.database.executeSql(
      `CREATE TABLE IF NOT EXISTS Color (
        id INTEGER PRIMARY KEY,
        color TEXT
        );`,{} )
        .then(()=>{
          return this.database.executeSql(
          `CREATE TABLE IF NOT EXISTS Type (
            id INTEGER PRIMARY KEY,
            type TEXT
            );`,{} )
          })
          .then(()=>{
            return this.database.executeSql(
            `CREATE TABLE IF NOT EXISTS Photos (
              id INTEGER PRIMARY KEY AUTOINCREMENT,
              idPhoto TEXT,
              photo TEXT,
              indexPhoto INTEGER
              );`,{} )
            })
            .then(()=>{
              return this.database.executeSql(
              `CREATE TABLE IF NOT EXISTS State (
                id INTEGER PRIMARY KEY,
                state TEXT
                );`,{} )
              })
              .then(()=>{
                return this.database.executeSql(
                `CREATE TABLE IF NOT EXISTS Receipt (
                  id INTEGER PRIMARY KEY,
                  receiptNumber INTEGER,
                  receipt TEXT
                  );`,{} )
                })
                .then(()=>{
                  return this.database.executeSql(
                  `CREATE TABLE IF NOT EXISTS Card (
                    id INTEGER PRIMARY KEY,
                    idCard TEXT,
                    cardStatus INTEGER
                    );`,{} )
                  })
                  .then(()=>{
                    return this.database.executeSql(
                    `CREATE TABLE IF NOT EXISTS CardStatus (
                      id INTEGER PRIMARY KEY,
                      status TEXT
                      );`,{} )
                    })
                    .then(()=>{
                      return this.database.executeSql(
                      `CREATE TABLE IF NOT EXISTS Settings (
                        id INTEGER PRIMARY KEY AUTOINCREMENT,
                        name TEXT,
                        value TEXT
                        );`,{} )
                      })
    }).catch((err)=>console.log("error detected creating tables", err));
  }

  LoadSettings(callback){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(
        `SELECT * FROM Settings;`, [])
      .then((data)=>{
        let Settings = [];
        for(let i=0; i<data.rows.length; i++){
          Settings.push(data.rows.item(i));
        }
        callback(Settings);
      })
      .catch((err)=>console.log("error getting registers", err));
    })
  }

  SetSettings(name,value){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(
        `SELECT * FROM Settings where name=?;`, [name])
      .then((data)=>{
        if(data.rows.length===0){
          this.database.executeSql(`INSERT INTO Settings (name,value) 
          VALUES (?,?);`, [name,value]).then((result)=>{
            console.log(result);
          }).catch(e=>
            {
              console.log(e);
            });
        }else{
          this.database.executeSql(`UPDATE Settings SET value=? WHERE name=? ;`, [value,name])
          .then((result)=>{
            console.log(result);
          }).catch(e=>
            {
              console.log(e);
            });
        }
       
      })
      .catch((err)=>console.log("error getting registers", err));
    })
  }




  private isReady(){
    return new Promise((resolve, reject) =>{
      //if dbReady is true, resolve
      if(this.dbReady.getValue()){
        resolve();
      }
      //otherwise, wait to resolve until dbReady returns true
      else{
        this.dbReady.subscribe((ready)=>{
          if(ready){ 
            resolve(); 
          }
        });
      }  
    })
  }

  getRegisters(state:number,callback){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(
        `SELECT t.id, t.entryDate, t.exitDate,t.color,t.secondColor,t.type,t.state,t.value,t.reciept,t.idCard,i.idPhoto,
        i.photo as photoBike
      from Registers t 
      inner join Photos i 
      on i.idPhoto = t.idPhoto   
      where t.state = '${state}' and i.indexPhoto = 0
      order by t.entryDate desc;`, [])
      .then((data)=>{
        let registers = [];
        for(let i=0; i<data.rows.length; i++){
          registers.push(data.rows.item(i));
        }
        callback(registers);
      })
      .catch((err)=>console.log("error getting registers", err));
    })
  }

  getRegister(idCard,callback){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(
        `SELECT t.id, t.entryDate, t.exitDate,t.color,t.secondColor,t.type,t.state,t.value,t.reciept,t.idCard,i.idPhoto,
        i.photo as photoBike
      from Registers t 
      inner join Photos i 
      on i.idPhoto = t.idPhoto   
      where t.state = '1' and t.idCard = '${idCard}'
      limit 1;`, [])
      .then((data)=>{
        let register = null;
        for(let i=0; i<data.rows.length; i++){
          register=data.rows.item(i);
        }
        callback(register);
      })
      .catch((err)=>console.log("error getting registers", err));
    })
  
  }

  getColors(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql("SELECT * from Color;", [])
      .then((data)=>{
        let colors = [];
        for(let i=0; i<data.rows.length; i++){
          colors.push(data.rows.item(i));
        }
        return colors;
      }).catch((err)=>console.log("error getting colors", err));
    })
  }

  getType(){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql("SELECT * from Type;", [])
      .then((data)=>{
        let types = [];
        for(let i=0; i<data.rows.length; i++){
          types.push(data.rows.item(i));
        }
        return types;
      }).catch((err)=>console.log("error getting type", err));
    })
  }

  getPhotos(idPhoto,callback){
    return this.isReady()
    .then(()=>{
      return this.database.executeSql(
        `SELECT *
       from Photos 
       where idPhoto = '${idPhoto}'
       order by id asc;`, [])
      .then((data)=>{
        let photos = [];
        for(let i=0; i<data.rows.length; i++){
          photos.push(data.rows.item(i));
        }
        callback(photos);
      })
      .catch((err)=>console.log("error getting photos", err));
    })


  }*/

  

 

 
  

}
