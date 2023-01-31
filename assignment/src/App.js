let App = () => {

return <>
<br/>
<div className="row">
  <div className="col-md-4">
    <label>Date *</label>
    <input type="date" />
  </div>
  <div  className="col-md-4">
  <label>Date *</label>
    <input type="time" />
  </div>
  <div  className="col-md-4">
    <input type="text" />
  </div>
  <input type="submit" value="Add" className='btn btn-primary' />

</div>
</>
}

export default App;