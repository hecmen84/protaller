const verifier = () =>{
  const d = new Date();
    let month = d.getMonth();
    let mls = d.getSeconds();
    let h = d.getHours();
    let fy = d.getMilliseconds();
    const verifier = `${month}-${mls}-${fy}-${h}`;


  return verifier;
}

export default verifier;