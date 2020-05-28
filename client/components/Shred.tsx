import React, { useState, useRef, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import makeStyles from '@material-ui/core/styles/makeStyles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import copy from 'copy-to-clipboard';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';
import { saveAs } from 'file-saver';

import { getShred } from '../api';

const useStyles = makeStyles({
  root: {
    marginTop: '2em',
  },
});

function Shred({ id }) {
  const styles = useStyles();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [text, setText] = useState('');

  const ref = useRef(null);

  useEffect(() => {
    async function load() {
      try {
        const loadedText = await getShred(id);
        setText(loadedText);
      } catch (e) {
        setError(e.response.errors[0].message);
      }
      setLoading(false);
    }

    load();
  }, []);

  if (loading) {
    return (
      <Box
        display="flex"
        style={{
          marginTop: '2em',
        }}
        height={80}
        alignItems="center"
        justifyContent="center"
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Card className={styles.root}>
        <CardContent>
          <Typography>An error occurred</Typography>
          <div>{error}</div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={styles.root}>
      <CardContent>
        <Typography>
          Save this text because it will not be shown again
        </Typography>
        <TextField
          value={text}
          label="Your one-time text"
          fullWidth
          rowsMax={50}
          InputProps={{
            inputRef: ref,
            readOnly: true,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => copy(text)}>
                  <FileCopyIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </CardContent>
      <CardActions>
        <Button
          onClick={() => {
            const blob = new Blob([text], {
              type: 'text/plain;charset=utf-8',
            });
            saveAs(blob, `${id}.txt`);
          }}
          variant="contained"
          fullWidth
        >
          Save as file
        </Button>
      </CardActions>
    </Card>
  );
}

export default Shred;
