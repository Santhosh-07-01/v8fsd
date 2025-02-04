const fs=require('fs');

fs.mkdir("new-dir",(err)=>{
    if(err)
        console.log(err);
    else     
    console.log('New Dir Created');
})

fs.unlink("2.txt",(err)=>{
    if(err)
        console.log(err);
    else     
    console.log('Deleted');
})

fs.rename("2.txt","sample.txt",(err)=>{
    if(err)
        console.log(err);
    else     
    console.log('Renamed');
})

fs.readdir(".",(err,files)=>{
    if(err)
        console.log(err);
    else     
    console.log(files);
})