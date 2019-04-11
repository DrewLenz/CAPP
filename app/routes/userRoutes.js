// These are different endpoints that we can call
// import User from '../models/user';
import UserService from '../libs/UserService';
import isLoggedIn from '../utils/authentication';
module.exports = (app, passport) => {
    app.get('/applicants', async(req, res) =>  {
         try { 
                const users = new UserService();
                const data = await users.findAllContactInfo();
                var results = [];
                
                // Get stuff by ID
                for (const contactInfo of data) {
                    const skills = await users.findSkillFromID(contactInfo.uid);
                    const schoolInfo = await users.findSchoolInfoFromID(contactInfo.uid);
                    const pitch = await users.findPitchFromID(contactInfo.uid); 
                    results.push({contactInfo, skills, schoolInfo, pitch, uid: contactInfo.uid});
                }
                
                res.render('applicantFeed.ejs', { userStuff: results, bestFit: false });
         }
         catch (err) {
             console.log(err)
             res.status(400).send(err);
         }
    });

    app.get('/applicants-bestFit', async(req, res) => {
        try {

            const users = new UserService();
            
            const data = await users.findBestFit('Java', 'Python', 'SQL');
            var results = [];

            var uidMap = new Map();
            var maxCount = 1;

            for (const d of data) {
                if (uidMap.get(d.uid)) {
                    var newCount = uidMap.get(d.uid) + 1;
                    uidMap.set(d.uid, newCount);
                    if (newCount > maxCount) {
                        maxCount = newCount;
                    }
                }
                else {
                    uidMap.set(d.uid, 1);
                }
            }

            var mapEntries = [];

            var mapKeys = uidMap.keys();

            for (const k of mapKeys) {
                mapEntries.push({ key: k, value: uidMap.get(k)});
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
                const contactInfo = await users.findContactInfoFromID(d.key);
                const skills = await users.findSkillFromID(d.key);
                const schoolInfo = await users.findSchoolInfoFromID(d.key);
                const pitch = await users.findPitchFromID(d.key);
                results.push({contactInfo, skills, schoolInfo, pitch, uid: d.key});
            }

            res.render('applicantFeed.ejs', {userStuff: results, bestFit: true});
        }
        catch (err) {
            console.log(err);
            res.status(400).send(err);
        }
    });
}

