import React from 'react';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { IconButton } from '@mui/material';

type Resume = {
  resume_id: string;
  title: string;
  updated_at: string;
  job_summary: string;
  skills: string;
  about_myself: string;
}

export default function ResumeCard(props: Resume) {

  const [title, setTitle] = useState<string>(props.title);
  const [jobSummary, setJobSummary] = useState(props.job_summary);
  const [skills, setSkills] = useState(props.skills);
  const [aboutMyself, setAboutMyself] = useState(props.about_myself);

  const [openStatus, setOpenStatus] = React.useState(false);
  const [deleteConfirm, setDeleteConfirm] = React.useState(false);

  const hundleResumeOpen = ((event: React.MouseEvent<HTMLElement>) => {
    setOpenStatus(!openStatus)
    event.stopPropagation();
  });
  
  const hundleDeleteConfirm = ((event: React.MouseEvent<HTMLElement>) => {
    setDeleteConfirm(!deleteConfirm)
    event.stopPropagation();
  });

  const deleteResume = ((event: React.MouseEvent<HTMLElement>) => {
    axios.delete<Resume>("https://yjsig8wqw9.execute-api.ap-northeast-1.amazonaws.com/Stage/resume/" + props.resume_id).then(() => {
      setDeleteConfirm(!deleteConfirm);
    });
    event.stopPropagation();
  })

  const updateResume = (event: React.MouseEvent<HTMLElement>) => {
    axios.put<Resume>("https://yjsig8wqw9.execute-api.ap-northeast-1.amazonaws.com/Stage/resume/" + props.resume_id,{
        title: title,
        job_summary: jobSummary,
        skills: skills,
        about_myself: aboutMyself
      }).then((res) => {
        setOpenStatus(!openStatus);
      });
    event.stopPropagation();
  }

  const gridStyles = {
    marginTop: 1,
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: 800
  };
  
  return (
    <>
      <Grid item xs={4}>
        <Card
          elevation={4}
          sx={{ height: '168px', borderRadius: '16px' }}
          onClick={hundleResumeOpen}
          style={{margin: "0 auto", textAlign: "center"}}
        >
          <CardContent>
            <Grid container>
              <Grid item xs={6}>
                <Typography color="text.secondary" gutterBottom>
                  更新日時：{ props.updated_at }
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <IconButton>
                  <DownloadIcon />
                </IconButton>
                <IconButton>
                  <ContentCopyIcon />
                </IconButton>
                <IconButton onClick={hundleDeleteConfirm}>
                  <DeleteOutlineIcon />
                </IconButton>
              </Grid>
            </Grid>
            <Typography variant="h5" component="div">
              { title }
            </Typography>
            <Dialog open={deleteConfirm} onClose={hundleDeleteConfirm}>
              <Typography>"{ title }" を削除しますか？</Typography>
              <Button onClick={deleteResume}>
                削除
              </Button>
              <Button onClick={hundleDeleteConfirm}>
                キャンセル
              </Button>
            </Dialog>
          </CardContent>
        </Card>
        <Dialog open={openStatus} onClose={hundleResumeOpen} maxWidth='xl' fullWidth={true}>
          <DialogTitle>
            <TextField variant="standard" label="タイトル" value={title} onChange={(event) => {if(title != event.target.value) setTitle(event.target.value);}}/>
          </DialogTitle>
          <DialogContent>
            <Grid container direction="column" alignItems="stretch" rowSpacing={6} sx={gridStyles}>
              <Grid item>
                <TextField multiline label="職務要約" value={jobSummary} onChange={(event) => {if(jobSummary != event.target.value) setJobSummary(event.target.value);}} fullWidth={true}/>
              </Grid>
              <Grid item>
                <TextField multiline label="活かせる経験・知識・スキル" value={skills} onChange={(event) => {if(skills != event.target.value) setSkills(event.target.value);}} fullWidth={true}/>
              </Grid>
              <Grid item>
                <TextField multiline label="自己PR" value={aboutMyself} onChange={(event) => {if(aboutMyself != event.target.value) setAboutMyself(event.target.value);}} fullWidth={true}/>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={updateResume}>保存して閉じる</Button>
          </DialogActions>
        </Dialog>
      </Grid>
    </>
  );
}
