import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import PrintIcon from '@mui/icons-material/Print';
import SendIcon from '@mui/icons-material/Send';
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import * as React from 'react';
import { useHistory } from 'react-router-dom';
import "../css/AfficherCmpt.css";
import AsaSideBar from "./AsaSideBar";
const ListeBce = () => {
    const history = useHistory();


    const columns = [
    
        {
          field: 'num',
          headerName: 'N° DE BCE',
          headerClassName: 'hdr',
          flex: 1,
        },
        {
          field: 'date',
          headerName: 'Date',
          headerClassName: 'hdr',
          flex: 1,
          
        },
        
        
       
       
       
        {
          field: "action",
          headerName: 'Action',
          headerClassName: 'hdr',
          
          flex: 1,
          renderCell: (cellValues) => {
            return (
              
              <div className="change">
              <DeleteIcon fontSize="large" className='send2'/>
              <EditIcon fontSize="large" className='send1' />
              <PrintIcon fontSize="large" className='send1'  />
              </div>
              
            );
              }
        },
        {
          field: "valider",
          headerName: 'Valider',
          headerClassName: 'hdr',
         
          flex: 0,
          renderCell: (cellValues) => {
            return (
              
              <div className="change">
              <SendIcon fontSize="large" className='send'/>
              
              </div>
              
            );
              }
        },
      ];
      const rows = [
        { id: 1,num:'Commande N° 31', date: '20-04-2023', },
        { id: 2,num:'Commande N° 32', date: '20-04-2023',},
        { id: 3, num:'Commande N° 33', date: '20-04-2023',},
        { id: 4, num:'Commande N° 34', date: '20-04-2023',},
        { id: 5,num:'Commande N° 35', date: '20-04-2023',},
        
      ];
    return ( 
        <div className="comptes">    
        <AsaSideBar />
      <div className="cmpt">           
          <button style={{width: "300px"}}  onClick={()=> history.push("/AddBce")}>CREER UN BON DE COMMANDE</button>        
          <div style={{ height: 300, width: '100%' }}>
   
    <DataGrid
    sx={{
      '.MuiDataGrid-columnSeparator': {
        display: 'none',
        
      },
      '&.MuiDataGrid-root': {
        border: 'none',
      },
      
     
      
    }}
    slots={{ toolbar: GridToolbar }}

    className='grid'
    style={{height: "66vh"}}
      rows={rows}
      columns={columns}    
      rowHeight={70}
      autoPageSize
      
     getRowClassName={(params) =>
  params.indexRelativeToCurrentPage % 2 === 0 ? 'Mui-even' : 'Mui-odd'
}
   
    />
 
  </div>
              </div>
          
      </div>
   );
    
}
 
export default ListeBce;