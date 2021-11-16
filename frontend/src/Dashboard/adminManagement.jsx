import React from 'react'
import DashboardLayout from '../Components/DashboardLayout'
import {
  Table,
  Button,
  TableCell,
  TableHead,
  TableBody,
} from '@material-ui/core'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Box } from '@chakra-ui/react'
// import { tableIcons } from '../components/icons'
import employees from '../Data/employeeData'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell)

const TableStyle = makeStyles({
  Card: {
    display: 'flex',
    width: '50%',
    justifyContent: 'center',
    margin: '25px 200px',
  },
  table: {
    maxWidth: 300,
    alignContent: 'center',
  },
})

export default function adminManagement() {
  //   const column = [
  //     { title: 'Name', field: 'name' },
  //     { title: 'Empployee Id', field: 'EmployeeId' },
  //     { title: 'Date of Birth', field: 'DOB', type: 'numeric' },
  //     { title: 'Role', field: 'Role' },
  //     { title: 'Department', field: 'Department' },
  //   ]

  //   const data = [
  //     { name: 'Olajumojoke', EmployeeId: '005', DOB: '20 Oct 1976' },
  //      { name: 'Isaiah Bendi', EmployeeId: '006', DOB: '20 Oct 1983' },
  //      { name: 'Mosope Adiamo', EmployeeId: '007', DOB: '20 Nov 1988' },
  //      { name: 'Aisha Suaru', EmployeeId: '008', DOB: '20 Oct 1989' },
  //      { name: 'Jerry Okafor', EmployeeId: '009', DOB: '20 Aug 1988' },
  //   ]

  return (
    <DashboardLayout>
      <div className='tableContainer'>
        <Box
          width='100%'
          background='#FFFFFF'
          border='1px solid rgba(63, 63, 68, 0.005)'
          boxShadow='0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15)'
          borderBottomRadius='5px'
        >
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            padding='30px 50px'
            minWidth='md'
            width='100%'
            // flex='1'
          >
            {/* <MaterialTable
              columns={column}
              data={data}
              icons={tableIcons}
              options={{
                search: true,
                showTitle: false,
                // maxBodyHeight: "453px",
                headerStyle: {
                  backgroundColor: '#FAFBFD',
                },
                toolbar: false,
                pageSize: 10,
                paging: false,
                pageSizeOptions: [10, 15, 20],
              }}
            /> */}
            <Table className={{ TableStyle }}>
              <TableHead>
                <tr>
                  <StyledTableCell>ID</StyledTableCell>
                  <StyledTableCell>Emp Id</StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell>Position</StyledTableCell>
                  <StyledTableCell>Department</StyledTableCell>
                  <StyledTableCell>Date Of Birth</StyledTableCell>
                  <StyledTableCell></StyledTableCell>
                </tr>
              </TableHead>
              <TableBody>
                {employees.map((employee) => (
                  <tr key={employee._id}>
                    <StyledTableCell>{employee._id}</StyledTableCell>
                    <StyledTableCell>{employee.empId}</StyledTableCell>
                    <StyledTableCell>{employee.name}</StyledTableCell>
                    <StyledTableCell>{employee.role}</StyledTableCell>
                    <StyledTableCell>{employee.department}</StyledTableCell>
                    <StyledTableCell>{employee.dateOfBirth}</StyledTableCell>
                    <StyledTableCell>
                      <Button size='small' variant='light'>
                        <i className='fas fa-edit'></i>
                      </Button>
                      <Button size='small' color='secondary'>
                        <i className='fas fa-trash'></i>
                      </Button>
                    </StyledTableCell>
                  </tr>
                ))}
              </TableBody>
            </Table>
          </Box>
        </Box>
      </div>
    </DashboardLayout>
  )
}
