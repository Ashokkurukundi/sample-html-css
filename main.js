const cleanHouse = (cleaned)=>{

    return new Promise((resolve,reject)=>{
        if(cleaned){
            resolve('house cleaned')
        }else{
            reject('house not cleaned')
        }
    })

}

cleanHouse(true)

.then(data=>{
    console.log(data)
})

.catch(err=>{
    console.log(err)
})