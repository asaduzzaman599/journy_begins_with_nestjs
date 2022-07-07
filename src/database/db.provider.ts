import { Module } from "@nestjs/common";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { MongoClient, Db, ServerApiVersion } from 'mongodb';


    export const databaseProvider = [
   {
        provide:"DATABASE_CONNECTION",
        imports: [ConfigModule],
        inject: [ConfigService],
        
        useFactory:async (configService:ConfigService) => {
        
             
        const uri:string = `mongodb+srv://${configService.get<string>('db_user')}:${configService.get<string>('db_password')}@cluster0.sfale.mongodb.net/?retryWrites=true&w=majority`; 
        console.log(uri)
        const info = {  useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 }
        const client = new MongoClient(uri,info);
        try{
            
            await client.connect();
            const db = client.db("product_management");
            /* const collection = db.collection("devices");
            // perform actions on the collection object
              const result = await collection.insertOne({name:"name",body:"body"}) */
              /* console.log(result) */
            
            return db    

        }catch(e){

        }
        
            
        }
    }
    
  ]