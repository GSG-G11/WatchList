const connection = require('../database/config/connection');
const dbBuild =require('../database/config/build');

const {postSign,getUserByEmail,PostListQuery,listQuery,deleteListQuery}=require('../database/queries');

beforeEach(()=> dbBuild() );
afterAll(()=>connection.end());


test('test get list',()=>{
    return listQuery(1)
    .then((data)=>{
        expect(data.rows[0].name).toBe('name1');
        // console.log(data);
    })
});

test('test post list',()=>{
    return PostListQuery('move',5,'movie','cover_url1',1)
    .then((data)=>{
        expect(data.rows.length).toBe(1);
        expect(data.rows[0].name).toBe('move');
    })
});


test('test sign up',()=>{
    return postSign('braa','braa324@hotmail.com','a1a23456')
    .then((data)=>{
        expect(data.rows.length).toBe(1);
        expect(data.rows[0].username).toBe('braa');
    })
});


test('test get test by email',()=>{
    return getUserByEmail('braa32@hotmail.com')
    .then((data)=>{
        expect(data.rows.length).toBe(1);
        expect(data.rows[0].username).toBe('braa');
    })
});

test('test get test by email',()=>{
    return deleteListQuery(1)
    .then((data)=>{
        expect(data.rows.length).toBe(0);
    })
});

