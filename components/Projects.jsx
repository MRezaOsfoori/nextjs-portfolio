import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/property.jpg';
import cryptoImg from '../public/assets/projects/crypto.jpg'
import netflixImg from '../public/assets/projects/netflix.jpg'
import twitchImg from '../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
            <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='KANBAN APP'
            backgroundImg={propertyImg}
            projectUrl='/kanban'
            tech='React JS'
          />
          <ProjectItem
            title='SHOP APP'
            backgroundImg={cryptoImg}
            projectUrl='/shopp'
            tech='React JS'

          />
         
        </div>
      </div>
    </div>
  );
};

export default Projects;
