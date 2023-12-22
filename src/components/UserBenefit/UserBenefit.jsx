import React from 'react';
import SectionTitle from '../SectionTitle/SectionTitle';
import { TERipple } from 'tw-elements-react';

const UserBenefit = () => {

    const userTypes = [
        {
          title: 'Developers',
          benefits: [
            'Efficient task management for project development.',
            ' Collaboration on shared tasks and projects.',
            ' Organized workflow with drag-and-drop functionality.',
          ],
        },
        {
            title: 'Corporate Professionals',
            benefits: [
            'Effective organization of tasks and deadlines.',
            ' Clear visibility into ongoing projects.',
            ' Improved team collaboration and communication.',
          ],
        },
        {
            title: 'Bankers',
            benefits: [
            'Task tracking for financial transactions and projects.',
            ' Secure and organized documentation of financial tasks.',
            ' Streamlined communication within the team.',
          ],
        },
      {
          title: 'Photographers',
          benefits: [
          'Creativity needs structure.',
          ' Photographers and creative teams can benefit from our Task Management features to organize shoots,',
          ' track editing progress, and manage client deliverables efficiently, ensuring a seamless creative workflow.',
        ],
      },
      {
        title: 'Freelancers',
        benefits: [
        'Freelancers often manage multiple projects simultaneously. ',
        ' Our Task Management platform helps freelancers organize assignments,',
        ' set priorities, and meet client deadlines, contributing to a successful and thriving freelance career.',
      ],
    },
    {
      title: 'Entrepreneurs',
      benefits: [
      'Entrepreneurs and startup founders juggling various aspects of their business can utilize our Task Management tools to prioritize tasks',
      ' delegate responsibilities, ',
      '  and maintain a clear overview of ongoing activities, fostering growth and success.',
    ],
  },
        // Add more user types and benefits as needed
      ];

    return (
        <div >
        <SectionTitle  heading={' Who Can Benefit??'}/>
        
        <div data-aos="fade-right" className='grid grid-cols-2 gap-2  my-3 '>
      {userTypes.map((user, index) => (
        <div
        className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <h5
          className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {user.title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {user.benefits}
        </p>
      </div>
      ))}
    </div>
    </div>
    );
};

export default UserBenefit;