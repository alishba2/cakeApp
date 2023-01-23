
import './App.css';
import { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import * as React from 'react';
import moment from 'moment'


import "react-datepicker/dist/react-datepicker.css";
import { color } from '@mui/system';

function App() {
  const [tableData, setTableData] = useState([]);
  const [value, setValue] = React.useState(null);

  const [formInputData, setformInputData] = useState(
    {
      Name: '',
      DOB: moment().format('DD MMMM YYYY'),
      DateOfCake: '',
      sizeOfCake: ''
    }
  );
  console.log(tableData)






  tableData.map((e , index) => {
    e.sizeOfCake='small'

    tableData.map((item, index2)=>{
      if(index!=index2 && e.DateOfCake===item.DateOfCake){
        console.log("size of cake is large")
        item.sizeOfCake="large"
        e.sizeOfCake = "large"
      }
      if(index!=index2 && item.DateOfCake===e.DateOfCake){
        console.log("size of cake is large")
        item.sizeOfCake="large"
        e.sizeOfCake = "large"
      }
 
    })

   

    
 
  

    e.DateOfCake = e.DOB;   
    let dt = moment(e.DOB).format('dddd');
    console.log(dt);



    if (dt === 'Monday') {
      console.log("current Date", e.DOB);

      e.DateOfCake = moment(e.DOB).add(1, 'days').calendar();
      console.log(e.DateOfCake);

    }
    if (dt === 'Sunday') {
      e.DateOfCake = moment(e.DOB).add(2, 'days').calendar();

    }
    if (dt === 'Saturday') {
      e.DateOfCake = moment(e.DOB).add(3, 'days').calendar();

    }

    if (dt === 'Friday') {
      e.DateOfCake = moment(e.DOB).add(3, 'days').calendar();
    }
    if (dt === 'Tuesday' || 'Wednesday' || 'Thursday') {
      e.DateOfCake = moment(e.DOB).add(1, 'days').calendar();
    }
  }
  )

  const handleChange = (evnt) => {
    const newInput = (data) => ({ ...data, [evnt.target.name]: evnt.target.value })
    setformInputData(newInput)
  }
  const handleSubmit = (evnt) => {
    evnt.preventDefault();
    const checkEmptyInput = !Object.values(formInputData).every(res => res === "")
    if (checkEmptyInput) {
      const newData = (data) => ([...data, formInputData])
      setTableData(newData);
      const emptyInput = { Name: '', DOB: '', DateOfCake: '', sizeOfCake: '' }
      setformInputData(emptyInput)
    }
  }
  return (
    <div className="App">
      <form>

        <div className='input'>
          <TextField type="text" onChange={handleChange} value={formInputData.Name} id="outlined-basic" label="Name" name="Name" variant="outlined" />
        </div>


        <div className='input'>
          <TextField
            id="date"
            
            type="date"
            name="DOB"
            onChange={handleChange}
            
            InputLabelProps={{
              shrink: true,
            }} />
        </div>


        <div className='Addbtn'>
          <Button type="submit" onClick={handleSubmit} variant="contained" href="#contained-buttons">
            Add
          </Button>
        </div>

      </form>
      <div className='table'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">DOB</TableCell>
                <TableCell align="right">Date Of Cake</TableCell>
                <TableCell align="right">Size Of Cake</TableCell>



              </TableRow>
            </TableHead>
            <TableBody>
              {tableData?.map((data) => (
                <TableRow
                  // key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {data.Name}
                  </TableCell>
                  <TableCell align="right">{data.DOB}</TableCell>
                  <TableCell align="right">{data.DateOfCake}</TableCell>
                  <TableCell align="right">{data.sizeOfCake}</TableCell>




                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
