function Row1({Tasks,toDelete}) {
  return (
    <>
    {Tasks.map((task,index)=>(

      <div className="container" key={index}>
        <div className="row">
          <div className="col">
            <p>{task.name}</p>
          </div>
          <div className="col">
            <p>{task.date}</p>
          </div>
          <div className="col">
            <button type="button" className="btn btn-danger my-button red-button" onClick={()=>toDelete(index)}>
              
              Delete
            </button>
          </div>
        </div>
       <hr />
        <br />
      </div>
    ))}


    </>
  );
}

export default Row1;
