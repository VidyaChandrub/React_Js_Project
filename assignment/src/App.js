import "./App.css";
import { ScheduleMeeting } from "react-schedule-meeting";
import { useState, useEffect } from "react";
import axios from "axios";
let App = () => {

return <>
<div>
const availableTimeslots = ()=>{
   [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14
  ].map((id) => {
    return {
      id,
      start: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          9,
          0,
          0,
          0
        )
      ),
      end: new Date(
        new Date(new Date().setDate(new Date().getDate() + id)).setHours(
          17,
          0,
          0,
          0
        )
      )
    };
  })};
  
     const submit_data = async (start) => {
     const res = await axios.get("http://json-parser.com/75d01446/1");
  
    
    res.data.start = start.toString();
    console.log(res.data.start);
  
    
    
  
  
    
    const [start, set_start_date] = useState(new Date());
    
  
    useEffect(() => {
      submit_data(first_name, last_name, start_date);
      set_info_selected_active(false);
    }, []);
}

</div>

<div className="rectangle">
<p className="para">Find a Free Time</p>
  <br/><br/>
  <div className='col-lg-4'>
  <label className='tm'>Date*</label>
  <br/><br/>
  <input type="date" className='rdate' required/>
  </div>
  

  <div className='col-lg-4'>
  <label className='start'>Start time*</label>
  <br/><br/>
  <input type="time" className='rdate' required/>

  </div>
  
  <div className='col-lg-4'>
    <label className='duration'>Duration*</label>
  <br/><br/>
  <input type="text" className='rdate' required/>
  </div>
  <br/><br/><br/><br/>
  <div className='row'>
  <br/><br/>
  <input type="submit" value="Add" className='addbtn' />
  </div>

  
  <br/>
  <br/>
  <div className='row'>
  <input type="text" className='appointment'/>
  </div>
  <br/><br/>
    <div className="row">
      <div className='col-sm-1'>
       <button className='busy'></button>
       <br/>
       <label>Busy</label>
      
      </div>
      <div className='col-sm-1'>
      <button className='free'></button>
      <br/>
      <label>Free</label>
      </div>
      
    </div>
</div>
<div>
<ScheduleMeeting
        borderRadius={10}
        primaryColor="#3f5b85"
        eventDurationInMinutes={30}
        availableTimeslots={availableTimeslots}
        onStartTimeSelect={(e) => {
          set_start_date(e.startTime);
          set_info_selected_active(true);
        }}
      />
</div>
</>
}

export default App;
