import { useState } from 'react';
import csv from 'csvtojson';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  container: {
    padding: '20px',
    fontFamily: 'Arial'
  },
  label: {
    display: 'block',
    marginBottom: '10px'
  },
  textarea: {
    width: '100%',
    height: '200px',
    marginBottom: '20px'
  },
  button: {
    marginBottom: '20px'
  }
});

const CsvToJson = () => {
  const classes = useStyles();
  const [csvText, setCsvText] = useState('');
  const [jsonOutput, setJsonOutput] = useState('');

  const convertToJson = async () => {
    const jsonObj = await csv().fromString(csvText);
    setJsonOutput(JSON.stringify(jsonObj, null, 2));
  };

  return (
    <div className={classes.container}>
      <label htmlFor="csvText" className={classes.label}>
        CSV Text:
      </label>
      <textarea
        id="csvText"
        value={csvText}
        onChange={(e) => setCsvText(e.target.value)}
        placeholder="Enter CSV data here"
        className={classes.textarea}
      />
      <button onClick={convertToJson} className={classes.button}>
        Convert to JSON
      </button>
      <label htmlFor="jsonOutput" className={classes.label}>
        JSON Output:
      </label>
      <textarea
        id="jsonOutput"
        value={jsonOutput}
        readOnly
        className={classes.textarea}
      />
    </div>
  );
};

export default CsvToJson;
