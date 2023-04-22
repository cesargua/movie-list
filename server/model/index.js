const { ModuleFilenameHelpers } = require('webpack');
var db = require('../db');


module.exports = {
    getAll: (cb)=> {
        var queryString = 'Select title, watched from movies'
        db.query(queryString, (err, data)=>{
            cb(err,data);
        });
    },
    create: (data, cb)=>{  
        var queryString = `INSERT INTO movies (title) VALUES ("${data.title}")`;
        db.query(queryString, (err)=>{
            cb(err);
        })
    }
    //update
};

