var expect = require('chai').expect;
var chai = require('chai');
var chaiHtpp = require('chai-http');

chai.use(chaiHtpp);
const url = 'http://localhost:3000';

var user = require('../models/user');
var user_directory = require('../models/user_directory');
var directory = require('../models/directory');

var mongoose = require('mongoose');
//mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/zeus', {useNewUrlParser:true, useUnifiedTopology:true});
const db = mongoose.connection;
db.on('error', (err) => console.warn('Error: ', err));
db.once('open', () => console.log("connected to mongo"));

beforeEach((done) => {
    //do nothing
    done();
});


// after(function(done){
//     mongoose.connection.close(function () {
//         done();
//     });
// });

// describe('user schema', function() {
//     it('New simple user', function(done) {
//         var userObject = new user({
//             name: 'Yamil'
//         }); 
//         expect(userObject.name).to.equal('Yamil');
//         done();
//     });
// });

// describe('directory schema', function() {
//     it('New simple file directory', function(done) {
//         var fileObject = new directory({
//             name: 'file.ext',
//             logical_path: 'C:\\file.txt'
//         });
//         expect(fileObject.name).to.not.equal(null);
//         expect(fileObject.logical_path).to.not.equal(null);
//         done();
//     });

//     it('New folder with childs', function(done) {
//         var fileObject = new directory({
//             name: 'file.ext',
//             logical_path: 'C:\\file.txt'
//         });
        
//         var folderObject = new directory({
//             name: 'folder A',
//             childs: [fileObject]
//         });

//         expect(folderObject.childs.length).to.equal(1);
//         done();
//     })
// });

// describe('save data', function() {

//     it('Create user', function() {
//         var userObject = new user({
//             name: 'Yamil Test'
//         }); 
    
//         userObject.save().then((result) => {
//             expect(result).to.not.equal(null);
//             return Promise.resolve();
//         });
        
//     });

//     it('Create user_directory', function() {
//         user.findOne({name: 'Yamil Test'}, function(err, userObject) {
//             directoryObject = new directory({
//                 name:'File A',
//                 logical_path: '/usr/file.txt',
//                 childs: null
//             })
            
//             userDirectoryObject = new user_directory({
//                 user: userObject._id,
//                 directory: [{
//                     name:'File A',
//                     logical_path: '/usr/file.txt',
//                     childs: null
//                 }]
//             });
            

//             userDirectoryObject.save().then((result) => {
//                 expect(result).to.not.equal(null);
//                 console.log(result);
//                 mongoose.connection.close();
//                 return Promise.resolve();
//             });

//         });
        
//     });
// });

// describe('get data', function() {

//     it('get first user', function() {
//         user.findOne({}, function(err, resp) {
//             expect(resp.name).to.equal('Yamil Test');
//             return Promise.resolve();
//         });        
//     });

//     it('user not found', function() {
//         user.findOne({name: 'Raul'}, function(err, resp) {
//             expect(resp).to.equal(null);
//             mongoose.connection.close();
//             return Promise.resolve();
//         });        
//     });

// });

