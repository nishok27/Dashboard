import { useState} from 'react';
import Papa from 'papaparse';

const Fileupload = () => {
  const [data, setData] = useState([]);

  const handleFileUpload = (e) => {
       const file = e.target.files[0];
       Papa.parse(file, {
         header: true,
         complete: (results) => {
           setData(results.data);
         },
       });
     };

  return (
    <div className="fileUpload">

<input type="file" accept=".csv" onChange={handleFileUpload} />

      {data.length ? (
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Links</th>
              <th>Prefix</th>
              <th>Select Tags</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.links}</td>
                <td>{row.prefix}</td>
                <td>{row.selectTags}</td>
                <td>{row.selectedTags}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

    </div>
  )
};

export default Fileupload;
