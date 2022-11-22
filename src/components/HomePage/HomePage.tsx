import { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography } from '@mui/material';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const HomePage = () => {
  const [todaysCurrency, setTodaysCurrency] = useState([]);
  useEffect(() => {
    axios
      .get(`http://api.nbp.pl/api/exchangerates/tables/A/`)
      .then((response) => {
        setTodaysCurrency(response.data.currency);
        // const date = response.data[0].effectiveDate;
        // const dolar = response.data[0].rates[1];
        // const euro = response.data[0].rates[7];
        // const funtBryt = response.data[0].rates[10];
        // console.log(dolar);
        // console.log(euro);
        // console.log(funtBryt);
        console.log(response.data[0]);
        console.log(todaysCurrency);
      })
      .catch((err) => console.error(err.message));
  }, []);
  function createData(name: string, purchase: number, sale: number) {
    return { name, purchase, sale };
  }
  const rows = [
    createData('Dolar', 4.8, 4.9),
    createData('Euro', 4.6, 4.7),
    createData('Funt brytyjski', 5.2, 5.3),
  ];
  return (
    <>
      <Typography variant="h5" sx={{ my: '1rem', mx: '1rem' }}>
        Dzisiejsze kursy walut:
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 250 }} size="small" aria-label="kurs walut">
          <TableHead>
            <TableRow>
              <TableCell>Waluta</TableCell>
              <TableCell align="right">Kupno</TableCell>
              <TableCell align="right">Sprzedaż</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.purchase}</TableCell>
                <TableCell align="right">{row.sale}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default HomePage;
