import React from 'react';
import axios from "axios";
import { useState, useEffect } from 'react';
import ResumeCard from './ResumeCard';

type Resume = {
    resume_id: string;
    title: string;
    updated_at: string;
    job_summary: string;
    skills: string;
    about_myself: string;
}

function MainPage() {

  const [resumes, setResumes] = useState<Resume[]>([]);

  useEffect(() => {
    axios.get<Resume[]>("https://yjsig8wqw9.execute-api.ap-northeast-1.amazonaws.com/Stage/resumes").then((res) => {
      setResumes(res.data)
    })
  }, [])

  return (
    <>
      {resumes.map(resume => (
        <ResumeCard
          key = {resume.resume_id}
          resume_id = {resume.resume_id}
          title = {resume.title}
          updated_at = {resume.updated_at}
          job_summary = {resume.job_summary}
          skills = {resume.skills}
          about_myself = {resume.about_myself}
        />
      ))}
    </>
  );
}

export default MainPage;
