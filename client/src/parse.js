import React from 'react';
import $ from 'jquery';
import * as Promise from "bluebird";

// var Parse = {

//     server: 'http://localhost:3000/api/movies',
//     create: (movie, successCB=null, errorCB=null)=> {
//         $.ajax({
//             url: Parse.server,
//             type: 'POST',
//             data: JSON.stringify(movie),
//             contentType: 'application/json',
//             success: ()=>{
//                 console.log('success');
//             },
//             error: errorCB || function (error) {
//                 console.error('movieList: Failed to insert movie', error);
//             }
//         });
//     },
//     readAll: async ()=> {
//         return new Promise((resolve, reject) => {
//             $.ajax({
//                 url: Parse.server,
//                 type: 'GET',
//                 contentType: 'application/json',
//                 success: (data)=> {
//                     resolve(data);
//                 },
//                 error:(err)=> {
//                     reject(err);
//                 }
//             });
//         } );
//     }
// };

var Parse = {

    server: 'http://localhost:3000/api/movies',
    create: (movie, successCB=null, errorCB=null)=> {
        $.ajax({
            url: Parse.server,
            type: 'POST',
            data: JSON.stringify(movie),
            contentType: 'application/json',
            success: ()=>{
                console.log('success');
            },
            error: errorCB || function (error) {
                console.error('movieList: Failed to insert movie', error);
            }
        });
    },
    readAll: (successCB, errorCB=null)=> {
        $.ajax({
            url: Parse.server,
            type: 'GET',
            contentType: 'application/json',
            success: successCB,
            error:errorCB || function(error) {
                console.error('movies: Failed to fetch movies', error);
            }
        });
    },
    update: (movie, successCB, errorCB=null) => {
        console.log(movie);
        $.ajax({
            url: Parse.server+`/${movie.title}`,
            type: 'PATCH',
            contentType: 'application/json',
            data: JSON.stringify(movie),
            success: successCB,
            error:errorCB || function(error) {
                console.error('movies: Failed to update movies', error);
            }
        });
    }

};

export default Parse;