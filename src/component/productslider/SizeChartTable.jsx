import React from 'react';
import { useGetProductMeasurementQuery } from '../../redux/apiSlice';

const MeasurementTable = ({ productId }) => {
  const { data: productMeasurement } = useGetProductMeasurementQuery(productId);

  if (!productMeasurement?.data?.measurements?.length) {
    return <p>No measurements available</p>;
  }

  const measurements = productMeasurement.data.measurements;

  const tableHeaders = Object.keys(measurements[0]).filter(
    (key) => key !== '_id'
  );

  return (
    <table className="table-hover w-100 text-center table-striped table-bordered">
      <thead>
        <tr>
          {tableHeaders.map((header) => (
            <th key={header}>{header.charAt(0).toUpperCase() + header.slice(1)}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {measurements.map((measurement, index) => (
          <tr className="hover-row" key={index}>
            {tableHeaders.map((header) => (
              <td key={header}>{measurement[header] || '-'}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MeasurementTable;
