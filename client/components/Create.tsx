import React, { useState, useRef } from 'react';
import copy from 'copy-to-clipboard';
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
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDropzone } from 'react-dropzone';

import { createShred } from '../api';

const useStyles = makeStyles({
  root: {
    marginTop: '2em',
  },
});

function Create() {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [text, setText] = useState('');
  const [shredLink, setShredLink] = useState(null);

  const ref = useRef(null);

  async function create(textOverride?: string) {
    const textToLoad = textOverride || text;
    if (!textToLoad) return;

    setLoading(true);
    setError(null);
    try {
      const id = await createShred(textToLoad);
      setShredLink(`${location.origin}/${id}`);
      if (ref.current) {
        ref.current.select();
      }
    } catch (e) {
      console.error(e);
      setError(e.response.errors[0].message);
    }
    setLoading(false);
  }

  function onDrop(acceptedFiles) {
    if (acceptedFiles.length > 1) {
      return setError('Only one file can be uploaded');
    }
    const [file] = acceptedFiles;

    const reader = new FileReader();

    reader.onerror = () =>
      setError('File load failed. Please use only text files');
    reader.onload = () => create(reader.result as string);
    reader.readAsText(file);
  }

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <Card className={styles.root} {...getRootProps()}>
      <CardContent>
        <Typography>Create a one-time link to any text</Typography>
        <Typography variant="caption">
          You can enter any text or just drop text file on this form
        </Typography>
        {shredLink ? (
          <TextField
            value={shredLink}
            label="Your one-time link"
            fullWidth
            rowsMax={50}
            InputProps={{
              inputRef: ref,
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => copy(shredLink)}>
                    <FileCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        ) : (
          <TextField
            value={text}
            onKeyDown={e => {
              if (text && e.key == 'Enter' && e.ctrlKey) {
                create();
                e.preventDefault();
              }
            }}
            onChange={e => {
              setText(e.target.value);
            }}
            label="Text"
            fullWidth
            placeholder="You can place your text here"
            multiline
            rows={1}
            rowsMax={50}
            error={error}
            helperText={error || 'Press Ctrl+Enter to create'}
          />
        )}
      </CardContent>
      <CardActions>
        <Button
          onClick={() => create()}
          disabled={Boolean(!text || loading || shredLink)}
          variant="contained"
          fullWidth
        >
          {loading ? <CircularProgress /> : 'Create'}
        </Button>
      </CardActions>
    </Card>
  );
}

export default Create;
