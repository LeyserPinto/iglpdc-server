const express = require('express');
const routes= express.Router();
const queries = require('../db/queries.db')

const get = require('./get.routes')


routes.get('/',(req,res)=>{

    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        conn.query('SELECT * FROM tusers',(err,data)=>{
            if (err) throw res.send(err)
            res.json({body:data});
        })
    })
})



/************************************************EVENTOS */
/************************************************EVENTOS */
/************************************************EVENTOS */
/************************************************EVENTOS */
routes.get('/ev',(req,res)=>{

    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getEvents(queries.SELECT_events,err,conn,res);
    })

})

/************************************************MINISTERIOS */
/************************************************MINISTERIOS */
/************************************************MINISTERIOS */
/************************************************MINISTERIOS */

routes.get('/min',(req,res)=>{

    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getAllMin(queries.SELECT_ALLMIN,err,conn,res);
    })

})
routes.get('/min/:key',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getMin(`${queries.SELECT_MIN + req.params.key}`,err,conn,res);
    })

})

/************************************************CONTENIDO */
/************************************************CONTENIDO */
/************************************************CONTENIDO */
/************************************************CONTENIDO */
routes.get('/contenido/Pr/:key',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getContPr(`${queries.SELECT_content_ALL + req.params.key + ' ORDER BY `tpost`.`id` DESC LIMIT 5' }`,err,conn,res,req.params.key);
    })

})

routes.get('/contenido/Est/:key',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getContEst(`${queries.SELECT_content_ALL + req.params.key + ' ORDER BY `tpost`.`id` DESC LIMIT 5' }`,err,conn,res,req.params.key);
    })

})


routes.get('/contenido/:key',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.getCont(`${queries.SELECT_content_ALL + req.params.key}`,err,conn,res,req.params.key);
    })

})

routes.get('/contenido/op1/:key',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        get.OPV1(`${queries.SELECT_OPv1 + req.params.key}`,err,conn,res);
    })

})

/************************************************POST */
/************************************************POST */
/************************************************POST */
/************************************************POST */
routes.post('/',(req,res)=>{
    req.getConnection((err,conn)=>{
        if (err) throw res.send(err)
        conn.query(queries.INSERT_tusers,[req.body],(err,data)=>{
            if (err) throw res.send(err)
            console.log('Request OK, Rows Affected: ', data.affectedRows)
            res.status(200).send('Request OK, Rows Affected: ', data.affectedRows)

        })
    })

})



module.exports= routes;