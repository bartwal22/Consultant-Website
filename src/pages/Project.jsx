import React from 'react'
import { CommonHero } from '../utils/CommonHero';
import ProjectShow from '../components/project/ProjectShow';
const data = [{ tittle: "Project" }];

export default function Project() {
  return (
    <main>
      <CommonHero item={data[0]} />
      <ProjectShow />
    </main>
  )
}
