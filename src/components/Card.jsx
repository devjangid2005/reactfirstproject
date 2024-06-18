function Card()
{
    let title="Dev jangid"
    let para="level sabke niklenge"
  
    let items=[{img:" https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9" ,title:"hello",para:"hello is my name"},
        {img:"https://tse1.mm.bing.net/th/id/OET.7252da000e8341b2ba1fb61c275c1f30?w=594&h=594&c=7&rs=1&o=5&pid=1.9 ",title:"chintu",para:"chintu is your name"},
    {img:"",title:"hii",para:"how are you"}]
  
    return(
        <>
      {items.map((item,index)=>(  <div className="card" style={{ width: "18rem" }}>
  <img src="items.img" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">
      {item.para}
    </p>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>))}
      

        </>
    )

}
export default Card