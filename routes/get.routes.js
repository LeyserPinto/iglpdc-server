

const path = require('path');
const fs = require('fs');


function getEvents(query,err, conexion, response){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)
            response.json({body:data})
        })
}


//MINISTERIOS*********************************************
//MINISTERIOS*********************************************
//MINISTERIOS*********************************************
//MINISTERIOS*********************************************
//MINISTERIOS*********************************************

function getMin(query,err, conexion, response){
    
        if (err) throw response.status(500).send('Server Error: ',err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.status(500).send(err)         
            
            let MinObject={
                id:[],
                minid:'',
                name:'',
                infoImg:[],                
                description:'',                
                galeryPath:'',
                image:''
            }

            data.map(row =>{
                fs.writeFileSync(path.join(__dirname,'../temp/images/team/'+row.minid+'-'+row.minname+'-iglpdc.webp'),row.minimg);
                fs.writeFileSync(path.join(__dirname,'../temp/images/gallery/'+row.id+'-'+row.minname+'-iglpdc.webp'),row.image);
                MinObject.id.push(row.id);
                MinObject.minid=row.minid;
                MinObject.name=row.minname;
                MinObject.infoImg.push(row.imginfo);
                MinObject.description=row.mindes;
            })

            

            // const image0Path=fs.readFileSync(path.join(__dirname,'../temp/images/team/'));
            const image1Path=fs.readdirSync(path.join(__dirname,'../temp/images/gallery/'));
            MinObject.galeryPath=image1Path;       
            // MinObject.image=image0Path; 

            response.json(MinObject);

            setTimeout(()=>{
                fs.readdirSync(path.join(__dirname,'../temp/images/gallery/')).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/gallery/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
                fs.readdirSync(path.join(__dirname,'../temp/images/team/')).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/team/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
            },5*1000)


        })
}

function getAllMin(query,err, conexion, response){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)
            

            let mObject={
                id:[],
                des:[],
                name:[]
            }

            data.map(row=>{
                
                fs.writeFileSync(path.join(__dirname,'../temp/images/team/'+row.minid+'-'+row.minname+'-iglpdc.webp'),row.minimg)
                
                mObject.name.push(row.minname);
                mObject.des.push(row.mindes);
                mObject.id.push(row.minid);
            })

            const imgPath=fs.readdirSync(path.join(__dirname,'../temp/images/team/'))

            mObject.images=imgPath;
            response.send(mObject);

            setTimeout(()=>{                
                fs.readdirSync(path.join(__dirname,'../temp/images/team/')).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/team/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
            },5*1000)
        })
}


//CONTENIDO*********************************************
//CONTENIDO*********************************************
//CONTENIDO*********************************************
//CONTENIDO*********************************************
//CONTENIDO*********************************************
function getContPr(query,err, conexion, response){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)
            

            let cObject={
                id:[],
                tipo:'',
                post:[],
                desc:[],
                autor:[],
                bag:[]
            }

            data.map(row=>{
                fs.mkdir(path.join(__dirname, '../temp/images/content/0001'),{ recursive: true }, (err) => {
                    if (err) return console.error(err);
                    
                });

                fs.writeFileSync(path.join(__dirname,'../temp/images/content/0001/'+row.id+'-iglpdc.webp'),row.image1)
                
                cObject.id.push(row.id);
                cObject.tipo=row.tipo;
                cObject.post.push(row.post);
                cObject.desc.push(row.desc);
                cObject.autor.push(row.autor);
            })

            const imgPath=fs.readdirSync(path.join(__dirname,'../temp/images/content/0001'))

            cObject.bag=imgPath;
            response.send(cObject);

            setTimeout(()=>{                
                fs.readdirSync(path.join(__dirname,'../temp/images/content/0001')).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/content/0001/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
            },10*1000)
        })
}

function getContEst(query,err, conexion, response){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)
            

            let cObject={
                id:[],
                tipo:'',
                post:[],
                desc:[],
                autor:[],
                bag:[]
            }

            data.map(row=>{
                fs.mkdir(path.join(__dirname, '../temp/images/content/0002'),{ recursive: true }, (err) => {
                    if (err) return console.error(err);
                    
                });

                fs.writeFileSync(path.join(__dirname,'../temp/images/content/0002/'+row.id+'-iglpdc.webp'),row.image1)
                
                cObject.id.push(row.id);
                cObject.tipo=row.tipo;
                cObject.post.push(row.post);
                cObject.desc.push(row.desc);
                cObject.autor.push(row.autor);
            })

            const imgPath=fs.readdirSync(path.join(__dirname,'../temp/images/content/0002'))

            cObject.bag=imgPath;
            response.send(cObject);

            setTimeout(()=>{                
                fs.readdirSync(path.join(__dirname,'../temp/images/content/0002')).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/content/0002/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
            },3*1000)
        })
}

function getCont(query,err, conexion, response,key){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)
            

            let cObject={
                id:[],
                tipo:'',
                post:[],
                desc:[],
                autor:[],
                bag:[]
            }

            data.map(row=>{
                fs.mkdir(path.join(__dirname, '../temp/images/content/000'+key),{ recursive: true }, (err) => {
                    if (err) return console.error(err);
                    
                });

                fs.writeFileSync(path.join(__dirname,'../temp/images/content/000'+key+'/'+row.id+'-iglpdc.webp'),row.image1)
                
                cObject.id.push(row.id);
                cObject.tipo=row.tipo;
                cObject.post.push(row.post);
                cObject.desc.push(row.desc);
                cObject.autor.push(row.autor);
            })

            const imgPath=fs.readdirSync(path.join(__dirname,'../temp/images/content/000'+key))

            cObject.bag=imgPath;
            response.send(cObject);

            setTimeout(()=>{                
                fs.readdirSync(path.join(__dirname,'../temp/images/content/000'+key)).map(row=>{
                    fs.unlink(path.join(__dirname,'../temp/images/content/000'+key+'/'+row),(err)=>{
                        if (err) throw console.log(err);
                    })
                })
            },10*1000)
        })
}

function OPV1(query,err, conexion, response){
    // 
        if (err) throw response.send(err)
        conexion.query(query,(err,data)=>{
            if (err) throw response.send(err)        
            response.send(data);
        })
}

exports.getEvents = getEvents;
exports.getMin = getMin;
exports.getAllMin=getAllMin;
exports.getContPr=getContPr;
exports.getContEst=getContEst;
exports.getCont=getCont;
exports.OPV1=OPV1;