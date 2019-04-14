// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {
    app.get('/jobFeed', async(req, res) =>  {
         try { 
                const users = new UserService();
                const data = await users.findAllPosition();
                var results = [];
               for( const positionInfo of data) {
                   const position = await users.findPositionFromID(positionInfo.jid);
                   const company = await users.findCompanyFromID(positionInfo.jid);
                   results.push({positionInfo, position, company, jid: positionInfo.jid});
               }
                
       
                res.render('jobFeed.ejs', {userStuff: results, ByCompany:false });
         }
         catch (err) {
             console.log(err)
             res.status(400).send(err);
         }


    });

    app.get('/jobFeedByCompany', async(req, res) =>  {
        try { 
               const users = new UserService();
               const data = await users.findCompanyFit('Death Row Records', 'DeLorean', 'Honda', 'Hyundai', 'Toyota');
               var results = [];
               var jidMap = new Map();
               var maxCount = 1;
      
            jidMap.set('zzz', 12);
            jidMap.set('jjj', 11);
            jidMap.set('aaa', 7);
            jidMap.set('ddd', 9);
            jidMap.set('eee', 8);
            jidMap.set('bbb', 10);
            jidMap.set('ccc', 6);
            jidMap.set('hhh', 3);
            jidMap.set('iii', 4);
            jidMap.set('mmm', 5);
            jidMap.set('fff', 2);
            jidMap.set('ggg', 1); 
            
        
            var mapEntries = [];

            var mapKeys = jidMap.keys();

            for (const k of mapKeys) {
                mapEntries.push({ key: k, value: jidMap.get(k)});
            }
            
            for (var i = 0; i < mapEntries.length; i++) {
                for (var j = i + 1; j < mapEntries.length; j++) {
                    if (mapEntries[i].value < mapEntries[j].value) {
                        var temp = mapEntries[i];
                        mapEntries[i] = mapEntries[j];
                        mapEntries[j] = temp;
                    }
                }
            }

            for (const d of mapEntries) {
                const positionInfo = await users.findPositionFromID(d.key);
                const company = await users.findCompanyFromID(d.key);
                
                results.push({positionInfo, company, jid: d.key});
            }

      
               res.render('jobFeed.ejs', {userStuff: results, ByCompany:true  });
        }
        catch (err) {
            console.log(err)
            res.status(400).send(err);
        }


   });
 
  
 
}
