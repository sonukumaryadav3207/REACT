function Hello(){
  let myName = 'Sonu';
  let number =456;
  let fullName = ()=>{
    return 'Sonu';
  }
  return <div>
    <h1>
      MessageNo: {number} Hello I am {fullName()}
    </h1>
  </div>
}

export default Hello;